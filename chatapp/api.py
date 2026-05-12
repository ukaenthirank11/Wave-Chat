import mimetypes
import re
import uuid
import json
import time
import urllib.error
import urllib.request
from datetime import datetime, timezone, timedelta
from html import escape
from pathlib import Path
from shutil import copy2
try:
    from zoneinfo import ZoneInfo
except ImportError:  # pragma: no cover - Python 3.8 fallback only
    ZoneInfo = None

from flask import Blueprint, Response, current_app, jsonify, request, send_file
from flask_login import current_user, login_required
from flask_wtf.csrf import generate_csrf

from .extensions import db, socketio
from .models import Message, StatusPost, StatusReaction, StatusView, User, isoformat_utc, utcnow
from .security import (
    allowed_mime_type,
    create_socket_token,
    is_email_identity_phone,
    json_error,
    normalize_phone_number,
    phone_lookup_variants,
    select_phone_variant_match,
    parse_json_request,
    parse_public_key,
    validate_media_message_payload,
    validate_text_message_payload,
)
from .services import (
    cleanup_expired_status_posts,
    ensure_direct_chat,
    get_chat_for_user,
    get_chat_preference,
    latest_visible_message_for_viewer,
    merge_phone_account_users,
    query_call_logs_for_user,
    query_chats_for_user,
    query_status_posts_for_user,
    resolve_upload_path,
    serialize_call_log_for_viewer,
    serialize_chat,
    serialize_message_for_viewer,
    serialize_status_post,
    serialize_user,
    set_chat_deleted,
    set_chat_muted,
    unread_count_for_chat,
    visible_status_owner_ids,
)

api_bp = Blueprint("api", __name__)
LINK_RE = re.compile(r"https?://[^\s<>()]+", re.IGNORECASE)

DEFAULT_GEMINI_GENERATE_URL = "https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent"
DEFAULT_GEMINI_MODEL = "gemini-2.5-flash"
TRANSIENT_WAVEMIND_STATUS_CODES = {429, 500, 502, 503, 504}
GEMINI_INCOMPATIBLE_MODELS = {"gemma3", "zero-cost-local"}
GEMINI_LEGACY_MODEL_ALIASES = {"gemini-flash-latest"}
OLD_LOCAL_WAVEMIND_REPLY_MARKERS = (
    "simple local mode",
    "zero-cost local",
    "local mode",
    "connect a stronger ai provider",
)

WAVEMIND_SYSTEM_PROMPT = (
    "You are WaveMind, the helpful AI assistant inside WaveChat. "
    "Answer like a polished Gemini-style assistant: fast, clear, practical, and friendly. "
    "Help with everyday questions, writing, planning, studying, coding, app ideas, troubleshooting, and explanations. "
    "For elections, news, government, laws, prices, sports, weather, product details, and other current or live topics, use Google Search grounding and include the relevant date in the answer. "
    "If fresh search results are not available, say that clearly instead of guessing. "
    "Give direct answers first, then useful steps or examples when needed. "
    "Match the user's language and tone when it is clear. "
    "Do not mention API keys, providers, local mode, setup, server configuration, or deployment unless the user directly asks about those topics. "
    "If the user asks about WaveChat, explain that you are available as a normal WaveMind chat and as an AI voice call."
)


def wavemind_timezone():
    timezone_name = (current_app.config.get("WAVEMIND_TIMEZONE") or "Asia/Kolkata").strip()
    if ZoneInfo:
        try:
            return ZoneInfo(timezone_name), timezone_name
        except Exception:
            pass
    if timezone_name in {"Asia/Kolkata", "Asia/Calcutta"}:
        return timezone(timedelta(hours=5, minutes=30), "IST"), timezone_name
    return timezone.utc, "UTC"


def wavemind_current_time_context() -> str:
    tz_info, timezone_name = wavemind_timezone()
    now = datetime.now(tz_info)
    date_label = f"{now.strftime('%A')}, {now.strftime('%B')} {now.day}, {now.year}"
    time_label = now.strftime("%I:%M %p").lstrip("0")
    offset = now.strftime("%z")
    offset_label = f"UTC{offset[:3]}:{offset[3:]}" if len(offset) == 5 else "UTC"
    return (
        f"Current live server date/time: {date_label}, {time_label} "
        f"({timezone_name}, {offset_label}). "
        "When the user asks for today's date, current date, current time, or a relative date, "
        "answer using this live date/time instead of model memory."
    )


def wavemind_system_instruction() -> str:
    return f"{WAVEMIND_SYSTEM_PROMPT} {wavemind_current_time_context()}"


def avatar_initials_for_user(user: User) -> str:
    parts = [part for part in (user.display_name or user.phone_number or "").split() if part]
    initials = "".join(part[0].upper() for part in parts[:2]).strip()
    return initials or "?"


def build_avatar_placeholder_svg(user: User) -> str:
    base_color = user.avatar_color or "#7a2232"
    initials = escape(avatar_initials_for_user(user))
    return f"""
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" role="img" aria-label="{initials}">
  <defs>
    <linearGradient id="avatarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{base_color}"/>
      <stop offset="100%" stop-color="#2b0d16"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="64" fill="url(#avatarGradient)"/>
  <circle cx="64" cy="46" r="22" fill="rgba(255,255,255,0.16)"/>
  <path d="M26 106c5-20 19-31 38-31s33 11 38 31" fill="rgba(255,255,255,0.14)"/>
  <text x="64" y="74" text-anchor="middle" dominant-baseline="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="28" font-weight="700" letter-spacing="1">{initials}</text>
</svg>
""".strip()


MOBILE_UPLOAD_MIME_BY_SUFFIX = {
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".webp": "image/webp",
    ".gif": "image/gif",
    ".avif": "image/avif",
    ".bmp": "image/bmp",
    ".heic": "image/heic",
    ".heif": "image/heif",
    ".tif": "image/tiff",
    ".tiff": "image/tiff",
    ".mp4": "video/mp4",
    ".mov": "video/quicktime",
    ".webm": "video/webm",
    ".m4v": "video/mp4",
    ".3gp": "video/3gpp",
    ".3gpp": "video/3gpp",
    ".3g2": "video/3gpp2",
    ".avi": "video/x-msvideo",
    ".mkv": "video/x-matroska",
    ".mpg": "video/mpeg",
    ".mpeg": "video/mpeg",
    ".ogv": "video/ogg",
}


def infer_upload_mime_type(uploaded_file, provided_mime_type: str | None = None) -> str:
    raw_mime_type = (provided_mime_type or uploaded_file.mimetype or "application/octet-stream").split(";")[0].strip().lower()
    suffix = Path(uploaded_file.filename or "").suffix.lower()
    if raw_mime_type in {"", "application/octet-stream", "binary/octet-stream"}:
        guessed = MOBILE_UPLOAD_MIME_BY_SUFFIX.get(suffix) or mimetypes.guess_type(uploaded_file.filename or "")[0]
        if guessed:
            return guessed.split(";")[0].strip().lower()
    return raw_mime_type or "application/octet-stream"


@api_bp.get("/bootstrap")
@login_required
def bootstrap():
    if is_email_identity_phone(current_user.phone_number):
        return json_error("Sign in with your phone number.", 401)
    cleanup_expired_status_posts()
    chats = query_chats_for_user(current_user.id)
    serialized_chats = [
        serialize_chat(chat, current_user.id, unread_count_for_chat(chat.id, current_user.id))
        for chat in chats
    ]
    serialized_chats.sort(
        key=lambda chat: chat["lastMessage"]["createdAt"] if chat["lastMessage"] else chat["updatedAt"],
        reverse=True,
    )
    call_history = [serialize_call_log_for_viewer(item, current_user.id) for item in query_call_logs_for_user(current_user.id)]
    status_posts = [serialize_status_post(item, current_user.id) for item in query_status_posts_for_user(current_user.id)]
    return jsonify(
        {
            "ok": True,
            "me": serialize_user(current_user, include_public_key=True),
            "csrfToken": generate_csrf(),
            "socketToken": create_socket_token(current_user),
            "chats": serialized_chats,
            "callHistory": call_history,
            "statusPosts": status_posts,
        }
    )


def emit_chat_upsert(chat, viewer_ids):
    for viewer_id in viewer_ids:
        socketio.emit(
            "chat:upsert",
            serialize_chat(chat, viewer_id, unread_count_for_chat(chat.id, viewer_id)),
            room=f"user_{viewer_id}",
        )


def normalize_wavemind_messages(raw_messages):
    if not isinstance(raw_messages, list):
        raise ValueError("messages must be a list.")

    normalized = []
    for item in raw_messages[-20:]:
        if not isinstance(item, dict):
            continue
        role = str(item.get("role") or "").strip().lower()
        if role not in {"user", "assistant"}:
            continue
        content = str(item.get("content") or "").strip()
        if not content:
            continue
        if role == "assistant" and is_old_local_wavemind_reply(content):
            continue
        normalized.append({"role": role, "content": content[:4000]})

    if not normalized or normalized[-1]["role"] != "user":
        raise ValueError("Send a message for WaveMind to answer.")
    return normalized


def wavemind_setup_reply() -> str:
    return (
        "WaveMind needs your Google AI Studio Gemini API key on this server. Set GEMINI_API_KEY in "
        "Environment Variables, keep WAVEMIND_PROVIDER=gemini, then restart the server."
    )


def is_old_local_wavemind_reply(text: str) -> bool:
    normalized = str(text or "").strip().lower()
    return any(marker in normalized for marker in OLD_LOCAL_WAVEMIND_REPLY_MARKERS)


def wavemind_gemini_model() -> str:
    model = (
        current_app.config.get("WAVEMIND_MODEL", DEFAULT_GEMINI_MODEL)
        or DEFAULT_GEMINI_MODEL
    ).strip()
    normalized_model = model.lower()
    if (
        not normalized_model
        or normalized_model in GEMINI_INCOMPATIBLE_MODELS
        or normalized_model in GEMINI_LEGACY_MODEL_ALIASES
        or normalized_model.startswith("gpt-")
    ):
        return DEFAULT_GEMINI_MODEL
    return model


def wavemind_google_search_enabled() -> bool:
    return bool(current_app.config.get("WAVEMIND_GOOGLE_SEARCH", True))


def looks_like_gemini_api_key(api_key: str) -> bool:
    return bool(api_key) and not api_key.startswith("sk-")


def wavemind_provider_config(api_key: str = "") -> tuple[str, str]:
    model = wavemind_gemini_model()
    api_url = (
        current_app.config.get("WAVEMIND_API_URL", DEFAULT_GEMINI_GENERATE_URL)
        or DEFAULT_GEMINI_GENERATE_URL
    ).strip()
    if "api.openai.com" in api_url.lower() or "/openai/" in api_url.lower():
        api_url = DEFAULT_GEMINI_GENERATE_URL
    if "{model}" in api_url:
        api_url = api_url.format(model=model)
    return api_url, model


def wavemind_config_status() -> dict:
    api_key = current_app.config.get("WAVEMIND_API_KEY", "").strip()
    key_source = current_app.config.get("WAVEMIND_API_KEY_SOURCE", "").strip() if api_key else ""
    api_url, model = wavemind_provider_config(api_key)
    return {
        "configured": looks_like_gemini_api_key(api_key),
        "keySource": key_source,
        "provider": "gemini",
        "model": model,
        "googleSearchGrounding": wavemind_google_search_enabled(),
        "timezone": current_app.config.get("WAVEMIND_TIMEZONE", "Asia/Kolkata"),
        "currentTime": wavemind_current_time_context(),
        "apiUrl": api_url,
        "timeoutSeconds": current_app.config.get("WAVEMIND_TIMEOUT_SECONDS", 60),
        "retryAttempts": current_app.config.get("WAVEMIND_RETRY_ATTEMPTS", 4),
    }


def request_wavemind_completion(messages):
    api_key = current_app.config.get("WAVEMIND_API_KEY", "").strip()
    if not api_key:
        return wavemind_setup_reply(), "setup_required"
    if api_key.startswith("sk-"):
        raise RuntimeError("WaveMind is reading the wrong provider key. Set your Google AI Studio key as GEMINI_API_KEY, then restart the server.")

    return request_gemini_completion(messages, api_key)


def gemini_provider_error_message(status_code, detail: str) -> str:
    provider_message = ""
    try:
        parsed = json.loads(detail or "{}")
        error_data = parsed.get("error") if isinstance(parsed, dict) else None
        if isinstance(error_data, dict):
            provider_message = str(error_data.get("message") or "").strip()
    except json.JSONDecodeError:
        provider_message = ""

    if status_code in {401, 403}:
        detail_text = f": {provider_message[:180]}" if provider_message else ""
        return f"WaveMind Gemini access was rejected{detail_text}. Check GEMINI_API_KEY in Environment Variables, then restart the server."
    if status_code == 404:
        return "WaveMind Gemini model was not found. Set WAVEMIND_MODEL=gemini-2.5-flash, then restart the server."
    if status_code == 429:
        return "WaveMind reached the Google AI Studio/Gemini limit for this key. Check AI Studio quota or wait a short time, then try again."
    if status_code in TRANSIENT_WAVEMIND_STATUS_CODES:
        return "Gemini is temporarily busy. WaveMind retried automatically; please try again shortly."
    if provider_message:
        return f"WaveMind Gemini error: {provider_message[:220]}"
    return "WaveMind could not get a Gemini response right now."


def retry_delay_from_response(response, attempt: int) -> float:
    headers = getattr(response, "headers", {}) or {}
    retry_after = None
    if hasattr(headers, "get"):
        retry_after = headers.get("Retry-After") or headers.get("retry-after")
    if retry_after:
        try:
            return min(max(float(retry_after), 0.5), 8.0)
        except ValueError:
            pass
    return min(0.8 * (2 ** attempt), 4.0)


def gemini_grounding_sources(candidate: dict) -> list[dict]:
    metadata = candidate.get("groundingMetadata") if isinstance(candidate, dict) else None
    chunks = metadata.get("groundingChunks") if isinstance(metadata, dict) else None
    sources = []
    seen = set()
    for chunk in chunks or []:
        if not isinstance(chunk, dict):
            continue
        web_source = chunk.get("web")
        if not isinstance(web_source, dict):
            continue
        uri = str(web_source.get("uri") or "").strip()
        if not uri or uri in seen:
            continue
        seen.add(uri)
        sources.append({
            "title": str(web_source.get("title") or "Source").strip()[:100],
            "uri": uri,
        })
        if len(sources) >= 4:
            break
    return sources


def append_grounding_sources(reply: str, sources: list[dict]) -> str:
    if not sources:
        return reply
    source_lines = ["", "Sources:"]
    for index, source in enumerate(sources, start=1):
        source_lines.append(f"{index}. {source['title']}: {source['uri']}")
    return f"{reply.rstrip()}\n" + "\n".join(source_lines)


def request_gemini_completion(messages, api_key: str):
    api_url, model = wavemind_provider_config(api_key)
    timeout = current_app.config.get("WAVEMIND_TIMEOUT_SECONDS", 60)
    retry_attempts = max(1, int(current_app.config.get("WAVEMIND_RETRY_ATTEMPTS", 4)))
    contents = [
        {
            "role": "model" if message.get("role") == "assistant" else "user",
            "parts": [{"text": message.get("content", "")}],
        }
        for message in messages[-16:]
    ]
    payload = {
        "system_instruction": {"parts": [{"text": wavemind_system_instruction()}]},
        "contents": contents,
        "generationConfig": {
            "temperature": 0.7,
            "maxOutputTokens": 700,
        },
    }
    if wavemind_google_search_enabled():
        payload["tools"] = [{"google_search": {}}]

    for attempt in range(retry_attempts):
        request_obj = urllib.request.Request(
            api_url,
            data=json.dumps(payload).encode("utf-8"),
            headers={
                "x-goog-api-key": api_key,
                "Content-Type": "application/json",
            },
            method="POST",
        )
        try:
            with urllib.request.urlopen(request_obj, timeout=timeout) as response:
                data = json.loads(response.read().decode("utf-8"))
            candidates = data.get("candidates") if isinstance(data, dict) else None
            if not candidates:
                raise RuntimeError("WaveMind received an empty Gemini response.")
            candidate = candidates[0] if isinstance(candidates[0], dict) else {}
            content = candidate.get("content") if isinstance(candidate, dict) else None
            parts = (content or {}).get("parts") if isinstance(content, dict) else None
            reply = "".join(
                str(part.get("text") or "")
                for part in (parts or [])
                if isinstance(part, dict)
            ).strip()
            if not reply:
                raise RuntimeError("WaveMind received an empty Gemini response.")
            reply = append_grounding_sources(reply, gemini_grounding_sources(candidate))
            return reply, "ai"
        except urllib.error.HTTPError as exc:
            detail = exc.read().decode("utf-8", errors="ignore")
            current_app.logger.warning("WaveMind Gemini provider error: %s", detail[:500])
            if exc.code in TRANSIENT_WAVEMIND_STATUS_CODES and attempt < retry_attempts - 1:
                time.sleep(retry_delay_from_response(exc, attempt))
                continue
            raise RuntimeError(gemini_provider_error_message(exc.code, detail)) from exc
        except RuntimeError:
            raise
        except Exception as exc:
            current_app.logger.exception("WaveMind Gemini request failed")
            if attempt < retry_attempts - 1:
                time.sleep(min(0.8 * (attempt + 1), 2.5))
                continue
            raise RuntimeError("WaveMind is temporarily unavailable.") from exc

    raise RuntimeError("WaveMind is temporarily unavailable.")


@api_bp.get("/wavemind/config")
@login_required
def wavemind_config():
    return jsonify({"ok": True, "wavemind": wavemind_config_status()})


@api_bp.post("/wavemind/test")
@login_required
def wavemind_test():
    try:
        reply, mode = request_wavemind_completion([
            {"role": "user", "content": "Reply with only the word OK."},
        ])
    except RuntimeError as exc:
        return jsonify({"ok": False, "error": str(exc), "wavemind": wavemind_config_status()}), 502

    return jsonify(
        {
            "ok": mode == "ai",
            "zeroCost": False,
            "mode": mode,
            "reply": reply[:200],
            "wavemind": wavemind_config_status(),
        }
    ), 200 if mode == "ai" else 503


@api_bp.post("/wavemind/chat")
@login_required
def wavemind_chat():
    try:
        body = parse_json_request()
        messages = normalize_wavemind_messages(body.get("messages"))
        reply, mode = request_wavemind_completion(messages)
    except ValueError as exc:
        return json_error(str(exc))
    except RuntimeError as exc:
        return json_error(str(exc), 502)

    return jsonify({"ok": True, "reply": reply, "mode": mode})


@api_bp.post("/me/avatar")
@login_required
def upload_my_avatar():
    uploaded_file = request.files.get("file")
    if not uploaded_file or not uploaded_file.filename:
        return json_error("Choose or capture a profile photo first.")

    mime_type = infer_upload_mime_type(uploaded_file, request.form.get("mimeType"))
    if not mime_type.startswith("image/"):
        return json_error("Profile photo must be an image.")
    if not allowed_mime_type(mime_type):
        return json_error("This file type is not supported.")

    suffix = Path(uploaded_file.filename).suffix.lower()
    if not suffix:
        suffix = mimetypes.guess_extension(mime_type) or ".jpg"

    avatar_dir = (Path(current_app.config["UPLOAD_FOLDER"]) / "avatars").resolve()
    avatar_dir.mkdir(parents=True, exist_ok=True)
    avatar_name = f"avatar_{current_user.id}_{uuid.uuid4().hex}{suffix}"
    avatar_path = avatar_dir / avatar_name
    uploaded_file.save(avatar_path)

    previous_path = resolve_upload_path(current_user.avatar_path, "avatars")
    current_user.avatar_path = str(Path("avatars") / avatar_name)
    current_user.updated_at = utcnow()
    db.session.add(current_user)
    db.session.commit()

    if previous_path and previous_path != avatar_path:
        try:
            previous_path.unlink(missing_ok=True)
        except OSError:
            current_app.logger.warning("Unable to remove previous avatar file: %s", previous_path)

    payload = serialize_user(current_user, include_public_key=True)
    notified_user_ids = {current_user.id}
    socketio.emit("profile:update", payload, room=f"user_{current_user.id}")
    for membership in current_user.memberships:
        for participant in membership.chat.memberships:
            if participant.user_id in notified_user_ids:
                continue
            notified_user_ids.add(participant.user_id)
            socketio.emit("profile:update", payload, room=f"user_{participant.user_id}")
    return jsonify({"ok": True, "user": payload})


@api_bp.get("/users/<int:user_id>/avatar")
@login_required
def download_user_avatar(user_id: int):
    user = User.query.get_or_404(user_id)
    avatar_path = resolve_upload_path(user.avatar_path, "avatars")
    if not avatar_path:
        response = Response(build_avatar_placeholder_svg(user), mimetype="image/svg+xml")
        response.headers["Cache-Control"] = "no-store, max-age=0"
        return response
    response = send_file(avatar_path, as_attachment=False, download_name=avatar_path.name, max_age=0)
    response.headers["Cache-Control"] = "no-store, max-age=0"
    return response


@api_bp.post("/keys")
@login_required
def save_public_key():
    try:
        body = parse_json_request()
        serialized, fingerprint = parse_public_key(body.get("publicKey"))
    except ValueError as exc:
        return json_error(str(exc))

    current_user.public_key_jwk = serialized
    current_user.public_key_fingerprint = fingerprint
    db.session.commit()
    return jsonify({"ok": True, "fingerprint": fingerprint})


@api_bp.get("/users/find")
@login_required
def find_user():
    try:
        phone_number = normalize_phone_number(request.args.get("phone", ""))
    except ValueError as exc:
        return json_error(str(exc))

    matches = User.query.filter(User.phone_number.in_(phone_lookup_variants(phone_number))).order_by(User.id.asc()).all()
    user = select_phone_variant_match(matches, phone_number)
    if not user or user.id == current_user.id:
        return json_error("No user found for that phone number.", 404)

    return jsonify({"ok": True, "user": serialize_user(user, include_public_key=True)})


@api_bp.post("/chats")
@login_required
def start_chat():
    try:
        body = parse_json_request()
        phone_number = normalize_phone_number(body.get("phoneNumber", ""))
        matches = User.query.filter(User.phone_number.in_(phone_lookup_variants(phone_number))).order_by(User.id.asc()).all()
        partner = select_phone_variant_match(matches, phone_number)
    except ValueError as exc:
        return json_error(str(exc))

    if not partner or partner.id == current_user.id:
        return json_error("No user found for that phone number.", 404)

    partner = merge_phone_account_users(phone_number, preferred_user=partner) or partner
    if partner.id == current_user.id:
        return json_error("No user found for that phone number.", 404)

    chat = ensure_direct_chat(current_user, partner)
    db.session.commit()
    emit_chat_upsert(chat, [current_user.id])
    return jsonify(
        {
            "ok": True,
            "chat": serialize_chat(chat, current_user.id, unread_count_for_chat(chat.id, current_user.id)),
        }
    )


@api_bp.get("/chats/<int:chat_id>/messages")
@login_required
def get_messages(chat_id: int):
    chat = get_chat_for_user(chat_id, current_user.id)
    if not chat:
        return json_error("Chat not found.", 404)

    before_id = request.args.get("before", type=int)
    query = Message.query.filter_by(chat_id=chat.id).order_by(Message.id.desc())
    preference = get_chat_preference(current_user.id, chat.id)
    if preference and preference.deleted_at:
        query = query.filter(Message.created_at > preference.deleted_at)
    if before_id:
        query = query.filter(Message.id < before_id)

    page_size = min(max(request.args.get("limit", 30, type=int), 1), 50)
    items = query.limit(page_size + 1).all()
    has_more = len(items) > page_size
    items = items[:page_size]
    serialized = [serialize_message_for_viewer(message, current_user.id) for message in reversed(items)]
    return jsonify({"ok": True, "messages": serialized, "hasMore": has_more})


def message_links_for_media_view(message: Message) -> list[dict]:
    text_value = message.ciphertext or ""
    urls = []
    seen = set()
    for match in LINK_RE.finditer(text_value):
        url = match.group(0).rstrip(".,;:!?)]}")
        if not url or url in seen:
            continue
        seen.add(url)
        urls.append({
            "id": f"link_{message.id}_{len(urls)}",
            "messageId": message.id,
            "url": url,
            "text": text_value[:220],
            "createdAt": isoformat_utc(message.created_at),
            "fromSelf": message.sender_id == current_user.id,
        })
    return urls


@api_bp.get("/chats/<int:chat_id>/media")
@login_required
def get_chat_media(chat_id: int):
    chat = get_chat_for_user(chat_id, current_user.id)
    if not chat:
        return json_error("Chat not found.", 404)

    query = Message.query.filter_by(chat_id=chat.id).order_by(Message.id.desc())
    preference = get_chat_preference(current_user.id, chat.id)
    if preference and preference.deleted_at:
        query = query.filter(Message.created_at > preference.deleted_at)

    items = query.limit(500).all()
    photos = []
    videos = []
    documents = []
    links = []
    for message in items:
        serialized = serialize_message_for_viewer(message, current_user.id)
        if message.kind == "media":
            mime_type = (message.iv or "").lower()
            if mime_type.startswith("image/"):
                photos.append(serialized)
            elif mime_type.startswith("video/"):
                videos.append(serialized)
            else:
                documents.append(serialized)
        links.extend(message_links_for_media_view(message))

    return jsonify({
        "ok": True,
        "chatId": chat.id,
        "photos": photos,
        "videos": videos,
        "documents": documents,
        "links": links,
    })


@api_bp.post("/messages/text")
@login_required
def send_text_message():
    try:
        payload = validate_text_message_payload(parse_json_request())
    except (TypeError, ValueError) as exc:
        return json_error(str(exc))

    chat = get_chat_for_user(payload["chat_id"], current_user.id)
    if not chat:
        return json_error("Chat not found.", 404)

    counterpart = chat.counterpart(current_user.id)
    if not counterpart:
        return json_error("Counterpart not found.", 400)

    existing = Message.query.filter_by(client_message_id=payload["client_message_id"]).first()
    if existing:
        return jsonify({"ok": True, "message": serialize_message_for_viewer(existing, current_user.id)})

    message = Message(
        chat_id=chat.id,
        sender_id=current_user.id,
        recipient_id=counterpart.id,
        client_message_id=payload["client_message_id"],
        kind="text",
        ciphertext=payload["text"],
        iv="",
        wrapped_key_sender="",
        wrapped_key_recipient="",
        created_at=utcnow(),
    )
    chat.updated_at = utcnow()
    db.session.add(message)
    db.session.commit()

    sender_payload = serialize_message_for_viewer(message, current_user.id)
    recipient_payload = serialize_message_for_viewer(message, counterpart.id)
    emit_chat_upsert(chat, [current_user.id, counterpart.id])
    socketio.emit("message:new", sender_payload, room=f"user_{current_user.id}")
    socketio.emit("message:new", recipient_payload, room=f"user_{counterpart.id}")

    return jsonify({"ok": True, "message": sender_payload})


@api_bp.post("/messages/media")
@login_required
def upload_media_message():
    try:
        payload = validate_media_message_payload(request.form)
    except (TypeError, ValueError) as exc:
        return json_error(str(exc))

    chat = get_chat_for_user(payload["chat_id"], current_user.id)
    if not chat:
        return json_error("Chat not found.", 404)

    uploaded_file = request.files.get("file")
    if not uploaded_file:
        return json_error("A media file is required.")

    payload["mime_type"] = infer_upload_mime_type(uploaded_file, payload["mime_type"])
    if not allowed_mime_type(payload["mime_type"]):
        return json_error("This file type is not supported.")

    counterpart = chat.counterpart(current_user.id)
    if not counterpart:
        return json_error("Direct chat counterpart not found.", 400)

    suffix = Path(payload["file_name"]).suffix.lower()
    if not suffix:
        suffix = mimetypes.guess_extension(payload["mime_type"].split(";")[0].strip()) or ""
    upload_name = f"{uuid.uuid4().hex}{suffix}"
    upload_path = Path(current_app.config["UPLOAD_FOLDER"]) / upload_name
    uploaded_file.save(upload_path)

    message = Message(
        chat_id=chat.id,
        sender_id=current_user.id,
        recipient_id=counterpart.id,
        client_message_id=payload["client_message_id"],
        kind="media",
        ciphertext=payload["caption"],
        iv=payload["mime_type"],
        wrapped_key_sender=payload["file_name"],
        wrapped_key_recipient="",
        media_iv=None,
        media_path=str(upload_path),
        file_size=upload_path.stat().st_size,
        created_at=utcnow(),
    )
    chat.updated_at = utcnow()
    db.session.add(message)
    db.session.commit()

    sender_payload = serialize_message_for_viewer(message, current_user.id)
    recipient_payload = serialize_message_for_viewer(message, counterpart.id)
    emit_chat_upsert(chat, [current_user.id, counterpart.id])
    socketio.emit("message:new", sender_payload, room=f"user_{current_user.id}")
    socketio.emit("message:new", recipient_payload, room=f"user_{counterpart.id}")

    return jsonify({"ok": True, "message": sender_payload})


@api_bp.post("/status")
@login_required
def create_status_post():
    cleanup_expired_status_posts()

    uploaded_file = request.files.get("file")
    if request.is_json:
        try:
            body = parse_json_request()
        except ValueError as exc:
            return json_error(str(exc))
        text = str(body.get("text", "")).strip()
        mime_type = None
    else:
        text = str(request.form.get("text", "")).strip()
        mime_type = str(request.form.get("mimeType", "")).strip() or None

    text = text[:500]
    if not text and not uploaded_file:
        return json_error("Write something or attach a photo/video for your status.")

    media_path = None
    file_size = None
    normalized_mime_type = None

    if uploaded_file and uploaded_file.filename:
        normalized_mime_type = infer_upload_mime_type(uploaded_file, mime_type)
        if not normalized_mime_type.startswith(("image/", "video/")):
            return json_error("Status supports photo and video updates only.")
        if not allowed_mime_type(normalized_mime_type):
            return json_error("This file type is not supported.")

        suffix = Path(uploaded_file.filename).suffix.lower()
        if not suffix:
            suffix = mimetypes.guess_extension(normalized_mime_type) or ""
        status_dir = Path(current_app.config["UPLOAD_FOLDER"]) / "status"
        status_dir.mkdir(parents=True, exist_ok=True)
        upload_name = f"status_{uuid.uuid4().hex}{suffix}"
        media_path = status_dir / upload_name
        uploaded_file.save(media_path)
        file_size = media_path.stat().st_size

    status_post = StatusPost(
        user_id=current_user.id,
        text=text or None,
        mime_type=normalized_mime_type,
        media_path=str(media_path) if media_path else None,
        file_size=file_size,
        created_at=utcnow(),
        expires_at=utcnow() + timedelta(hours=24),
    )
    db.session.add(status_post)
    db.session.commit()

    viewers = visible_status_owner_ids(current_user.id)
    for viewer_id in viewers:
        socketio.emit("status:new", serialize_status_post(status_post, viewer_id), room=f"user_{viewer_id}")

    return jsonify({"ok": True, "status": serialize_status_post(status_post, current_user.id)})


def status_for_current_user(status_id: int) -> StatusPost | None:
    cleanup_expired_status_posts()
    status_post = StatusPost.query.get(status_id)
    if not status_post or status_post.expires_at <= utcnow():
        return None
    if status_post.user_id not in visible_status_owner_ids(current_user.id):
        return None
    return status_post


@api_bp.post("/status/<int:status_id>/view")
@login_required
def mark_status_viewed(status_id: int):
    status_post = status_for_current_user(status_id)
    if not status_post:
        return json_error("Status not found.", 404)

    if status_post.user_id != current_user.id:
        existing = StatusView.query.filter_by(status_id=status_post.id, viewer_id=current_user.id).first()
        if not existing:
            db.session.add(StatusView(status_id=status_post.id, viewer_id=current_user.id, viewed_at=utcnow()))
            db.session.commit()

    owner_payload = serialize_status_post(status_post, status_post.user_id)
    viewer_payload = serialize_status_post(status_post, current_user.id)
    socketio.emit("status:update", owner_payload, room=f"user_{status_post.user_id}")
    return jsonify({"ok": True, "status": viewer_payload})


@api_bp.post("/status/<int:status_id>/reaction")
@login_required
def react_to_status(status_id: int):
    status_post = status_for_current_user(status_id)
    if not status_post:
        return json_error("Status not found.", 404)
    if status_post.user_id == current_user.id:
        return json_error("You cannot react to your own story.")

    reaction = StatusReaction.query.filter_by(status_id=status_post.id, user_id=current_user.id).first()
    if not reaction:
        reaction = StatusReaction(status_id=status_post.id, user_id=current_user.id)
        db.session.add(reaction)
    reaction.reaction = "like"
    reaction.reacted_at = utcnow()
    if not StatusView.query.filter_by(status_id=status_post.id, viewer_id=current_user.id).first():
        db.session.add(StatusView(status_id=status_post.id, viewer_id=current_user.id, viewed_at=utcnow()))
    db.session.commit()

    owner_payload = serialize_status_post(status_post, status_post.user_id)
    viewer_payload = serialize_status_post(status_post, current_user.id)
    socketio.emit("status:update", owner_payload, room=f"user_{status_post.user_id}")
    return jsonify({"ok": True, "status": viewer_payload})


@api_bp.get("/chats/<int:chat_id>/read")
@login_required
def unsupported_read_get(chat_id: int):
    return json_error("Use POST to mark a chat as read.", 405)


@api_bp.post("/chats/<int:chat_id>/read")
@login_required
def mark_chat_read(chat_id: int):
    chat = get_chat_for_user(chat_id, current_user.id)
    if not chat:
        return json_error("Chat not found.", 404)

    messages = Message.query.filter(
        Message.chat_id == chat.id,
        Message.recipient_id == current_user.id,
        Message.read_at.is_(None),
    ).all()
    if not messages:
        return jsonify({"ok": True, "chatId": chat.id, "messageIds": [], "readAt": None})

    now = utcnow()
    changed_ids = []
    sender_ids = set()
    for message in messages:
        sender_ids.add(message.sender_id)
        if not message.delivered_at:
            message.delivered_at = now
        if not message.read_at:
            message.read_at = now
            changed_ids.append(message.id)

    db.session.commit()

    for sender_id in sender_ids:
        socketio.emit(
            "messages:read",
            {
                "chatId": chat.id,
                "messageIds": changed_ids,
                "readAt": isoformat_utc(now),
            },
            room=f"user_{sender_id}",
        )

    return jsonify({"ok": True, "chatId": chat.id, "messageIds": changed_ids, "readAt": isoformat_utc(now)})


@api_bp.post("/chats/<int:chat_id>/mute")
@login_required
def mute_chat(chat_id: int):
    chat = get_chat_for_user(chat_id, current_user.id)
    if not chat:
        return json_error("Chat not found.", 404)

    try:
        body = parse_json_request()
    except ValueError as exc:
        return json_error(str(exc))

    muted = bool(body.get("muted"))
    preference = set_chat_muted(current_user.id, chat.id, muted)
    db.session.commit()
    return jsonify(
        {
            "ok": True,
            "chatId": chat.id,
            "isMuted": bool(preference.notifications_muted),
        }
    )


@api_bp.delete("/chats/<int:chat_id>")
@login_required
def delete_chat(chat_id: int):
    chat = get_chat_for_user(chat_id, current_user.id)
    if not chat:
        return json_error("Chat not found.", 404)

    set_chat_deleted(current_user.id, chat.id)
    db.session.commit()

    payload = {
        "chatId": chat_id,
        "message": "Chat deleted.",
    }
    socketio.emit("chat:deleted", payload, room=f"user_{current_user.id}")

    return jsonify({"ok": True, "chatId": chat_id})


@api_bp.delete("/messages/<int:message_id>")
@login_required
def delete_message(message_id: int):
    message = Message.query.get_or_404(message_id)
    if current_user.id not in {message.sender_id, message.recipient_id}:
        return json_error("You do not have access to this message.", 403)
    if message.sender_id != current_user.id:
        return json_error("Only the sender can delete this message.", 403)

    chat = get_chat_for_user(message.chat_id, current_user.id)
    if not chat:
        return json_error("Chat not found.", 404)

    media_path = Path(message.media_path) if message.media_path else None
    participant_ids = {membership.user_id for membership in chat.memberships}

    db.session.delete(message)
    db.session.flush()

    replacement_message = chat.messages.first()
    chat.updated_at = replacement_message.created_at if replacement_message else chat.created_at
    updated_at = isoformat_utc(chat.updated_at)
    db.session.commit()

    if media_path:
        try:
            media_path.unlink(missing_ok=True)
        except OSError:
            current_app.logger.warning("Unable to remove deleted message media file: %s", media_path)

    visible_replacements = {
        user_id: latest_visible_message_for_viewer(chat, user_id)
        for user_id in participant_ids
    }

    for user_id in participant_ids:
        visible_replacement = visible_replacements[user_id]
        socketio.emit(
            "message:deleted",
            {
                "chatId": chat.id,
                "messageId": message_id,
                "lastMessage": serialize_message_for_viewer(visible_replacement, user_id) if visible_replacement else None,
                "updatedAt": updated_at,
            },
            room=f"user_{user_id}",
        )

    current_replacement = visible_replacements.get(current_user.id)
    return jsonify(
        {
            "ok": True,
            "chatId": chat.id,
            "messageId": message_id,
            "lastMessage": serialize_message_for_viewer(current_replacement, current_user.id) if current_replacement else None,
            "updatedAt": updated_at,
        }
    )


@api_bp.post("/messages/<int:message_id>/forward")
@login_required
def forward_message(message_id: int):
    message = Message.query.get_or_404(message_id)
    if current_user.id not in {message.sender_id, message.recipient_id}:
        return json_error("You do not have access to this message.", 403)

    try:
        body = parse_json_request()
        target_chat_id = int(body.get("chatId"))
    except (TypeError, ValueError):
        return json_error("Choose a valid chat.")

    chat = get_chat_for_user(target_chat_id, current_user.id)
    if not chat:
        return json_error("Chat not found.", 404)

    counterpart = chat.counterpart(current_user.id)
    if not counterpart:
        return json_error("Counterpart not found.", 400)

    media_path = None
    file_size = message.file_size
    if message.media_path:
        source_path = Path(message.media_path)
        if not source_path.exists():
            return json_error("This attachment is no longer available.", 404)
        suffix = source_path.suffix.lower()
        media_path = Path(current_app.config["UPLOAD_FOLDER"]) / f"{uuid.uuid4().hex}{suffix}"
        copy2(source_path, media_path)
        file_size = media_path.stat().st_size

    forwarded_message = Message(
        chat_id=chat.id,
        sender_id=current_user.id,
        recipient_id=counterpart.id,
        client_message_id=f"f_{uuid.uuid4().hex[:24]}",
        kind=message.kind,
        ciphertext=message.ciphertext or "",
        iv=message.iv or "",
        wrapped_key_sender=message.wrapped_key_sender or "",
        wrapped_key_recipient="",
        media_iv=message.media_iv,
        media_path=str(media_path) if media_path else None,
        file_size=file_size,
        created_at=utcnow(),
    )
    chat.updated_at = utcnow()
    db.session.add(forwarded_message)
    db.session.commit()

    sender_payload = serialize_message_for_viewer(forwarded_message, current_user.id)
    recipient_payload = serialize_message_for_viewer(forwarded_message, counterpart.id)
    emit_chat_upsert(chat, [current_user.id, counterpart.id])
    socketio.emit("message:new", sender_payload, room=f"user_{current_user.id}")
    socketio.emit("message:new", recipient_payload, room=f"user_{counterpart.id}")

    return jsonify({"ok": True, "message": sender_payload})


@api_bp.get("/messages/<int:message_id>/media")
@login_required
def download_media(message_id: int):
    message = Message.query.get_or_404(message_id)
    if current_user.id not in {message.sender_id, message.recipient_id}:
        return json_error("You do not have access to this attachment.", 403)
    if not message.media_path:
        return json_error("Attachment not found.", 404)

    media_path = resolve_upload_path(message.media_path)
    if not media_path:
        return json_error("Attachment is missing.", 404)

    return send_file(
        media_path,
        mimetype=message.iv or "application/octet-stream",
        as_attachment=False,
        download_name=message.wrapped_key_sender or None,
    )


@api_bp.get("/status/<int:status_id>/media")
@login_required
def download_status_media(status_id: int):
    cleanup_expired_status_posts()
    status_post = StatusPost.query.get_or_404(status_id)
    if status_post.expires_at <= utcnow():
        return json_error("Status is no longer available.", 404)
    if status_post.user_id not in visible_status_owner_ids(current_user.id):
        return json_error("You do not have access to this status.", 403)
    if not status_post.media_path:
        return json_error("Status media not found.", 404)

    media_path = resolve_upload_path(status_post.media_path, "status")
    if not media_path:
        return json_error("Status media is missing.", 404)

    return send_file(
        media_path,
        mimetype=status_post.mime_type or "application/octet-stream",
        as_attachment=False,
        download_name=Path(status_post.media_path).name,
    )
