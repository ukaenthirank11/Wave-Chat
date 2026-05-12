import json
from pathlib import Path

from flask import current_app, url_for
from sqlalchemy import and_, exists, or_
from sqlalchemy.orm import aliased, joinedload

from .extensions import db
from .models import (
    CallLog,
    Chat,
    ChatParticipant,
    ChatPreference,
    Message,
    StatusPost,
    StatusReaction,
    StatusView,
    User,
    isoformat_utc,
    utcnow,
)
from .security import is_email_identity_phone, phone_lookup_variants, select_phone_variant_match


def direct_key_for(user_a_id: int, user_b_id: int) -> str:
    left, right = sorted([user_a_id, user_b_id])
    return f"{left}:{right}"


def merge_duplicate_direct_chats(keeper: Chat, duplicates: list[Chat], direct_key: str) -> Chat:
    for duplicate in duplicates:
        if not duplicate or duplicate.id == keeper.id:
            continue

        Message.query.filter_by(chat_id=duplicate.id).update({"chat_id": keeper.id}, synchronize_session=False)
        CallLog.query.filter_by(chat_id=duplicate.id).update({"chat_id": keeper.id}, synchronize_session=False)

        for preference in ChatPreference.query.filter_by(chat_id=duplicate.id).all():
            existing_preference = ChatPreference.query.filter_by(
                chat_id=keeper.id,
                viewer_id=preference.viewer_id,
            ).first()
            if existing_preference:
                existing_preference.notifications_muted = bool(
                    existing_preference.notifications_muted or preference.notifications_muted
                )
                if preference.deleted_at and (
                    not existing_preference.deleted_at
                    or preference.deleted_at > existing_preference.deleted_at
                ):
                    existing_preference.deleted_at = preference.deleted_at
                db.session.delete(preference)
            else:
                preference.chat_id = keeper.id

        if duplicate.updated_at and (not keeper.updated_at or duplicate.updated_at > keeper.updated_at):
            keeper.updated_at = duplicate.updated_at
        db.session.delete(duplicate)

    keeper.direct_key = direct_key
    db.session.flush()
    return keeper


def resolve_upload_path(stored_path: str | Path | None, subdir: str | None = None) -> Path | None:
    if not stored_path:
        return None

    raw_path = Path(str(stored_path))
    upload_root = Path(current_app.config["UPLOAD_FOLDER"]).resolve()
    candidates: list[Path] = []

    if raw_path.is_absolute():
        candidates.append(raw_path)
    else:
        candidates.append(upload_root / raw_path)

    if subdir and raw_path.name:
        candidates.append(upload_root / subdir / raw_path.name)
    if raw_path.name:
        candidates.append(upload_root / raw_path.name)

    seen: set[str] = set()
    for candidate in candidates:
        try:
            resolved = candidate.resolve()
        except OSError:
            resolved = candidate
        key = str(resolved)
        if key in seen:
            continue
        seen.add(key)
        if resolved.exists():
            return resolved
    return None


def avatar_url_for_user(user: User | None) -> str | None:
    if not user or not user.id:
        return None
    if not user.avatar_path:
        return None
    if not resolve_upload_path(user.avatar_path, "avatars"):
        return None
    return url_for("api.download_user_avatar", user_id=user.id)


def ensure_direct_chat(user_a: User, user_b: User) -> Chat:
    direct_key = direct_key_for(user_a.id, user_b.id)
    left_member = aliased(ChatParticipant)
    right_member = aliased(ChatParticipant)
    matching_chats = (
        Chat.query.options(joinedload(Chat.memberships).joinedload(ChatParticipant.user))
        .join(left_member, Chat.id == left_member.chat_id)
        .join(right_member, Chat.id == right_member.chat_id)
        .filter(Chat.is_group.is_(False))
        .filter(left_member.user_id == user_a.id, right_member.user_id == user_b.id)
        .all()
    )

    chat = next((item for item in matching_chats if item.direct_key == direct_key), None)
    if chat:
        duplicates = [item for item in matching_chats if item.id != chat.id]
        return merge_duplicate_direct_chats(chat, duplicates, direct_key) if duplicates else chat

    if matching_chats:
        chat = max(
            matching_chats,
            key=lambda item: (item.updated_at or item.created_at or utcnow(), item.id),
        )
        duplicates = [item for item in matching_chats if item.id != chat.id]
        return merge_duplicate_direct_chats(chat, duplicates, direct_key)

    chat = Chat(direct_key=direct_key, is_group=False)
    chat.memberships.append(ChatParticipant(user=user_a))
    chat.memberships.append(ChatParticipant(user=user_b))
    db.session.add(chat)
    db.session.flush()
    return chat


def has_public_phone_number(user: User | None) -> bool:
    return bool(user and user.phone_number and not is_email_identity_phone(user.phone_number))


def canonical_phone_key(value: str | None) -> str:
    digits = "".join(ch for ch in str(value or "") if ch.isdigit())
    if len(digits) == 12 and digits.startswith("91"):
        return digits[2:]
    if len(digits) == 11 and digits.startswith("1"):
        return digits[1:]
    return digits


def merge_phone_account_users(phone_number: str, preferred_user: User | None = None) -> User | None:
    matches = User.query.filter(User.phone_number.in_(phone_lookup_variants(phone_number))).order_by(User.id.asc()).all()
    if not matches:
        return preferred_user

    primary = preferred_user or select_phone_variant_match(matches, phone_number)
    exact_match = next((item for item in matches if item.phone_number == phone_number), None)
    if exact_match:
        primary = exact_match
    if not primary:
        return None

    primary.phone_number = phone_number
    primary.email_address = None
    duplicates = [item for item in matches if item.id != primary.id]
    if not duplicates:
        return primary

    touched_chat_ids: set[int] = set()

    for duplicate in duplicates:
        if duplicate.display_name and (not primary.display_name or primary.display_name == primary.phone_number):
            primary.display_name = duplicate.display_name
        if duplicate.country_code and not primary.country_code:
            primary.country_code = duplicate.country_code
        if duplicate.country_name and not primary.country_name:
            primary.country_name = duplicate.country_name
        if duplicate.time_zone and not primary.time_zone:
            primary.time_zone = duplicate.time_zone
        if duplicate.public_key_jwk and not primary.public_key_jwk:
            primary.public_key_jwk = duplicate.public_key_jwk
        if duplicate.public_key_fingerprint and not primary.public_key_fingerprint:
            primary.public_key_fingerprint = duplicate.public_key_fingerprint
        if duplicate.avatar_color and not primary.avatar_color:
            primary.avatar_color = duplicate.avatar_color
        if duplicate.last_seen_at and (not primary.last_seen_at or duplicate.last_seen_at > primary.last_seen_at):
            primary.last_seen_at = duplicate.last_seen_at
        primary.is_online = bool(primary.is_online or duplicate.is_online)

        Message.query.filter_by(sender_id=duplicate.id).update({"sender_id": primary.id}, synchronize_session=False)
        Message.query.filter_by(recipient_id=duplicate.id).update({"recipient_id": primary.id}, synchronize_session=False)
        CallLog.query.filter_by(caller_id=duplicate.id).update({"caller_id": primary.id}, synchronize_session=False)
        CallLog.query.filter_by(recipient_id=duplicate.id).update({"recipient_id": primary.id}, synchronize_session=False)
        StatusPost.query.filter_by(user_id=duplicate.id).update({"user_id": primary.id}, synchronize_session=False)

        duplicate_memberships = ChatParticipant.query.filter_by(user_id=duplicate.id).all()
        for membership in duplicate_memberships:
            touched_chat_ids.add(membership.chat_id)
            existing_membership = ChatParticipant.query.filter_by(chat_id=membership.chat_id, user_id=primary.id).first()
            if existing_membership:
                db.session.delete(membership)
            else:
                membership.user_id = primary.id

        db.session.flush()
        db.session.delete(duplicate)

    db.session.flush()

    for chat_id in list(touched_chat_ids):
        chat = db.session.get(Chat, chat_id)
        if not chat:
            continue
        participant_ids = sorted({membership.user_id for membership in chat.memberships})
        if chat.is_group:
            continue
        if len(participant_ids) != 2:
            chat.direct_key = None
            continue

        normalized_key = direct_key_for(participant_ids[0], participant_ids[1])
        existing_chat = Chat.query.filter(Chat.direct_key == normalized_key, Chat.id != chat.id).first()
        if existing_chat:
            Message.query.filter_by(chat_id=chat.id).update({"chat_id": existing_chat.id}, synchronize_session=False)
            CallLog.query.filter_by(chat_id=chat.id).update({"chat_id": existing_chat.id}, synchronize_session=False)
            chat_memberships = ChatParticipant.query.filter_by(chat_id=chat.id).all()
            for membership in chat_memberships:
                existing_membership = ChatParticipant.query.filter_by(chat_id=existing_chat.id, user_id=membership.user_id).first()
                if existing_membership:
                    db.session.delete(membership)
                else:
                    membership.chat_id = existing_chat.id
            if chat.updated_at and (not existing_chat.updated_at or chat.updated_at > existing_chat.updated_at):
                existing_chat.updated_at = chat.updated_at
            db.session.flush()
            db.session.delete(chat)
            continue

        chat.direct_key = normalized_key

    db.session.flush()
    return primary


def serialize_user(user: User, include_public_key: bool = False):
    payload = {
        "id": user.id,
        "displayName": user.display_name,
        "phoneNumber": user.phone_number if has_public_phone_number(user) else None,
        "countryCode": user.country_code,
        "countryName": user.country_name,
        "timeZone": user.time_zone,
        "avatarColor": user.avatar_color,
        "avatarUrl": avatar_url_for_user(user),
        "avatarUpdatedAt": isoformat_utc(user.updated_at),
        "isOnline": bool(user.is_online),
        "lastSeenAt": isoformat_utc(user.last_seen_at),
        "publicKeyFingerprint": user.public_key_fingerprint,
    }
    if include_public_key and user.public_key_jwk:
        payload["publicKey"] = json.loads(user.public_key_jwk)
    return payload


def build_plain_message_payload(message: Message):
    if message.kind == "media":
        return {
            "messageType": "media",
            "caption": message.ciphertext or "",
            "mimeType": message.iv or "application/octet-stream",
            "fileName": message.wrapped_key_sender or "attachment",
            "fileSize": message.file_size,
        }

    return {
        "messageType": "text",
        "text": message.ciphertext or "",
    }


def serialize_message_for_viewer(message: Message, viewer_id: int):
    plain = build_plain_message_payload(message)
    status = "sent"
    if message.read_at:
        status = "read"
    elif message.delivered_at:
        status = "delivered"

    return {
        "id": message.id,
        "chatId": message.chat_id,
        "senderId": message.sender_id,
        "recipientId": message.recipient_id,
        "clientMessageId": message.client_message_id,
        "kind": message.kind,
        "text": plain.get("text"),
        "caption": plain.get("caption"),
        "mimeType": plain.get("mimeType"),
        "fileName": plain.get("fileName"),
        "ciphertext": message.ciphertext,
        "iv": message.iv,
        "wrappedKey": None,
        "mediaIv": None,
        "plain": plain,
        "mediaUrl": url_for("api.download_media", message_id=message.id) if message.media_path else None,
        "fileSize": message.file_size,
        "createdAt": isoformat_utc(message.created_at),
        "deliveredAt": isoformat_utc(message.delivered_at),
        "readAt": isoformat_utc(message.read_at),
        "fromSelf": viewer_id == message.sender_id,
        "status": status,
    }


def latest_visible_message_for_viewer(chat: Chat, viewer_id: int) -> Message | None:
    preference = get_chat_preference(viewer_id, chat.id)
    query = chat.messages
    if preference and preference.deleted_at:
        query = query.filter(Message.created_at > preference.deleted_at)
    return query.first()


def serialize_chat(chat: Chat, viewer_id: int, unread_count: int = 0):
    counterpart = chat.counterpart(viewer_id)
    preference = get_chat_preference(viewer_id, chat.id)
    last_message = latest_visible_message_for_viewer(chat, viewer_id)
    updated_at = last_message.created_at if last_message else chat.updated_at
    return {
        "id": chat.id,
        "isGroup": chat.is_group,
        "title": chat.title,
        "updatedAt": isoformat_utc(updated_at),
        "counterpart": serialize_user(counterpart, include_public_key=True) if counterpart else None,
        "lastMessage": serialize_message_for_viewer(last_message, viewer_id) if last_message else None,
        "unreadCount": unread_count,
        "isMuted": bool(preference.notifications_muted) if preference else False,
    }


def serialize_call_log_for_viewer(call_log: CallLog, viewer_id: int):
    counterpart = call_log.recipient if call_log.caller_id == viewer_id else call_log.caller
    direction = "outgoing" if call_log.caller_id == viewer_id else "incoming"
    duration_seconds = 0
    if call_log.answered_at and call_log.ended_at and call_log.ended_at >= call_log.answered_at:
        duration_seconds = int((call_log.ended_at - call_log.answered_at).total_seconds())

    return {
        "id": call_log.id,
        "callId": call_log.call_id,
        "chatId": call_log.chat_id,
        "callType": call_log.call_type,
        "direction": direction,
        "outcome": call_log.status,
        "createdAt": isoformat_utc(call_log.started_at),
        "answeredAt": isoformat_utc(call_log.answered_at),
        "endedAt": isoformat_utc(call_log.ended_at),
        "durationSeconds": duration_seconds,
        "name": counterpart.display_name if counterpart else "Contact",
        "phoneNumber": counterpart.phone_number if has_public_phone_number(counterpart) else None,
        "avatarColor": counterpart.avatar_color if counterpart else "#128C7E",
        "avatarUrl": avatar_url_for_user(counterpart),
    }


def serialize_status_post(status_post: StatusPost, viewer_id: int):
    is_own = status_post.user_id == viewer_id
    payload = {
        "id": status_post.id,
        "text": status_post.text or "",
        "mimeType": status_post.mime_type,
        "mediaUrl": url_for("api.download_status_media", status_id=status_post.id) if status_post.media_path else None,
        "fileSize": status_post.file_size,
        "createdAt": isoformat_utc(status_post.created_at),
        "expiresAt": isoformat_utc(status_post.expires_at),
        "isOwn": is_own,
        "viewCount": StatusView.query.filter_by(status_id=status_post.id).count(),
        "reactionCount": StatusReaction.query.filter_by(status_id=status_post.id).count(),
        "hasReacted": StatusReaction.query.filter_by(status_id=status_post.id, user_id=viewer_id).first() is not None,
        "user": serialize_user(status_post.user, include_public_key=False),
    }
    if is_own:
        payload["viewedBy"] = [
            {
                "user": serialize_user(view.viewer, include_public_key=False),
                "viewedAt": isoformat_utc(view.viewed_at),
            }
            for view in StatusView.query.filter_by(status_id=status_post.id).order_by(StatusView.viewed_at.desc()).all()
        ]
        payload["reactedBy"] = [
            {
                "user": serialize_user(reaction.user, include_public_key=False),
                "reaction": reaction.reaction,
                "reactedAt": isoformat_utc(reaction.reacted_at),
            }
            for reaction in StatusReaction.query.filter_by(status_id=status_post.id).order_by(StatusReaction.reacted_at.desc()).all()
        ]
    return payload


def query_chats_for_user(user_id: int):
    preference = aliased(ChatPreference)
    has_message_after_delete = exists().where(
        and_(
            Message.chat_id == Chat.id,
            Message.created_at > preference.deleted_at,
        )
    )
    chats = (
        Chat.query.options(joinedload(Chat.memberships).joinedload(ChatParticipant.user))
        .join(ChatParticipant)
        .outerjoin(
            preference,
            and_(
                preference.chat_id == Chat.id,
                preference.viewer_id == user_id,
            ),
        )
        .filter(ChatParticipant.user_id == user_id)
        .filter(or_(preference.deleted_at.is_(None), has_message_after_delete))
        .all()
    )
    visible_chats = [
        chat for chat in chats
        if chat.is_group or has_public_phone_number(chat.counterpart(user_id))
    ]
    deduped_chats: list[Chat] = []
    seen_phone_keys: dict[str, int] = {}
    for chat in visible_chats:
        if chat.is_group:
            deduped_chats.append(chat)
            continue
        key = canonical_phone_key(chat.counterpart(user_id).phone_number if chat.counterpart(user_id) else "")
        if not key:
            deduped_chats.append(chat)
            continue
        existing_index = seen_phone_keys.get(key)
        if existing_index is None:
            seen_phone_keys[key] = len(deduped_chats)
            deduped_chats.append(chat)
            continue
        existing_chat = deduped_chats[existing_index]
        if (chat.updated_at or utcnow()) >= (existing_chat.updated_at or utcnow()):
            deduped_chats[existing_index] = chat
    return deduped_chats


def visible_status_owner_ids(user_id: int) -> set[int]:
    owner_ids = {user_id}
    for chat in query_chats_for_user(user_id):
        counterpart = chat.counterpart(user_id)
        if counterpart:
            owner_ids.add(counterpart.id)
    return owner_ids


def query_status_posts_for_user(user_id: int):
    now = utcnow()
    owner_ids = visible_status_owner_ids(user_id)
    return (
        StatusPost.query.options(joinedload(StatusPost.user))
        .filter(StatusPost.user_id.in_(owner_ids), StatusPost.expires_at > now)
        .order_by(StatusPost.created_at.desc())
        .all()
    )


def cleanup_expired_status_posts():
    now = utcnow()
    expired_items = StatusPost.query.filter(StatusPost.expires_at <= now).all()
    if not expired_items:
        return 0

    media_paths = [Path(item.media_path) for item in expired_items if item.media_path]
    for item in expired_items:
        db.session.delete(item)
    db.session.commit()

    for media_path in media_paths:
        try:
            media_path.unlink(missing_ok=True)
        except OSError:
            pass
    return len(expired_items)


def query_call_logs_for_user(user_id: int):
    logs = (
        CallLog.query.options(joinedload(CallLog.caller), joinedload(CallLog.recipient))
        .filter(or_(CallLog.caller_id == user_id, CallLog.recipient_id == user_id))
        .order_by(CallLog.started_at.desc())
        .limit(60)
        .all()
    )
    return [
        log for log in logs
        if has_public_phone_number(log.recipient if log.caller_id == user_id else log.caller)
    ]


def unread_count_for_chat(chat_id: int, user_id: int) -> int:
    query = Message.query.filter(
        Message.chat_id == chat_id,
        Message.recipient_id == user_id,
        Message.read_at.is_(None),
    )
    preference = get_chat_preference(user_id, chat_id)
    if preference and preference.deleted_at:
        query = query.filter(Message.created_at > preference.deleted_at)
    return query.count()


def get_chat_for_user(chat_id: int, user_id: int):
    return (
        Chat.query.options(joinedload(Chat.memberships).joinedload(ChatParticipant.user))
        .join(ChatParticipant)
        .filter(Chat.id == chat_id, ChatParticipant.user_id == user_id)
        .first()
    )


def get_chat_preference(viewer_id: int, chat_id: int) -> ChatPreference | None:
    return ChatPreference.query.filter_by(viewer_id=viewer_id, chat_id=chat_id).first()


def set_chat_muted(viewer_id: int, chat_id: int, muted: bool) -> ChatPreference:
    preference = get_chat_preference(viewer_id, chat_id)
    if not preference:
        preference = ChatPreference(viewer_id=viewer_id, chat_id=chat_id)
        db.session.add(preference)
    preference.notifications_muted = bool(muted)
    db.session.flush()
    return preference


def set_chat_deleted(viewer_id: int, chat_id: int) -> ChatPreference:
    preference = get_chat_preference(viewer_id, chat_id)
    if not preference:
        preference = ChatPreference(viewer_id=viewer_id, chat_id=chat_id)
        db.session.add(preference)
    now = utcnow()
    preference.deleted_at = now
    preference.updated_at = now
    db.session.flush()
    return preference


def clear_chat_deleted_for_users(chat_id: int, viewer_ids) -> list[ChatPreference]:
    normalized_ids = {int(viewer_id) for viewer_id in viewer_ids if viewer_id}
    if not normalized_ids:
        return []

    preferences = ChatPreference.query.filter(
        ChatPreference.chat_id == chat_id,
        ChatPreference.viewer_id.in_(normalized_ids),
    ).all()
    now = utcnow()
    changed = []
    for preference in preferences:
        if preference.deleted_at is None:
            continue
        preference.deleted_at = None
        preference.updated_at = now
        changed.append(preference)
    if changed:
        db.session.flush()
    return changed
