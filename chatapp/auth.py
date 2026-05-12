from flask import Blueprint, current_app, jsonify
from flask_login import login_required, login_user, logout_user
from zoneinfo import ZoneInfo, ZoneInfoNotFoundError

from .extensions import db
from .models import User, utcnow
from .services import merge_phone_account_users
from .security import (
    avatar_color_for,
    json_error,
    normalize_phone_number,
    parse_json_request,
    phone_lookup_variants,
    sanitize_display_name,
    select_phone_variant_match,
)

auth_bp = Blueprint("auth", __name__, url_prefix="/auth")

COUNTRY_TIME_ZONES = {
    "US": "America/New_York",
    "GB": "Europe/London",
    "IN": "Asia/Kolkata",
    "CA": "America/Toronto",
    "AU": "Australia/Sydney",
    "DE": "Europe/Berlin",
}

COUNTRY_NAMES = {
    "US": "United States",
    "GB": "United Kingdom",
    "IN": "India",
    "CA": "Canada",
    "AU": "Australia",
    "DE": "Germany",
}


def normalize_country_profile(body: dict) -> tuple[str | None, str | None, str | None]:
    country_code = str(body.get("countryCode") or "").strip().upper()[:8] or None
    country_name = str(body.get("countryName") or COUNTRY_NAMES.get(country_code or "") or "").strip()[:80] or None
    time_zone = str(body.get("timeZone") or COUNTRY_TIME_ZONES.get(country_code or "") or "").strip()[:64]

    if not time_zone:
        time_zone = "UTC"
    try:
        ZoneInfo(time_zone)
    except ZoneInfoNotFoundError:
        time_zone = COUNTRY_TIME_ZONES.get(country_code or "", "UTC")

    return country_code, country_name, time_zone


@auth_bp.post("/phone-login")
def phone_login():
    try:
        body = parse_json_request()
        phone_number = normalize_phone_number(body.get("phoneNumber", ""))
        raw_display_name = str(body.get("displayName") or "").strip()
        display_name = sanitize_display_name(raw_display_name) if raw_display_name else phone_number
        country_code, country_name, time_zone = normalize_country_profile(body)
    except ValueError as exc:
        return json_error(str(exc))

    phone_variants = phone_lookup_variants(phone_number)

    try:
        matched_users = User.query.filter(User.phone_number.in_(phone_variants)).order_by(User.id.asc()).all()
        user = select_phone_variant_match(matched_users, phone_number)
        exact_user = next((item for item in matched_users if item.phone_number == phone_number), None)

        if not user:
            user = User(
                phone_number=phone_number,
                display_name=display_name,
                country_code=country_code,
                country_name=country_name,
                time_zone=time_zone,
                avatar_color=avatar_color_for(phone_number),
                last_seen_at=utcnow(),
            )
            db.session.add(user)
        else:
            if user.phone_number != phone_number and not exact_user:
                user.phone_number = phone_number
            if raw_display_name and (not user.display_name or user.display_name == user.phone_number):
                user.display_name = display_name
            if country_code:
                user.country_code = country_code
            if country_name:
                user.country_name = country_name
            if time_zone:
                user.time_zone = time_zone
            user.last_seen_at = utcnow()

        db.session.flush()
        user = merge_phone_account_users(phone_number, preferred_user=user) or user
        user.email_address = None
        if country_code:
            user.country_code = country_code
        if country_name:
            user.country_name = country_name
        if time_zone:
            user.time_zone = time_zone
        db.session.commit()
    except Exception:
        db.session.rollback()
        current_app.logger.exception("Phone login failed for %s", phone_number)
        return json_error("Unable to continue right now. Please try again.", 500)

    login_user(user, remember=True)
    return jsonify({"ok": True, "redirect": "/"})


@auth_bp.post("/logout")
@login_required
def logout():
    logout_user()
    return jsonify({"ok": True})
