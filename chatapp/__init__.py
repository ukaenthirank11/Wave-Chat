from pathlib import Path
import time

from flask import Flask, jsonify, render_template, request
from flask_wtf.csrf import CSRFError
from sqlalchemy import inspect, text

from .api import api_bp
from .auth import auth_bp
from .config import Config
from .extensions import csrf, db, login_manager, socketio
from .models import User
from .security import create_socket_token, install_security_headers, is_email_identity_phone
from .sockets import register_socket_events

BASE_DIR = Path(__file__).resolve().parent.parent
TEMPLATES_DIR = BASE_DIR / "templates"
STATIC_DIR = BASE_DIR / "static"
UNSAFE_METHODS = {"POST", "PUT", "PATCH", "DELETE"}


def wants_json_response() -> bool:
    return (
        request.path.startswith("/api/")
        or request.path.startswith("/auth/")
        or request.path.startswith("/socket.io")
        or request.accept_mimetypes.best == "application/json"
    )


def create_app() -> Flask:
    app = Flask(
        __name__,
        instance_relative_config=True,
        template_folder=str(TEMPLATES_DIR),
        static_folder=str(STATIC_DIR),
        static_url_path="/static",
    )
    app.config.from_object(Config())
    Path(app.config["UPLOAD_FOLDER"]).mkdir(parents=True, exist_ok=True)

    db.init_app(app)
    login_manager.init_app(app)
    csrf.init_app(app)
    socketio.init_app(app)
    install_security_headers(app)

    app.register_blueprint(auth_bp)
    app.register_blueprint(api_bp, url_prefix="/api")

    @app.before_request
    def protect_forms():
        if request.method in UNSAFE_METHODS and not request.path.startswith("/socket.io"):
            csrf.protect()

    @app.context_processor
    def inject_asset_version():
        from flask_login import current_user

        return {
            "asset_version": str(time.time_ns()),
            "socket_token": create_socket_token(current_user) if current_user.is_authenticated else "",
            "rtc_configuration": {
                "iceServers": app.config.get("RTC_ICE_SERVERS", []),
                "iceTransportPolicy": app.config.get("RTC_ICE_TRANSPORT_POLICY", "all"),
            },
        }

    @app.get("/health")
    def health_check():
        return app.response_class("ok\n", mimetype="text/plain")

    @app.route("/")
    @app.route("/login")
    def index():
        from flask_login import current_user

        force_auth = request.path == "/login" or request.args.get("login") == "1"
        if force_auth:
            return render_template("auth.html")
        if current_user.is_authenticated:
            if is_email_identity_phone(current_user.phone_number):
                from flask_login import logout_user

                logout_user()
                return render_template("auth.html")
            return render_template("chat.html")
        return render_template("auth.html")

    @app.errorhandler(CSRFError)
    def handle_csrf(error):
        return jsonify({"ok": False, "error": error.description}), 400

    @app.errorhandler(400)
    def bad_request(error):
        if wants_json_response():
            return jsonify({"ok": False, "error": getattr(error, "description", "Bad request")}), 400
        return error

    @app.errorhandler(413)
    def too_large(_error):
        return jsonify({"ok": False, "error": "Upload is too large."}), 413

    @app.errorhandler(500)
    def handle_internal_error(error):
        app.logger.exception("Unhandled application error: %s", error)
        if wants_json_response():
            return jsonify({"ok": False, "error": "Internal server error. Please try again."}), 500
        return render_template("auth.html"), 500

    with app.app_context():
        db.create_all()
        ensure_runtime_schema()

    register_socket_events(socketio)
    return app


def ensure_runtime_schema():
    inspector = inspect(db.engine)
    table_names = set(inspector.get_table_names())
    user_columns = {column["name"] for column in inspector.get_columns("users")}
    if "avatar_path" not in user_columns:
        db.session.execute(text("ALTER TABLE users ADD COLUMN avatar_path VARCHAR(255)"))
    if "email_address" not in user_columns:
        db.session.execute(text("ALTER TABLE users ADD COLUMN email_address VARCHAR(255)"))
    else:
        db.session.execute(text("UPDATE users SET email_address = NULL WHERE email_address IS NOT NULL"))
    if "country_code" not in user_columns:
        db.session.execute(text("ALTER TABLE users ADD COLUMN country_code VARCHAR(8)"))
    if "country_name" not in user_columns:
        db.session.execute(text("ALTER TABLE users ADD COLUMN country_name VARCHAR(80)"))
    if "time_zone" not in user_columns:
        db.session.execute(text("ALTER TABLE users ADD COLUMN time_zone VARCHAR(64)"))

    otp_columns = {column["name"] for column in inspector.get_columns("otp_codes")}
    if "email_address" not in otp_columns:
        db.session.execute(text("ALTER TABLE otp_codes ADD COLUMN email_address VARCHAR(255)"))

    if "chat_preferences" in table_names:
        chat_preference_columns = {column["name"] for column in inspector.get_columns("chat_preferences")}
        if "deleted_at" not in chat_preference_columns:
            db.session.execute(text("ALTER TABLE chat_preferences ADD COLUMN deleted_at DATETIME"))

    db.session.commit()


@login_manager.user_loader
def load_user(user_id: str):
    return db.session.get(User, int(user_id))


@login_manager.unauthorized_handler
def unauthorized():
    if wants_json_response():
        return jsonify({"ok": False, "error": "Authentication required."}), 401
    return render_template("auth.html"), 401
