import os
from pathlib import Path

from dotenv import load_dotenv

BASE_DIR = Path(__file__).resolve().parent.parent
load_dotenv(BASE_DIR / ".env")
load_dotenv(BASE_DIR / ".env.local", override=True)


def env_flag(name: str, default: bool) -> bool:
    value = os.getenv(name)
    if value is None:
        return default
    return value.strip().lower() in {"1", "true", "yes", "on"}


def env_csv(name: str) -> list[str]:
    value = os.getenv(name, "")
    return [item.strip() for item in value.split(",") if item.strip()]


def first_env(*names: str) -> tuple[str, str]:
    for name in names:
        value = clean_secret_value(os.getenv(name, ""))
        if value:
            return value, name
    return "", ""


def clean_secret_value(value: str) -> str:
    cleaned = str(value or "").strip().strip("'\"")
    lower = cleaned.lower()
    if lower.startswith("bearer "):
        cleaned = cleaned[7:].strip()
        lower = cleaned.lower()
    for prefix in (
        "gemini_api_key=",
        "google_api_key=",
        "google_ai_studio_api_key=",
        "wavemind_api_key=",
    ):
        if lower.startswith(prefix):
            cleaned = cleaned.split("=", 1)[1].strip().strip("'\"")
            break
    return cleaned


WAVEMIND_KEY_VALUE, WAVEMIND_KEY_SOURCE = first_env(
    "GEMINI_API_KEY",
    "GOOGLE_API_KEY",
    "GOOGLE_AI_STUDIO_API_KEY",
    "WAVEMIND_API_KEY",
)


class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "dev-secret-key-change-me")
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL", f"sqlite:///{BASE_DIR / 'chat.db'}")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    MAX_CONTENT_LENGTH = int(os.getenv("MAX_UPLOAD_SIZE_MB", "64")) * 1024 * 1024
    UPLOAD_FOLDER = os.getenv("UPLOAD_FOLDER", str(BASE_DIR / "uploads"))
    OTP_EXPIRY_SECONDS = int(os.getenv("OTP_EXPIRY_SECONDS", "300"))
    OTP_REQUEST_COOLDOWN = int(os.getenv("OTP_REQUEST_COOLDOWN", "45"))
    DEV_OTP_EXPOSE = env_flag("DEV_OTP_EXPOSE", True)
    DEV_EMAIL_OTP_EXPOSE = env_flag("DEV_EMAIL_OTP_EXPOSE", DEV_OTP_EXPOSE)
    EMAIL_SMTP_HOST = os.getenv("EMAIL_SMTP_HOST", "").strip()
    EMAIL_SMTP_PORT = int(os.getenv("EMAIL_SMTP_PORT", "587"))
    EMAIL_SMTP_USERNAME = os.getenv("EMAIL_SMTP_USERNAME", "").strip()
    EMAIL_SMTP_PASSWORD = os.getenv("EMAIL_SMTP_PASSWORD", "")
    EMAIL_SMTP_USE_TLS = env_flag("EMAIL_SMTP_USE_TLS", True)
    EMAIL_SMTP_USE_SSL = env_flag("EMAIL_SMTP_USE_SSL", False)
    EMAIL_FROM_ADDRESS = os.getenv("EMAIL_FROM_ADDRESS", EMAIL_SMTP_USERNAME).strip()
    EMAIL_FROM_NAME = os.getenv("EMAIL_FROM_NAME", "WaveChat").strip()
    SESSION_COOKIE_HTTPONLY = True
    SESSION_COOKIE_SAMESITE = "Lax"
    SESSION_COOKIE_SECURE = env_flag("SESSION_COOKIE_SECURE", False)
    REMEMBER_COOKIE_SAMESITE = "Lax"
    RTC_STUN_URLS = env_csv("RTC_STUN_URLS") or [
        "stun:stun.l.google.com:19302",
        "stun:stun1.l.google.com:19302",
    ]
    RTC_TURN_URLS = env_csv("RTC_TURN_URLS")
    RTC_TURN_USERNAME = os.getenv("RTC_TURN_USERNAME", "")
    RTC_TURN_CREDENTIAL = os.getenv("RTC_TURN_CREDENTIAL", "")
    RTC_ICE_TRANSPORT_POLICY = os.getenv("RTC_ICE_TRANSPORT_POLICY", "all")
    RTC_ICE_SERVERS = ([{"urls": RTC_STUN_URLS}] + ([{
        "urls": RTC_TURN_URLS,
        "username": RTC_TURN_USERNAME,
        "credential": RTC_TURN_CREDENTIAL,
    }] if RTC_TURN_URLS else []))
    WAVEMIND_API_KEY = WAVEMIND_KEY_VALUE
    WAVEMIND_API_KEY_SOURCE = WAVEMIND_KEY_SOURCE
    WAVEMIND_PROVIDER = os.getenv("WAVEMIND_PROVIDER", "gemini").strip().lower()
    WAVEMIND_API_URL = os.getenv(
        "WAVEMIND_API_URL",
        "https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent",
    ).strip()
    WAVEMIND_MODEL = os.getenv("WAVEMIND_MODEL", "gemini-2.5-flash").strip()
    WAVEMIND_GOOGLE_SEARCH = env_flag("WAVEMIND_GOOGLE_SEARCH", True)
    WAVEMIND_TIMEZONE = os.getenv("WAVEMIND_TIMEZONE", "Asia/Kolkata").strip()
    WAVEMIND_TIMEOUT_SECONDS = int(os.getenv("WAVEMIND_TIMEOUT_SECONDS", "60"))
    WAVEMIND_RETRY_ATTEMPTS = int(os.getenv("WAVEMIND_RETRY_ATTEMPTS", "4"))
    WTF_CSRF_TIME_LIMIT = None
    WTF_CSRF_CHECK_DEFAULT = False

