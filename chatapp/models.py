from datetime import datetime, timedelta, timezone

from flask_login import UserMixin

from .extensions import db


def utcnow():
    return datetime.now(timezone.utc).replace(tzinfo=None)


def isoformat_utc(value):
    if not value:
        return None
    if value.tzinfo is None:
        value = value.replace(tzinfo=timezone.utc)
    else:
        value = value.astimezone(timezone.utc)
    return value.isoformat().replace("+00:00", "Z")


def status_expiry():
    return utcnow() + timedelta(hours=24)


class ChatParticipant(db.Model):
    __tablename__ = "chat_participants"

    chat_id = db.Column(db.Integer, db.ForeignKey("chats.id"), primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), primary_key=True)
    joined_at = db.Column(db.DateTime(timezone=True), default=utcnow, nullable=False)

    chat = db.relationship("Chat", back_populates="memberships")
    user = db.relationship("User", back_populates="memberships")


class User(UserMixin, db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    phone_number = db.Column(db.String(24), unique=True, nullable=False, index=True)
    email_address = db.Column(db.String(255), unique=True, nullable=True, index=True)
    display_name = db.Column(db.String(80), nullable=False)
    country_code = db.Column(db.String(8), nullable=True)
    country_name = db.Column(db.String(80), nullable=True)
    time_zone = db.Column(db.String(64), nullable=True)
    public_key_jwk = db.Column(db.Text, nullable=True)
    public_key_fingerprint = db.Column(db.String(128), nullable=True)
    avatar_color = db.Column(db.String(16), nullable=False, default="#128C7E")
    avatar_path = db.Column(db.String(255), nullable=True)
    is_online = db.Column(db.Boolean, nullable=False, default=False)
    last_seen_at = db.Column(db.DateTime(timezone=True), nullable=True)
    created_at = db.Column(db.DateTime(timezone=True), default=utcnow, nullable=False)
    updated_at = db.Column(
        db.DateTime(timezone=True),
        default=utcnow,
        onupdate=utcnow,
        nullable=False,
    )

    memberships = db.relationship(
        "ChatParticipant",
        back_populates="user",
        cascade="all, delete-orphan",
        lazy="selectin",
    )
    sent_messages = db.relationship(
        "Message",
        back_populates="sender",
        foreign_keys="Message.sender_id",
        lazy="dynamic",
    )
    received_messages = db.relationship(
        "Message",
        back_populates="recipient",
        foreign_keys="Message.recipient_id",
        lazy="dynamic",
    )
    status_posts = db.relationship(
        "StatusPost",
        back_populates="user",
        cascade="all, delete-orphan",
        lazy="dynamic",
    )
    outgoing_calls = db.relationship(
        "CallLog",
        back_populates="caller",
        foreign_keys="CallLog.caller_id",
        lazy="dynamic",
    )
    incoming_calls = db.relationship(
        "CallLog",
        back_populates="recipient",
        foreign_keys="CallLog.recipient_id",
        lazy="dynamic",
    )
    chat_preferences = db.relationship(
        "ChatPreference",
        back_populates="viewer",
        cascade="all, delete-orphan",
        lazy="dynamic",
    )


class Chat(db.Model):
    __tablename__ = "chats"

    id = db.Column(db.Integer, primary_key=True)
    direct_key = db.Column(db.String(64), unique=True, nullable=True, index=True)
    is_group = db.Column(db.Boolean, nullable=False, default=False)
    title = db.Column(db.String(120), nullable=True)
    created_at = db.Column(db.DateTime(timezone=True), default=utcnow, nullable=False)
    updated_at = db.Column(
        db.DateTime(timezone=True),
        default=utcnow,
        onupdate=utcnow,
        nullable=False,
    )

    memberships = db.relationship(
        "ChatParticipant",
        back_populates="chat",
        cascade="all, delete-orphan",
        lazy="selectin",
    )
    messages = db.relationship(
        "Message",
        back_populates="chat",
        cascade="all, delete-orphan",
        lazy="dynamic",
        order_by="Message.id.desc()",
    )
    call_logs = db.relationship(
        "CallLog",
        back_populates="chat",
        cascade="all, delete-orphan",
        lazy="dynamic",
        order_by="CallLog.started_at.desc()",
    )
    preferences = db.relationship(
        "ChatPreference",
        back_populates="chat",
        cascade="all, delete-orphan",
        lazy="dynamic",
    )

    def counterpart(self, viewer_id: int):
        for membership in self.memberships:
            if membership.user_id != viewer_id:
                return membership.user
        return None


class Message(db.Model):
    __tablename__ = "messages"

    id = db.Column(db.Integer, primary_key=True)
    chat_id = db.Column(db.Integer, db.ForeignKey("chats.id"), nullable=False, index=True)
    sender_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False, index=True)
    recipient_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False, index=True)
    client_message_id = db.Column(db.String(72), unique=True, nullable=False, index=True)
    kind = db.Column(db.String(16), nullable=False, default="text")
    ciphertext = db.Column(db.Text, nullable=False)
    iv = db.Column(db.String(64), nullable=False)
    wrapped_key_sender = db.Column(db.Text, nullable=False)
    wrapped_key_recipient = db.Column(db.Text, nullable=False)
    media_iv = db.Column(db.String(64), nullable=True)
    media_path = db.Column(db.String(255), nullable=True)
    file_size = db.Column(db.Integer, nullable=True)
    created_at = db.Column(db.DateTime(timezone=True), default=utcnow, nullable=False, index=True)
    delivered_at = db.Column(db.DateTime(timezone=True), nullable=True)
    read_at = db.Column(db.DateTime(timezone=True), nullable=True)

    chat = db.relationship("Chat", back_populates="messages")
    sender = db.relationship("User", foreign_keys=[sender_id], back_populates="sent_messages")
    recipient = db.relationship("User", foreign_keys=[recipient_id], back_populates="received_messages")


class OtpCode(db.Model):
    __tablename__ = "otp_codes"

    id = db.Column(db.Integer, primary_key=True)
    phone_number = db.Column(db.String(24), nullable=False, index=True)
    email_address = db.Column(db.String(255), nullable=True, index=True)
    code_hash = db.Column(db.String(255), nullable=False)
    expires_at = db.Column(db.DateTime(timezone=True), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), default=utcnow, nullable=False)
    consumed_at = db.Column(db.DateTime(timezone=True), nullable=True)
    attempts_left = db.Column(db.Integer, nullable=False, default=5)


class CallLog(db.Model):
    __tablename__ = "call_logs"

    id = db.Column(db.Integer, primary_key=True)
    call_id = db.Column(db.String(72), unique=True, nullable=False, index=True)
    chat_id = db.Column(db.Integer, db.ForeignKey("chats.id"), nullable=False, index=True)
    caller_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False, index=True)
    recipient_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False, index=True)
    call_type = db.Column(db.String(16), nullable=False, default="voice")
    status = db.Column(db.String(24), nullable=False, default="ringing")
    started_at = db.Column(db.DateTime(timezone=True), default=utcnow, nullable=False, index=True)
    answered_at = db.Column(db.DateTime(timezone=True), nullable=True)
    ended_at = db.Column(db.DateTime(timezone=True), nullable=True)
    created_at = db.Column(db.DateTime(timezone=True), default=utcnow, nullable=False)
    updated_at = db.Column(
        db.DateTime(timezone=True),
        default=utcnow,
        onupdate=utcnow,
        nullable=False,
    )

    chat = db.relationship("Chat", back_populates="call_logs")
    caller = db.relationship("User", foreign_keys=[caller_id], back_populates="outgoing_calls")
    recipient = db.relationship("User", foreign_keys=[recipient_id], back_populates="incoming_calls")


class StatusPost(db.Model):
    __tablename__ = "status_posts"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False, index=True)
    text = db.Column(db.Text, nullable=True)
    mime_type = db.Column(db.String(120), nullable=True)
    media_path = db.Column(db.String(255), nullable=True)
    file_size = db.Column(db.Integer, nullable=True)
    created_at = db.Column(db.DateTime(timezone=True), default=utcnow, nullable=False, index=True)
    expires_at = db.Column(db.DateTime(timezone=True), default=status_expiry, nullable=False, index=True)

    user = db.relationship("User", back_populates="status_posts")


class StatusView(db.Model):
    __tablename__ = "status_views"
    __table_args__ = (
        db.UniqueConstraint("status_id", "viewer_id", name="uq_status_view_status_viewer"),
    )

    id = db.Column(db.Integer, primary_key=True)
    status_id = db.Column(db.Integer, db.ForeignKey("status_posts.id"), nullable=False, index=True)
    viewer_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False, index=True)
    viewed_at = db.Column(db.DateTime(timezone=True), default=utcnow, nullable=False)

    status = db.relationship("StatusPost", backref=db.backref("views", cascade="all, delete-orphan", lazy="dynamic"))
    viewer = db.relationship("User", foreign_keys=[viewer_id])


class StatusReaction(db.Model):
    __tablename__ = "status_reactions"
    __table_args__ = (
        db.UniqueConstraint("status_id", "user_id", name="uq_status_reaction_status_user"),
    )

    id = db.Column(db.Integer, primary_key=True)
    status_id = db.Column(db.Integer, db.ForeignKey("status_posts.id"), nullable=False, index=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False, index=True)
    reaction = db.Column(db.String(16), nullable=False, default="like")
    reacted_at = db.Column(db.DateTime(timezone=True), default=utcnow, nullable=False)

    status = db.relationship("StatusPost", backref=db.backref("reactions", cascade="all, delete-orphan", lazy="dynamic"))
    user = db.relationship("User", foreign_keys=[user_id])


class ChatPreference(db.Model):
    __tablename__ = "chat_preferences"
    __table_args__ = (
        db.UniqueConstraint("viewer_id", "chat_id", name="uq_chat_preference_viewer_chat"),
    )

    id = db.Column(db.Integer, primary_key=True)
    viewer_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False, index=True)
    chat_id = db.Column(db.Integer, db.ForeignKey("chats.id"), nullable=False, index=True)
    notifications_muted = db.Column(db.Boolean, nullable=False, default=False)
    deleted_at = db.Column(db.DateTime(timezone=True), nullable=True)
    created_at = db.Column(db.DateTime(timezone=True), default=utcnow, nullable=False)
    updated_at = db.Column(
        db.DateTime(timezone=True),
        default=utcnow,
        onupdate=utcnow,
        nullable=False,
    )

    viewer = db.relationship("User", back_populates="chat_preferences")
    chat = db.relationship("Chat", back_populates="preferences")
