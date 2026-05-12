const app = document.getElementById("chat-app");

if (!app) {
    throw new Error("WaveChat app root not found.");
}

document.body.classList.add("wavechat-preview-active");

const state = {
    me: null,
    chats: [],
    statusPosts: [],
    callHistory: [],
    messagesByChat: new Map(),
    activeChatId: null,
    visibleContactChatId: null,
    screen: "chats",
    search: "",
    filter: "all",
    csrfToken: "",
    socketToken: "",
    socket: null,
    typingTimer: null,
    searchTimer: null,
    phoneSearchResult: null,
    phoneSearchLoading: false,
    currentCall: null,
    incomingCall: null,
    callStartedAt: null,
    callDurationTimer: null,
    callCameraFacing: "user",
    callFloating: false,
    callFloatingPosition: null,
    callFloatingDragged: false,
    callSpeakerEnabled: false,
    callEffectsEnabled: false,
    callScreenSharing: false,
    pendingOffer: null,
    pendingIceCandidates: [],
    peerConnection: null,
    localStream: null,
    remoteStream: null,
    cameraMode: "photo",
    cameraFacing: "user",
    cameraStream: null,
    mediaRecorder: null,
    mediaChunks: [],
    capturedBlob: null,
    capturedUrl: "",
    captureTarget: "chat",
    captureStreamRequestId: 0,
    captureModalOpen: false,
    attachmentSheetOpenedAt: 0,
    pendingAttachment: null,
    filePickerKind: "",
    statusPickerKind: "",
    mediaTab: "photos",
    selectionMode: false,
    selectedMessageIds: new Set(),
    activeStoryGroup: [],
    activeStoryIndex: 0,
    uiTapTimestamps: {},
    replyContext: null,
    wavemindMessages: [
        {
            role: "assistant",
            content: "Hi, I am WaveMind. How can I help?",
            createdAt: new Date().toISOString(),
        },
    ],
    wavemindBusy: false,
    wavemindCallActive: false,
    wavemindCallBusy: false,
    wavemindCallListening: false,
    wavemindCallSpeaking: false,
    wavemindCallNotice: "",
    wavemindCallMessages: [],
    wavemindCallStartedAt: null,
    wavemindCallDurationTimer: null,
    wavemindRecognition: null,
    storyProgressTimeout: null,
    storyProgressStartedAt: 0,
    storyProgressDuration: 0,
    storyProgressRemaining: 0,
    storyPaused: false,
    storyTapTimer: null,
    messageHoldTimer: null,
    heldMessageId: null,
    suppressMessageTapUntil: 0,
};

const PHOTO_ATTACHMENT_ACCEPT = ".jpg,.jpeg,.png,.webp,.gif,.heic,.heif,.avif,.bmp,.tif,.tiff,image/jpeg,image/jpg,image/png,image/webp,image/gif,image/heic,image/heif,image/avif,image/bmp,image/tiff";
const VIDEO_ATTACHMENT_ACCEPT = ".mp4,.mov,.webm,.m4v,.3gp,.3gpp,.3g2,.avi,.mkv,.mpg,.mpeg,.ogv,video/mp4,video/quicktime,video/webm,video/x-m4v,video/3gpp,video/3gpp2,video/x-msvideo,video/x-matroska,video/mpeg,video/ogg";
const DOCUMENT_ATTACHMENT_ACCEPT = ".pdf,.doc,.docx,.txt,.zip,.rar,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain,application/zip,application/x-zip-compressed,application/vnd.rar,application/x-rar-compressed";
const DEFAULT_CHAT_ATTACHMENT_ACCEPT = `${PHOTO_ATTACHMENT_ACCEPT},${VIDEO_ATTACHMENT_ACCEPT},${DOCUMENT_ATTACHMENT_ACCEPT}`;
const LOCAL_STORAGE_FILE_ACCEPT = "*/*";
const CAPTURE_VIEWPORT_WIDTH = "var(--capture-viewport-width, 100vw)";
const CAPTURE_VIEWPORT_HEIGHT = "var(--capture-viewport-height, 100dvh)";
const REPLY_MARKER_RE = /^\[\[wc_reply:([^\]]+)\]\]/;
const WAVEMIND_CHAT_ID = "wavemind";
const WAVEMIND_AVATAR_URL = "/static/img/wavemind-logo.svg";
const WAVEMIND_LEGACY_HISTORY_KEY = "wavemind-chat-history";
const WAVEMIND_PREVIOUS_PROVIDER_HISTORY_KEY = "wavemind-openai-chat-history";
const WAVEMIND_HISTORY_KEY = "wavemind-gemini-chat-history";
const WAVEMIND_HISTORY_VERSION_KEY = "wavemind-chat-history-version";
const WAVEMIND_HISTORY_VERSION = "gemini-v3-grounded-search";
const WAVEMIND_OLD_LOCAL_REPLY_RE = /\b(local mode|zero-cost local|simple local mode|connect a stronger ai provider|openai key|openai api|starts with sk-)\b/i;
const WAVEMIND_SETUP_MESSAGE = "WaveMind is set to Google AI Studio/Gemini. Add GEMINI_API_KEY, keep WAVEMIND_PROVIDER=gemini, restart the server, then ask again.";
const COUNTRY_TIME_ZONES = {
    US: "America/New_York",
    GB: "Europe/London",
    IN: "Asia/Kolkata",
    CA: "America/Toronto",
    AU: "Australia/Sydney",
    DE: "Europe/Berlin",
};

const refs = {
    sidebarTools: document.getElementById("sidebar-tools"),
    chatList: document.getElementById("chat-list"),
    chatSearch: document.getElementById("chat-search"),
    selfProfileBtn: document.getElementById("self-profile-btn"),
    selfProfileAvatar: document.getElementById("self-profile-avatar"),
    messages: document.getElementById("messages"),
    messagesScroller: document.getElementById("messages-scroller"),
    conversationAvatar: document.getElementById("conversation-avatar"),
    conversationTitle: document.getElementById("conversation-title"),
    conversationStatus: document.getElementById("conversation-status"),
    mobileBackBtn: document.getElementById("mobile-back-btn"),
    conversationMetaBtn: document.getElementById("conversation-meta-btn"),
    voiceCallBtn: document.getElementById("voice-call-btn"),
    videoCallBtn: document.getElementById("video-call-btn"),
    chatInfoBtn: document.getElementById("chat-info-btn"),
    chatMenu: document.getElementById("chat-menu"),
    composer: document.getElementById("composer"),
    composerReply: document.getElementById("composer-reply"),
    composerReplyLabel: document.getElementById("composer-reply-label"),
    composerReplyPreview: document.getElementById("composer-reply-preview"),
    composerReplyCancel: document.getElementById("composer-reply-cancel"),
    attachmentPreview: document.getElementById("attachment-preview"),
    messageInput: document.getElementById("message-input"),
    attachmentBtn: document.getElementById("attachment-btn"),
    chatPhotoInput: document.getElementById("chat-photo-input"),
    chatVideoInput: document.getElementById("chat-video-input"),
    chatDocumentInput: document.getElementById("chat-document-input"),
    fileInput: document.getElementById("file-input"),
    profilePhotoInput: document.getElementById("profile-photo-input"),
    profilePhotoCameraInput: document.getElementById("profile-photo-camera-input"),
    statusFileInput: document.getElementById("status-file-input"),
    attachmentSheet: document.getElementById("attachment-sheet"),
    attachmentSheetBackdrop: document.getElementById("attachment-sheet-backdrop"),
    attachmentSheetClose: document.getElementById("attachment-sheet-close"),
    mobileBottomNav: document.getElementById("mobile-bottom-nav"),
    storyViewer: document.getElementById("story-viewer"),
    storyViewerAvatar: document.getElementById("story-viewer-avatar"),
    storyViewerTitle: document.getElementById("story-viewer-title"),
    storyViewerMeta: document.getElementById("story-viewer-meta"),
    storyViewerProgressBar: document.querySelector("#story-viewer .story-viewer-progress span"),
    storyViewerBody: document.getElementById("story-viewer-body"),
    storyViewerClose: document.getElementById("story-viewer-close"),
    storyReplyInput: document.getElementById("story-reply-input"),
    storyReplyBtn: document.getElementById("story-reply-btn"),
    storySheet: document.getElementById("story-sheet"),
    storySheetClose: document.getElementById("story-sheet-close"),
    storySheetBackdrop: document.getElementById("story-sheet-backdrop"),
    mediaViewer: document.getElementById("media-viewer"),
    mediaViewerBackdrop: document.getElementById("media-viewer-backdrop"),
    mediaViewerClose: document.getElementById("media-viewer-close"),
    mediaViewerTitle: document.getElementById("media-viewer-title"),
    mediaViewerCaption: document.getElementById("media-viewer-caption"),
    mediaViewerStage: document.getElementById("media-viewer-stage"),
    captureModal: document.getElementById("capture-modal"),
    captureCard: document.querySelector("#capture-modal .capture-card"),
    captureStage: document.getElementById("capture-stage"),
    captureLive: document.getElementById("capture-live"),
    capturePhotoPreview: document.getElementById("capture-photo-preview"),
    captureVideoPreview: document.getElementById("capture-video-preview"),
    captureEmpty: document.getElementById("capture-empty"),
    captureFilterOverlay: document.getElementById("capture-filter-overlay"),
    captureOverlay: document.querySelector("#capture-modal .capture-overlay"),
    captureFilterRail: document.getElementById("capture-filter-rail"),
    captureBottomBar: document.querySelector("#capture-modal .capture-bottom-bar"),
    captureBottomControls: document.querySelector("#capture-modal .capture-bottom-controls"),
    captureModeOverlay: document.querySelector("#capture-modal .capture-mode-overlay"),
    captureShutterRow: document.querySelector("#capture-modal .capture-shutter-row"),
    captureCloseBtn: document.getElementById("capture-close-btn"),
    captureDemoPill: document.getElementById("capture-demo-pill"),
    captureSwitchBtn: document.getElementById("capture-switch-btn"),
    captureRightRail: document.querySelector("#capture-modal .capture-right-rail"),
    captureTextBtn: document.getElementById("capture-text-btn"),
    captureEmojiBtn: document.getElementById("capture-emoji-btn"),
    captureEffectsBtn: document.getElementById("capture-effects-btn"),
    capturePhotoBtn: document.getElementById("capture-photo-btn"),
    captureVideoBtn: document.getElementById("capture-video-btn"),
    captureRecordBtn: document.getElementById("capture-record-btn"),
    captureUseBtn: document.getElementById("capture-use-btn"),
    captureShareSheet: document.getElementById("capture-share-sheet"),
    captureShareBackdrop: document.getElementById("capture-share-backdrop"),
    captureShareClose: document.getElementById("capture-share-close"),
    captureShareList: document.getElementById("capture-share-list"),
    captureStatus: document.getElementById("capture-status"),
    callModalRoot: document.getElementById("call-modal-root"),
    wavemindFab: document.getElementById("wavemind-fab"),
    wavemindPanel: document.getElementById("wavemind-panel"),
    wavemindClose: document.getElementById("wavemind-close"),
    wavemindMessages: document.getElementById("wavemind-messages"),
    wavemindForm: document.getElementById("wavemind-form"),
    wavemindInput: document.getElementById("wavemind-input"),
    wavemindSend: document.getElementById("wavemind-send"),
    toastStack: document.getElementById("toast-stack"),
};

const CAMERA_FILTERS = [
    { key: "cat", label: "🐱" },
    { key: "cold", label: "🥶" },
    { key: "love", label: "😍" },
    { key: "cool", label: "😎" },
    { key: "stars", label: "🤩" },
];
const DEFAULT_CAMERA_FILTER = "cool";
const CAPTURE_FILTER_OVERLAYS = {
    cat: "filter-cat-ears",
    cold: "filter-cold-glow",
    love: "filter-love-glow",
    cool: "",
    stars: "filter-stars-glow",
};
const CAMERA_FILTER_OPTIONS = [
    { key: "cat", label: "\u{1F431}" },
    { key: "cold", label: "\u{1F976}" },
    { key: "love", label: "\u{1F60D}" },
    { key: "cool", label: "\u{1F60E}" },
    { key: "stars", label: "\u{1F929}" },
];

function prepareNativeFileInputs() {
    [
        refs.fileInput,
        refs.profilePhotoInput,
        refs.profilePhotoCameraInput,
        refs.statusFileInput,
        document.getElementById("camera-input"),
    ].forEach((input) => {
        if (!input) return;
        input.hidden = false;
        input.removeAttribute("hidden");
        input.classList.add("native-file-input");
        input.setAttribute("aria-hidden", "true");
        input.setAttribute("tabindex", "-1");
    });
    refs.fileInput?.setAttribute("accept", DEFAULT_CHAT_ATTACHMENT_ACCEPT);
    refs.profilePhotoInput?.setAttribute("accept", LOCAL_STORAGE_FILE_ACCEPT);
    refs.profilePhotoInput?.removeAttribute("capture");
    refs.statusFileInput?.setAttribute("accept", `${PHOTO_ATTACHMENT_ACCEPT},${VIDEO_ATTACHMENT_ACCEPT}`);
}

function prepareAttachmentSheetActions() {
    [
        { input: refs.chatPhotoInput, action: "photo", accept: PHOTO_ATTACHMENT_ACCEPT, helper: "Choose photo from file manager" },
        { input: refs.chatVideoInput, action: "video", accept: VIDEO_ATTACHMENT_ACCEPT, helper: "Choose video from file manager" },
        { input: refs.chatDocumentInput, action: "document", accept: DOCUMENT_ATTACHMENT_ACCEPT, helper: "Choose a document from local storage" },
    ].forEach((item) => {
        const row = item.input?.closest(".attachment-sheet-action");
        if (!row) return;
        row.dataset.attachmentAction = item.action;
        row.setAttribute("role", "button");
        row.setAttribute("tabindex", "0");
        item.input.setAttribute("accept", item.action === "document" ? item.accept : LOCAL_STORAGE_FILE_ACCEPT);
        item.input.removeAttribute("capture");
        item.input.setAttribute("aria-hidden", "true");
        item.input.setAttribute("tabindex", "-1");
        const helper = row.querySelector(".attachment-sheet-copy span");
        if (helper && item.helper) helper.textContent = item.helper;
    });
}

function safeJsonParse(value, fallback) {
    try {
        return JSON.parse(value);
    } catch {
        return fallback;
    }
}

function escapeHtml(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function initialsFor(name) {
    const parts = String(name || "").trim().split(/\s+/).filter(Boolean);
    return parts.length ? parts.slice(0, 2).map((part) => part[0].toUpperCase()).join("") : "?";
}

function parseServerDate(value) {
    if (!value) return null;
    const raw = String(value);
    const hasExplicitZone = /(?:z|[+-]\d{2}:?\d{2})$/i.test(raw);
    const normalized = raw.includes("T") && !hasExplicitZone ? `${raw}Z` : raw;
    const date = new Date(normalized);
    return Number.isNaN(date.getTime()) ? null : date;
}

function timeZoneForUser(user = state.me) {
    const candidate = user?.timeZone || COUNTRY_TIME_ZONES[user?.countryCode || ""] || "";
    try {
        if (candidate) {
            new Intl.DateTimeFormat([], { timeZone: candidate }).format(new Date());
            return candidate;
        }
    } catch {
        // Fall back to the device time zone if the stored country time zone is unavailable.
    }
    return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
}

function datePartsInTimeZone(date, timeZone = timeZoneForUser()) {
    const parts = new Intl.DateTimeFormat("en-CA", {
        timeZone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).formatToParts(date);
    return Object.fromEntries(parts.map((part) => [part.type, part.value]));
}

function isSameDayInTimeZone(left, right, timeZone = timeZoneForUser()) {
    const leftParts = datePartsInTimeZone(left, timeZone);
    const rightParts = datePartsInTimeZone(right, timeZone);
    return leftParts.year === rightParts.year && leftParts.month === rightParts.month && leftParts.day === rightParts.day;
}

function relativeTime(value, user = state.me) {
    const date = parseServerDate(value);
    if (!date) return "";
    const diff = Date.now() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    if (minutes < 1) return "now";
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h`;
    const days = Math.floor(hours / 24);
    if (days === 1) return "yesterday";
    if (days < 7) return `${days}d`;
    return date.toLocaleDateString([], { month: "short", day: "numeric", timeZone: timeZoneForUser(user) });
}

function formatMessageTime(value, user = state.me) {
    const date = parseServerDate(value);
    if (!date) return "";
    return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit", timeZone: timeZoneForUser(user) });
}

function formatAbsoluteDateTime(value, user = state.me) {
    const date = parseServerDate(value);
    if (!date) return "";
    return date.toLocaleString([], {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        timeZone: timeZoneForUser(user),
    });
}

function formatLastActiveTime(value, user = state.me) {
    const date = parseServerDate(value);
    if (!date) return "";
    const timeZone = timeZoneForUser(user);
    const time = date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit", timeZone });
    if (isSameDayInTimeZone(date, new Date(), timeZone)) return `Today, ${time}`;
    return date.toLocaleDateString([], { month: "short", day: "numeric", hour: "numeric", minute: "2-digit", timeZone });
}

function formatPhone(phone) {
    const value = String(phone || "").trim();
    if (value.length <= 5) return value;
    return `${value.slice(0, 3)}****${value.slice(-2)}`;
}

function primaryContactIdentifier(user) {
    return user?.phoneNumber || "";
}

function displayContactIdentifier(user) {
    return user?.phoneNumber ? formatPhone(user.phoneNumber) : "Phone number not set";
}

function contactSearchLabel() {
    return "phone number";
}

function encodeReplyMetadata(metadata) {
    try {
        return encodeURIComponent(JSON.stringify(metadata || {}));
    } catch {
        return "";
    }
}

function decodeReplyMetadata(value) {
    try {
        return JSON.parse(decodeURIComponent(String(value || "")));
    } catch {
        return null;
    }
}

function extractReplyData(text) {
    const rawText = String(text || "");
    const match = rawText.match(REPLY_MARKER_RE);
    if (!match) {
        return { text: rawText, reply: null };
    }
    const reply = decodeReplyMetadata(match[1]);
    return {
        text: rawText.slice(match[0].length).trimStart(),
        reply: reply && typeof reply === "object" ? reply : null,
    };
}

function messageBodyText(message) {
    if (!message) return "";
    if (message.kind === "text") {
        return extractReplyData(message.text).text;
    }
    return String(message.caption || "");
}

function messagePreviewText(message, fallback = "Message") {
    if (!message) return fallback;
    if (message.kind === "media") {
        if ((message.mimeType || "").startsWith("video/")) return message.caption || message.fileName || "Video";
        if ((message.mimeType || "").startsWith("image/")) return message.caption || message.fileName || "Photo";
        return message.fileName || "Attachment";
    }
    return messageBodyText(message) || fallback;
}

function replyAuthorLabel(message) {
    if (!message) return "Reply";
    if (message.fromSelf) return "You";
    return counterpartForChat(currentChat())?.displayName || "Contact";
}

function cacheBustUrl(url, version = Date.now()) {
    if (!url) return "";
    const separator = String(url).includes("?") ? "&" : "?";
    return `${url}${separator}v=${encodeURIComponent(version)}`;
}

function normalizeUserForUi(user) {
    if (!user) return user;
    return {
        ...user,
        avatarUrl: user.avatarUrl ? cacheBustUrl(user.avatarUrl, user.avatarUpdatedAt || user.updatedAt || Date.now()) : "",
    };
}

function avatarName(user) {
    return user?.displayName || primaryContactIdentifier(user) || "?";
}

function isSelfUser(user) {
    if (!user || !state.me) return false;
    if (user === state.me) return true;
    if (user.id && state.me.id) return user.id === state.me.id;
    if (user.phoneNumber && state.me.phoneNumber) return user.phoneNumber === state.me.phoneNumber;
    return false;
}

function resolvedAvatarUrl(user) {
    if (user?.avatarUrl) return user.avatarUrl;
    return isSelfUser(user) ? (state.me?.avatarUrl || "") : "";
}

function listAvatarUrl(user) {
    if (user?.avatarUrl) return user.avatarUrl;
    if (user?.id) return `/api/users/${encodeURIComponent(user.id)}/avatar`;
    return "";
}

function avatarHasImage(user) {
    return Boolean(resolvedAvatarUrl(user));
}

function avatarStyleAttribute(user) {
    if (!user) return "";
    const styles = [];
    if (user.avatarColor) {
        styles.push(`--avatar-color:${escapeHtml(user.avatarColor)}`);
    }
    const avatarUrl = resolvedAvatarUrl(user);
    if (avatarUrl) {
        const safeUrl = escapeHtml(avatarUrl);
        styles.push(`--avatar-image:url('${safeUrl}')`);
        styles.push(`background-image:url('${safeUrl}')`);
    }
    return styles.length ? ` style="${styles.join(";")}"` : "";
}

function applyAvatarElement(element, user) {
    if (!element) return;
    const avatarUrl = resolvedAvatarUrl(user);
    element.classList.toggle("has-image", Boolean(avatarUrl));
    if (user?.avatarColor) element.style.setProperty("--avatar-color", user.avatarColor);
    else element.style.removeProperty("--avatar-color");
    if (avatarUrl) {
        element.style.setProperty("--avatar-image", `url('${avatarUrl}')`);
        element.style.backgroundImage = `url('${avatarUrl}')`;
    } else {
        element.style.removeProperty("--avatar-image");
        element.style.backgroundImage = "";
    }
    element.textContent = avatarUrl ? "" : initialsFor(avatarName(user));
}

function renderSelfProfileButton() {
    if (!refs.selfProfileBtn) return;
    applyAvatarElement(refs.selfProfileAvatar, state.me);
    refs.selfProfileBtn.setAttribute("title", avatarName(state.me));
    refs.selfProfileBtn.setAttribute("aria-label", `Open profile for ${avatarName(state.me)}`);
}

function mergeUserProfile(user) {
    if (!user?.id) return;
    const normalized = normalizeUserForUi(user);
    if (state.me?.id === normalized.id) {
        state.me = { ...state.me, ...normalized };
    }
    state.chats.forEach((chat) => {
        if (chat.counterpart?.id === normalized.id) {
            chat.counterpart = { ...chat.counterpart, ...normalized };
        }
    });
    state.statusPosts = state.statusPosts.map((post) => (
        post.user?.id === normalized.id ? { ...post, user: { ...post.user, ...normalized } } : post
    ));
    state.callHistory = state.callHistory.map((call) => (
        call.counterpart?.id === normalized.id ? { ...call, counterpart: { ...call.counterpart, ...normalized } } : call
    ));
    renderSelfProfileButton();
    renderConversationHeader();
    renderSidebarScreen();
}

function upsertStatusPost(statusPost) {
    if (!statusPost?.id) return;
    const existingIndex = state.statusPosts.findIndex((item) => Number(item.id) === Number(statusPost.id));
    if (existingIndex >= 0) {
        state.statusPosts[existingIndex] = { ...state.statusPosts[existingIndex], ...statusPost };
    } else {
        state.statusPosts.unshift(statusPost);
    }
    state.statusPosts.sort((left, right) => (
        (parseServerDate(right.createdAt)?.getTime() || 0) - (parseServerDate(left.createdAt)?.getTime() || 0)
    ));
}

function normalizePhoneSearch(value) {
    const cleaned = String(value || "").replace(/[^\d+]/g, "");
    if (cleaned.startsWith("+")) return `+${cleaned.slice(1).replace(/\+/g, "")}`;
    return cleaned.replace(/\+/g, "");
}

function phoneDigits(value) {
    return String(value || "").replace(/\D/g, "");
}

function phoneSearchVariants(value) {
    const normalized = normalizePhoneSearch(value);
    const digits = phoneDigits(normalized);
    const variants = [];
    const add = (candidate) => {
        if (candidate && !variants.includes(candidate)) variants.push(candidate);
    };
    add(normalized);
    add(digits);
    add(digits ? `+${digits}` : "");
    if (digits.length === 10) {
        add(`91${digits}`);
        add(`+91${digits}`);
        add(`1${digits}`);
        add(`+1${digits}`);
    } else if (digits.length === 12 && digits.startsWith("91")) {
        add(digits.slice(2));
        add(`+${digits.slice(2)}`);
    } else if (digits.length === 11 && digits.startsWith("1")) {
        add(digits.slice(1));
        add(`+${digits.slice(1)}`);
    }
    return variants;
}

function canonicalPhoneKey(value) {
    const digits = phoneDigits(value);
    if (digits.length === 12 && digits.startsWith("91")) return digits.slice(2);
    if (digits.length === 11 && digits.startsWith("1")) return digits.slice(1);
    return digits;
}

function chatPhoneKey(chat) {
    return canonicalPhoneKey(counterpartForChat(chat)?.phoneNumber);
}

function chatMatchesPhone(chat, phoneNumber) {
    const chatVariants = phoneSearchVariants(counterpartForChat(chat)?.phoneNumber);
    const requestedVariants = phoneSearchVariants(phoneNumber);
    return chatVariants.some((variant) => requestedVariants.includes(variant));
}

function findExistingChatByPhone(phoneNumber) {
    return state.chats.find((chat) => chatMatchesPhone(chat, phoneNumber)) || null;
}

function chatSortTime(chat) {
    return parseServerDate(chat?.lastMessage?.createdAt || chat?.updatedAt || "")?.getTime() || 0;
}

function dedupeChatsByPhone(chats) {
    const byKey = new Map();
    const withoutPhone = [];
    (Array.isArray(chats) ? chats : []).forEach((chat) => {
        if (!chat?.id || isWaveMindChatId(chat.id)) return;
        const key = chatPhoneKey(chat);
        if (!key) {
            withoutPhone.push(chat);
            return;
        }
        const existing = byKey.get(key);
        if (!existing || chatSortTime(chat) >= chatSortTime(existing)) {
            byKey.set(key, chat);
        }
    });
    return [...byKey.values(), ...withoutPhone];
}

function looksLikePhoneSearch(value) {
    const digits = String(value || "").replace(/\D/g, "");
    return digits.length >= 6;
}

function contactSearchDescriptor(value) {
    const phone = normalizePhoneSearch(value);
    if (looksLikePhoneSearch(phone)) {
        return { type: "phone", value: phone };
    }
    return null;
}

function contactSearchKey(value) {
    const descriptor = contactSearchDescriptor(value);
    return descriptor ? `${descriptor.type}:${descriptor.value}` : "";
}

function getCsrfToken() {
    return state.csrfToken || document.querySelector('meta[name="csrf-token"]')?.getAttribute("content") || "";
}

async function apiFetch(url, options = {}) {
    const headers = new Headers(options.headers || {});
    if (!(options.body instanceof FormData) && !headers.has("Content-Type")) {
        headers.set("Content-Type", "application/json");
    }
    const csrfToken = getCsrfToken();
    if (csrfToken && !headers.has("X-CSRFToken")) {
        headers.set("X-CSRFToken", csrfToken);
    }
    let response;
    try {
        response = await fetch(url, {
            credentials: "same-origin",
            ...options,
            headers,
        });
    } catch (_error) {
        throw new Error("WaveChat server is not reachable. Restart the app server and open WaveChat from the server URL.");
    }
    const text = await response.text();
    const data = text ? safeJsonParse(text, null) : null;
    if (!response.ok) {
        throw new Error(data?.error || data?.message || `Request failed (${response.status})`);
    }
    return data;
}

function showToast(message, tone = "default") {
    const toast = document.createElement("div");
    toast.className = `wavechat-toast tone-${tone}`;
    toast.textContent = message;
    refs.toastStack.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add("visible"));
    setTimeout(() => {
        toast.classList.remove("visible");
        setTimeout(() => toast.remove(), 220);
    }, 2800);
}

function waveMindUser() {
    return {
        id: WAVEMIND_CHAT_ID,
        displayName: "WaveMind",
        phoneNumber: "",
        avatarUrl: WAVEMIND_AVATAR_URL,
        avatarColor: "#f51d2a",
        isOnline: true,
        lastSeenAt: new Date().toISOString(),
    };
}

function waveMindLastMessage() {
    const latest = state.wavemindMessages[state.wavemindMessages.length - 1];
    if (!latest) return null;
    return {
        id: `wm_last_${state.wavemindMessages.length}`,
        chatId: WAVEMIND_CHAT_ID,
        senderId: latest.role === "user" ? state.me?.id : WAVEMIND_CHAT_ID,
        recipientId: latest.role === "user" ? WAVEMIND_CHAT_ID : state.me?.id,
        clientMessageId: `wm_last_${state.wavemindMessages.length}`,
        kind: "text",
        text: latest.content,
        createdAt: latest.createdAt || new Date().toISOString(),
        fromSelf: latest.role === "user",
        status: "read",
    };
}

function waveMindChat() {
    const latest = waveMindLastMessage();
    return {
        id: WAVEMIND_CHAT_ID,
        isWaveMind: true,
        isGroup: false,
        title: "WaveMind",
        updatedAt: latest?.createdAt || new Date().toISOString(),
        counterpart: waveMindUser(),
        lastMessage: latest,
        unreadCount: 0,
        isMuted: false,
    };
}

function isWaveMindChatId(chatId) {
    return String(chatId) === WAVEMIND_CHAT_ID;
}

function normalizeChatIdValue(value) {
    return isWaveMindChatId(value) ? WAVEMIND_CHAT_ID : Number(value);
}

function waveMindConversationMessages() {
    return state.wavemindMessages.map((message, index) => ({
        id: `wm_${index}`,
        chatId: WAVEMIND_CHAT_ID,
        senderId: message.role === "user" ? state.me?.id : WAVEMIND_CHAT_ID,
        recipientId: message.role === "user" ? WAVEMIND_CHAT_ID : state.me?.id,
        clientMessageId: `wm_${index}`,
        kind: "text",
        text: message.content,
        createdAt: message.createdAt || new Date().toISOString(),
        fromSelf: message.role === "user",
        status: "read",
    }));
}

function persistWaveMindMessages() {
    try {
        localStorage.setItem(WAVEMIND_HISTORY_VERSION_KEY, WAVEMIND_HISTORY_VERSION);
        const messages = sanitizeWaveMindMessages(state.wavemindMessages).slice(-40);
        localStorage.setItem(WAVEMIND_HISTORY_KEY, JSON.stringify(messages));
    } catch {
        // Local storage is optional; the chat still works without it.
    }
}

function sanitizeWaveMindMessages(messages) {
    return (Array.isArray(messages) ? messages : [])
        .filter((message) => ["user", "assistant"].includes(message?.role) && message?.content)
        .filter((message) => !WAVEMIND_OLD_LOCAL_REPLY_RE.test(String(message.content)))
        .map((message) => ({
            role: message.role,
            content: String(message.content),
            createdAt: message.createdAt || new Date().toISOString(),
        }));
}

function sanitizeWaveMindReply(reply) {
    const text = String(reply || "").trim();
    return WAVEMIND_OLD_LOCAL_REPLY_RE.test(text) ? WAVEMIND_SETUP_MESSAGE : text;
}

function safeHttpUrl(value) {
    try {
        const parsed = new URL(String(value || ""));
        return ["http:", "https:"].includes(parsed.protocol) ? parsed.href : "";
    } catch {
        return "";
    }
}

function splitWaveMindSources(content) {
    const text = String(content || "").trim();
    const match = text.match(/\n\s*Sources:\s*\n([\s\S]*)$/i) || text.match(/^Sources:\s*\n([\s\S]*)$/i);
    if (!match) return { answer: text, sources: [] };
    const answer = text.slice(0, match.index).trim();
    const block = String(match[1] || "");
    const sources = [];
    block.split(/\n+/).forEach((line) => {
        const urlMatch = String(line || "").match(/https?:\/\/[^\s)>\]]+/i);
        if (!urlMatch) return;
        const url = safeHttpUrl(urlMatch[0].replace(/[.,;:]+$/, ""));
        if (!url || sources.some((source) => source.url === url)) return;
        const rawTitle = line
            .slice(0, urlMatch.index)
            .replace(/^\s*\d+[\.)]\s*/, "")
            .replace(/[:\-–—\s]+$/, "")
            .trim();
        sources.push({
            title: rawTitle || `Source ${sources.length + 1}`,
            url,
        });
    });
    return { answer: answer || text.replace(match[0], "").trim(), sources };
}

function renderWaveMindContent(content) {
    const { answer, sources } = splitWaveMindSources(content);
    const answerHtml = escapeHtml(answer || "");
    if (!sources.length) return answerHtml;
    const linksHtml = sources.map((source, index) => `
        <a class="wavemind-source-link" href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer" title="${escapeHtml(source.title)}">
            ${escapeHtml(source.title || `Source ${index + 1}`)}
        </a>
    `).join("");
    return `${answerHtml}<div class="wavemind-sources"><span>Sources</span>${linksHtml}</div>`;
}

function waveMindTextForSpeech(content) {
    const { answer } = splitWaveMindSources(content);
    return String(answer || "")
        .replace(/\[([^\]]+)\]\(https?:\/\/[^\s)]+\)/gi, "$1")
        .replace(/https?:\/\/\S+/gi, "")
        .replace(/\[\d+\]/g, "")
        .replace(/[*_`#>]+/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

function restoreWaveMindMessages() {
    try {
        localStorage.removeItem(WAVEMIND_LEGACY_HISTORY_KEY);
        localStorage.removeItem(WAVEMIND_PREVIOUS_PROVIDER_HISTORY_KEY);
        if (localStorage.getItem(WAVEMIND_HISTORY_VERSION_KEY) !== WAVEMIND_HISTORY_VERSION) {
            localStorage.removeItem(WAVEMIND_HISTORY_KEY);
            localStorage.setItem(WAVEMIND_HISTORY_VERSION_KEY, WAVEMIND_HISTORY_VERSION);
            return;
        }
        const stored = safeJsonParse(localStorage.getItem(WAVEMIND_HISTORY_KEY) || "[]", []);
        const messages = sanitizeWaveMindMessages(stored);
        if (messages.length) state.wavemindMessages = messages;
        if (messages.length !== (Array.isArray(stored) ? stored.length : 0)) persistWaveMindMessages();
    } catch {
        // Ignore unavailable or malformed local chat history.
    }
}

function renderWaveMindMessages() {
    if (!refs.wavemindMessages) return;
    refs.wavemindMessages.innerHTML = state.wavemindMessages.map((message) => `
        <div class="wavemind-message ${escapeHtml(message.role)}">${message.role === "assistant" ? renderWaveMindContent(message.content) : escapeHtml(message.content)}</div>
    `).join("");
    refs.wavemindMessages.scrollTop = refs.wavemindMessages.scrollHeight;
}

function openWaveMind() {
    refs.wavemindPanel?.classList.remove("hidden");
    refs.wavemindPanel?.setAttribute("aria-hidden", "false");
    renderWaveMindMessages();
    refs.wavemindInput?.focus();
}

function closeWaveMind() {
    refs.wavemindPanel?.classList.add("hidden");
    refs.wavemindPanel?.setAttribute("aria-hidden", "true");
}

function syncWaveMindConversationUi() {
    const isWaveMindActive = state.screen === "conversation" && isWaveMindChatId(state.activeChatId);
    app.classList.toggle("wavemind-chat-active", isWaveMindActive);
    if (!isWaveMindActive) return;
    refs.chatMenu?.classList.add("hidden");
    refs.chatInfoBtn?.setAttribute("aria-expanded", "false");
    closeAttachmentSheet();
}

function openWaveMindConversation() {
    closeWaveMind();
    openConversation(WAVEMIND_CHAT_ID);
}

function waveMindSpeechRecognition() {
    return window.SpeechRecognition || window.webkitSpeechRecognition || null;
}

function supportsWaveMindVoiceInput() {
    return Boolean(waveMindSpeechRecognition());
}

function waveMindCallStatus() {
    if (state.wavemindCallBusy) return "Thinking...";
    if (state.wavemindCallListening) return "Listening...";
    if (state.wavemindCallSpeaking) return "Speaking...";
    if (state.wavemindCallNotice) return state.wavemindCallNotice;
    return state.wavemindCallActive ? "Connected" : "Starting call...";
}

function waveMindCallDurationLabel() {
    if (!state.wavemindCallStartedAt) return "00:00:00";
    return formatCallDuration(Math.floor((Date.now() - state.wavemindCallStartedAt) / 1000));
}

function startWaveMindCallDurationTimer() {
    if (!state.wavemindCallStartedAt) state.wavemindCallStartedAt = Date.now();
    if (state.wavemindCallDurationTimer) return;
    state.wavemindCallDurationTimer = window.setInterval(() => {
        if (state.wavemindCallActive) renderWaveMindCall();
    }, 1000);
}

function stopWaveMindCallDurationTimer() {
    if (state.wavemindCallDurationTimer) {
        clearInterval(state.wavemindCallDurationTimer);
        state.wavemindCallDurationTimer = null;
    }
    state.wavemindCallStartedAt = null;
}

function setWaveMindCallBusy(isBusy) {
    state.wavemindCallBusy = Boolean(isBusy);
    if (state.wavemindCallActive) renderWaveMindCall();
}

function renderWaveMindCall() {
    if (!state.wavemindCallActive || !refs.callModalRoot) return;
    const status = waveMindCallStatus();
    const duration = waveMindCallDurationLabel();
    const canUseVoice = supportsWaveMindVoiceInput();
    refs.callModalRoot.innerHTML = `
        <div class="call-modal-overlay wavemind-call-overlay">
            <div class="call-modal-card active-call-card voice-call-card wavemind-active-call-card">
                <header class="call-modal-header">
                    <button type="button" class="call-modal-icon" data-wavemind-call-close aria-label="Back from WaveMind call">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.8 5.6 8.4 12l6.4 6.4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4"/></svg>
                    </button>
                    <h2>AI Call</h2>
                    <div class="call-modal-icon ghost"></div>
                </header>
                <div class="active-call-stage voice-call-stage wavemind-call-stage" aria-live="polite">
                    <div class="active-call-meta wavemind-call-meta">
                        <div class="contact-profile-avatar wavemind-call-avatar${state.wavemindCallListening ? " listening" : ""}${state.wavemindCallSpeaking ? " speaking" : ""}">
                            <img src="${escapeHtml(WAVEMIND_AVATAR_URL)}" alt="" aria-hidden="true">
                        </div>
                        <strong class="contact-profile-name">WaveMind</strong>
                        <span class="contact-profile-phone" id="wavemind-call-status-label">${escapeHtml(status)}</span>
                        <span class="wavemind-call-duration">${escapeHtml(duration)}</span>
                    </div>
                    <div class="active-call-controls wavemind-call-controls">
                        <button type="button" class="call-action-btn secondary wavemind-call-control${state.wavemindCallListening ? " active" : ""}" data-wavemind-call-mic aria-pressed="${state.wavemindCallListening ? "true" : "false"}" aria-label="Talk to WaveMind" ${state.wavemindCallBusy || !canUseVoice ? "disabled" : ""}>
                            <span class="call-action-icon">
                                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5a3 3 0 0 1 3 3V12a3 3 0 0 1-6 0V6.5a3 3 0 0 1 3-3zm-5.5 8.1V12a5.5 5.5 0 0 0 11 0v-.4M12 17.5V21M8.5 21h7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
                            </span>
                            <span class="call-action-label">${state.wavemindCallListening ? "Listening" : "Talk"}</span>
                        </button>
                        <button type="button" class="call-cut-btn call-action-btn wavemind-call-end" data-wavemind-call-end aria-label="End WaveMind call">
                            <span class="call-action-icon">
                                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.6 15.4a15.3 15.3 0 0 1 14.8 0l1.2.7-1.7 3-1.2-.7a11.8 11.8 0 0 0-11.4 0l-1.2.7-1.7-3z" fill="currentColor"/></svg>
                            </span>
                            <span class="call-action-label">End</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    refs.callModalRoot.classList.remove("hidden");
    refs.callModalRoot.setAttribute("aria-hidden", "false");
    refs.callModalRoot.querySelector("[data-wavemind-call-close]")?.addEventListener("click", endWaveMindCall);
    refs.callModalRoot.querySelector("[data-wavemind-call-end]")?.addEventListener("click", endWaveMindCall);
    refs.callModalRoot.querySelector("[data-wavemind-call-mic]")?.addEventListener("click", toggleWaveMindListening);
}

function stopWaveMindListening() {
    const recognition = state.wavemindRecognition;
    state.wavemindRecognition = null;
    state.wavemindCallListening = false;
    if (!recognition) return;
    recognition.onend = null;
    recognition.onerror = null;
    recognition.onresult = null;
    try {
        recognition.stop();
    } catch {
        try {
            recognition.abort();
        } catch {
            // Ignore browsers that have already closed the recognizer.
        }
    }
}

function stopWaveMindSpeech() {
    state.wavemindCallSpeaking = false;
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
}

function speakWaveMindReply(text) {
    if (!state.wavemindCallActive || !text) return;
    if (!("speechSynthesis" in window)) {
        state.wavemindCallSpeaking = false;
        state.wavemindCallNotice = "Voice reply is not available here";
        renderWaveMindCall();
        return;
    }
    stopWaveMindSpeech();
    const speechText = waveMindTextForSpeech(text);
    if (!speechText) return;
    const utterance = new SpeechSynthesisUtterance(speechText.slice(0, 3200));
    const speechLang = document.documentElement.lang || navigator.language || "en-IN";
    const voices = window.speechSynthesis.getVoices?.() || [];
    const voice = voices.find((item) => item.lang === speechLang)
        || voices.find((item) => item.lang?.toLowerCase().startsWith(speechLang.slice(0, 2).toLowerCase()));
    utterance.lang = speechLang;
    if (voice) utterance.voice = voice;
    utterance.rate = 0.92;
    utterance.pitch = 1;
    utterance.onstart = () => {
        state.wavemindCallSpeaking = true;
        state.wavemindCallNotice = "";
        renderWaveMindCall();
    };
    utterance.onend = () => {
        state.wavemindCallSpeaking = false;
        state.wavemindCallNotice = supportsWaveMindVoiceInput() ? "Tap Talk and ask another question" : "Voice input is not available here";
        renderWaveMindCall();
    };
    utterance.onerror = () => {
        state.wavemindCallSpeaking = false;
        state.wavemindCallNotice = "Answer is ready";
        renderWaveMindCall();
    };
    window.speechSynthesis.speak(utterance);
}

function beginWaveMindListening() {
    if (!state.wavemindCallActive || state.wavemindCallBusy) return;
    stopWaveMindSpeech();
    const Recognition = waveMindSpeechRecognition();
    if (!Recognition) {
        state.wavemindCallListening = false;
        state.wavemindCallNotice = "Voice input is not available here";
        renderWaveMindCall();
        return;
    }

    stopWaveMindListening();
    const recognition = new Recognition();
    state.wavemindRecognition = recognition;
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = document.documentElement.lang || navigator.language || "en-US";
    recognition.onstart = () => {
        state.wavemindCallListening = true;
        state.wavemindCallNotice = "";
        renderWaveMindCall();
    };
    recognition.onresult = (event) => {
        const transcript = Array.from(event.results || [])
            .map((result) => result?.[0]?.transcript || "")
            .join(" ")
            .trim();
        state.wavemindCallListening = false;
        if (transcript) submitWaveMindCallPrompt(transcript);
    };
    recognition.onerror = (event) => {
        state.wavemindCallListening = false;
        state.wavemindCallNotice = event.error === "not-allowed"
            ? "Allow microphone access to use AI call"
            : "I did not catch that. Tap Talk and try again.";
        renderWaveMindCall();
    };
    recognition.onend = () => {
        state.wavemindRecognition = null;
        if (state.wavemindCallListening) {
            state.wavemindCallListening = false;
            if (!state.wavemindCallBusy) renderWaveMindCall();
        }
    };
    try {
        recognition.start();
    } catch {
        state.wavemindRecognition = null;
        state.wavemindCallListening = false;
        state.wavemindCallNotice = "Tap Talk and ask again";
        renderWaveMindCall();
    }
}

function toggleWaveMindListening() {
    if (state.wavemindCallListening) {
        stopWaveMindListening();
        state.wavemindCallNotice = "Tap Talk and speak";
        renderWaveMindCall();
        return;
    }
    beginWaveMindListening();
}

async function submitWaveMindCallPrompt(text) {
    const prompt = String(text || "").trim();
    if (!prompt || state.wavemindCallBusy) return "";
    stopWaveMindListening();
    state.wavemindCallNotice = "Thinking...";
    renderWaveMindCall();
    state.wavemindCallMessages.push({ role: "user", content: prompt, createdAt: new Date().toISOString() });
    setWaveMindCallBusy(true);
    let assistantReply = "";
    try {
        const payload = {
            messages: state.wavemindCallMessages.slice(-16).map((message) => ({
                role: message.role,
                content: message.content,
            })),
        };
        const response = await apiFetch("/api/wavemind/chat", {
            method: "POST",
            body: JSON.stringify(payload),
        });
        if (!state.wavemindCallActive) return "";
        assistantReply = waveMindTextForSpeech(sanitizeWaveMindReply(response.reply || "I could not answer that right now."));
        if (!assistantReply) assistantReply = "I found source links, but no spoken answer was returned.";
        state.wavemindCallMessages.push({
            role: "assistant",
            content: assistantReply,
            createdAt: new Date().toISOString(),
        });
    } catch (error) {
        if (!state.wavemindCallActive) return "";
        assistantReply = sanitizeWaveMindReply(error.message || "WaveMind is temporarily unavailable.");
        state.wavemindCallMessages.push({
            role: "assistant",
            content: assistantReply,
            createdAt: new Date().toISOString(),
        });
    } finally {
        setWaveMindCallBusy(false);
    }
    if (assistantReply && state.wavemindCallActive) speakWaveMindReply(assistantReply);
    return assistantReply;
}

function startWaveMindCall() {
    if (state.currentCall || state.incomingCall) {
        showToast("Finish the current call first.", "error");
        return;
    }
    state.wavemindCallActive = true;
    state.wavemindCallBusy = false;
    state.wavemindCallListening = false;
    state.wavemindCallSpeaking = false;
    state.wavemindCallMessages = [];
    state.wavemindCallNotice = supportsWaveMindVoiceInput()
        ? "Tap Talk and speak"
        : "Voice input is not available here";
    startWaveMindCallDurationTimer();
    renderWaveMindCall();
    beginWaveMindListening();
}

function endWaveMindCall() {
    state.wavemindCallActive = false;
    state.wavemindCallBusy = false;
    state.wavemindCallNotice = "";
    state.wavemindCallMessages = [];
    stopWaveMindCallDurationTimer();
    stopWaveMindListening();
    stopWaveMindSpeech();
    refs.callModalRoot?.classList.add("hidden");
    refs.callModalRoot?.setAttribute("aria-hidden", "true");
    if (refs.callModalRoot) refs.callModalRoot.innerHTML = "";
}

function setWaveMindBusy(isBusy) {
    state.wavemindBusy = Boolean(isBusy);
    if (refs.wavemindInput) refs.wavemindInput.disabled = state.wavemindBusy;
    if (refs.wavemindSend) refs.wavemindSend.disabled = state.wavemindBusy;
    if (isWaveMindChatId(state.activeChatId)) renderConversationHeader();
    if (state.wavemindCallActive) renderWaveMindCall();
}

async function sendWaveMindMessage() {
    const text = refs.wavemindInput?.value.trim() || "";
    if (!text || state.wavemindBusy) return;

    refs.wavemindInput.value = "";
    await submitWaveMindPrompt(text);
}

async function submitWaveMindPrompt(text) {
    if (!text || state.wavemindBusy) return;

    state.wavemindMessages.push({ role: "user", content: text, createdAt: new Date().toISOString() });
    persistWaveMindMessages();
    renderWaveMindMessages();
    if (state.wavemindCallActive) renderWaveMindCall();
    if (isWaveMindChatId(state.activeChatId)) {
        renderConversationHeader();
        renderMessages();
        renderChatsList();
    } else if (state.screen === "chats") {
        renderChatsList();
    }
    setWaveMindBusy(true);
    let assistantReply = "";
    try {
        const payload = {
            messages: state.wavemindMessages.slice(-16).map((message) => ({
                role: message.role,
                content: message.content,
            })),
        };
        const response = await apiFetch("/api/wavemind/chat", {
            method: "POST",
            body: JSON.stringify(payload),
        });
        assistantReply = sanitizeWaveMindReply(response.reply || "I could not answer that right now.");
        state.wavemindMessages.push({
            role: "assistant",
            content: assistantReply,
            createdAt: new Date().toISOString(),
        });
    } catch (error) {
        assistantReply = sanitizeWaveMindReply(error.message || "WaveMind is temporarily unavailable.");
        state.wavemindMessages.push({
            role: "assistant",
            content: assistantReply,
            createdAt: new Date().toISOString(),
        });
    } finally {
        persistWaveMindMessages();
        setWaveMindBusy(false);
        renderWaveMindMessages();
        if (state.wavemindCallActive) renderWaveMindCall();
        if (isWaveMindChatId(state.activeChatId)) {
            renderConversationHeader();
            renderMessages();
            renderChatsList();
        } else if (state.screen === "chats") {
            renderChatsList();
        }
        refs.wavemindInput?.focus();
    }
    return assistantReply;
}

function chatById(chatId) {
    if (isWaveMindChatId(chatId)) return waveMindChat();
    return state.chats.find((chat) => chat.id === chatId) || null;
}

function currentChat() {
    return chatById(state.activeChatId);
}

function counterpartForChat(chat) {
    return chat?.counterpart || null;
}

function sortChats() {
    state.chats.sort((left, right) => {
        const leftAt = left.lastMessage?.createdAt || left.updatedAt || "";
        const rightAt = right.lastMessage?.createdAt || right.updatedAt || "";
        return (parseServerDate(rightAt)?.getTime() || 0) - (parseServerDate(leftAt)?.getTime() || 0);
    });
}

function normalizeChatForUi(chat) {
    return {
        ...chat,
        counterpart: chat.counterpart ? normalizeUserForUi(chat.counterpart) : chat.counterpart,
    };
}

function setChats(chats) {
    state.chats = dedupeChatsByPhone(Array.isArray(chats)
        ? chats.map(normalizeChatForUi)
        : []);
    sortChats();
    if (!state.visibleContactChatId || !state.chats.some((chat) => String(chat.id) === String(state.visibleContactChatId))) {
        state.visibleContactChatId = state.chats[0]?.id || null;
    }
}

function upsertChat(chat) {
    if (!chat?.id || isWaveMindChatId(chat.id)) return;
    const normalized = normalizeChatForUi(chat);
    const normalizedPhoneKey = chatPhoneKey(normalized);
    const existingIndex = state.chats.findIndex((item) => (
        String(item.id) === String(normalized.id)
        || (normalizedPhoneKey && chatPhoneKey(item) === normalizedPhoneKey)
    ));
    const replacedChatId = existingIndex >= 0 ? state.chats[existingIndex]?.id : null;
    if (existingIndex >= 0) {
        state.chats[existingIndex] = { ...state.chats[existingIndex], ...normalized };
    } else {
        state.chats.push(normalized);
    }
    state.chats = dedupeChatsByPhone(state.chats);
    sortChats();
    if (replacedChatId && String(replacedChatId) !== String(normalized.id)) {
        if (String(state.activeChatId) === String(replacedChatId)) state.activeChatId = normalized.id;
        if (String(state.visibleContactChatId) === String(replacedChatId)) state.visibleContactChatId = normalized.id;
    }
    state.visibleContactChatId = normalized.id;
    updateNavBadges();
    if (String(state.activeChatId) === String(normalized.id)) renderConversationHeader();
    if (state.screen === "chats") renderChatsList();
}

function setScreen(screen) {
    state.screen = screen;
    app.dataset.sidebarView = screen;
    app.dataset.activeScreen = screen === "conversation" ? "conversation" : "list";
    closeAttachmentSheet();
    closeMediaViewer();
    refs.chatMenu.classList.add("hidden");
    refs.chatInfoBtn.setAttribute("aria-expanded", "false");
    syncWaveMindConversationUi();
    updateBottomNav();
    renderSidebarScreen();
}

function updateBottomNav() {
    refs.mobileBottomNav.querySelectorAll(".mobile-nav-item").forEach((item) => {
        const tab = item.dataset.mobileTab;
        const active = (state.screen === "conversation" ? "chats" : state.screen) === tab;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", active ? "true" : "false");
    });
}

function updateNavBadges() {
    refs.mobileBottomNav?.querySelectorAll(".nav-badge").forEach((badge) => {
        badge.style.display = "none";
        badge.textContent = "";
    });
}

function avatarMarkup(user, extraClass = "", includeDot = false, options = {}) {
    const preferPhotoOnly = Boolean(options.preferPhotoOnly);
    const fallbackIcon = `
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M12 12.6a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 2c-3.2 0-7 1.7-7 4v1.6h14V18.6c0-2.3-3.8-4-7-4z" fill="currentColor"/>
        </svg>
    `;
    if (!user) {
        if (!preferPhotoOnly) return `<div class="avatar ${extraClass}">?</div>`;
        return `
            <div class="chat-avatar-wrap ${extraClass}">
                <div class="avatar avatar-photo-only">${preferPhotoOnly ? fallbackIcon : "?"}</div>
                ${includeDot ? `<span class="chat-avatar-status"></span>` : ""}
            </div>
        `;
    }
    const avatarUrl = resolvedAvatarUrl(user);
    const photoOnlyUrl = preferPhotoOnly ? listAvatarUrl(user) : "";
    const imageClass = avatarUrl ? " has-image" : "";
    const imageStyle = avatarStyleAttribute(user);
    const avatarClass = preferPhotoOnly ? " avatar-photo-only" : "";
    const avatarContent = avatarUrl
        ? ""
        : (preferPhotoOnly ? fallbackIcon : escapeHtml(initialsFor(avatarName(user))));
    if (preferPhotoOnly) {
        const safePhotoUrl = photoOnlyUrl ? escapeHtml(photoOnlyUrl) : "";
        return `
            <div class="chat-avatar-wrap ${extraClass}">
                <div class="avatar avatar-photo-only${photoOnlyUrl ? " avatar-photo-pending" : ""}">
                    ${photoOnlyUrl
                        ? `<img class="chat-list-avatar-image" src="${safePhotoUrl}" alt="${escapeHtml(avatarName(user))}" draggable="false" loading="eager" fetchpriority="high" decoding="async">`
                        : ""}
                    <span class="chat-list-avatar-fallback" aria-hidden="true">${fallbackIcon}</span>
                </div>
                ${includeDot ? `<span class="chat-avatar-status${user.isOnline ? " online" : ""}"></span>` : ""}
            </div>
        `;
    }
    return `
        <div class="chat-avatar-wrap ${extraClass}">
            <div class="avatar${imageClass}${avatarClass}"${imageStyle}>${avatarContent}</div>
            ${includeDot ? `<span class="chat-avatar-status${user.isOnline ? " online" : ""}"></span>` : ""}
        </div>
    `;
}

function bindChatListAvatarImages(root = refs.chatList) {
    root?.querySelectorAll(".chat-list-avatar-image").forEach((imageElement) => {
        if (imageElement.dataset.avatarBound === "true") return;
        const avatarElement = imageElement.closest(".avatar-photo-only");
        if (!avatarElement) return;
        const markLoaded = () => {
            avatarElement.classList.remove("avatar-photo-pending", "avatar-photo-missing");
            avatarElement.classList.add("avatar-photo-loaded");
        };
        const markMissing = () => {
            avatarElement.classList.remove("avatar-photo-pending", "avatar-photo-loaded");
            avatarElement.classList.add("avatar-photo-missing");
        };
        imageElement.dataset.avatarBound = "true";
        imageElement.loading = "eager";
        imageElement.decoding = "async";
        imageElement.setAttribute("fetchpriority", "high");
        imageElement.addEventListener("load", markLoaded, { once: true });
        imageElement.addEventListener("error", markMissing, { once: true });
        if (imageElement.complete) {
            if (imageElement.naturalWidth > 0) markLoaded();
            else markMissing();
        }
    });
}

function ensureFilterChips() {
    refs.sidebarTools.querySelector(".chat-filters")?.remove();
    state.filter = "all";
}

function renderCaptureFilters() {
    const rail = refs.captureFilterRail;
    if (!rail) return;
    if (rail.dataset.ready === "true") {
        applyCaptureFilter(DEFAULT_CAMERA_FILTER);
        return;
    }
    rail.innerHTML = CAMERA_FILTER_OPTIONS.map((filter, index) => `
        <button type="button" class="capture-filter-btn${index === 3 ? " active" : ""}" data-camera-filter="${escapeHtml(filter.key)}" aria-label="${escapeHtml(filter.key)} filter">
            ${escapeHtml(filter.label)}
        </button>
    `).join("");
    rail.dataset.ready = "true";
    rail.addEventListener("click", (event) => {
        const button = event.target.closest("[data-camera-filter]");
        if (!button) return;
        applyCaptureFilter(button.dataset.cameraFilter || DEFAULT_CAMERA_FILTER);
    });
    applyCaptureFilter(DEFAULT_CAMERA_FILTER);
}

function applyCaptureFilter(filterKey = DEFAULT_CAMERA_FILTER) {
    const nextFilter = CAMERA_FILTER_OPTIONS.some((filter) => filter.key === filterKey) ? filterKey : DEFAULT_CAMERA_FILTER;
    refs.captureFilterRail?.querySelectorAll(".capture-filter-btn").forEach((item) => {
        item.classList.toggle("active", item.dataset.cameraFilter === nextFilter);
    });
    if (refs.captureStage) refs.captureStage.dataset.cameraFilter = nextFilter;
    if (refs.captureFilterOverlay) {
        refs.captureFilterOverlay.className = "capture-filter-overlay";
        const overlayClass = CAPTURE_FILTER_OVERLAYS[nextFilter];
        if (overlayClass) refs.captureFilterOverlay.classList.add(overlayClass);
    }
}

function setInlineStyle(element, property, value) {
    if (!element) return;
    element.style.setProperty(property, value, "important");
}

function clearInlineStyle(element, property) {
    if (!element) return;
    element.style.removeProperty(property);
}

function syncCaptureViewportMetrics() {
    const viewport = window.visualViewport;
    const width = Math.max(
        1,
        Math.round(viewport?.width || window.innerWidth || document.documentElement.clientWidth || 0),
    );
    const height = Math.max(
        1,
        Math.round(viewport?.height || window.innerHeight || document.documentElement.clientHeight || 0),
    );
    document.documentElement.style.setProperty("--capture-viewport-width", `${width}px`);
    document.documentElement.style.setProperty("--capture-viewport-height", `${height}px`);
    document.documentElement.style.setProperty("--app-viewport-width", `${width}px`);
    document.documentElement.style.setProperty("--app-viewport-height", `${height}px`);
}

function setCaptureShellVisibility(hidden) {
    [refs.mobileBottomNav, refs.composer].forEach((element) => {
        if (!element) return;
        if (hidden) {
            setInlineStyle(element, "display", "none");
            setInlineStyle(element, "opacity", "0");
            setInlineStyle(element, "visibility", "hidden");
            setInlineStyle(element, "pointer-events", "none");
            return;
        }
        clearInlineStyle(element, "display");
        clearInlineStyle(element, "opacity");
        clearInlineStyle(element, "visibility");
        clearInlineStyle(element, "pointer-events");
    });

    if (hidden) {
        setInlineStyle(app, "overflow", "hidden");
        setInlineStyle(app, "background", "#000000");
        return;
    }
    clearInlineStyle(app, "overflow");
    clearInlineStyle(app, "background");
}

function refreshCaptureViewportLayout() {
    syncCaptureViewportMetrics();
    if (!state.captureModalOpen) return;
    applyCaptureInlineLayout(refs.captureModal?.dataset.captureView || "live");
}

function resetCaptureInlineLayout() {
    [
        refs.captureModal,
        refs.captureCard,
        refs.captureStage,
        refs.captureLive,
        refs.capturePhotoPreview,
        refs.captureVideoPreview,
        refs.captureFilterOverlay,
        refs.captureOverlay,
        refs.captureDemoPill,
        refs.captureRightRail,
        refs.captureFilterRail,
        refs.captureBottomBar,
        refs.captureBottomControls,
        refs.captureModeOverlay,
        refs.captureShutterRow,
        refs.capturePhotoBtn,
        refs.captureVideoBtn,
        refs.captureRecordBtn,
        refs.captureUseBtn,
        refs.captureShareSheet,
        refs.captureStatus,
    ].forEach((element) => element?.removeAttribute("style"));
}

function ensureCaptureControlStructure() {
    if (!refs.captureBottomControls || !refs.captureModeOverlay || !refs.captureRecordBtn) return;

    if (!refs.captureShutterRow || !refs.captureShutterRow.isConnected) {
        refs.captureShutterRow = document.createElement("div");
        refs.captureShutterRow.className = "capture-shutter-row";
    }

    refs.captureShutterRow.replaceChildren(refs.captureRecordBtn);
    refs.captureBottomControls.replaceChildren(refs.captureModeOverlay, refs.captureShutterRow);
}

function ensureCaptureShellStructure() {
    if (!refs.captureCard || !refs.captureStage || !refs.captureOverlay || !refs.captureBottomBar) return;
    const shellChildren = [refs.captureStage, refs.captureOverlay, refs.captureBottomBar];
    if (refs.captureUseBtn) shellChildren.push(refs.captureUseBtn);
    if (refs.captureShareSheet) shellChildren.push(refs.captureShareSheet);
    if (refs.captureStatus) shellChildren.push(refs.captureStatus);
    refs.captureCard.replaceChildren(...shellChildren);
}

function applyCaptureInlineLayout(view) {
    ensureCaptureControlStructure();
    ensureCaptureShellStructure();
    syncCaptureViewportMetrics();
    const captureStageHeight = `calc(${CAPTURE_VIEWPORT_HEIGHT} - 176px)`;
    setInlineStyle(refs.captureModal, "position", "fixed");
    setInlineStyle(refs.captureModal, "inset", "0");
    setInlineStyle(refs.captureModal, "top", "0");
    setInlineStyle(refs.captureModal, "right", "0");
    setInlineStyle(refs.captureModal, "bottom", "0");
    setInlineStyle(refs.captureModal, "left", "0");
    setInlineStyle(refs.captureModal, "z-index", "2147483647");
    setInlineStyle(refs.captureModal, "display", "flex");
    setInlineStyle(refs.captureModal, "align-items", "stretch");
    setInlineStyle(refs.captureModal, "justify-content", "stretch");
    setInlineStyle(refs.captureModal, "width", CAPTURE_VIEWPORT_WIDTH);
    setInlineStyle(refs.captureModal, "height", CAPTURE_VIEWPORT_HEIGHT);
    setInlineStyle(refs.captureModal, "min-width", CAPTURE_VIEWPORT_WIDTH);
    setInlineStyle(refs.captureModal, "max-width", CAPTURE_VIEWPORT_WIDTH);
    setInlineStyle(refs.captureModal, "min-height", CAPTURE_VIEWPORT_HEIGHT);
    setInlineStyle(refs.captureModal, "max-height", CAPTURE_VIEWPORT_HEIGHT);
    setInlineStyle(refs.captureModal, "margin", "0");
    setInlineStyle(refs.captureModal, "padding", "0");
    setInlineStyle(refs.captureModal, "border", "0");
    setInlineStyle(refs.captureModal, "background", "transparent");
    setInlineStyle(refs.captureModal, "overflow", "hidden");
    setInlineStyle(refs.captureModal, "box-sizing", "border-box");
    setInlineStyle(refs.captureCard, "position", "relative");
    setInlineStyle(refs.captureCard, "display", "flex");
    setInlineStyle(refs.captureCard, "flex-direction", "column");
    setInlineStyle(refs.captureCard, "width", CAPTURE_VIEWPORT_WIDTH);
    setInlineStyle(refs.captureCard, "height", CAPTURE_VIEWPORT_HEIGHT);
    setInlineStyle(refs.captureCard, "min-width", CAPTURE_VIEWPORT_WIDTH);
    setInlineStyle(refs.captureCard, "max-width", CAPTURE_VIEWPORT_WIDTH);
    setInlineStyle(refs.captureCard, "min-height", CAPTURE_VIEWPORT_HEIGHT);
    setInlineStyle(refs.captureCard, "max-height", CAPTURE_VIEWPORT_HEIGHT);
    setInlineStyle(refs.captureCard, "margin", "0");
    setInlineStyle(refs.captureCard, "padding", "0");
    setInlineStyle(refs.captureCard, "border", "0");
    setInlineStyle(refs.captureCard, "border-radius", "0");
    setInlineStyle(refs.captureCard, "overflow", "hidden");
    setInlineStyle(refs.captureCard, "background", "#000000");
    setInlineStyle(refs.captureCard, "box-sizing", "border-box");
    setInlineStyle(refs.captureStage, "order", "1");
    setInlineStyle(refs.captureBottomBar, "order", "2");
    setInlineStyle(refs.captureStage, "position", "relative");
    setInlineStyle(refs.captureStage, "display", "block");
    setInlineStyle(refs.captureStage, "flex", "1 1 auto");
    setInlineStyle(refs.captureStage, "width", "100%");
    setInlineStyle(refs.captureStage, "min-height", "0");
    setInlineStyle(refs.captureStage, "margin", "0");
    setInlineStyle(refs.captureStage, "padding", "0");
    setInlineStyle(refs.captureStage, "overflow", "hidden");
    setInlineStyle(refs.captureStage, "background", "#000000");
    setInlineStyle(refs.captureOverlay, "position", "absolute");
    setInlineStyle(refs.captureOverlay, "inset", "0");
    setInlineStyle(refs.captureOverlay, "display", "block");
    setInlineStyle(refs.captureOverlay, "z-index", "4");
    setInlineStyle(refs.captureStatus, "display", "none");
    if (refs.captureShareSheet?.classList.contains("hidden")) {
        setInlineStyle(refs.captureShareSheet, "display", "none");
    }

    const liveLike = view === "live" || view === "empty";
    if (liveLike) {
        setInlineStyle(refs.captureDemoPill, "display", "none");
        setInlineStyle(refs.captureRightRail, "display", "none");
        setInlineStyle(refs.captureFilterRail, "display", "none");
        setInlineStyle(refs.captureFilterOverlay, "display", "none");
        setInlineStyle(refs.captureUseBtn, "display", "none");

        setInlineStyle(refs.captureStage, "position", "relative");
        setInlineStyle(refs.captureStage, "inset", "auto");
        setInlineStyle(refs.captureStage, "bottom", "auto");
        setInlineStyle(refs.captureStage, "flex", "1 1 auto");
        setInlineStyle(refs.captureStage, "height", captureStageHeight);
        setInlineStyle(refs.captureStage, "min-height", captureStageHeight);
        setInlineStyle(refs.captureStage, "max-height", captureStageHeight);
        setInlineStyle(refs.captureLive, "position", "absolute");
        setInlineStyle(refs.captureLive, "inset", "0");
        setInlineStyle(refs.captureLive, "display", refs.captureLive.classList.contains("hidden") ? "none" : "block");
        setInlineStyle(refs.captureLive, "width", "100%");
        setInlineStyle(refs.captureLive, "height", "100%");
        setInlineStyle(refs.captureLive, "object-fit", "cover");
        setInlineStyle(refs.captureLive, "object-position", "center center");
        setInlineStyle(refs.capturePhotoPreview, "position", "absolute");
        setInlineStyle(refs.capturePhotoPreview, "inset", "0");
        setInlineStyle(refs.capturePhotoPreview, "width", "100%");
        setInlineStyle(refs.capturePhotoPreview, "height", "100%");
        setInlineStyle(refs.capturePhotoPreview, "object-fit", "cover");
        setInlineStyle(refs.captureVideoPreview, "position", "absolute");
        setInlineStyle(refs.captureVideoPreview, "inset", "0");
        setInlineStyle(refs.captureVideoPreview, "width", "100%");
        setInlineStyle(refs.captureVideoPreview, "height", "100%");
        setInlineStyle(refs.captureVideoPreview, "object-fit", "cover");

        setInlineStyle(refs.captureBottomBar, "position", "relative");
        setInlineStyle(refs.captureBottomBar, "right", "auto");
        setInlineStyle(refs.captureBottomBar, "bottom", "auto");
        setInlineStyle(refs.captureBottomBar, "left", "auto");
        setInlineStyle(refs.captureBottomBar, "display", "block");
        setInlineStyle(refs.captureBottomBar, "flex", "0 0 176px");
        setInlineStyle(refs.captureBottomBar, "width", "100%");
        setInlineStyle(refs.captureBottomBar, "height", "176px");
        setInlineStyle(refs.captureBottomBar, "min-height", "176px");
        setInlineStyle(refs.captureBottomBar, "max-height", "176px");
        setInlineStyle(refs.captureBottomBar, "margin", "0");
        setInlineStyle(refs.captureBottomBar, "padding", "0");
        setInlineStyle(refs.captureBottomBar, "background", "#111111");
        setInlineStyle(refs.captureBottomBar, "border-top", "0");
        setInlineStyle(refs.captureBottomBar, "overflow", "hidden");
        setInlineStyle(refs.captureBottomBar, "pointer-events", "auto");

        setInlineStyle(refs.captureBottomControls, "position", "relative");
        setInlineStyle(refs.captureBottomControls, "display", "flex");
        setInlineStyle(refs.captureBottomControls, "flex-direction", "column");
        setInlineStyle(refs.captureBottomControls, "align-items", "stretch");
        setInlineStyle(refs.captureBottomControls, "justify-content", "flex-start");
        setInlineStyle(refs.captureBottomControls, "width", "100%");
        setInlineStyle(refs.captureBottomControls, "height", "176px");
        setInlineStyle(refs.captureBottomControls, "min-height", "176px");
        setInlineStyle(refs.captureBottomControls, "max-height", "176px");
        setInlineStyle(refs.captureBottomControls, "margin", "0");
        setInlineStyle(refs.captureBottomControls, "padding", "0");
        setInlineStyle(refs.captureBottomControls, "pointer-events", "auto");

        setInlineStyle(refs.captureModeOverlay, "position", "relative");
        setInlineStyle(refs.captureModeOverlay, "top", "auto");
        setInlineStyle(refs.captureModeOverlay, "left", "auto");
        setInlineStyle(refs.captureModeOverlay, "right", "auto");
        setInlineStyle(refs.captureModeOverlay, "display", "block");
        setInlineStyle(refs.captureModeOverlay, "flex", "0 0 56px");
        setInlineStyle(refs.captureModeOverlay, "align-items", "stretch");
        setInlineStyle(refs.captureModeOverlay, "justify-content", "normal");
        setInlineStyle(refs.captureModeOverlay, "width", "100%");
        setInlineStyle(refs.captureModeOverlay, "min-width", "100%");
        setInlineStyle(refs.captureModeOverlay, "max-width", "100%");
        setInlineStyle(refs.captureModeOverlay, "height", "56px");
        setInlineStyle(refs.captureModeOverlay, "min-height", "56px");
        setInlineStyle(refs.captureModeOverlay, "max-height", "56px");
        setInlineStyle(refs.captureModeOverlay, "background", "#111111");
        setInlineStyle(refs.captureModeOverlay, "margin", "0");
        setInlineStyle(refs.captureModeOverlay, "padding", "0");
        setInlineStyle(refs.captureModeOverlay, "overflow", "hidden");
        setInlineStyle(refs.captureModeOverlay, "pointer-events", "auto");
        setInlineStyle(refs.captureModeOverlay, "grid-column", "auto");
        setInlineStyle(refs.captureModeOverlay, "grid-row", "auto");

        setInlineStyle(refs.captureShutterRow, "display", "flex");
        setInlineStyle(refs.captureShutterRow, "position", "relative");
        setInlineStyle(refs.captureShutterRow, "left", "auto");
        setInlineStyle(refs.captureShutterRow, "right", "auto");
        setInlineStyle(refs.captureShutterRow, "top", "auto");
        setInlineStyle(refs.captureShutterRow, "bottom", "auto");
        setInlineStyle(refs.captureShutterRow, "flex", "0 0 120px");
        setInlineStyle(refs.captureShutterRow, "align-items", "center");
        setInlineStyle(refs.captureShutterRow, "justify-content", "center");
        setInlineStyle(refs.captureShutterRow, "width", "100%");
        setInlineStyle(refs.captureShutterRow, "height", "120px");
        setInlineStyle(refs.captureShutterRow, "min-height", "120px");
        setInlineStyle(refs.captureShutterRow, "max-height", "120px");
        setInlineStyle(refs.captureShutterRow, "padding", "0 0 10px");
        setInlineStyle(refs.captureShutterRow, "pointer-events", "auto");
        setInlineStyle(refs.captureShutterRow, "grid-column", "auto");
        setInlineStyle(refs.captureShutterRow, "grid-row", "auto");

        const modeButtons = [
            [refs.capturePhotoBtn, "0", "auto"],
            [refs.captureVideoBtn, "auto", "0"],
        ];
        modeButtons.forEach(([button, left, right]) => {
            setInlineStyle(button, "display", "flex");
            setInlineStyle(button, "position", "absolute");
            setInlineStyle(button, "top", "0");
            setInlineStyle(button, "left", left);
            setInlineStyle(button, "right", right);
            setInlineStyle(button, "bottom", "auto");
            setInlineStyle(button, "width", "50%");
            setInlineStyle(button, "min-width", "50%");
            setInlineStyle(button, "max-width", "50%");
            setInlineStyle(button, "align-items", "center");
            setInlineStyle(button, "justify-content", "center");
            setInlineStyle(button, "height", "56px");
            setInlineStyle(button, "padding", "0");
            setInlineStyle(button, "border", "0");
            setInlineStyle(button, "background", "transparent");
            setInlineStyle(button, "justify-self", "stretch");
            setInlineStyle(button, "align-self", "stretch");
            setInlineStyle(button, "box-sizing", "border-box");
            setInlineStyle(button, "font-size", "18px");
            setInlineStyle(button, "font-weight", "500");
            setInlineStyle(button, "letter-spacing", "0.08em");
            setInlineStyle(button, "line-height", "1");
            setInlineStyle(button, "white-space", "nowrap");
            setInlineStyle(button, "color", "rgba(255, 255, 255, 0.88)");
            setInlineStyle(button, "opacity", "1");
            setInlineStyle(button, "visibility", "visible");
            setInlineStyle(button, "pointer-events", "auto");
            setInlineStyle(button, "grid-column", "auto");
            setInlineStyle(button, "grid-row", "auto");
        });

        setInlineStyle(refs.capturePhotoBtn, "background", state.cameraMode === "photo" ? "#ff2a22" : "transparent");
        setInlineStyle(refs.capturePhotoBtn, "color", state.cameraMode === "photo" ? "#ffffff" : "rgba(255, 255, 255, 0.88)");
        setInlineStyle(refs.captureVideoBtn, "background", state.cameraMode === "video" ? "#ff2a22" : "transparent");
        setInlineStyle(refs.captureVideoBtn, "color", state.cameraMode === "video" ? "#ffffff" : "rgba(255, 255, 255, 0.88)");

        setInlineStyle(refs.captureRecordBtn, "display", "block");
        setInlineStyle(refs.captureRecordBtn, "position", "relative");
        setInlineStyle(refs.captureRecordBtn, "width", "92px");
        setInlineStyle(refs.captureRecordBtn, "height", "92px");
        setInlineStyle(refs.captureRecordBtn, "margin", "0 auto");
        setInlineStyle(refs.captureRecordBtn, "border", "5px solid #ffffff");
        setInlineStyle(refs.captureRecordBtn, "border-radius", "50%");
        setInlineStyle(refs.captureRecordBtn, "background", state.cameraMode === "video" ? "#ff4747" : "#ffffff");
        setInlineStyle(refs.captureRecordBtn, "box-shadow", state.cameraMode === "video" ? "inset 0 0 0 6px #171717" : "inset 0 0 0 6px #111111");
        setInlineStyle(refs.captureRecordBtn, "z-index", "2");
        setInlineStyle(refs.captureRecordBtn, "pointer-events", "auto");
        setInlineStyle(refs.captureRecordBtn, "grid-column", "auto");
        setInlineStyle(refs.captureRecordBtn, "grid-row", "auto");
        if (refs.captureRecordBtn.classList.contains("recording")) {
            setInlineStyle(refs.captureRecordBtn, "background", "#ff2f43");
            setInlineStyle(refs.captureRecordBtn, "box-shadow", "inset 0 0 0 20px #ff2f43");
        }
        return;
    }

    setInlineStyle(refs.captureDemoPill, "display", "none");
    setInlineStyle(refs.captureRightRail, "display", "none");
    setInlineStyle(refs.captureFilterRail, "display", "none");
    setInlineStyle(refs.captureFilterOverlay, "display", "none");
    setInlineStyle(refs.captureStage, "position", "relative");
    setInlineStyle(refs.captureStage, "inset", "auto");
    setInlineStyle(refs.captureStage, "bottom", "auto");
    setInlineStyle(refs.captureStage, "flex", "1 1 auto");
    setInlineStyle(refs.captureStage, "background", "#000000");
    setInlineStyle(refs.capturePhotoPreview, "position", "absolute");
    setInlineStyle(refs.capturePhotoPreview, "inset", "0");
    setInlineStyle(refs.capturePhotoPreview, "width", "100%");
    setInlineStyle(refs.capturePhotoPreview, "height", "100%");
    setInlineStyle(refs.capturePhotoPreview, "object-fit", "cover");
    setInlineStyle(refs.captureVideoPreview, "position", "absolute");
    setInlineStyle(refs.captureVideoPreview, "inset", "0");
    setInlineStyle(refs.captureVideoPreview, "width", "100%");
    setInlineStyle(refs.captureVideoPreview, "height", "100%");
    setInlineStyle(refs.captureVideoPreview, "object-fit", "cover");
    setInlineStyle(refs.captureBottomBar, "display", "none");
    setInlineStyle(refs.captureUseBtn, "display", refs.captureUseBtn.disabled ? "none" : "grid");
    setInlineStyle(refs.captureUseBtn, "place-items", "center");
    setInlineStyle(refs.captureUseBtn, "position", "absolute");
    setInlineStyle(refs.captureUseBtn, "right", "22px");
    setInlineStyle(refs.captureUseBtn, "bottom", "calc(24px + env(safe-area-inset-bottom, 0px))");
    setInlineStyle(refs.captureUseBtn, "width", "74px");
    setInlineStyle(refs.captureUseBtn, "height", "74px");
    setInlineStyle(refs.captureUseBtn, "border-radius", "50%");
    setInlineStyle(refs.captureUseBtn, "background", "#27d467");
    setInlineStyle(refs.captureUseBtn, "opacity", refs.captureUseBtn.disabled ? "0" : "1");
    setInlineStyle(refs.captureUseBtn, "visibility", refs.captureUseBtn.disabled ? "hidden" : "visible");
}

function setCaptureView(view) {
    refs.captureModal.dataset.captureView = view;
    refs.captureModal.dataset.captureMode = state.cameraMode;
    refs.captureModal.dataset.captureTarget = state.captureTarget;
    if (refs.captureStage) refs.captureStage.classList.toggle("has-preview", view === "preview");
    if (view !== "preview") closeCaptureShareSheet();
    refs.captureUseBtn.disabled = view === "preview" ? !state.capturedBlob : true;
    applyCaptureInlineLayout(view);
    updateCapturePreviewMeta(view);
    refs.captureRecordBtn.setAttribute(
        "aria-label",
        state.cameraMode === "video"
            ? (refs.captureRecordBtn.classList.contains("recording") ? "Stop video recording" : "Start video recording")
            : "Take photo",
    );
}

function capturePreviewTitle() {
    if (state.captureTarget === "profile") return "Profile photo";
    if (state.captureTarget === "status") return "My story";
    return `${state.me?.displayName || "You"} (You)`;
}

function updateCapturePreviewMeta(view = refs.captureModal?.dataset.captureView || "live") {
    if (!refs.captureDemoPill) return;
    refs.captureDemoPill.textContent = view === "preview"
        ? capturePreviewTitle()
        : state.captureTarget === "profile"
            ? "Profile photo mode"
            : state.cameraMode === "video"
                ? "Video mode"
                : "Photo mode";
}

function capturedMediaFile() {
    if (!state.capturedBlob) return null;
    const isVideo = state.cameraMode === "video";
    return new File(
        [state.capturedBlob],
        isVideo ? `wavechat-${Date.now()}.webm` : `wavechat-${Date.now()}.jpg`,
        { type: state.capturedBlob.type || (isVideo ? "video/webm" : "image/jpeg") },
    );
}

function closeCaptureShareSheet() {
    if (!refs.captureShareSheet) return;
    refs.captureShareSheet.classList.add("hidden");
    refs.captureShareSheet.setAttribute("aria-hidden", "true");
    setInlineStyle(refs.captureShareSheet, "display", "none");
}

function renderCaptureShareSheet() {
    if (!refs.captureShareList) return;
    const chats = [...state.chats];
    refs.captureShareList.innerHTML = `
        <button type="button" class="capture-share-story" data-capture-share-target="story">
            <span class="capture-share-story-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 12 2.5zm0 2a7.5 7.5 0 0 1 7.1 9.93L12 12.9V4.5z" fill="currentColor"/></svg>
            </span>
            <span class="capture-share-copy">
                <strong>My story</strong>
                <span>Share this capture to your story</span>
            </span>
        </button>
        <div class="capture-share-section-label">Chats</div>
        ${chats.length ? chats.map((chat) => {
            const user = counterpartForChat(chat);
            const subtitle = chat.lastMessage?.caption || chat.lastMessage?.text || chat.lastMessage?.fileName || "Send to this chat";
            return `
                <button type="button" class="capture-share-chat" data-capture-share-chat-id="${escapeHtml(chat.id)}">
                    ${avatarMarkup(user, "capture-share-avatar", true)}
                    <span class="capture-share-copy">
                        <strong>${escapeHtml(chat.title || avatarName(user))}</strong>
                        <span>${escapeHtml(subtitle)}</span>
                    </span>
                </button>
            `;
        }).join("") : `<div class="capture-share-empty">No personal chats yet.</div>`}
    `;
}

function openCaptureShareSheet() {
    if (!state.capturedBlob || !refs.captureShareSheet) return;
    renderCaptureShareSheet();
    clearInlineStyle(refs.captureShareSheet, "display");
    refs.captureShareSheet.classList.remove("hidden");
    refs.captureShareSheet.setAttribute("aria-hidden", "false");
}

async function postCapturedMediaToStory(file) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("mimeType", file.type || "application/octet-stream");
    const response = await apiFetch("/api/status", { method: "POST", body: formData, headers: {} });
    upsertStatusPost(response.status);
    updateNavBadges();
    setScreen("status");
    showToast("Story added.");
}

async function postCapturedMediaToChat(chatId, file) {
    const formData = new FormData();
    formData.append("chatId", String(chatId));
    formData.append("clientMessageId", `capture_${Date.now()}_${Math.random().toString(16).slice(2, 10)}`);
    formData.append("mimeType", file.type || "application/octet-stream");
    formData.append("fileName", file.name || "attachment");
    formData.append("caption", "");
    formData.append("file", file);
    const response = await apiFetch("/api/messages/media", { method: "POST", body: formData, headers: {} });
    handleIncomingMessage(response.message);
    openConversation(chatId);
}

async function handleCaptureShareSelection(target, chatId = null) {
    const file = capturedMediaFile();
    if (!file) return;
    const selectedChat = chatId == null ? null : state.chats.find((chat) => String(chat.id) === String(chatId));
    closeCaptureShareSheet();
    closeCaptureModal();
    try {
        if (target === "story") {
            await postCapturedMediaToStory(file);
            return;
        }
        if (!selectedChat) {
            showToast("Choose a chat to send this capture.", "error");
            return;
        }
        await postCapturedMediaToChat(selectedChat.id, file);
    } catch (error) {
        showToast(error.message, "error");
    }
}

function filteredChats() {
    const query = state.search.trim().toLowerCase();
    const searchDescriptor = contactSearchDescriptor(state.search);
    if (searchDescriptor) return [];
    const chats = [
        waveMindChat(),
        ...state.chats.filter((chat) => !isWaveMindChatId(chat.id)),
    ];
    return chats.filter((chat) => {
        const user = counterpartForChat(chat);
        const haystack = [
            chat.title,
            chat.isWaveMind ? "WaveMind AI assistant" : "",
            user?.displayName,
            user?.phoneNumber,
            chat.lastMessage?.text,
            chat.lastMessage?.caption,
        ].filter(Boolean).join(" ").toLowerCase();
        if (query && !haystack.includes(query)) return false;
        if (state.filter === "unread") return Number(chat.unreadCount || 0) > 0;
        if (state.filter === "muted") return Boolean(chat.isMuted);
        return true;
    });
}

async function refreshPhoneSearchResult() {
    const descriptor = contactSearchDescriptor(state.search);
    if (!descriptor) {
        state.phoneSearchResult = null;
        state.phoneSearchLoading = false;
        if (state.screen === "chats") renderChatsList();
        return;
    }

    const requestKey = `${descriptor.type}:${descriptor.value}`;
    state.phoneSearchLoading = true;
    if (state.screen === "chats") renderChatsList();
    try {
        const query = `phone=${encodeURIComponent(descriptor.value)}`;
        const response = await apiFetch(`/api/users/find?${query}`);
        if (contactSearchKey(state.search) !== requestKey) return;
        state.phoneSearchResult = response.user || null;
    } catch {
        if (contactSearchKey(state.search) !== requestKey) return;
        state.phoneSearchResult = null;
    } finally {
        if (contactSearchKey(state.search) === requestKey) {
            state.phoneSearchLoading = false;
            if (state.screen === "chats") renderChatsList();
        }
    }
}

function queuePhoneSearch() {
    clearTimeout(state.searchTimer);
    state.searchTimer = setTimeout(refreshPhoneSearchResult, 260);
}

async function startChatByPhone(phoneNumber) {
    const phone = normalizePhoneSearch(phoneNumber || state.search);
    if (!looksLikePhoneSearch(phone)) return;
    return startChatByContact("phone", phone);
}

async function findOrCreateChatByPhone(phoneNumber) {
    const contactValue = normalizePhoneSearch(phoneNumber);
    if (!looksLikePhoneSearch(contactValue)) {
        throw new Error("Enter a valid phone number.");
    }
    const existingChat = findExistingChatByPhone(contactValue);
    if (existingChat) {
        state.visibleContactChatId = existingChat.id;
        return existingChat;
    }
    const response = await apiFetch("/api/chats", {
        method: "POST",
        body: JSON.stringify({ phoneNumber: contactValue }),
    });
    const chat = response.chat;
    if (!chat?.id) throw new Error("Unable to open that chat.");
    upsertChat(chat);
    return chatById(chat.id) || normalizeChatForUi(chat);
}

async function startChatByContact(_type, value) {
    const contactValue = normalizePhoneSearch(value || state.search);
    if (!looksLikePhoneSearch(contactValue)) return;

    try {
        const chat = await findOrCreateChatByPhone(contactValue);
        state.visibleContactChatId = chat.id;
        state.search = "";
        state.phoneSearchResult = null;
        state.phoneSearchLoading = false;
        if (refs.chatSearch) refs.chatSearch.value = "";
        openConversation(chat.id);
    } catch (error) {
        showToast(error.message || `No WaveChat user found for that ${contactSearchLabel()}.`, "error");
    }
}

function renderChatsList() {
    ensureFilterChips();
    refs.sidebarTools.style.display = "";
    refs.chatSearch.hidden = false;
    const chats = filteredChats();
    const searchDescriptor = contactSearchDescriptor(state.search);
    const searchValue = searchDescriptor?.value || "";
    const existingPhoneChat = searchDescriptor ? findExistingChatByPhone(searchValue) : null;
    const resultContactValue = state.phoneSearchResult
        ? (state.phoneSearchResult.phoneNumber || searchValue)
        : searchValue;
    const hasSearch = Boolean(state.search.trim());
    const phoneSearchHtml = hasSearch ? (searchDescriptor ? (existingPhoneChat ? (() => {
        const user = counterpartForChat(existingPhoneChat);
        return `
            <button type="button" class="chat-item phone-search-result" data-chat-id="${escapeHtml(existingPhoneChat.id)}">
                ${avatarMarkup(user, "chat-list-avatar", true, { preferPhotoOnly: true })}
                <div class="chat-item-main">
                    <div class="chat-item-title">
                        <strong>${escapeHtml(user?.displayName || primaryContactIdentifier(user) || "Contact")}</strong>
                        <span class="chat-item-time">Open</span>
                    </div>
                    <div class="chat-item-subtitle">
                        <span class="chat-preview">Existing chat - ${escapeHtml(displayContactIdentifier(user))}</span>
                    </div>
                </div>
            </button>
        `;
    })() : `
        ${state.phoneSearchLoading ? `
            <div class="chat-search-state">Searching WaveChat contacts...</div>
        ` : state.phoneSearchResult ? `
            <button type="button" class="chat-item phone-search-result" data-start-chat-type="phone" data-start-chat-contact="${escapeHtml(resultContactValue)}">
                ${avatarMarkup(state.phoneSearchResult, "chat-list-avatar", true, { preferPhotoOnly: true })}
                <div class="chat-item-main">
                    <div class="chat-item-title">
                        <strong>${escapeHtml(state.phoneSearchResult.displayName || primaryContactIdentifier(state.phoneSearchResult) || "Contact")}</strong>
                        <span class="chat-item-time">Start</span>
                    </div>
                    <div class="chat-item-subtitle">
                        <span class="chat-preview">${escapeHtml(displayContactIdentifier(state.phoneSearchResult))}</span>
                    </div>
                </div>
            </button>
        ` : `
            <div class="chat-search-state">No WaveChat user found for this ${contactSearchLabel()}.</div>
        `}
    `) : `<div class="chat-search-state">Enter at least 6 digits to find one phone contact.</div>`) : "";
    const chatHtml = hasSearch && searchDescriptor
        ? ""
        : chats.length
        ? chats.map((chat) => {
            const user = counterpartForChat(chat);
            const lastMessage = chat.lastMessage;
            const preview = lastMessage ? messagePreviewText(lastMessage, "Start chatting") : "Start chatting";
            return `
                <button type="button" class="chat-item${chat.isWaveMind ? " wavemind-chat-item" : ""}${String(chat.id) === String(state.activeChatId) ? " active" : ""}" data-chat-id="${escapeHtml(chat.id)}">
                    ${avatarMarkup(user, "chat-list-avatar", true, { preferPhotoOnly: true })}
                    <div class="chat-item-main">
                        <div class="chat-item-title">
                            <strong>${escapeHtml(user?.displayName || primaryContactIdentifier(user) || "Contact")}</strong>
                            <span class="chat-item-time">${escapeHtml(relativeTime(lastMessage?.createdAt || chat.updatedAt))}</span>
                        </div>
                        <div class="chat-item-subtitle">
                            <span class="chat-preview">${escapeHtml(preview)}</span>
                        </div>
                    </div>
                </button>
            `;
        }).join("")
        : `<div class="call-modal-empty">Enter a phone number above to find one WaveChat contact.</div>`;
    refs.chatList.innerHTML = `${phoneSearchHtml}${chatHtml}`;
    bindChatListAvatarImages(refs.chatList);
}

function storyGroups(posts) {
    const groupsByUser = new Map();
    (posts || []).forEach((post) => {
        const key = String(post.user?.id || post.userId || post.id);
        if (!groupsByUser.has(key)) {
            groupsByUser.set(key, { user: post.user, posts: [] });
        }
        groupsByUser.get(key).posts.push(post);
    });
    return Array.from(groupsByUser.values()).map((group) => ({
        ...group,
        posts: group.posts.sort((left, right) => (
            (parseServerDate(left.createdAt)?.getTime() || 0) - (parseServerDate(right.createdAt)?.getTime() || 0)
        )),
    })).sort((left, right) => (
        (parseServerDate(right.posts[right.posts.length - 1]?.createdAt)?.getTime() || 0)
        - (parseServerDate(left.posts[left.posts.length - 1]?.createdAt)?.getTime() || 0)
    ));
}

function buildStoryRow(group) {
    const latest = group.posts[group.posts.length - 1];
    return `
        <button type="button" class="status-row" data-story-user-id="${escapeHtml(group.user?.id)}">
            ${avatarMarkup(group.user, "status-avatar")}
            <div class="status-copy">
                <strong>${escapeHtml(group.user?.displayName || "Story")}</strong>
                <span>${escapeHtml(`${group.posts.length} update${group.posts.length === 1 ? "" : "s"} - ${relativeTime(latest?.createdAt)}`)}</span>
            </div>
        </button>
    `;
}

function countLabel(count, singular, plural = `${singular}s`) {
    const value = Number(count || 0);
    return `${value} ${value === 1 ? singular : plural}`;
}

function renderStoriesScreen() {
    refs.sidebarTools.style.display = "none";
    const own = state.statusPosts.filter((post) => post.isOwn);
    const ownViews = own.reduce((total, post) => total + Number(post.viewCount || 0), 0);
    const ownReactions = own.reduce((total, post) => total + Number(post.reactionCount || 0), 0);
    const others = storyGroups(state.statusPosts.filter((post) => !post.isOwn));
    const ownSummary = `${countLabel(own.length, "update")} - ${countLabel(ownViews, "view")} - ${countLabel(ownReactions, "like")}`;
    refs.chatList.innerHTML = `
        <section class="status-screen">
            <div class="my-story-card">
                <button type="button" class="my-story-main" ${own.length ? `data-story-user-id="${escapeHtml(state.me?.id)}"` : "data-add-story"}>
                    <span class="my-story-avatar-shell">
                        ${avatarMarkup(state.me, "status-avatar chat-list-avatar", false, { preferPhotoOnly: true })}
                    </span>
                    <div class="status-copy">
                        <strong>My Story</strong>
                        <span>${escapeHtml(ownSummary)}</span>
                    </div>
                </button>
                <button type="button" class="status-plus" data-add-story aria-label="Add photo or video story">+</button>
            </div>
            <div class="status-section-title">Stories</div>
            ${others.length ? others.map(buildStoryRow).join("") : `<div class="call-modal-empty">No stories yet.</div>`}
        </section>
    `;
    bindChatListAvatarImages(refs.chatList);
}

function renderCallsScreen() {
    refs.sidebarTools.style.display = "none";
    refs.chatList.innerHTML = `
        <section class="calls-screen">
            <button type="button" class="call-history-row wavemind-call-launch" data-wavemind-call aria-label="Start WaveMind AI call">
                <span class="wavemind-call-launch-avatar">
                    <img src="${escapeHtml(WAVEMIND_AVATAR_URL)}" alt="" aria-hidden="true">
                </span>
                <div class="call-history-copy">
                    <strong>WaveMind</strong>
                    <span>AI voice call</span>
                </div>
                <span class="wavemind-call-launch-action" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path d="M6.6 10.8a15.7 15.7 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .5 3 .5.7 0 1.2.5 1.2 1.2V20c0 .7-.5 1.2-1.2 1.2C10.3 21.2 2.8 13.7 2.8 4.4 2.8 3.7 3.3 3.2 4 3.2h3.2c.7 0 1.2.5 1.2 1.2 0 1 .2 2 .5 3 .1.4 0 .9-.3 1.2l-2 2.2z" fill="currentColor"/></svg>
                </span>
            </button>
            <div class="status-section-title">Recent calls</div>
            ${state.callHistory.length
                ? state.callHistory.map((call) => `
                    <button type="button" class="call-history-row" data-chat-id="${call.chatId}">
                        ${avatarMarkup({
                            displayName: call.name,
                            phoneNumber: call.phoneNumber,
                            avatarColor: call.avatarColor,
                            avatarUrl: call.avatarUrl,
                        })}
                        <div class="call-history-copy">
                            <strong>${escapeHtml(call.name || "Contact")}</strong>
                            <span>${escapeHtml(call.direction)} - ${escapeHtml(call.outcome)} - ${escapeHtml(relativeTime(call.createdAt))}</span>
                        </div>
                        <span class="call-history-type">${call.callType === "video" ? "Video" : "Voice"}</span>
                    </button>
                `).join("")
                : `<div class="call-modal-empty">No call history yet.</div>`}
            <button type="button" class="call-keypad-fab" data-call-keypad-open aria-label="Open phone keypad">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7 4h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zM7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zM7 14h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zM11 19h2v2h-2z" fill="currentColor"/>
                </svg>
                <span>Keypad</span>
            </button>
        </section>
    `;
}

function setCallKeypadStatus(root, message = "", isError = false) {
    const status = root?.querySelector("[data-call-keypad-status]");
    if (!status) return;
    status.textContent = message;
    status.classList.toggle("is-error", Boolean(isError));
}

function updateCallKeypadInput(input, value) {
    if (!input) return "";
    const normalized = normalizePhoneSearch(value);
    input.dataset.value = normalized;
    input.textContent = normalized || "Enter phone number";
    input.classList.toggle("is-empty", !normalized);
    return normalized;
}

function callKeypadInputValue(input) {
    return input?.dataset?.value || "";
}

async function startCallFromPhoneNumber(phoneNumber, callType, root) {
    const phone = normalizePhoneSearch(phoneNumber);
    if (!looksLikePhoneSearch(phone)) {
        setCallKeypadStatus(root, "Enter a valid phone number.", true);
        return;
    }
    if (!state.socket?.connected) {
        setCallKeypadStatus(root, "Realtime connection is needed for calls.", true);
        showToast("Calls need the live server connection.", "error");
        return;
    }

    const actionButtons = root?.querySelectorAll("[data-call-keypad-submit], [data-keypad-key], [data-keypad-delete], [data-keypad-clear]");
    actionButtons?.forEach((button) => {
        button.disabled = true;
    });
    setCallKeypadStatus(root, "Finding WaveChat contact...");
    try {
        const chat = await findOrCreateChatByPhone(phone);
        closeModalRoot();
        await startCallForChat(chat, callType);
    } catch (error) {
        actionButtons?.forEach((button) => {
            button.disabled = false;
        });
        setCallKeypadStatus(root, error.message || "No WaveChat user found for this number.", true);
    }
}

function openCallKeypad() {
    const keys = [
        ["1", ""],
        ["2", "ABC"],
        ["3", "DEF"],
        ["4", "GHI"],
        ["5", "JKL"],
        ["6", "MNO"],
        ["7", "PQRS"],
        ["8", "TUV"],
        ["9", "WXYZ"],
        ["+", ""],
        ["0", ""],
        ["del", "Delete"],
    ];
    openModalRoot(`
        <div class="call-modal-overlay message-sheet-overlay">
            <button type="button" class="message-sheet-backdrop" data-call-keypad-close aria-label="Close phone keypad"></button>
            <div class="call-modal-card call-modal-keypad" role="dialog" aria-modal="true" aria-label="Phone keypad">
                <header class="call-modal-header">
                    <button type="button" class="call-modal-icon" data-call-keypad-close aria-label="Close">Close</button>
                    <h2>Phone keypad</h2>
                    <div class="call-modal-icon ghost"></div>
                </header>
                <div class="keypad-body">
                    <div class="call-keypad-field">
                        <span>Phone number</span>
                        <div class="keypad-display is-empty" data-call-keypad-input data-value="" role="status" aria-label="Phone number" aria-live="polite" tabindex="-1">Enter phone number</div>
                    </div>
                    <div class="keypad-match" data-call-keypad-status>Enter a WaveChat phone number</div>
                    <div class="keypad-grid">
                        ${keys.map(([value, label]) => (value === "del"
                            ? `<button type="button" class="keypad-key keypad-delete" data-keypad-delete aria-label="Delete digit">Del</button>`
                            : `<button type="button" class="keypad-key" data-keypad-key="${escapeHtml(value)}"><span>${escapeHtml(value)}</span>${label ? `<small>${escapeHtml(label)}</small>` : ""}</button>`
                        )).join("")}
                    </div>
                    <div class="keypad-actions">
                        <button type="button" class="keypad-action" data-keypad-clear>Clear</button>
                        <button type="button" class="keypad-action primary" data-call-keypad-submit="voice" aria-label="Voice call">
                            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.7 15.7 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .5 3 .5.7 0 1.2.5 1.2 1.2V20c0 .7-.5 1.2-1.2 1.2C10.3 21.2 2.8 13.7 2.8 4.4 2.8 3.7 3.3 3.2 4 3.2h3.2c.7 0 1.2.5 1.2 1.2 0 1 .2 2 .5 3 .1.4 0 .9-.3 1.2l-2 2.2z" fill="currentColor"/></svg>
                            <span>Voice</span>
                        </button>
                        <button type="button" class="keypad-action primary video" data-call-keypad-submit="video" aria-label="Video call">
                            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 6.5A2.5 2.5 0 0 1 7.5 4h7A2.5 2.5 0 0 1 17 6.5V8l4-2v12l-4-2v1.5A2.5 2.5 0 0 1 14.5 20h-7A2.5 2.5 0 0 1 5 17.5z" fill="currentColor"/></svg>
                            <span>Video</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `);
    const root = refs.callModalRoot;
    const input = root.querySelector("[data-call-keypad-input]");
    root.querySelectorAll("[data-call-keypad-close]").forEach((button) => {
        button.addEventListener("click", closeModalRoot);
    });
    root.querySelectorAll("[data-keypad-key]").forEach((button) => {
        button.addEventListener("click", () => {
            const value = button.dataset.keypadKey || "";
            const current = callKeypadInputValue(input);
            updateCallKeypadInput(input, `${current}${value}`);
            setCallKeypadStatus(root, "Ready to call");
        });
    });
    root.querySelector("[data-keypad-delete]")?.addEventListener("click", () => {
        const current = callKeypadInputValue(input);
        updateCallKeypadInput(input, current.slice(0, -1));
        setCallKeypadStatus(root, "Enter a WaveChat phone number");
    });
    root.querySelector("[data-keypad-clear]")?.addEventListener("click", () => {
        updateCallKeypadInput(input, "");
        setCallKeypadStatus(root, "Enter a WaveChat phone number");
    });
    root.querySelectorAll("[data-call-keypad-submit]").forEach((button) => {
        button.addEventListener("click", () => {
            startCallFromPhoneNumber(callKeypadInputValue(input), button.dataset.callKeypadSubmit || "voice", root);
        });
    });
}

function renderProfileScreen() {
    refs.sidebarTools.style.display = "none";
    const selfAvatarUrl = resolvedAvatarUrl(state.me);
    const selfHasImage = Boolean(selfAvatarUrl);
    const loginIdentifier = displayContactIdentifier(state.me);
    const countryLabel = state.me?.countryName || state.me?.countryCode || "Not set";
    const timeZoneLabel = timeZoneForUser(state.me);
    refs.chatList.innerHTML = `
        <section class="profile-screen">
            <button type="button" class="profile-avatar-shell" id="my-profile-avatar-btn" aria-label="Choose profile photo from your device">
                <div class="contact-profile-avatar${selfHasImage ? " has-image" : ""}">
                    ${selfHasImage
                        ? `<img class="profile-avatar-photo" src="${escapeHtml(selfAvatarUrl)}" alt="My profile photo" draggable="false">`
                        : `<span class="profile-avatar-placeholder" aria-hidden="true"></span>`}
                </div>
            </button>
            <div class="contact-profile-name">${escapeHtml(state.me?.displayName || "WaveChat User")}</div>
            <div class="contact-profile-phone">${escapeHtml(loginIdentifier)}</div>
            <div class="contact-profile-meta">
                <div><span>Login</span><strong>${escapeHtml(primaryContactIdentifier(state.me))}</strong></div>
                <div><span>Country</span><strong>${escapeHtml(countryLabel)}</strong></div>
                <div><span>Time zone</span><strong>${escapeHtml(timeZoneLabel)}</strong></div>
                <div><span>Status</span><strong>${state.me?.isOnline ? "Online" : "Offline"}</strong></div>
            </div>
            <div class="profile-actions">
                <button type="button" class="profile-action-btn profile-file-label" id="profile-choose-photo-btn">Add profile pic</button>
                <button type="button" class="profile-action-btn" id="profile-camera-photo-btn">Take profile pic</button>
                <button type="button" class="profile-action-btn danger" id="profile-logout-btn">Logout</button>
            </div>
        </section>
    `;
}

function renderSidebarScreen() {
    if (state.screen === "status") return renderStoriesScreen();
    if (state.screen === "calls") return renderCallsScreen();
    if (state.screen === "profile") return renderProfileScreen();
    return renderChatsList();
}

function resetChatAttachmentInput() {
    if (!refs.fileInput) return;
    refs.fileInput.setAttribute("accept", DEFAULT_CHAT_ATTACHMENT_ACCEPT);
    refs.fileInput.removeAttribute("capture");
    state.filePickerKind = "";
}

function fileExtension(file) {
    const name = String(file?.name || "");
    const index = name.lastIndexOf(".");
    return index >= 0 ? name.slice(index).toLowerCase() : "";
}

function inferAttachmentMimeType(file, preferredKind = "") {
    const type = String(file?.type || "").split(";")[0].trim().toLowerCase();
    if (type && !["application/octet-stream", "binary/octet-stream"].includes(type)) return type;
    const extension = fileExtension(file);
    const imageTypes = {
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".png": "image/png",
        ".webp": "image/webp",
        ".gif": "image/gif",
        ".heic": "image/heic",
        ".heif": "image/heif",
        ".avif": "image/avif",
        ".bmp": "image/bmp",
        ".tif": "image/tiff",
        ".tiff": "image/tiff",
    };
    const videoTypes = {
        ".mp4": "video/mp4",
        ".mov": "video/quicktime",
        ".webm": "video/webm",
        ".m4v": "video/x-m4v",
        ".3gp": "video/3gpp",
        ".3gpp": "video/3gpp",
        ".3g2": "video/3gpp2",
        ".avi": "video/x-msvideo",
        ".mkv": "video/x-matroska",
        ".mpg": "video/mpeg",
        ".mpeg": "video/mpeg",
        ".ogv": "video/ogg",
    };
    if (imageTypes[extension]) return imageTypes[extension];
    if (videoTypes[extension]) return videoTypes[extension];
    if (preferredKind === "photo") return "image/jpeg";
    if (preferredKind === "video") return "video/mp4";
    return type || "application/octet-stream";
}

function attachmentKindForFile(file, preferredKind = "") {
    const mimeType = inferAttachmentMimeType(file, preferredKind);
    if (mimeType.startsWith("image/")) return "photo";
    if (mimeType.startsWith("video/")) return "video";
    return "document";
}

function fileMatchesPickerKind(file, pickerKind = "") {
    if (!pickerKind || pickerKind === "any") return true;
    const kind = attachmentKindForFile(file, pickerKind);
    if (pickerKind === "photo") return kind === "photo";
    if (pickerKind === "video") return kind === "video";
    if (pickerKind === "document") return kind === "document";
    return true;
}

function pickerKindErrorMessage(pickerKind = "") {
    if (pickerKind === "photo") return "Choose a photo file from local storage.";
    if (pickerKind === "video") return "Choose a video file from local storage.";
    if (pickerKind === "document") return "Choose a document file from local storage.";
    return "Choose a supported file from local storage.";
}

function formatAttachmentSize(bytes) {
    const size = Number(bytes || 0);
    if (!Number.isFinite(size) || size <= 0) return "";
    if (size < 1024) return `${size} B`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

function clearPendingAttachment() {
    if (state.pendingAttachment?.objectUrl) {
        URL.revokeObjectURL(state.pendingAttachment.objectUrl);
    }
    state.pendingAttachment = null;
    renderPendingAttachmentPreview();
}

function setPendingAttachment(file, preferredKind = "") {
    if (!file) return;
    clearPendingAttachment();
    const mimeType = inferAttachmentMimeType(file, preferredKind);
    const isPreviewable = mimeType.startsWith("image/") || mimeType.startsWith("video/");
    state.pendingAttachment = {
        file,
        mimeType,
        kind: mimeType.startsWith("video/") ? "video" : mimeType.startsWith("image/") ? "photo" : "document",
        objectUrl: isPreviewable ? URL.createObjectURL(file) : "",
    };
    renderPendingAttachmentPreview();
    if (state.pendingAttachment.kind === "photo" || state.pendingAttachment.kind === "video") {
        openAttachmentReviewModal();
    }
}

function renderPendingAttachmentPreview() {
    if (!refs.attachmentPreview) return;
    const attachment = state.pendingAttachment;
    const showInlinePreview = Boolean(attachment && attachment.kind === "document");
    refs.attachmentPreview.classList.toggle("hidden", !showInlinePreview);
    refs.attachmentPreview.setAttribute("aria-hidden", showInlinePreview ? "false" : "true");
    if (!showInlinePreview) {
        refs.attachmentPreview.innerHTML = "";
        return;
    }
    const file = attachment.file;
    const sizeLabel = formatAttachmentSize(file.size);
    const media = attachment.kind === "photo"
        ? `<img class="attachment-preview-media" src="${escapeHtml(attachment.objectUrl)}" alt="${escapeHtml(file.name || "Selected photo")}" draggable="false">`
        : attachment.kind === "video"
            ? `<video class="attachment-preview-media" src="${escapeHtml(attachment.objectUrl)}" muted playsinline controls preload="metadata"></video>`
            : `<div class="attachment-preview-file" aria-hidden="true">${escapeHtml(fileExtension(file).replace(".", "").toUpperCase() || "FILE")}</div>`;
    refs.attachmentPreview.innerHTML = `
        <div class="attachment-preview-card">
            ${media}
            <div class="attachment-preview-copy">
                <strong>${escapeHtml(file.name || (attachment.kind === "video" ? "Video" : "Photo"))}</strong>
                <span>${escapeHtml(`${attachment.kind === "video" ? "Video" : attachment.kind === "photo" ? "Photo" : "Document"}${sizeLabel ? ` - ${sizeLabel}` : ""}`)}</span>
            </div>
            <button type="button" class="attachment-preview-send" data-send-attachment-preview>Send</button>
            <button type="button" class="attachment-preview-clear" data-clear-attachment-preview aria-label="Remove attachment">&times;</button>
        </div>
    `;
    refs.attachmentPreview.querySelector("[data-clear-attachment-preview]")?.addEventListener("click", clearPendingAttachment);
    refs.attachmentPreview.querySelector("[data-send-attachment-preview]")?.addEventListener("click", sendPendingAttachmentFromPreview);
}

function closeAttachmentReviewModal({ clear = false } = {}) {
    closeModalRoot();
    if (clear) clearPendingAttachment();
}

function openAttachmentReviewModal() {
    const attachment = state.pendingAttachment;
    const chat = currentChat();
    if (!attachment?.file || !attachment.objectUrl || !chat || chat.isWaveMind) return;
    const isVideo = attachment.kind === "video";
    const title = attachment.file.name || (isVideo ? "Video" : "Photo");
    const mediaHtml = isVideo
        ? `<video class="attachment-review-media" src="${escapeHtml(attachment.objectUrl)}" controls playsinline preload="metadata"></video>`
        : `<img class="attachment-review-media" src="${escapeHtml(attachment.objectUrl)}" alt="${escapeHtml(title)}" draggable="false">`;
    openModalRoot(`
        <div class="call-modal-overlay attachment-review-overlay">
            <div class="attachment-review-card" role="dialog" aria-modal="true" aria-label="Preview attachment">
                <header class="attachment-review-header">
                    <button type="button" class="attachment-review-close" data-attachment-review-cancel aria-label="Cancel attachment">&times;</button>
                    <strong>${escapeHtml(isVideo ? "Video preview" : "Photo preview")}</strong>
                    <button type="button" class="attachment-review-send" data-attachment-review-send aria-label="Send attachment">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 20 21 12 3 4l3.8 6.5L14 12l-7.2 1.5z" fill="currentColor"/></svg>
                    </button>
                </header>
                <div class="attachment-review-stage">${mediaHtml}</div>
                <footer class="attachment-review-footer">
                    <input type="text" data-attachment-review-caption placeholder="Add a caption" value="${escapeHtml(refs.messageInput?.value.trim() || "")}">
                </footer>
            </div>
        </div>
    `);
    refs.callModalRoot.querySelector("[data-attachment-review-cancel]")?.addEventListener("click", () => {
        closeAttachmentReviewModal({ clear: true });
    });
    refs.callModalRoot.querySelector("[data-attachment-review-send]")?.addEventListener("click", sendPendingAttachmentFromReview);
}

async function sendPendingAttachmentFromReview() {
    const chat = currentChat();
    const attachment = state.pendingAttachment;
    if (!chat || !attachment?.file) return;
    if (chat.isWaveMind) {
        showToast("Attachments can be sent to contacts, not WaveMind.", "info");
        return;
    }
    const caption = refs.callModalRoot.querySelector("[data-attachment-review-caption]")?.value.trim() || "";
    if (refs.messageInput) refs.messageInput.value = "";
    clearReplyContext();
    try {
        await uploadPendingAttachment(chat, caption);
        closeAttachmentReviewModal();
    } catch (error) {
        showToast(error.message, "error");
    }
}

async function uploadPendingAttachment(chat, caption = "") {
    const attachment = state.pendingAttachment;
    if (!chat || !attachment?.file) return false;
    const formData = new FormData();
    formData.append("chatId", String(chat.id));
    formData.append("clientMessageId", `media_${Date.now()}_${Math.random().toString(16).slice(2, 10)}`);
    formData.append("mimeType", attachment.mimeType || "application/octet-stream");
    formData.append("fileName", attachment.file.name || "attachment");
    formData.append("caption", caption || "");
    formData.append("file", attachment.file);
    const response = await apiFetch("/api/messages/media", { method: "POST", body: formData, headers: {} });
    handleIncomingMessage(response.message);
    clearPendingAttachment();
    return true;
}

async function sendPendingAttachmentFromPreview() {
    const chat = currentChat();
    if (!chat || !state.pendingAttachment) return;
    if (chat.isWaveMind) {
        showToast("Attachments can be sent to contacts, not WaveMind.", "info");
        return;
    }
    const caption = refs.messageInput?.value.trim() || "";
    if (refs.messageInput) refs.messageInput.value = "";
    clearReplyContext();
    try {
        await uploadPendingAttachment(chat, caption);
    } catch (error) {
        showToast(error.message, "error");
    }
}

function triggerFilePicker(input) {
    if (!input) return false;
    input.removeAttribute("disabled");
    input.focus?.({ preventScroll: true });
    if (typeof input.showPicker === "function") {
        try {
            input.showPicker();
            return true;
        } catch (error) {
            // Fall back to the legacy picker path for webviews that expose
            // showPicker but reject it for hidden inputs.
        }
    }
    input.click();
    return true;
}

function consumeUiTap(key, thresholdMs = 360) {
    const now = Date.now();
    const last = Number(state.uiTapTimestamps?.[key] || 0);
    if (now - last < thresholdMs) return true;
    state.uiTapTimestamps[key] = now;
    return false;
}

function openChatAttachmentPicker(accept, input = refs.fileInput, pickerKind = "any") {
    if (!currentChat()) {
        showToast("Open a chat first.", "info");
        return;
    }
    const picker = input || refs.fileInput;
    if (!picker) return;
    state.filePickerKind = pickerKind || "any";
    picker.value = "";
    picker.setAttribute("accept", accept || LOCAL_STORAGE_FILE_ACCEPT);
    picker.removeAttribute("capture");
    triggerFilePicker(picker);
}

function openAttachmentSheet() {
    if (!refs.attachmentSheet) return;
    if (!currentChat()) {
        showToast("Open a chat first.", "info");
        return;
    }
    syncCaptureViewportMetrics();
    state.attachmentSheetOpenedAt = Date.now();
    refs.attachmentSheet.classList.remove("hidden");
    refs.attachmentSheet.setAttribute("aria-hidden", "false");
    refs.attachmentBtn?.setAttribute("aria-expanded", "true");
    document.body.classList.add("attachment-sheet-open");
}

function closeAttachmentSheet() {
    refs.attachmentSheet?.classList.add("hidden");
    refs.attachmentSheet?.setAttribute("aria-hidden", "true");
    refs.attachmentBtn?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("attachment-sheet-open");
    state.attachmentSheetOpenedAt = 0;
}

function handleAttachmentAction(action) {
    if (!action) return;
    if (action === "photo") {
        openChatAttachmentPicker(LOCAL_STORAGE_FILE_ACCEPT, refs.fileInput, "photo");
        return;
    }
    if (action === "video") {
        openChatAttachmentPicker(LOCAL_STORAGE_FILE_ACCEPT, refs.fileInput, "video");
        return;
    }
    if (action === "document") {
        openChatAttachmentPicker(DOCUMENT_ATTACHMENT_ACCEPT, refs.fileInput, "document");
        return;
    }
    if (action === "camera") {
        closeAttachmentSheet();
        openCaptureModal("chat");
    }
}

function toggleAttachmentSheetFromEvent(event) {
    if (!refs.attachmentSheet) return;
    if ((event?.type === "pointerdown" || event?.type === "pointerup") && event.button != null && event.button !== 0) return;
    event?.preventDefault?.();
    event?.stopPropagation?.();
    if (consumeUiTap("attachment-toggle")) return;
    if (refs.attachmentSheet.classList.contains("hidden")) openAttachmentSheet();
    else closeAttachmentSheet();
}

function handleAttachmentSheetInteraction(event) {
    const actionRow = event.target.closest("[data-attachment-action]");
    if (!actionRow) return;
    const action = actionRow.dataset.attachmentAction;
    if (!action) return;
    if (event?.type === "pointerup" && event.button != null && event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();
    if (consumeUiTap(`attachment-action:${action}`)) return;
    handleAttachmentAction(action);
}

function handleAttachmentSheetDismiss(event) {
    if (Date.now() - Number(state.attachmentSheetOpenedAt || 0) < 320) {
        event?.preventDefault?.();
        event?.stopPropagation?.();
        return;
    }
    closeAttachmentSheet();
}

function findMediaViewerTarget(target) {
    return target?.closest?.(".message-bubble.media-bubble[data-media-src], .message-media-trigger, .message-media") || null;
}

function handleMediaViewerTargetInteraction(event) {
    if (event.target.closest?.("[data-message-more]")) return;
    if (state.selectionMode) return;
    const mediaElement = findMediaViewerTarget(event.target);
    if (!mediaElement) return;
    if (Date.now() < Number(state.suppressMessageTapUntil || 0)) return;
    if ((event?.type === "pointerup" || event?.type === "pointerdown") && event.button != null && event.button !== 0) return;
    const mediaKey = mediaElement.dataset.mediaSrc
        || mediaElement.currentSrc
        || mediaElement.getAttribute("src")
        || mediaElement.dataset.mediaTitle
        || "media";
    event.preventDefault();
    event.stopPropagation();
    if (consumeUiTap(`media-open:${mediaKey}`)) return;
    openMediaViewerFromElement(mediaElement);
}

function openMediaViewer({ kind = "image", src = "", title = "", caption = "" } = {}) {
    if (!src || !refs.mediaViewerStage) return;
    syncCaptureViewportMetrics();
    const safeSrc = escapeHtml(src);
    const safeTitle = escapeHtml(title || (kind === "video" ? "Video" : "Photo"));

    refs.mediaViewerTitle.textContent = title || (kind === "video" ? "Video" : "Photo");
    refs.mediaViewerCaption.textContent = caption || "";
    refs.mediaViewerCaption.classList.toggle("hidden", !caption);
    refs.mediaViewer.dataset.mediaKind = kind;
    refs.mediaViewerStage.innerHTML = kind === "video"
        ? `<video class="media-viewer-media" src="${safeSrc}" controls playsinline autoplay preload="metadata" aria-label="${safeTitle}"></video>`
        : `<img class="media-viewer-media" src="${safeSrc}" alt="${safeTitle}" draggable="false">`;
    refs.mediaViewer.classList.remove("hidden");
    refs.mediaViewer.setAttribute("aria-hidden", "false");
    document.body.classList.add("media-viewer-open");
    bindMediaOrientation(refs.mediaViewerStage);
    refs.mediaViewerStage.querySelector("video")?.play?.().catch(() => {});
}

function closeMediaViewer() {
    const activeVideo = refs.mediaViewerStage?.querySelector("video");
    activeVideo?.pause?.();
    if (refs.mediaViewerStage) refs.mediaViewerStage.innerHTML = "";
    refs.mediaViewer?.classList.add("hidden");
    refs.mediaViewer?.setAttribute("aria-hidden", "true");
    if (refs.mediaViewer) delete refs.mediaViewer.dataset.mediaKind;
    refs.mediaViewerCaption?.classList.add("hidden");
    if (refs.mediaViewerCaption) refs.mediaViewerCaption.textContent = "";
    document.body.classList.remove("media-viewer-open");
}

function openMediaViewerFromElement(mediaElement) {
    if (!mediaElement) return;
    const nestedMedia = mediaElement.matches?.(".message-bubble.media-bubble[data-media-src], .message-media-trigger")
        ? mediaElement.querySelector(".message-media")
        : null;
    const sourceElement = nestedMedia || mediaElement;
    const sourceTagName = (sourceElement.tagName || "").toLowerCase();
    const src = mediaElement.dataset.mediaSrc
        || sourceElement.currentSrc
        || sourceElement.getAttribute("src")
        || "";
    const kind = mediaElement.dataset.mediaKind
        || (sourceTagName === "video" ? "video" : "image");
    const title = mediaElement.dataset.mediaTitle
        || sourceElement.dataset.mediaTitle
        || sourceElement.getAttribute("alt")
        || (kind === "video" ? "Video" : "Photo");
    const caption = mediaElement.dataset.mediaCaption || sourceElement.dataset.mediaCaption || "";
    sourceElement.pause?.();
    openMediaViewer({ kind, src, title, caption });
}

function handleMediaViewerTargetActivation(event) {
    if (event.target.closest?.("[data-message-more]")) return;
    if (state.selectionMode) return;
    const mediaElement = findMediaViewerTarget(event.target);
    if (!mediaElement) return;
    if (Date.now() < Number(state.suppressMessageTapUntil || 0)) {
        event.preventDefault();
        return;
    }
    event.preventDefault();
    openMediaViewerFromElement(mediaElement);
}

function handleMediaViewerTargetKeydown(event) {
    if (event.key !== "Enter" && event.key !== " ") return;
    const mediaElement = findMediaViewerTarget(event.target);
    if (!mediaElement) return;
    event.preventDefault();
    openMediaViewerFromElement(mediaElement);
}

function renderReplyComposer() {
    const reply = state.replyContext;
    if (!refs.composerReply || !refs.composerReplyLabel || !refs.composerReplyPreview) return;
    refs.composerReply.classList.toggle("hidden", !reply);
    refs.composerReply.setAttribute("aria-hidden", reply ? "false" : "true");
    if (!reply) {
        refs.composerReplyLabel.textContent = "";
        refs.composerReplyPreview.textContent = "";
        return;
    }
    refs.composerReplyLabel.textContent = `Replying to ${reply.author || "message"}`;
    refs.composerReplyPreview.textContent = reply.preview || "Message";
}

function clearReplyContext() {
    state.replyContext = null;
    renderReplyComposer();
}

function setReplyContext(message) {
    if (!message) return;
    state.replyContext = {
        messageId: message.id,
        author: replyAuthorLabel(message),
        preview: messagePreviewText(message),
    };
    renderReplyComposer();
    refs.messageInput?.focus();
}

const MODAL_ROOT_MODE_CLASSES = [
    "message-action-modal-root",
    "chat-media-modal-root",
];

function openModalRoot(html, modeClass = "") {
    refs.callModalRoot.innerHTML = html;
    refs.callModalRoot.classList.remove(...MODAL_ROOT_MODE_CLASSES);
    if (modeClass) refs.callModalRoot.classList.add(modeClass);
    refs.callModalRoot.classList.remove("hidden");
    refs.callModalRoot.setAttribute("aria-hidden", "false");
}

function closeModalRoot() {
    refs.callModalRoot.classList.add("hidden");
    refs.callModalRoot.setAttribute("aria-hidden", "true");
    refs.callModalRoot.classList.remove(...MODAL_ROOT_MODE_CLASSES);
    refs.callModalRoot.innerHTML = "";
}

function currentMessageById(messageId, chatId = state.activeChatId) {
    const messages = state.messagesByChat.get(chatId) || [];
    return messages.find((item) => Number(item.id) === Number(messageId)) || null;
}

function isMessageSelected(messageId) {
    return state.selectedMessageIds.has(Number(messageId));
}

function clearMessageSelection() {
    state.selectionMode = false;
    state.selectedMessageIds.clear();
    renderMessages();
}

function toggleMessageSelection(messageId) {
    const id = Number(messageId);
    if (!id) return;
    state.selectionMode = true;
    if (state.selectedMessageIds.has(id)) state.selectedMessageIds.delete(id);
    else state.selectedMessageIds.add(id);
    if (!state.selectedMessageIds.size) state.selectionMode = false;
    renderMessages();
}

function handleMessageSelectionClick(event) {
    const moreButton = event.target.closest("[data-message-more]");
    if (moreButton) {
        event.preventDefault();
        event.stopPropagation();
        openMessageActionSheet(
            currentMessageById(Number(moreButton.dataset.messageMore)),
            moreButton.closest("[data-message-id]"),
        );
        return;
    }
    const selectButton = event.target.closest("[data-message-select]");
    if (selectButton) {
        event.preventDefault();
        event.stopPropagation();
        toggleMessageSelection(selectButton.dataset.messageSelect);
        return;
    }
    if (!state.selectionMode) return;
    const row = event.target.closest("[data-message-id]");
    if (!row || event.target.closest(".message-selection-toolbar")) return;
    event.preventDefault();
    event.stopPropagation();
    toggleMessageSelection(row.dataset.messageId);
}

function selectedMessages() {
    const messages = state.messagesByChat.get(state.activeChatId) || [];
    return messages.filter((message) => state.selectedMessageIds.has(Number(message.id)));
}

async function copyMessageText(message) {
    const text = message?.kind === "media" ? (message.caption || message.fileName || "") : (message?.text || "");
    if (!text) {
        showToast("Nothing to copy.", "info");
        return;
    }
    try {
        await navigator.clipboard.writeText(text);
        showToast("Copied.");
    } catch {
        showToast("Copy failed.", "error");
    }
}

function saveMessageMedia(message) {
    if (!message?.mediaUrl) {
        showToast("No file to save.", "info");
        return;
    }
    const link = document.createElement("a");
    link.href = message.mediaUrl;
    link.download = message.fileName || "attachment";
    link.rel = "noreferrer";
    document.body.appendChild(link);
    link.click();
    link.remove();
}

function openMessageInfo(message) {
    if (!message) return;
    const sentLabel = formatAbsoluteDateTime(message.createdAt);
    const deliveredLabel = message.deliveredAt ? formatAbsoluteDateTime(message.deliveredAt) : "Not delivered yet";
    const readLabel = message.readAt ? formatAbsoluteDateTime(message.readAt) : "Not read yet";
    openModalRoot(`
        <div class="call-modal-overlay message-sheet-overlay message-action-overlay">
            <button type="button" class="message-sheet-backdrop" data-message-sheet-close aria-label="Close message info"></button>
            <div class="message-action-sheet" role="dialog" aria-modal="true" aria-label="Message info">
                <div class="message-action-copy">
                    <strong>Message info</strong>
                </div>
                <div class="message-info-list">
                    <div><span>Sent</span><strong>${escapeHtml(sentLabel)}</strong></div>
                    <div><span>Delivered</span><strong>${escapeHtml(deliveredLabel)}</strong></div>
                    <div><span>Read</span><strong>${escapeHtml(readLabel)}</strong></div>
                </div>
                <button type="button" class="message-action-btn cancel" data-message-sheet-close>Close</button>
            </div>
        </div>
    `, "message-action-modal-root");
    refs.callModalRoot.querySelectorAll("[data-message-sheet-close]").forEach((button) => button.addEventListener("click", closeModalRoot));
}

async function deleteSelectedMessages() {
    const messages = selectedMessages();
    if (!messages.length) return;
    let deleted = 0;
    for (const message of messages) {
        if (!message.fromSelf) continue;
        try {
            await deleteMessage(message, { silent: true });
            deleted += 1;
        } catch {
            // Keep deleting the rest; show one summary below.
        }
    }
    clearMessageSelection();
    showToast(deleted ? `Deleted ${deleted} message${deleted === 1 ? "" : "s"}.` : "Only sent messages can be deleted.", deleted ? "default" : "error");
}

function forwardSelectedMessages() {
    const messages = selectedMessages();
    if (!messages.length) {
        showToast("Select a message to forward.", "info");
        return;
    }
    openMessageForwardSheet(messages);
}

function findMessageRowElement(messageId) {
    return Array.from(refs.messages?.querySelectorAll("[data-message-id]") || [])
        .find((row) => String(row.dataset.messageId) === String(messageId)) || null;
}

function positionMessageActionSheet(messageId, anchorElement = null) {
    const overlay = refs.callModalRoot.querySelector("[data-message-action-overlay]");
    const sheet = refs.callModalRoot.querySelector(".message-action-sheet-compact");
    const row = anchorElement?.closest?.("[data-message-id]") || findMessageRowElement(messageId);
    const bubble = row?.querySelector(".message-bubble") || row;
    if (!overlay || !sheet || !bubble) return;

    const overlayRect = overlay.getBoundingClientRect();
    const bubbleRect = bubble.getBoundingClientRect();
    const sheetRect = sheet.getBoundingClientRect();
    const margin = 8;
    const isSelf = row?.classList.contains("self");
    const desiredLeft = isSelf
        ? bubbleRect.right - overlayRect.left - sheetRect.width
        : bubbleRect.left - overlayRect.left;
    const left = Math.min(
        Math.max(margin, desiredLeft),
        Math.max(margin, overlayRect.width - sheetRect.width - margin),
    );
    const belowTop = bubbleRect.bottom - overlayRect.top + 6;
    const aboveTop = bubbleRect.top - overlayRect.top - sheetRect.height - 6;
    const maxTop = Math.max(margin, overlayRect.height - sheetRect.height - margin);
    const top = belowTop <= maxTop
        ? Math.max(margin, belowTop)
        : Math.max(margin, Math.min(aboveTop, maxTop));

    overlay.style.setProperty("--message-action-left", `${Math.round(left)}px`);
    overlay.style.setProperty("--message-action-top", `${Math.round(top)}px`);
}

function openMessageActionSheet(message, anchorElement = null) {
    if (!message) return;
    state.suppressMessageTapUntil = Date.now() + 700;
    const actions = [
        `<button type="button" class="message-action-btn" data-message-action="select" data-message-id="${message.id}">Select</button>`,
        message.kind === "media" ? `<button type="button" class="message-action-btn" data-message-action="save" data-message-id="${message.id}">Save as</button>` : "",
        `<button type="button" class="message-action-btn" data-message-action="info" data-message-id="${message.id}">Message info</button>`,
        `<button type="button" class="message-action-btn" data-message-action="reply" data-message-id="${message.id}">Reply</button>`,
        message.kind !== "media" ? `<button type="button" class="message-action-btn" data-message-action="copy" data-message-id="${message.id}">Copy</button>` : "",
        `<button type="button" class="message-action-btn" data-message-action="forward" data-message-id="${message.id}">Forward</button>`,
    ].filter(Boolean);
    if (message.fromSelf) {
        actions.push(`<button type="button" class="message-action-btn danger" data-message-action="delete" data-message-id="${message.id}">Delete</button>`);
    }
    openModalRoot(`
        <div class="call-modal-overlay message-sheet-overlay message-action-overlay message-action-overlay-anchored" data-message-action-overlay>
            <button type="button" class="message-sheet-backdrop" data-message-sheet-close aria-label="Close message options"></button>
            <div class="message-action-sheet message-action-sheet-compact" role="dialog" aria-modal="true" aria-label="Message options">
                <div class="message-action-copy">
                    <strong>${escapeHtml(message.fromSelf ? "Your message" : "Message")}</strong>
                    <span>${escapeHtml(messagePreviewText(message))}</span>
                </div>
                <div class="message-action-list">
                    ${actions.join("")}
                </div>
            </div>
        </div>
    `, "message-action-modal-root");
    requestAnimationFrame(() => positionMessageActionSheet(message.id, anchorElement));
    refs.callModalRoot.querySelector("[data-message-sheet-close]")?.addEventListener("click", closeModalRoot);
    refs.callModalRoot.querySelectorAll("[data-message-action]").forEach((button) => {
        button.addEventListener("click", async () => {
            const action = button.dataset.messageAction;
            if (action === "cancel") {
                closeModalRoot();
                return;
            }
            if (action === "reply") {
                setReplyContext(message);
                closeModalRoot();
                return;
            }
            if (action === "select") {
                closeModalRoot();
                toggleMessageSelection(message.id);
                return;
            }
            if (action === "info") {
                openMessageInfo(message);
                return;
            }
            if (action === "copy") {
                closeModalRoot();
                await copyMessageText(message);
                return;
            }
            if (action === "save") {
                closeModalRoot();
                saveMessageMedia(message);
                return;
            }
            if (action === "forward") {
                openMessageForwardSheet(message);
                return;
            }
            if (action === "delete") {
                closeModalRoot();
                await deleteMessage(message);
            }
        });
    });
}

function openMessageForwardSheet(messageOrMessages) {
    const messages = (Array.isArray(messageOrMessages) ? messageOrMessages : [messageOrMessages]).filter(Boolean);
    if (!messages.length) return;
    const preview = messages.length === 1
        ? messagePreviewText(messages[0])
        : `${messages.length} selected messages`;
    const forwardTargets = [
        waveMindChat(),
        ...state.chats.filter((chat) => !isWaveMindChatId(chat.id)),
    ];
    const chatButtons = forwardTargets.length
        ? forwardTargets.map((chat) => {
            const user = counterpartForChat(chat);
            return `
                <button type="button" class="message-forward-row${chat.isWaveMind ? " wavemind-forward-row" : ""}" data-forward-chat-id="${escapeHtml(chat.id)}">
                    ${avatarMarkup(user, "message-forward-avatar", true, { preferPhotoOnly: true })}
                    <div class="message-forward-copy">
                        <strong>${escapeHtml(user?.displayName || primaryContactIdentifier(user) || "Contact")}</strong>
                        <span>${escapeHtml(chat.isWaveMind ? "AI assistant" : displayContactIdentifier(user))}</span>
                    </div>
                </button>
            `;
        }).join("")
        : `<div class="message-forward-empty">No chats available yet.</div>`;
    openModalRoot(`
        <div class="call-modal-overlay message-sheet-overlay message-action-overlay">
            <button type="button" class="message-sheet-backdrop" data-message-sheet-close aria-label="Close forward options"></button>
            <div class="message-action-sheet message-forward-sheet" role="dialog" aria-modal="true" aria-label="Forward message">
                <div class="message-action-copy">
                    <strong>Forward message</strong>
                    <span>${escapeHtml(preview)}</span>
                </div>
                <div class="message-forward-list">
                    ${chatButtons}
                </div>
                <button type="button" class="message-action-btn cancel full" data-message-sheet-close>Cancel</button>
            </div>
        </div>
    `, "message-action-modal-root");
    refs.callModalRoot.querySelectorAll("[data-message-sheet-close]").forEach((button) => {
        button.addEventListener("click", closeModalRoot);
    });
    bindChatListAvatarImages(refs.callModalRoot);
    refs.callModalRoot.querySelectorAll("[data-forward-chat-id]").forEach((button) => {
        button.addEventListener("click", async () => {
            const targetChatId = normalizeChatIdValue(button.dataset.forwardChatId);
            closeModalRoot();
            if (isWaveMindChatId(targetChatId)) {
                await forwardMessagesToWaveMind(messages);
                return;
            }
            await forwardMessagesToChat(messages, targetChatId);
        });
    });
}

async function deleteMessage(message, options = {}) {
    if (!message?.id) return;
    try {
        const payload = await apiFetch(`/api/messages/${message.id}`, { method: "DELETE", body: "{}" });
        if (!state.socket?.connected) {
            handleDeletedMessage(payload);
        }
        if (!options.silent) showToast("Message deleted.");
    } catch (error) {
        if (!options.silent) showToast(error.message, "error");
        throw error;
    }
}

async function forwardMessageToChat(message, chatId, options = {}) {
    if (!message?.id || !chatId) return;
    try {
        const payload = await apiFetch(`/api/messages/${message.id}/forward`, {
            method: "POST",
            body: JSON.stringify({ chatId }),
        });
        if (!state.socket?.connected && payload?.message) {
            handleIncomingMessage(payload.message);
        }
        if (!options.silent) showToast("Message forwarded.");
        return true;
    } catch (error) {
        if (!options.silent) showToast(error.message, "error");
        return false;
    }
}

function waveMindForwardLine(message) {
    const preview = messagePreviewText(message, "Message").replace(/\s+/g, " ").trim();
    if (message.kind !== "media") return preview;
    const mediaType = String(message.mimeType || "").startsWith("image/")
        ? "Photo"
        : String(message.mimeType || "").startsWith("video/")
            ? "Video"
            : "Document";
    const fileLabel = message.fileName ? ` (${message.fileName})` : "";
    return `${mediaType}${fileLabel}: ${preview}`;
}

function waveMindForwardPrompt(messages) {
    const lines = messages.map(waveMindForwardLine).filter(Boolean);
    if (!lines.length) return "";
    if (lines.length === 1) {
        return `Forwarded message:\n${lines[0]}\n\nPlease help me with this.`;
    }
    return `Forwarded messages:\n${lines.map((line, index) => `${index + 1}. ${line}`).join("\n")}\n\nPlease help me with these messages.`;
}

async function forwardMessagesToWaveMind(messages) {
    if (state.wavemindBusy) {
        showToast("WaveMind is still answering. Try again shortly.", "info");
        return;
    }
    const prompt = waveMindForwardPrompt(messages);
    if (!prompt) {
        showToast("Nothing to forward to WaveMind.", "info");
        return;
    }
    if (state.selectionMode) clearMessageSelection();
    await submitWaveMindPrompt(prompt);
    showToast("Forwarded to WaveMind.");
}

async function forwardMessagesToChat(messages, chatId) {
    let forwarded = 0;
    for (const message of messages) {
        if (await forwardMessageToChat(message, chatId, { silent: true })) forwarded += 1;
    }
    if (state.selectionMode) clearMessageSelection();
    showToast(forwarded ? `Forwarded ${forwarded} message${forwarded === 1 ? "" : "s"}.` : "Forward failed.", forwarded ? "default" : "error");
}

function clearMessageHoldTimer() {
    if (!state.messageHoldTimer) return;
    clearTimeout(state.messageHoldTimer);
    state.messageHoldTimer = null;
}

function handleMessageHoldStart(event) {
    if (isWaveMindChatId(state.activeChatId)) return;
    const messageRow = event.target.closest?.("[data-message-id]");
    if (!messageRow) return;
    if (state.selectionMode) return;
    if (event.target.closest("a.message-attachment")) return;
    if (event.target.closest(".message-status")) return;
    if (event.type === "pointerdown" && event.button != null && event.button !== 0) return;
    clearMessageHoldTimer();
    const messageId = Number(messageRow.dataset.messageId);
    state.heldMessageId = messageId;
    state.messageHoldTimer = setTimeout(() => {
        state.messageHoldTimer = null;
        const message = currentMessageById(messageId);
        if (message) openMessageActionSheet(message, messageRow);
    }, 420);
}

function handleMessageHoldEnd() {
    clearMessageHoldTimer();
    state.heldMessageId = null;
}

function buildMessageMarkup(message) {
    const parsedReply = message.kind === "text"
        ? extractReplyData(message.text)
        : { text: message.text || "", reply: null };
    const isMediaMessage = message.kind === "media";
    const isImageMessage = isMediaMessage && (message.mimeType || "").startsWith("image/");
    const isVideoMessage = isMediaMessage && (message.mimeType || "").startsWith("video/");
    const isWaveMindAssistantText = message.kind === "text" && isWaveMindChatId(message.chatId) && !message.fromSelf;
    const isSelected = isMessageSelected(message.id);
    const mediaBubbleAttributes = isImageMessage || isVideoMessage
        ? ` data-media-src="${escapeHtml(message.mediaUrl)}" data-media-kind="${isVideoMessage ? "video" : "image"}" data-media-title="${escapeHtml(message.fileName || (isVideoMessage ? "Video" : "Photo"))}" data-media-caption="${escapeHtml(message.caption || "")}" tabindex="0" role="button" aria-label="Open ${isVideoMessage ? "video" : "photo"} full screen"`
        : "";
    const body = message.kind === "media"
        ? ((message.mimeType || "").startsWith("image/")
            ? `<img class="message-media" src="${escapeHtml(message.mediaUrl)}" alt="${escapeHtml(message.fileName || "Photo")}" data-media-title="${escapeHtml(message.fileName || "Photo")}" data-media-caption="${escapeHtml(message.caption || "")}" draggable="false">${message.caption ? `<p class="message-caption">${escapeHtml(message.caption)}</p>` : ""}`
            : (message.mimeType || "").startsWith("video/")
                ? `<video class="message-media" src="${escapeHtml(message.mediaUrl)}" controls playsinline preload="metadata" data-media-title="${escapeHtml(message.fileName || "Video")}" data-media-caption="${escapeHtml(message.caption || "")}" tabindex="-1" aria-hidden="true"></video>${message.caption ? `<p class="message-caption">${escapeHtml(message.caption)}</p>` : ""}`
                : `<a class="message-attachment" href="${escapeHtml(message.mediaUrl)}" target="_blank" rel="noreferrer">${escapeHtml(message.fileName || "Attachment")}</a>`)
        : `
            ${parsedReply.reply
                ? `<div class="message-reply-chip">
                    <strong>${escapeHtml(parsedReply.reply.author || "Reply")}</strong>
                    <span>${escapeHtml(parsedReply.reply.preview || "Message")}</span>
                </div>`
                : ""}
            ${isWaveMindAssistantText
                ? `<div class="message-text wavemind-rich-text">${renderWaveMindContent(parsedReply.text || "")}</div>`
                : `<p class="message-text">${escapeHtml(parsedReply.text || "")}</p>`}
        `;
    return `
        <article class="message-row${message.fromSelf ? " self outgoing" : " other incoming"}${state.selectionMode ? " selection-mode" : ""}${isSelected ? " selected" : ""}" data-message-id="${message.id}">
            ${state.selectionMode ? `<button type="button" class="message-select-check" data-message-select="${message.id}" aria-label="${isSelected ? "Unselect" : "Select"} message">${isSelected ? "✓" : ""}</button>` : ""}
            <div class="message-bubble ${message.fromSelf ? "outgoing" : "incoming"}${message.kind === "media" ? " media-bubble" : ""}"${mediaBubbleAttributes}>
                ${body}
                <div class="message-meta">
                    <time>${escapeHtml(formatMessageTime(message.createdAt))}</time>
                    ${message.fromSelf ? `<span class="message-status status-${escapeHtml(message.status || "sent")}">${message.status === "read" ? "Read" : message.status === "delivered" ? "Delivered" : "Sent"}</span>` : ""}
                </div>
            </div>
        </article>
    `;
}

function renderConversationHeader() {
    const chat = currentChat();
    const user = counterpartForChat(chat);
    if (!chat || !user) {
        refs.conversationTitle.textContent = "Conversation";
        refs.conversationStatus.textContent = "";
        applyAvatarElement(refs.conversationAvatar, null);
        refs.conversationMetaBtn?.setAttribute("aria-disabled", "false");
        syncWaveMindConversationUi();
        return;
    }
    const isWaveMind = Boolean(chat.isWaveMind);
    refs.conversationTitle.textContent = user.displayName || primaryContactIdentifier(user) || "Contact";
    refs.conversationStatus.textContent = isWaveMind
        ? (state.wavemindBusy ? "Thinking..." : "AI assistant")
        : (user.isOnline ? "Online" : "Offline");
    applyAvatarElement(refs.conversationAvatar, user);
    refs.conversationMetaBtn?.setAttribute("aria-disabled", isWaveMind ? "true" : "false");
    refs.conversationMetaBtn?.setAttribute("aria-label", isWaveMind ? "WaveMind AI chat" : "View contact");
    refs.voiceCallBtn.hidden = false;
    refs.voiceCallBtn.title = isWaveMind ? "Call WaveMind" : "Voice call";
    refs.voiceCallBtn.setAttribute("aria-label", isWaveMind ? "Call WaveMind" : "Voice call");
    refs.videoCallBtn.hidden = isWaveMind;
    refs.chatInfoBtn.hidden = isWaveMind;
    refs.attachmentBtn.hidden = isWaveMind;
    if (isWaveMind) {
        refs.chatMenu?.classList.add("hidden");
        refs.chatInfoBtn?.setAttribute("aria-expanded", "false");
    }
    refs.messageInput.placeholder = isWaveMind ? "Ask WaveMind" : "Message";
    syncWaveMindConversationUi();
}

function renderMessages() {
    const messages = isWaveMindChatId(state.activeChatId)
        ? waveMindConversationMessages()
        : (state.messagesByChat.get(state.activeChatId) || []);
    const selectionToolbar = state.selectionMode ? `
        <div class="message-selection-toolbar">
            <strong>${state.selectedMessageIds.size} selected</strong>
            <button type="button" data-selection-forward>Forward</button>
            <button type="button" data-selection-delete>Delete</button>
            <button type="button" data-selection-cancel>Cancel</button>
        </div>
    ` : "";
    refs.messages.innerHTML = messages.length
        ? `${selectionToolbar}${messages.map(buildMessageMarkup).join("")}`
        : `<div class="call-modal-empty">No messages yet. Say hello.</div>`;
    refs.messages.querySelector("[data-selection-forward]")?.addEventListener("click", forwardSelectedMessages);
    refs.messages.querySelector("[data-selection-delete]")?.addEventListener("click", deleteSelectedMessages);
    refs.messages.querySelector("[data-selection-cancel]")?.addEventListener("click", clearMessageSelection);
    bindMediaOrientation(refs.messages);
    refs.messagesScroller.scrollTop = refs.messagesScroller.scrollHeight;
}

async function markChatRead(chatId) {
    try {
        await apiFetch(`/api/chats/${chatId}/read`, { method: "POST", body: "{}" });
        const chat = chatById(chatId);
        if (chat) {
            chat.unreadCount = 0;
            updateNavBadges();
            if (state.screen === "chats") renderChatsList();
        }
    } catch {
        // Ignore temporary read failures.
    }
}

async function loadMessages(chatId) {
    try {
        const data = await apiFetch(`/api/chats/${chatId}/messages`);
        state.messagesByChat.set(chatId, data.messages || []);
        renderConversationHeader();
        renderMessages();
        markChatRead(chatId);
    } catch (error) {
        showToast(error.message, "error");
    }
}

function openConversation(chatId) {
    if (String(state.activeChatId) !== String(chatId)) clearPendingAttachment();
    state.activeChatId = chatId;
    if (!isWaveMindChatId(chatId)) {
        state.visibleContactChatId = chatId;
    }
    clearReplyContext();
    setScreen("conversation");
    renderChatsList();
    renderConversationHeader();
    if (isWaveMindChatId(chatId)) {
        renderMessages();
        return;
    }
    loadMessages(chatId);
}

function syncMessageIntoChat(chatId, message) {
    const messages = state.messagesByChat.get(chatId) || [];
    const index = messages.findIndex((item) => item.id === message.id || item.clientMessageId === message.clientMessageId);
    if (index >= 0) {
        messages[index] = { ...messages[index], ...message };
    } else {
        messages.push(message);
    }
    messages.sort((left, right) => (parseServerDate(left.createdAt)?.getTime() || 0) - (parseServerDate(right.createdAt)?.getTime() || 0));
    state.messagesByChat.set(chatId, messages);
}

function updateChatSummary(chatId, message, options = {}) {
    const chat = chatById(chatId);
    if (!chat) return;
    chat.lastMessage = message;
    chat.updatedAt = message.createdAt || new Date().toISOString();
    if (!message.fromSelf && state.activeChatId !== chatId) {
        chat.unreadCount = Number(chat.unreadCount || 0) + 1;
    }
    if (options.read) {
        chat.unreadCount = 0;
    }
    sortChats();
    updateNavBadges();
    if (state.screen === "chats") renderChatsList();
}

function updateChatSummaryAfterDelete(chatId, lastMessage, updatedAt) {
    const chat = chatById(chatId);
    if (!chat) return;
    chat.lastMessage = lastMessage || null;
    if (updatedAt) {
        chat.updatedAt = updatedAt;
    }
    sortChats();
    updateNavBadges();
    if (state.screen === "chats") renderChatsList();
}

function handleIncomingMessage(message) {
    if (!message || !message.chatId) return;
    syncMessageIntoChat(message.chatId, message);
    const isActiveChat = String(state.activeChatId) === String(message.chatId);
    updateChatSummary(message.chatId, message, { read: isActiveChat && !message.fromSelf });
    if (isActiveChat) {
        renderMessages();
        if (!message.fromSelf) {
            state.socket?.emit("message_delivered", { messageId: message.id });
            markChatRead(message.chatId);
        }
    }
}

function handleDeletedMessage(payload) {
    if (!payload?.chatId || !payload?.messageId) return;
    const messages = state.messagesByChat.get(payload.chatId) || [];
    state.messagesByChat.set(
        payload.chatId,
        messages.filter((message) => Number(message.id) !== Number(payload.messageId)),
    );
    if (state.replyContext?.messageId === payload.messageId) {
        clearReplyContext();
    }
    updateChatSummaryAfterDelete(payload.chatId, payload.lastMessage || null, payload.updatedAt || null);
    if (String(state.activeChatId) === String(payload.chatId)) {
        renderMessages();
    }
}

function handleMessageStatusUpdate(payload) {
    if (!payload?.messageId) return;
    state.messagesByChat.forEach((messages, chatId) => {
        const index = messages.findIndex((message) => message.id === payload.messageId);
        if (index < 0) return;
        messages[index] = {
            ...messages[index],
            status: payload.status || messages[index].status,
            deliveredAt: payload.deliveredAt || messages[index].deliveredAt,
            readAt: payload.readAt || messages[index].readAt,
        };
        if (chatId === state.activeChatId) renderMessages();
    });
}

async function handleMessageFileSelected(event) {
    const chat = currentChat();
    const file = event.target.files?.[0];
    const preferredKind = state.filePickerKind || (event.target === refs.chatPhotoInput
        ? "photo"
        : event.target === refs.chatVideoInput
            ? "video"
            : event.target === refs.chatDocumentInput
                ? "document"
                : "");
    event.target.value = "";
    resetChatAttachmentInput();
    if (file) closeAttachmentSheet();
    if (file && state.replyContext) clearReplyContext();
    if (!chat || !file) return;
    if (chat.isWaveMind) {
        showToast("Attachments can be sent to contacts, not WaveMind.", "info");
        return;
    }
    if (!fileMatchesPickerKind(file, preferredKind)) {
        showToast(pickerKindErrorMessage(preferredKind), "error");
        return;
    }
    setPendingAttachment(file, preferredKind);
    if (state.pendingAttachment?.kind === "document") refs.messageInput?.focus();
}

async function handleStatusFileSelected(event) {
    const file = event.target.files?.[0];
    const preferredKind = state.statusPickerKind || "";
    state.statusPickerKind = "";
    event.target.value = "";
    if (!file) return;
    if (!fileMatchesPickerKind(file, preferredKind)) {
        showToast(pickerKindErrorMessage(preferredKind), "error");
        return;
    }
    const mimeType = inferAttachmentMimeType(file, preferredKind);
    const formData = new FormData();
    formData.append("file", file, file.name || (preferredKind === "video" ? "story-video.mp4" : "story-photo.jpg"));
    formData.append("mimeType", mimeType);
    try {
        const response = await apiFetch("/api/status", { method: "POST", body: formData, headers: {} });
        upsertStatusPost(response.status);
        updateNavBadges();
        if (state.screen === "status") renderStoriesScreen();
        showToast("Story added.");
    } catch (error) {
        showToast(error.message, "error");
    }
}

async function uploadProfilePhotoFile(file) {
    if (!file) return;
    const mimeType = inferAttachmentMimeType(file, "photo");
    const formData = new FormData();
    formData.append("file", file, file.name || "profile-photo.jpg");
    formData.append("mimeType", mimeType);
    try {
        const response = await apiFetch("/api/me/avatar", { method: "POST", body: formData, headers: {} });
        mergeUserProfile(response.user);
        showToast("Profile photo updated.");
    } catch (error) {
        showToast(error.message, "error");
    }
}

function openProfilePhotoPicker() {
    if (!refs.profilePhotoInput) return;
    refs.profilePhotoInput.value = "";
    refs.profilePhotoInput.setAttribute("accept", LOCAL_STORAGE_FILE_ACCEPT);
    refs.profilePhotoInput.removeAttribute("capture");
    triggerFilePicker(refs.profilePhotoInput);
}

async function handleProfilePhotoSelected(event) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    if (attachmentKindForFile(file, "photo") !== "photo") {
        showToast("Choose a photo file from local storage.", "error");
        return;
    }
    await uploadProfilePhotoFile(file);
}

async function toggleMuteChat(chat) {
    try {
        const response = await apiFetch(`/api/chats/${chat.id}/mute`, {
            method: "POST",
            body: JSON.stringify({ muted: !chat.isMuted }),
        });
        chat.isMuted = Boolean(response.isMuted);
        renderSidebarScreen();
        showToast(chat.isMuted ? "Notifications muted." : "Notifications unmuted.");
    } catch (error) {
        showToast(error.message, "error");
    }
}

async function deleteChat(chat) {
    try {
        await apiFetch(`/api/chats/${chat.id}`, { method: "DELETE", body: "{}" });
        removeChatLocally(chat.id);
        updateNavBadges();
        showToast("Chat deleted.");
    } catch (error) {
        showToast(error.message, "error");
    }
}

function removeChatLocally(chatId) {
    const deletedChatId = String(chatId);
    state.chats = state.chats.filter((item) => String(item.id) !== deletedChatId);
    state.messagesByChat.delete(chatId);
    state.messagesByChat.delete(deletedChatId);
    const numericChatId = Number(chatId);
    if (!Number.isNaN(numericChatId)) state.messagesByChat.delete(numericChatId);
    if (String(state.visibleContactChatId) === deletedChatId) {
        state.visibleContactChatId = state.chats[0]?.id || null;
    }
    if (String(state.activeChatId) === deletedChatId) {
        state.activeChatId = null;
        setScreen("chats");
    } else {
        renderSidebarScreen();
    }
}

async function logout() {
    try {
        await apiFetch("/auth/logout", { method: "POST", body: "{}" });
        window.location.href = "/login";
    } catch (error) {
        showToast(error.message, "error");
    }
}

function openStorySheet() {
    refs.storySheet.classList.remove("hidden");
    refs.storySheet.setAttribute("aria-hidden", "false");
}

function closeStorySheet() {
    refs.storySheet.classList.add("hidden");
    refs.storySheet.setAttribute("aria-hidden", "true");
}

function resetStoryProgress() {
    clearTimeout(state.storyProgressTimeout);
    clearTimeout(state.storyTapTimer);
    state.storyProgressTimeout = null;
    state.storyTapTimer = null;
    state.storyProgressStartedAt = 0;
    state.storyProgressDuration = 0;
    state.storyProgressRemaining = 0;
    state.storyPaused = false;
    refs.storyViewerBody?.classList.remove("story-media-zoomed");
    if (refs.storyViewerProgressBar) {
        refs.storyViewerProgressBar.style.setProperty("transition", "none", "important");
        refs.storyViewerProgressBar.style.setProperty("transform", "scaleX(0)", "important");
    }
}

function startStoryProgress(durationMs = 5500) {
    const duration = Math.max(1200, Math.round(Number(durationMs) || 0));
    resetStoryProgress();
    state.storyProgressStartedAt = Date.now();
    state.storyProgressDuration = duration;
    state.storyProgressRemaining = duration;
    state.storyPaused = false;
    if (refs.storyViewerProgressBar) {
        refs.storyViewerProgressBar.style.setProperty("transition", "none", "important");
        refs.storyViewerProgressBar.style.setProperty("transform", "scaleX(0)", "important");
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                refs.storyViewerProgressBar.style.setProperty("transition", `transform ${duration}ms linear`, "important");
                refs.storyViewerProgressBar.style.setProperty("transform", "scaleX(1)", "important");
            });
        });
    }
    state.storyProgressTimeout = setTimeout(openNextStoryInGroup, duration);
}

function activeStoryVideoElement() {
    return refs.storyViewerBody?.querySelector("video.story-viewer-media") || null;
}

function pauseStoryProgress() {
    if (state.storyPaused || !state.storyProgressDuration) return;
    clearTimeout(state.storyProgressTimeout);
    state.storyProgressTimeout = null;
    const elapsed = Math.max(0, Date.now() - Number(state.storyProgressStartedAt || Date.now()));
    const remaining = Math.max(350, Number(state.storyProgressDuration || 0) - elapsed);
    const ratio = Math.min(1, Math.max(0, elapsed / Number(state.storyProgressDuration || 1)));
    state.storyProgressRemaining = remaining;
    state.storyPaused = true;
    if (refs.storyViewerProgressBar) {
        refs.storyViewerProgressBar.style.setProperty("transition", "none", "important");
        refs.storyViewerProgressBar.style.setProperty("transform", `scaleX(${ratio})`, "important");
    }
    activeStoryVideoElement()?.pause?.();
}

function resumeStoryProgress() {
    if (!state.storyPaused) return;
    const remaining = Math.max(350, Number(state.storyProgressRemaining || 0));
    state.storyProgressStartedAt = Date.now();
    state.storyProgressDuration = remaining;
    state.storyProgressRemaining = remaining;
    state.storyPaused = false;
    if (refs.storyViewerProgressBar) {
        refs.storyViewerProgressBar.style.setProperty("transition", `transform ${remaining}ms linear`, "important");
        refs.storyViewerProgressBar.style.setProperty("transform", "scaleX(1)", "important");
    }
    clearTimeout(state.storyProgressTimeout);
    state.storyProgressTimeout = setTimeout(openNextStoryInGroup, remaining);
    activeStoryVideoElement()?.play?.().catch(() => {});
}

function toggleStoryPause() {
    if (state.storyPaused) resumeStoryProgress();
    else pauseStoryProgress();
}

function toggleStoryMediaZoom() {
    refs.storyViewerBody?.classList.toggle("story-media-zoomed");
    pauseStoryProgress();
}

function handleStoryViewerBodyClick(event) {
    if (event.target.closest?.("button, input, a, .story-owner-panel")) return;
    if (!event.target.closest?.(".story-viewer-media, .story-viewer-text")) return;
    event.preventDefault();
    event.stopPropagation();
    clearTimeout(state.storyTapTimer);
    state.storyTapTimer = setTimeout(() => {
        state.storyTapTimer = null;
        toggleStoryPause();
    }, 180);
}

function handleStoryViewerBodyDoubleClick(event) {
    if (event.target.closest?.("button, input, a, .story-owner-panel")) return;
    if (!event.target.closest?.(".story-viewer-media, .story-viewer-text")) return;
    event.preventDefault();
    event.stopPropagation();
    clearTimeout(state.storyTapTimer);
    state.storyTapTimer = null;
    toggleStoryMediaZoom();
}

function handleStoryViewerBodyKeydown(event) {
    if (event.key !== "Enter" && event.key !== " ") return;
    if (!event.target.closest?.(".story-viewer-media, .story-viewer-text")) return;
    event.preventDefault();
    toggleStoryPause();
}

function openStoryGroup(userId, index = 0) {
    const group = storyGroups(state.statusPosts.filter((post) => String(post.user?.id) === String(userId)))[0];
    if (!group?.posts?.length) return;
    state.activeStoryGroup = group.posts;
    state.activeStoryIndex = Math.max(0, Math.min(index, group.posts.length - 1));
    openStoryViewer(state.activeStoryGroup[state.activeStoryIndex]);
}

function openNextStoryInGroup() {
    if (state.activeStoryGroup.length && state.activeStoryIndex < state.activeStoryGroup.length - 1) {
        state.activeStoryIndex += 1;
        openStoryViewer(state.activeStoryGroup[state.activeStoryIndex]);
        return;
    }
    closeStoryViewer();
}

function openPreviousStoryInGroup() {
    if (state.activeStoryGroup.length && state.activeStoryIndex > 0) {
        state.activeStoryIndex -= 1;
        openStoryViewer(state.activeStoryGroup[state.activeStoryIndex]);
    }
}

function storyActivityUserKey(user) {
    return String(user?.id || user?.phoneNumber || user?.email || user?.displayName || "");
}

function storyOwnerActivityRows(viewers, reactions) {
    const reactionByUser = new Map();
    (reactions || []).forEach((reaction) => {
        const key = storyActivityUserKey(reaction.user);
        if (key) reactionByUser.set(key, reaction);
    });
    const rows = [];
    const seenKeys = new Set();
    (viewers || []).forEach((view) => {
        const key = storyActivityUserKey(view.user);
        if (key) seenKeys.add(key);
        rows.push({ user: view.user, viewedAt: view.viewedAt, reaction: key ? reactionByUser.get(key) : null });
    });
    (reactions || []).forEach((reaction) => {
        const key = storyActivityUserKey(reaction.user);
        if (key && seenKeys.has(key)) return;
        rows.push({ user: reaction.user, viewedAt: null, reaction });
    });
    if (!rows.length) return `<div class="story-owner-empty">No views yet</div>`;
    return rows.map((item) => {
        const liked = Boolean(item.reaction);
        const activityAt = item.viewedAt || item.reaction?.reactedAt;
        return `
            <div class="story-owner-viewer-row${liked ? " liked" : ""}">
                <span class="story-owner-avatar-wrap">
                    ${avatarMarkup(item.user, "story-owner-viewer-avatar")}
                    ${liked ? `<span class="story-owner-heart-badge" aria-label="Liked story">♥</span>` : ""}
                </span>
                <div>
                    <strong>${escapeHtml(item.user?.displayName || "Contact")}</strong>
                    <span>${escapeHtml(item.viewedAt ? "Seen" : "Liked")}${activityAt ? ` ${escapeHtml(relativeTime(activityAt))}` : ""}</span>
                </div>
            </div>
        `;
    }).join("");
}

function isOwnStatusPost(statusPost) {
    return Boolean(statusPost?.isOwn || isSelfUser(statusPost?.user));
}

function updateStoryViewerStats(statusPost) {
    if (!refs.storyReplyInput || !refs.storyReplyBtn) return;
    const isOwnStory = isOwnStatusPost(statusPost);
    refs.storyViewerBody.querySelector(".story-owner-stats")?.remove();
    const footer = refs.storyViewer?.querySelector(".story-viewer-footer");
    footer?.querySelector(".story-owner-footer")?.remove();
    footer?.querySelector(".story-owner-like-pill")?.remove();
    footer?.classList.remove("story-footer-own");
    refs.storyViewer?.classList.toggle("story-viewer-own", isOwnStory);
    refs.storyReplyInput.hidden = isOwnStory;
    refs.storyReplyBtn.hidden = isOwnStory;
    refs.storyReplyBtn.dataset.statusReactionId = statusPost.id;
    refs.storyReplyBtn.disabled = isOwnStory;
    refs.storyReplyBtn.innerHTML = isOwnStory
        ? `<span aria-hidden="true">♡</span>`
        : `<span aria-hidden="true">${statusPost.hasReacted ? "♥" : "♡"}</span>`;
    if (isOwnStory) {
        const viewers = statusPost.viewedBy || [];
        const reactions = statusPost.reactedBy || [];
        const viewCount = Number(statusPost.viewCount || 0);
        const reactionCount = Number(statusPost.reactionCount || 0);
        refs.storyReplyInput.value = "";
        refs.storyReplyBtn.hidden = true;
        footer?.classList.add("story-footer-own");
        footer?.insertAdjacentHTML("beforeend", `
            <div class="story-owner-footer">
                <button type="button" class="story-owner-view-pill" data-story-owner-toggle aria-expanded="false">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.8 12s3.4-5.7 9.2-5.7 9.2 5.7 9.2 5.7-3.4 5.7-9.2 5.7S2.8 12 2.8 12z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="2.7" fill="currentColor"/></svg>
                    <span>${escapeHtml(countLabel(viewCount, "view"))}</span>
                </button>
                <div class="story-owner-panel" data-story-owner-panel hidden>
                    <strong>Story activity</strong>
                    <span class="story-owner-panel-summary">${escapeHtml(countLabel(viewCount, "view"))} - ${escapeHtml(countLabel(reactionCount, "like"))}</span>
                    <div class="story-owner-panel-section">
                        <h3>Viewed by</h3>
                        ${storyOwnerActivityRows(viewers, reactions)}
                    </div>
                </div>
            </div>
        `);
        refs.storyReplyInput.placeholder = `${statusPost.viewCount || 0} views • ${statusPost.reactionCount || 0} likes`;
        refs.storyViewerBody.insertAdjacentHTML("beforeend", `
            <div class="story-owner-stats">
                <strong>${Number(statusPost.viewCount || 0)} views • ${Number(statusPost.reactionCount || 0)} likes</strong>
                <div>${viewers.length ? viewers.map((item) => `<span>Seen by ${escapeHtml(item.user?.displayName || "Contact")} • ${escapeHtml(relativeTime(item.viewedAt))}</span>`).join("") : "<span>No views yet</span>"}</div>
                <div>${reactions.length ? reactions.map((item) => `<span>Liked by ${escapeHtml(item.user?.displayName || "Contact")}</span>`).join("") : ""}</div>
            </div>
        `);
    } else {
        refs.storyReplyInput.hidden = false;
        refs.storyReplyBtn.hidden = false;
        refs.storyReplyInput.placeholder = "Reply to story...";
    }
}

function toggleStoryOwnerPanel(button) {
    const footer = button?.closest(".story-owner-footer");
    const panel = footer?.querySelector("[data-story-owner-panel]");
    if (!panel) return;
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", expanded ? "false" : "true");
    panel.hidden = expanded;
    footer.classList.toggle("panel-open", !expanded);
    if (!expanded) {
        pauseStoryProgress();
        panel.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
}

function refreshActiveStoryPost(statusPost) {
    if (!statusPost?.id || !state.activeStoryGroup?.length) return;
    const index = state.activeStoryGroup.findIndex((item) => Number(item.id) === Number(statusPost.id));
    if (index < 0) return;
    state.activeStoryGroup[index] = { ...state.activeStoryGroup[index], ...statusPost };
    if (index === state.activeStoryIndex && !refs.storyViewer.classList.contains("hidden")) {
        updateStoryViewerStats(state.activeStoryGroup[index]);
    }
}

async function markStoryViewed(statusPost) {
    if (!statusPost?.id || isOwnStatusPost(statusPost)) return;
    try {
        const response = await apiFetch(`/api/status/${statusPost.id}/view`, { method: "POST", body: "{}" });
        if (response.status) upsertStatusPost(response.status);
    } catch {
        // Viewing should not interrupt story playback.
    }
}

async function reactToActiveStory() {
    const statusPost = state.activeStoryGroup[state.activeStoryIndex];
    if (!statusPost?.id || isOwnStatusPost(statusPost)) return;
    try {
        const response = await apiFetch(`/api/status/${statusPost.id}/reaction`, { method: "POST", body: "{}" });
        if (response.status) {
            upsertStatusPost(response.status);
            const updated = state.statusPosts.find((item) => Number(item.id) === Number(statusPost.id));
            if (updated) {
                state.activeStoryGroup[state.activeStoryIndex] = updated;
                updateStoryViewerStats(updated);
            }
        }
        showToast("Story liked.");
    } catch (error) {
        showToast(error.message, "error");
    }
}

function openStoryViewer(statusPost) {
    resetStoryProgress();
    const isOwnStory = isOwnStatusPost(statusPost);
    refs.storyViewer.classList.remove("hidden");
    refs.storyViewer.setAttribute("aria-hidden", "false");
    applyAvatarElement(refs.storyViewerAvatar, statusPost.user);
    refs.storyViewerTitle.textContent = isOwnStory ? "My status" : (statusPost.user.displayName || "Story");
    refs.storyViewerMeta.textContent = `${state.activeStoryIndex + 1}/${Math.max(state.activeStoryGroup.length, 1)} • ${relativeTime(statusPost.createdAt)}`;
    if (isOwnStory) refs.storyViewerMeta.textContent = relativeTime(statusPost.createdAt);
    refs.storyViewerBody.classList.remove("story-media-zoomed");
    refs.storyViewerBody.innerHTML = statusPost.mediaUrl
        ? ((statusPost.mimeType || "").startsWith("video/")
            ? `<video class="story-viewer-media" src="${escapeHtml(statusPost.mediaUrl)}" autoplay playsinline preload="metadata" data-media-title="${escapeHtml(statusPost.user.displayName || "Story video")}" data-media-caption="${escapeHtml(statusPost.text || "")}" tabindex="0" aria-label="Story video"></video>`
            : `<img class="story-viewer-media" src="${escapeHtml(statusPost.mediaUrl)}" alt="${escapeHtml(statusPost.user.displayName || "Story")}" data-media-title="${escapeHtml(statusPost.user.displayName || "Story photo")}" data-media-caption="${escapeHtml(statusPost.text || "")}" tabindex="0">`)
        : `<div class="story-viewer-text">${escapeHtml(statusPost.text || "Story update")}</div>`;
    updateStoryViewerStats(statusPost);
    markStoryViewed(statusPost);
    bindMediaOrientation(refs.storyViewerBody);
    const storyVideo = refs.storyViewerBody.querySelector("video.story-viewer-media");
    if (storyVideo) {
        const beginVideoProgress = () => {
            const durationMs = Number.isFinite(storyVideo.duration) && storyVideo.duration > 0
                ? storyVideo.duration * 1000
                : 6500;
            startStoryProgress(durationMs);
            storyVideo.play().catch(() => {});
        };
        if (storyVideo.readyState >= 1) beginVideoProgress();
        else storyVideo.addEventListener("loadedmetadata", beginVideoProgress, { once: true });
        storyVideo.addEventListener("ended", openNextStoryInGroup, { once: true });
        return;
    }
    startStoryProgress(5500);
}

function closeStoryViewer() {
    resetStoryProgress();
    closeMediaViewer();
    state.activeStoryGroup = [];
    state.activeStoryIndex = 0;
    refs.storyViewer.classList.add("hidden");
    refs.storyViewer.setAttribute("aria-hidden", "true");
    refs.storyViewerBody.innerHTML = "";
}

function setCaptureMode(mode) {
    const nextMode = state.captureTarget === "profile" ? "photo" : mode;
    const profileCapture = state.captureTarget === "profile";
    state.cameraMode = nextMode;
    refs.captureModal.dataset.captureTarget = state.captureTarget;
    refs.captureModal.dataset.captureMode = nextMode;
    refs.capturePhotoBtn.classList.toggle("active", nextMode === "photo");
    refs.captureVideoBtn.classList.toggle("active", nextMode === "video");
    refs.captureVideoBtn.disabled = profileCapture;
    refs.captureStatus.textContent = profileCapture
        ? "Profile photo mode"
        : nextMode === "video"
            ? "Video mode"
            : "Photo mode";
    setCaptureView(state.capturedBlob ? "preview" : "live");
}

function stopCaptureStream() {
    state.cameraStream?.getTracks().forEach((track) => track.stop());
    state.cameraStream = null;
    if (refs.captureLive.srcObject) refs.captureLive.srcObject = null;
    refs.captureRecordBtn.classList.remove("recording");
}

async function startCaptureStream() {
    const requestId = ++state.captureStreamRequestId;
    stopCaptureStream();
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: state.cameraFacing },
            audio: state.cameraMode === "video",
        });
        if (requestId !== state.captureStreamRequestId || !state.captureModalOpen || !refs.captureModal?.open) {
            stream.getTracks().forEach((track) => track.stop());
            return;
        }
        state.cameraStream = stream;
        refs.captureLive.srcObject = state.cameraStream;
        refs.captureLive.classList.remove("hidden");
        refs.capturePhotoPreview.classList.add("hidden");
        refs.captureVideoPreview.classList.add("hidden");
        refs.captureEmpty.classList.add("hidden");
        refs.captureUseBtn.disabled = true;
        refs.captureVideoPreview.pause();
        refs.captureStatus.textContent = state.captureTarget === "profile"
            ? "Profile photo mode"
            : state.cameraMode === "video"
                ? "Video mode"
                : "Photo mode";
        setCaptureView("live");
    } catch (error) {
        if (requestId !== state.captureStreamRequestId || !state.captureModalOpen || !refs.captureModal?.open) {
            return;
        }
        refs.captureEmpty.classList.remove("hidden");
        refs.captureStatus.textContent = "Allow camera access";
        setCaptureView("empty");
        showToast("Allow camera access to capture photo or video.", "error");
    }
}

function openCaptureModal(target = "chat") {
    state.captureModalOpen = true;
    state.captureTarget = target;
    state.capturedBlob = null;
    if (state.capturedUrl) {
        URL.revokeObjectURL(state.capturedUrl);
        state.capturedUrl = "";
    }
    refs.capturePhotoPreview.removeAttribute("src");
    refs.captureVideoPreview.pause();
    refs.captureVideoPreview.removeAttribute("src");
    refs.captureLive.classList.add("hidden");
    refs.capturePhotoPreview.classList.add("hidden");
    refs.captureVideoPreview.classList.add("hidden");
    refs.captureEmpty.classList.add("hidden");
    refs.captureUseBtn.disabled = true;
    state.cameraFacing = target === "profile" ? "user" : "environment";
    setCaptureMode("photo");
    renderCaptureFilters();
    closeCaptureShareSheet();
    updateCapturePreviewMeta("live");
    syncCaptureViewportMetrics();
    setCaptureShellVisibility(true);
    document.body.classList.add("capture-modal-open");
    refs.captureModal.showModal();
    startCaptureStream();
}

function closeCaptureModal() {
    state.captureModalOpen = false;
    state.captureStreamRequestId += 1;
    stopCaptureStream();
    closeCaptureShareSheet();
    delete refs.captureModal.dataset.captureTarget;
    delete refs.captureModal.dataset.captureMode;
    delete refs.captureModal.dataset.captureView;
    if (state.mediaRecorder && state.mediaRecorder.state !== "inactive") {
        state.mediaRecorder.onstop = null;
        state.mediaRecorder.stop();
    }
    state.mediaRecorder = null;
    if (state.capturedUrl) {
        URL.revokeObjectURL(state.capturedUrl);
        state.capturedUrl = "";
    }
    state.capturedBlob = null;
    refs.capturePhotoPreview.removeAttribute("src");
    refs.captureVideoPreview.pause();
    refs.captureVideoPreview.removeAttribute("src");
    refs.capturePhotoPreview.classList.add("hidden");
    refs.captureVideoPreview.classList.add("hidden");
    refs.captureLive.classList.add("hidden");
    refs.captureEmpty.classList.add("hidden");
    refs.captureUseBtn.disabled = true;
    document.body.classList.remove("capture-modal-open");
    setCaptureShellVisibility(false);
    if (refs.captureModal?.open) refs.captureModal.close();
    resetCaptureInlineLayout();
}

function capturePhotoFromVideo() {
    const canvas = document.createElement("canvas");
    canvas.width = refs.captureLive.videoWidth || 393;
    canvas.height = refs.captureLive.videoHeight || 852;
    const context = canvas.getContext("2d");
    context.drawImage(refs.captureLive, 0, 0, canvas.width, canvas.height);
    canvas.toBlob((blob) => {
        if (!blob) return;
        if (state.capturedUrl) URL.revokeObjectURL(state.capturedUrl);
        state.capturedBlob = blob;
        state.capturedUrl = URL.createObjectURL(blob);
        refs.capturePhotoPreview.src = state.capturedUrl;
        refs.capturePhotoPreview.classList.remove("hidden");
        refs.captureVideoPreview.classList.add("hidden");
        refs.captureLive.classList.add("hidden");
        stopCaptureStream();
        refs.captureUseBtn.disabled = false;
        refs.captureStatus.textContent = "Photo captured";
        setCaptureView("preview");
    }, "image/jpeg", 0.92);
}

function handleCapturePrimaryAction() {
    if (state.cameraMode === "photo") {
        capturePhotoFromVideo();
        return;
    }
    if (state.mediaRecorder && state.mediaRecorder.state === "recording") {
        state.mediaRecorder.stop();
        refs.captureRecordBtn.classList.remove("recording");
        refs.captureStatus.textContent = "Video captured";
        return;
    }
    if (!state.cameraStream) return;
    state.mediaChunks = [];
    state.mediaRecorder = new MediaRecorder(state.cameraStream, { mimeType: "video/webm" });
    state.mediaRecorder.ondataavailable = (event) => {
        if (event.data?.size) state.mediaChunks.push(event.data);
    };
    state.mediaRecorder.onstop = () => {
        if (state.capturedUrl) URL.revokeObjectURL(state.capturedUrl);
        state.capturedBlob = new Blob(state.mediaChunks, { type: "video/webm" });
        state.capturedUrl = URL.createObjectURL(state.capturedBlob);
        refs.captureVideoPreview.src = state.capturedUrl;
        refs.captureVideoPreview.currentTime = 0;
        refs.captureVideoPreview.classList.remove("hidden");
        refs.capturePhotoPreview.classList.add("hidden");
        refs.captureLive.classList.add("hidden");
        stopCaptureStream();
        refs.captureUseBtn.disabled = false;
        refs.captureStatus.textContent = "Video captured";
        setCaptureView("preview");
    };
    state.mediaRecorder.start();
    refs.captureRecordBtn.classList.add("recording");
    refs.captureStatus.textContent = "Recording...";
    setCaptureView("live");
}

async function useCapturedMedia() {
    if (!state.capturedBlob) return;
    const profileCapture = state.captureTarget === "profile";
    if (profileCapture && !String(state.capturedBlob.type || "").startsWith("image/")) {
        showToast("Profile photo capture must be an image.", "error");
        return;
    }
    const file = capturedMediaFile();
    if (!file) return;
    if (profileCapture) {
        closeCaptureModal();
        await uploadProfilePhotoFile(file);
        return;
    }
    if (state.captureTarget === "chat" && state.screen === "conversation" && currentChat()) {
        const activeChatId = currentChat().id;
        closeCaptureModal();
        try {
            await postCapturedMediaToChat(activeChatId, file);
        } catch (error) {
            showToast(error.message, "error");
        }
        return;
    }
    if (state.captureTarget === "status") {
        await handleCaptureShareSelection("story");
        return;
    }
    openCaptureShareSheet();
}

function renderCallUi(type, options = {}) {
    const user = options.user || counterpartForChat(currentChat()) || state.me;
    const isVideo = type === "video";
    const isIncoming = Boolean(options.incoming);
    const userHasImage = avatarHasImage(user);
    const initialStatus = state.callStartedAt
        ? formatCallDuration(Math.floor((Date.now() - state.callStartedAt) / 1000))
        : (options.status || "Connecting...");
    const callerName = escapeHtml(user?.displayName || primaryContactIdentifier(user) || "Contact");
    const callerContact = escapeHtml(primaryContactIdentifier(user));
    const canFloat = Boolean(isVideo && !isIncoming && state.currentCall);
    refs.callModalRoot.classList.toggle("call-floating-mode", canFloat && state.callFloating);
    refs.callModalRoot.innerHTML = `
        <div class="call-modal-overlay">
            <div class="call-modal-card active-call-card ${isVideo ? "video-call-card" : "voice-call-card"}${isIncoming ? " incoming-call-card" : ""}${state.callStartedAt ? " call-connected" : ""}${state.callEffectsEnabled ? " call-effects-enabled" : ""}${state.callScreenSharing ? " call-screen-sharing" : ""}${canFloat && state.callFloating ? " call-floating" : ""}"${canFloat && state.callFloating ? ` role="button" tabindex="0" aria-label="Return to video call"` : ""}>
                ${isVideo && !isIncoming ? `
                    <header class="call-preview-topbar">
                        <button type="button" class="call-preview-collapse" data-call-close aria-label="Minimize call">
                            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/></svg>
                        </button>
                        <div class="call-preview-copy">
                            <div class="call-preview-name-row">
                                <strong class="call-preview-name">${callerName}</strong>
                                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.6"/></svg>
                            </div>
                            <span class="call-preview-status" id="call-status-label">${escapeHtml(initialStatus)}</span>
                        </div>
                        <button type="button" class="call-preview-round call-speaker-btn" data-call-speaker aria-pressed="false" aria-label="Speaker">
                            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4zm12.6-.4a5 5 0 0 1 0 6.8M19 6.2a8.2 8.2 0 0 1 0 11.6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>
                        </button>
                        <button type="button" class="call-preview-round call-preview-end call-cut-btn" data-call-end aria-label="End call">
                            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.6 15.4a15.3 15.3 0 0 1 14.8 0l1.2.7-1.7 3-1.2-.7a11.8 11.8 0 0 0-11.4 0l-1.2.7-1.7-3z" fill="currentColor"/></svg>
                        </button>
                    </header>
                ` : `
                    <header class="call-modal-header">
                        <button type="button" class="call-modal-icon" data-call-close aria-label="${escapeHtml(isVideo ? "Back from call" : "Close call")}">
                            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.8 5.6 8.4 12l6.4 6.4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4"/></svg>
                        </button>
                        <h2>${escapeHtml(isVideo ? "Video call" : "Voice Call")}</h2>
                        <div class="call-modal-icon ghost"></div>
                    </header>
                `}
                <div class="active-call-stage ${isIncoming ? "incoming-call-stage" : (isVideo ? "video-call-stage" : "voice-call-stage")}">
                    ${isIncoming ? `
                        <div class="incoming-call-meta">
                            <div class="contact-profile-avatar incoming-call-avatar${userHasImage ? " has-image" : ""}"${avatarStyleAttribute(user)}>
                                ${userHasImage ? "" : escapeHtml(initialsFor(user?.displayName || primaryContactIdentifier(user)))}
                            </div>
                            <strong class="incoming-call-name">${callerName}</strong>
                            ${callerContact ? `<span class="incoming-call-phone">${callerContact}</span>` : ""}
                            <span class="incoming-call-status" id="call-status-label">${escapeHtml(options.status || (isVideo ? "Incoming video call" : "Incoming call"))}</span>
                        </div>
                    ` : isVideo ? `
                        <div class="video-call-backdrop${userHasImage ? " has-image" : ""}"${avatarStyleAttribute(user)}>
                            ${userHasImage ? "" : escapeHtml(initialsFor(user?.displayName || primaryContactIdentifier(user)))}
                        </div>
                        <video class="remote-call-video" id="remote-call-video" autoplay playsinline></video>
                        <video class="local-call-video" id="local-call-video" autoplay playsinline muted></video>
                        <div class="video-call-scrim" aria-hidden="true"></div>
                    ` : ""}
                    <audio id="remote-call-audio" autoplay></audio>
                    ${isIncoming ? "" : isVideo ? "" : `
                        <div class="active-call-meta">
                            <div class="contact-profile-avatar${userHasImage ? " has-image" : ""}"${avatarStyleAttribute(user)}>
                                ${userHasImage ? "" : escapeHtml(initialsFor(user?.displayName || primaryContactIdentifier(user)))}
                            </div>
                            <strong class="contact-profile-name">${escapeHtml(user?.displayName || "Contact")}</strong>
                            <span class="contact-profile-phone" id="call-status-label">${escapeHtml(initialStatus)}</span>
                            </div>
                    `}
                    <div class="active-call-controls ${options.incoming ? "incoming" : ""}">
                        ${options.incoming ? `
                            <button type="button" class="call-answer-btn call-action-btn" data-call-answer>
                                <span class="call-action-icon">
                                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.7 15.7 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .5 3 .5.7 0 1.2.5 1.2 1.2V20c0 .7-.5 1.2-1.2 1.2C10.3 21.2 2.8 13.7 2.8 4.4 2.8 3.7 3.3 3.2 4 3.2h3.2c.7 0 1.2.5 1.2 1.2 0 1 .2 2 .5 3 .1.4 0 .9-.3 1.2l-2 2.2z" fill="currentColor"/></svg>
                                </span>
                                <span class="call-action-label">Answer</span>
                            </button>` : ""}
                        ${!options.incoming && isVideo ? `
                            <button type="button" class="call-action-btn secondary call-video-btn" data-call-video-toggle aria-pressed="false" aria-label="Turn camera off">
                                <span class="call-action-icon">
                                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7.5A2.5 2.5 0 0 1 7.5 5h7A2.5 2.5 0 0 1 17 7.5v1.2l3.3-2.2c.7-.4 1.7.1 1.7.9v9.2c0 .8-1 1.3-1.7.9L17 15.2v1.3a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 5 16.5v-9z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"/></svg>
                                </span>
                                <span class="call-action-label">Camera</span>
                            </button>` : ""}
                        ${!options.incoming && isVideo ? `
                            <button type="button" class="call-action-btn secondary call-rotate-btn" data-call-camera-rotate aria-label="Switch camera">
                                <span class="call-action-icon">
                                    <svg viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M8 7.4 9.5 5.5h5l1.5 1.9h2A2.5 2.5 0 0 1 20.5 10v5.7a2.5 2.5 0 0 1-2.5 2.5H6a2.5 2.5 0 0 1-2.5-2.5V10A2.5 2.5 0 0 1 6 7.4h2z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.9"/>
                                        <path d="M9.3 13a2.9 2.9 0 0 0 5.4 1.4M14.7 11a2.9 2.9 0 0 0-5.4-1.4M15 14.4h-2.1v2.1M9 9.6h2.1V7.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9"/>
                                    </svg>
                                </span>
                                <span class="call-action-label">Rotate</span>
                            </button>` : ""}
                        ${!options.incoming && !isVideo ? `<button type="button" class="call-cut-btn call-action-btn" data-call-end>
                            <span class="call-action-icon">
                                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.6 15.4a15.3 15.3 0 0 1 14.8 0l1.2.7-1.7 3-1.2-.7a11.8 11.8 0 0 0-11.4 0l-1.2.7-1.7-3z" fill="currentColor"/></svg>
                            </span>
                            <span class="call-action-label">${options.incoming ? "Decline" : "End"}</span>
                        </button>` : ""}
                        ${options.incoming ? `<button type="button" class="call-cut-btn call-action-btn" data-call-end>
                            <span class="call-action-icon">
                                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.6 15.4a15.3 15.3 0 0 1 14.8 0l1.2.7-1.7 3-1.2-.7a11.8 11.8 0 0 0-11.4 0l-1.2.7-1.7-3z" fill="currentColor"/></svg>
                            </span>
                            <span class="call-action-label">Decline</span>
                        </button>` : ""}
                        ${!options.incoming && isVideo ? `
                            <button type="button" class="call-action-btn secondary call-mic-btn" data-call-mic-toggle aria-pressed="false" aria-label="Mute microphone">
                                <span class="call-action-icon">
                                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5a3 3 0 0 1 3 3V12a3 3 0 0 1-6 0V6.5a3 3 0 0 1 3-3zm-5.5 8.1V12a5.5 5.5 0 0 0 11 0v-.4M12 17.5V21M8.5 21h7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
                                </span>
                                <span class="call-action-label">Mute</span>
                            </button>` : ""}
                        ${!options.incoming && !isVideo ? `
                            <button type="button" class="call-speaker-btn call-action-btn secondary" data-call-speaker aria-pressed="false">
                                <span class="call-action-icon">
                                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4zm12.6-.4a5 5 0 0 1 0 6.8M19 6.2a8.2 8.2 0 0 1 0 11.6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>
                                </span>
                                <span class="call-action-label">Speaker</span>
                            </button>` : ""}
                        ${!options.incoming && isVideo ? `
                            <button type="button" class="call-action-btn secondary call-share-btn" data-call-screen-share aria-pressed="${state.callScreenSharing ? "true" : "false"}" aria-label="${state.callScreenSharing ? "Stop screen share" : "Share screen"}">
                                <span class="call-action-icon">
                                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 15V5m0 0-4 4m4-4 4 4M6.5 11.5v5A2.5 2.5 0 0 0 9 19h6a2.5 2.5 0 0 0 2.5-2.5v-5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2"/></svg>
                                </span>
                                <span class="call-action-label">Share</span>
                            </button>` : ""}
                    </div>
                </div>
            </div>
        </div>
    `;
    refs.callModalRoot.classList.remove("hidden");
    refs.callModalRoot.setAttribute("aria-hidden", "false");
    refs.callModalRoot.querySelector("[data-call-end]")?.addEventListener("click", () => endCurrentCall("ended"));
    refs.callModalRoot.querySelector("[data-call-close]")?.addEventListener("click", () => {
        if (canFloat) return setCallFloating(true);
        return endCurrentCall("ended");
    });
    refs.callModalRoot.querySelector("[data-call-answer]")?.addEventListener("click", answerIncomingCall);
    refs.callModalRoot.querySelector("[data-call-speaker]")?.addEventListener("click", toggleSpeakerMode);
    refs.callModalRoot.querySelector("[data-call-video-toggle]")?.addEventListener("click", toggleLocalCallVideo);
    refs.callModalRoot.querySelector("[data-call-mic-toggle]")?.addEventListener("click", toggleCallMicrophone);
    refs.callModalRoot.querySelector("[data-call-camera-rotate]")?.addEventListener("click", switchCallCamera);
    refs.callModalRoot.querySelector("[data-call-floating-toggle]")?.addEventListener("click", () => setCallFloating(!state.callFloating));
    refs.callModalRoot.querySelector("[data-call-screen-share]")?.addEventListener("click", toggleCallScreenShare);
    const activeCard = refs.callModalRoot.querySelector(".active-call-card.call-floating");
    bindFloatingCallDrag(activeCard);
    activeCard?.addEventListener("click", (event) => {
        if (event.target.closest("button")) return;
        if (state.callFloatingDragged) {
            event.preventDefault();
            event.stopPropagation();
            state.callFloatingDragged = false;
            return;
        }
        setCallFloating(false);
    });
    activeCard?.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        setCallFloating(false);
    });
    attachCallStreams();
    syncCallControlStates();
}

function clampFloatingCallPosition(x, y, card) {
    const margin = 8;
    const width = card?.offsetWidth || 152;
    const height = card?.offsetHeight || 218;
    const maxX = Math.max(margin, window.innerWidth - width - margin);
    const maxY = Math.max(margin, window.innerHeight - height - margin);
    return {
        x: Math.min(Math.max(margin, x), maxX),
        y: Math.min(Math.max(margin, y), maxY),
    };
}

function applyFloatingCallPosition(card) {
    if (!card || !state.callFloatingPosition) return;
    const position = clampFloatingCallPosition(
        state.callFloatingPosition.x,
        state.callFloatingPosition.y,
        card,
    );
    state.callFloatingPosition = position;
    card.style.setProperty("left", `${position.x}px`, "important");
    card.style.setProperty("top", `${position.y}px`, "important");
    card.style.setProperty("right", "auto", "important");
    card.style.setProperty("bottom", "auto", "important");
}

function bindFloatingCallDrag(card) {
    if (!card) return;
    applyFloatingCallPosition(card);
    let dragState = null;
    card.addEventListener("pointerdown", (event) => {
        if (event.target.closest("button")) return;
        const rect = card.getBoundingClientRect();
        dragState = {
            pointerId: event.pointerId,
            startX: event.clientX,
            startY: event.clientY,
            cardX: rect.left,
            cardY: rect.top,
            moved: false,
        };
        card.setPointerCapture?.(event.pointerId);
    });
    card.addEventListener("pointermove", (event) => {
        if (!dragState || event.pointerId !== dragState.pointerId) return;
        const dx = event.clientX - dragState.startX;
        const dy = event.clientY - dragState.startY;
        if (Math.abs(dx) + Math.abs(dy) > 4) dragState.moved = true;
        if (!dragState.moved) return;
        event.preventDefault();
        state.callFloatingPosition = clampFloatingCallPosition(
            dragState.cardX + dx,
            dragState.cardY + dy,
            card,
        );
        applyFloatingCallPosition(card);
    });
    const endDrag = (event) => {
        if (!dragState || event.pointerId !== dragState.pointerId) return;
        state.callFloatingDragged = Boolean(dragState.moved);
        card.releasePointerCapture?.(event.pointerId);
        dragState = null;
        window.setTimeout(() => {
            state.callFloatingDragged = false;
        }, 180);
    };
    card.addEventListener("pointerup", endDrag);
    card.addEventListener("pointercancel", endDrag);
}

function refreshFloatingCallPosition() {
    const floatingCard = refs.callModalRoot?.querySelector(".active-call-card.call-floating");
    applyFloatingCallPosition(floatingCard);
}

function attachCallStreams() {
    const localVideo = refs.callModalRoot.querySelector("#local-call-video");
    const remoteVideo = refs.callModalRoot.querySelector("#remote-call-video");
    const remoteAudio = refs.callModalRoot.querySelector("#remote-call-audio");
    if (localVideo && state.localStream) {
        localVideo.srcObject = state.localStream;
        localVideo.play?.().catch(() => {});
        localVideo.classList.toggle("has-video", state.localStream.getVideoTracks().length > 0);
    }
    if (remoteVideo) {
        if (!state.remoteStream) state.remoteStream = new MediaStream();
        remoteVideo.srcObject = state.remoteStream;
        remoteVideo.play?.().catch(() => {});
        remoteVideo.classList.toggle("has-video", state.remoteStream.getVideoTracks().length > 0);
    }
    if (remoteAudio) {
        if (!state.remoteStream) state.remoteStream = new MediaStream();
        remoteAudio.srcObject = state.remoteStream;
        remoteAudio.muted = false;
        remoteAudio.volume = state.callSpeakerEnabled ? 1 : 0.78;
        remoteAudio.play?.().catch(() => {});
    }
    syncCallControlStates();
}

function setCallFloating(enabled) {
    if (!state.currentCall || state.currentCall.callType !== "video" || state.incomingCall) return;
    state.callFloating = Boolean(enabled);
    renderCallUi("video", { user: state.currentCall.user, status: state.callStartedAt ? undefined : "Connecting..." });
    showToast(state.callFloating ? "Video call floating. Tap it to return." : "Video call opened.");
}

function toggleSpeakerMode(event) {
    state.callSpeakerEnabled = !state.callSpeakerEnabled;
    const remoteAudio = refs.callModalRoot.querySelector("#remote-call-audio");
    if (remoteAudio) {
        remoteAudio.muted = false;
        remoteAudio.volume = state.callSpeakerEnabled ? 1 : 0.78;
        remoteAudio.play?.().catch(() => {});
    }
    syncCallControlStates();
    showToast(state.callSpeakerEnabled ? "Speaker audio enabled." : "Normal audio mode.");
}

function updateCallStatus(text) {
    const node = refs.callModalRoot.querySelector("#call-status-label");
    if (node) node.textContent = text;
}

function formatCallDuration(totalSeconds) {
    const safeSeconds = Math.max(0, Number(totalSeconds) || 0);
    const hours = Math.floor(safeSeconds / 3600);
    const minutes = Math.floor((safeSeconds % 3600) / 60);
    const seconds = safeSeconds % 60;
    return [hours, minutes, seconds].map((value) => String(value).padStart(2, "0")).join(":");
}

function stopCallDurationTimer() {
    if (state.callDurationTimer) {
        clearInterval(state.callDurationTimer);
        state.callDurationTimer = null;
    }
    state.callStartedAt = null;
}

function startCallDurationTimer() {
    if (!state.currentCall) return;
    if (!state.callStartedAt) state.callStartedAt = Date.now();
    const tick = () => updateCallStatus(formatCallDuration(Math.floor((Date.now() - state.callStartedAt) / 1000)));
    tick();
    if (state.callDurationTimer) return;
    state.callDurationTimer = window.setInterval(tick, 1000);
}

function markCallConnected() {
    refs.callModalRoot.querySelector(".active-call-card")?.classList.add("call-connected");
    startCallDurationTimer();
}

function syncCallControlStates() {
    const audioTracks = state.localStream?.getAudioTracks?.() || [];
    const videoTracks = state.localStream?.getVideoTracks?.() || [];
    const micMuted = audioTracks.length ? audioTracks.every((track) => !track.enabled) : false;
    const cameraDisabled = videoTracks.length ? videoTracks.every((track) => !track.enabled) : false;
    const micButton = refs.callModalRoot.querySelector("[data-call-mic-toggle]");
    const videoButton = refs.callModalRoot.querySelector("[data-call-video-toggle]");
    const speakerButton = refs.callModalRoot.querySelector("[data-call-speaker]");
    const rotateButton = refs.callModalRoot.querySelector("[data-call-camera-rotate]");
    const floatingButton = refs.callModalRoot.querySelector("[data-call-floating-toggle]");
    const screenShareButton = refs.callModalRoot.querySelector("[data-call-screen-share]");
    const localVideo = refs.callModalRoot.querySelector("#local-call-video");
    const remoteVideo = refs.callModalRoot.querySelector("#remote-call-video");
    const remoteHasVideo = Boolean(state.remoteStream?.getVideoTracks?.().length);
    if (micButton) {
        micButton.setAttribute("aria-pressed", micMuted ? "true" : "false");
        micButton.classList.toggle("active", micMuted);
        micButton.setAttribute("aria-label", micMuted ? "Unmute microphone" : "Mute microphone");
    }
    if (videoButton) {
        const pressed = videoTracks.length ? cameraDisabled : true;
        videoButton.setAttribute("aria-pressed", pressed ? "true" : "false");
        videoButton.classList.toggle("active", pressed);
        videoButton.setAttribute("aria-label", pressed ? "Turn camera on" : "Turn camera off");
    }
    if (speakerButton) {
        speakerButton.setAttribute("aria-pressed", state.callSpeakerEnabled ? "true" : "false");
        speakerButton.classList.toggle("active", state.callSpeakerEnabled);
    }
    if (rotateButton) {
        rotateButton.classList.toggle("active", state.callCameraFacing === "environment");
        rotateButton.setAttribute("aria-label", state.callCameraFacing === "environment" ? "Switch to front camera" : "Switch to back camera");
    }
    if (floatingButton) {
        floatingButton.setAttribute("aria-pressed", state.callFloating ? "true" : "false");
        floatingButton.classList.toggle("active", state.callFloating);
        floatingButton.setAttribute("aria-label", state.callFloating ? "Open full call" : "Float call");
    }
    if (screenShareButton) {
        screenShareButton.setAttribute("aria-pressed", state.callScreenSharing ? "true" : "false");
        screenShareButton.classList.toggle("active", state.callScreenSharing);
        screenShareButton.setAttribute("aria-label", state.callScreenSharing ? "Stop screen share" : "Share screen");
    }
    if (localVideo) {
        localVideo.classList.toggle("camera-disabled", Boolean(videoTracks.length && cameraDisabled));
        localVideo.classList.toggle("has-video", videoTracks.length > 0);
    }
    if (remoteVideo) {
        remoteVideo.classList.toggle("has-video", remoteHasVideo);
    }
    refs.callModalRoot.querySelector(".active-call-card")?.classList.toggle("remote-video-live", remoteHasVideo);
}

function toggleCallMicrophone(event) {
    const audioTracks = state.localStream?.getAudioTracks?.() || [];
    if (!audioTracks.length) return;
    const nextEnabled = audioTracks.every((track) => !track.enabled);
    audioTracks.forEach((track) => {
        track.enabled = nextEnabled;
    });
    syncCallControlStates();
    showToast(nextEnabled ? "Microphone unmuted." : "Microphone muted.");
}

function toggleLocalCallVideo(event) {
    const videoTracks = state.localStream?.getVideoTracks?.() || [];
    if (!videoTracks.length) return;
    const nextEnabled = videoTracks.every((track) => !track.enabled);
    videoTracks.forEach((track) => {
        track.enabled = nextEnabled;
    });
    syncCallControlStates();
    showToast(nextEnabled ? "Camera on." : "Camera off.");
}

async function ensureLocalCallStream(callType) {
    const wantsVideo = callType === "video";
    if (state.localStream) {
        const hasVideoTrack = state.localStream.getVideoTracks().length > 0;
        if ((wantsVideo && hasVideoTrack) || (!wantsVideo && !hasVideoTrack)) {
            return state.localStream;
        }
        state.localStream.getTracks().forEach((track) => track.stop());
        state.localStream = null;
    }

    state.localStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: wantsVideo ? { facingMode: { ideal: state.callCameraFacing || "user" } } : false,
    });
    return state.localStream;
}

async function requestCameraStreamForFacing(facing) {
    const constraintsToTry = [
        { video: { facingMode: { exact: facing } }, audio: false },
        { video: { facingMode: { ideal: facing } }, audio: false },
    ];
    let lastError = null;
    for (const constraints of constraintsToTry) {
        try {
            return await navigator.mediaDevices.getUserMedia(constraints);
        } catch (error) {
            lastError = error;
        }
    }
    throw lastError || new Error("No camera was found.");
}

async function replaceLocalCallVideoTrack(nextTrack) {
    if (!nextTrack) throw new Error("No camera was found.");
    const existingVideoTracks = state.localStream?.getVideoTracks?.() || [];
    const sender = state.peerConnection?.getSenders?.().find((item) => item.track?.kind === "video");
    if (sender) {
        await sender.replaceTrack(nextTrack);
    } else if (state.peerConnection && state.localStream) {
        state.peerConnection.addTrack(nextTrack, state.localStream);
    }

    existingVideoTracks.forEach((track) => {
        state.localStream?.removeTrack?.(track);
        track.stop();
    });
    if (!state.localStream) state.localStream = new MediaStream();
    state.localStream.addTrack(nextTrack);
    attachCallStreams();
}

async function useCallCamera(facing = state.callCameraFacing || "user") {
    const existingVideoTracks = state.localStream?.getVideoTracks?.() || [];
    const shouldEnableVideo = existingVideoTracks.length ? existingVideoTracks.some((track) => track.enabled) : true;
    existingVideoTracks.forEach((track) => {
        state.localStream?.removeTrack?.(track);
        track.stop();
    });
    attachCallStreams();
    const nextStream = await requestCameraStreamForFacing(facing);
    const nextTrack = nextStream.getVideoTracks()[0];
    if (!nextTrack) {
        nextStream.getTracks().forEach((track) => track.stop());
        throw new Error("No camera was found.");
    }
    nextTrack.enabled = shouldEnableVideo;
    await replaceLocalCallVideoTrack(nextTrack);
    const actualFacing = nextTrack.getSettings?.().facingMode;
    state.callCameraFacing = ["user", "environment"].includes(actualFacing) ? actualFacing : facing;
    state.callScreenSharing = false;
    renderCallUi("video", { user: state.currentCall?.user, status: state.callStartedAt ? undefined : "Calling..." });
}

async function switchCallCamera() {
    if (!state.currentCall || state.currentCall.callType !== "video") return;
    const previousFacing = state.callCameraFacing || "user";
    const nextFacing = state.callCameraFacing === "user" ? "environment" : "user";
    try {
        updateCallStatus(nextFacing === "environment" ? "Switching to back camera..." : "Switching to front camera...");
        await useCallCamera(nextFacing);
        showToast(nextFacing === "environment" ? "Back camera on." : "Front camera on.");
    } catch (error) {
        if (previousFacing !== nextFacing) {
            useCallCamera(previousFacing).catch(() => {});
        }
        showToast(error.message || "Unable to switch camera.", "error");
    }
}

function toggleCallEffects() {
    if (!state.currentCall || state.currentCall.callType !== "video") return;
    state.callEffectsEnabled = !state.callEffectsEnabled;
    refs.callModalRoot.querySelector(".active-call-card")?.classList.toggle("call-effects-enabled", state.callEffectsEnabled);
    syncCallControlStates();
    showToast(state.callEffectsEnabled ? "Call effects on." : "Call effects off.");
}

async function toggleCallScreenShare() {
    if (!state.currentCall || state.currentCall.callType !== "video") return;
    try {
        if (state.callScreenSharing) {
            await useCallCamera(state.callCameraFacing || "user");
            showToast("Camera sharing resumed.");
            return;
        }
        if (!navigator.mediaDevices?.getDisplayMedia) {
            showToast("Screen sharing is not available on this device.", "error");
            return;
        }
        const existingVideoTracks = state.localStream?.getVideoTracks?.() || [];
        const shouldEnableVideo = existingVideoTracks.length ? existingVideoTracks.some((track) => track.enabled) : true;
        const displayStream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: false });
        const displayTrack = displayStream.getVideoTracks()[0];
        if (!displayTrack) {
            displayStream.getTracks().forEach((track) => track.stop());
            throw new Error("Unable to start screen sharing.");
        }
        displayTrack.enabled = shouldEnableVideo;
        displayTrack.addEventListener("ended", () => {
            if (!state.currentCall || !state.callScreenSharing) return;
            useCallCamera(state.callCameraFacing || "user").catch(() => showToast("Screen share ended.", "info"));
        }, { once: true });
        await replaceLocalCallVideoTrack(displayTrack);
        state.callScreenSharing = true;
        renderCallUi("video", { user: state.currentCall.user, status: state.callStartedAt ? undefined : "Sharing screen..." });
        showToast("Screen sharing started.");
    } catch (error) {
        showToast(error.message || "Unable to share screen.", "error");
    }
}

async function flushPendingIceCandidates() {
    if (!state.peerConnection?.remoteDescription) return;
    const pendingCandidates = state.pendingIceCandidates.splice(0);
    for (const candidate of pendingCandidates) {
        try {
            await state.peerConnection.addIceCandidate(candidate);
        } catch {
            // A stale candidate should not tear down an otherwise valid call.
        }
    }
}

async function ensurePeerConnection(callType) {
    if (state.peerConnection) return state.peerConnection;
    const rtcConfig = safeJsonParse(app.dataset.rtcConfig || "{}", {});
    if (!Array.isArray(rtcConfig.iceServers) || rtcConfig.iceServers.length === 0) {
        rtcConfig.iceServers = [{ urls: "stun:stun.l.google.com:19302" }];
    }
    const peer = new RTCPeerConnection(rtcConfig);
    peer.onicecandidate = (event) => {
        if (event.candidate && state.currentCall && state.socket?.connected) {
            state.socket.emit("call:ice_candidate", {
                chatId: state.currentCall.chatId,
                callId: state.currentCall.callId,
                candidate: event.candidate.toJSON(),
            });
        }
    };
    peer.ontrack = (event) => {
        if (!state.remoteStream) state.remoteStream = new MediaStream();
        event.streams[0]?.getTracks().forEach((track) => {
            if (!state.remoteStream.getTracks().some((item) => item.id === track.id)) {
                state.remoteStream.addTrack(track);
            }
        });
        attachCallStreams();
    };
    peer.onconnectionstatechange = () => {
        if (peer.connectionState === "connected") markCallConnected();
        if (peer.connectionState === "disconnected") {
            updateCallStatus("Reconnecting...");
            return;
        }
        if (["failed", "closed"].includes(peer.connectionState)) endCallUi(peer.connectionState);
    };
    peer.oniceconnectionstatechange = () => {
        if (["connected", "completed"].includes(peer.iceConnectionState)) {
            markCallConnected();
            return;
        }
        if (peer.iceConnectionState === "disconnected") {
            updateCallStatus("Reconnecting...");
            return;
        }
        if (peer.iceConnectionState === "failed") {
            updateCallStatus("Connection failed");
        }
    };
    state.peerConnection = peer;
    await ensureLocalCallStream(callType);
    state.localStream.getTracks().forEach((track) => peer.addTrack(track, state.localStream));
    return peer;
}

async function startCallForChat(targetChat, callType) {
    const chat = targetChat?.id ? (chatById(targetChat.id) || targetChat) : targetChat;
    const user = counterpartForChat(chat);
    if (!chat || !user || !state.socket?.connected) {
        showToast("Open a chat first and make sure realtime is connected.", "error");
        return;
    }
    try {
        state.callCameraFacing = "user";
        state.callFloating = false;
        state.callSpeakerEnabled = false;
        state.callEffectsEnabled = false;
        state.callScreenSharing = false;
        state.currentCall = {
            chatId: chat.id,
            callId: `call_${Date.now()}_${Math.random().toString(16).slice(2, 8)}`,
            callType,
            user,
        };
        renderCallUi(callType, { user, status: callType === "video" ? "Starting camera..." : "Starting call..." });
        const peer = await ensurePeerConnection(callType);
        attachCallStreams();
        const offer = await peer.createOffer();
        await peer.setLocalDescription(offer);
        updateCallStatus("Calling...");
        state.socket.emit("call:start", {
            chatId: chat.id,
            callId: state.currentCall.callId,
            callType,
            offer: offer.toJSON ? offer.toJSON() : offer,
        });
    } catch (error) {
        showToast(error.message || "Unable to start the call.", "error");
        endCallUi("failed");
    }
}

async function startCall(callType) {
    return startCallForChat(currentChat(), callType);
}

function handleIncomingCall(payload) {
    state.callCameraFacing = "user";
    state.callFloating = false;
    state.callFloatingPosition = null;
    state.callFloatingDragged = false;
    state.callSpeakerEnabled = false;
    state.callEffectsEnabled = false;
    state.callScreenSharing = false;
    state.incomingCall = payload;
    state.pendingOffer = payload.offer;
    state.currentCall = {
        chatId: payload.chatId,
        callId: payload.callId,
        callType: payload.callType,
        user: payload.caller,
    };
    renderCallUi(payload.callType, {
        user: payload.caller,
        status: payload.callType === "video" ? "Incoming video call" : "Incoming call",
        incoming: true,
    });
    state.socket?.emit("call:ringing", { chatId: payload.chatId, callId: payload.callId, callType: payload.callType });
}

async function answerIncomingCall() {
    if (!state.incomingCall || !state.pendingOffer) return;
    try {
        const peer = await ensurePeerConnection(state.incomingCall.callType);
        await peer.setRemoteDescription(new RTCSessionDescription(state.pendingOffer));
        await flushPendingIceCandidates();
        const answer = await peer.createAnswer();
        await peer.setLocalDescription(answer);
        renderCallUi(state.incomingCall.callType, { user: state.currentCall.user, status: "Connecting..." });
        state.socket.emit("call:answer", {
            chatId: state.incomingCall.chatId,
            callId: state.incomingCall.callId,
            answer: answer.toJSON ? answer.toJSON() : answer,
        });
        state.incomingCall = null;
        state.pendingOffer = null;
    } catch (error) {
        showToast(error.message || "Unable to answer the call.", "error");
        endCurrentCall("failed");
    }
}

async function handleCallAnswered(payload) {
    if (!state.currentCall || payload.callId !== state.currentCall.callId || !state.peerConnection) return;
    try {
        await state.peerConnection.setRemoteDescription(new RTCSessionDescription(payload.answer));
        await flushPendingIceCandidates();
        updateCallStatus("Connecting...");
    } catch {
        endCurrentCall("failed");
    }
}

async function handleRemoteIceCandidate(payload) {
    if (!state.currentCall || payload.callId !== state.currentCall.callId) return;
    if (!state.peerConnection?.remoteDescription) {
        if (payload.candidate) state.pendingIceCandidates.push(payload.candidate);
        return;
    }
    try {
        await state.peerConnection.addIceCandidate(payload.candidate);
    } catch {
        // Ignore single candidate failures.
    }
}

function teardownCall() {
    stopCallDurationTimer();
    state.peerConnection?.close();
    state.peerConnection = null;
    state.remoteStream?.getTracks().forEach((track) => track.stop());
    state.remoteStream = null;
    state.localStream?.getTracks().forEach((track) => track.stop());
    state.localStream = null;
    state.incomingCall = null;
    state.pendingOffer = null;
    state.pendingIceCandidates = [];
    state.callCameraFacing = "user";
    state.callFloating = false;
    state.callSpeakerEnabled = false;
    state.callEffectsEnabled = false;
    state.callScreenSharing = false;
}

function endCallUi(reason) {
    teardownCall();
    state.currentCall = null;
    refs.callModalRoot.classList.remove("call-floating-mode");
    refs.callModalRoot.classList.add("hidden");
    refs.callModalRoot.setAttribute("aria-hidden", "true");
    refs.callModalRoot.innerHTML = "";
    if (reason && !["connected", "closed"].includes(String(reason).toLowerCase())) {
        showToast(`Call ${reason}.`);
    }
}

function endCurrentCall(reason) {
    if (state.currentCall && state.socket?.connected) {
        state.socket.emit(state.incomingCall ? "call:reject" : "call:end", {
            chatId: state.currentCall.chatId,
            callId: state.currentCall.callId,
            reason,
        });
    }
    endCallUi(reason);
}

function openContactProfile(chat) {
    const user = counterpartForChat(chat);
    if (!user) return;
    const userHasImage = avatarHasImage(user);
    const lastActive = user.isOnline ? "Active now" : (formatLastActiveTime(user.lastSeenAt || "", user) || "Unavailable");
    const countryLabel = user.countryName || user.countryCode || "Not set";
    const timeZoneLabel = timeZoneForUser(user);
    refs.callModalRoot.innerHTML = `
        <div class="call-modal-overlay">
            <div class="call-modal-card contact-profile-card">
                <header class="call-modal-header">
                    <button type="button" class="call-modal-icon" data-profile-close aria-label="Close">&times;</button>
                    <h2>Profile</h2>
                    <div class="call-modal-icon ghost"></div>
                </header>
                <div class="contact-profile-body">
                    <div class="contact-profile-avatar${userHasImage ? " has-image" : ""}"${avatarStyleAttribute(user)}>
                        ${userHasImage ? "" : escapeHtml(initialsFor(user.displayName || primaryContactIdentifier(user)))}
                    </div>
                    <strong class="contact-profile-name">${escapeHtml(user.displayName || "Contact")}</strong>
                    <div class="contact-profile-phone">${escapeHtml(displayContactIdentifier(user))}</div>
                    <div class="contact-profile-meta">
                        <div><span>Status</span><strong>${user.isOnline ? "Online" : "Offline"}</strong></div>
                        <div><span>Last active</span><strong>${escapeHtml(lastActive)}</strong></div>
                        <div><span>Country</span><strong>${escapeHtml(countryLabel)}</strong></div>
                        <div><span>Time zone</span><strong>${escapeHtml(timeZoneLabel)}</strong></div>
                        <div><span>Contact</span><strong>${escapeHtml(primaryContactIdentifier(user))}</strong></div>
                    </div>
                </div>
            </div>
        </div>
    `;
    refs.callModalRoot.classList.remove("hidden");
    refs.callModalRoot.setAttribute("aria-hidden", "false");
    refs.callModalRoot.querySelector("[data-profile-close]")?.addEventListener("click", () => {
        refs.callModalRoot.classList.add("hidden");
        refs.callModalRoot.innerHTML = "";
    });
}

function mediaTabItems(data, tab) {
    if (!data) return [];
    if (tab === "photos") return data.photos || [];
    if (tab === "videos") return data.videos || [];
    if (tab === "documents") return data.documents || [];
    return data.links || [];
}

function renderChatMediaGrid(data, tab) {
    const items = mediaTabItems(data, tab);
    if (!items.length) return `<div class="call-modal-empty">No ${escapeHtml(tab)} shared yet.</div>`;
    if (tab === "links") {
        return `<div class="chat-media-list">${items.map((item) => `
            <a class="chat-media-link-row" href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">
                <strong>${escapeHtml(item.url)}</strong>
                <span>${escapeHtml(item.text || relativeTime(item.createdAt))}</span>
            </a>
        `).join("")}</div>`;
    }
    if (tab === "documents") {
        return `<div class="chat-media-list">${items.map((item) => `
            <a class="chat-media-doc-row" href="${escapeHtml(item.mediaUrl || "#")}" target="_blank" rel="noreferrer">
                <span class="attachment-preview-file">${escapeHtml(fileExtension({ name: item.fileName }).replace(".", "").toUpperCase() || "DOC")}</span>
                <span><strong>${escapeHtml(item.fileName || "Document")}</strong><small>${escapeHtml(relativeTime(item.createdAt))}</small></span>
            </a>
        `).join("")}</div>`;
    }
    return `<div class="chat-media-grid">${items.map((item) => `
        <button type="button" class="chat-media-tile" data-media-src="${escapeHtml(item.mediaUrl)}" data-media-kind="${tab === "videos" ? "video" : "image"}" data-media-title="${escapeHtml(item.fileName || (tab === "videos" ? "Video" : "Photo"))}" data-media-caption="${escapeHtml(item.caption || "")}">
            ${tab === "videos"
                ? `<video src="${escapeHtml(item.mediaUrl)}" muted playsinline preload="metadata"></video><span class="chat-media-play">&#9658;</span>`
                : `<img src="${escapeHtml(item.mediaUrl)}" alt="${escapeHtml(item.fileName || "Photo")}">`}
        </button>
    `).join("")}</div>`;
}

async function openChatMediaPage(chat) {
    if (!chat || chat.isWaveMind) return;
    openModalRoot(`
        <div class="call-modal-overlay chat-media-overlay">
            <div class="call-modal-card chat-media-card">
                <header class="call-modal-header">
                    <button type="button" class="call-modal-icon" data-chat-media-close aria-label="Close">&times;</button>
                    <h2>Media</h2>
                    <div class="call-modal-icon ghost"></div>
                </header>
                <div class="call-modal-empty">Loading media...</div>
            </div>
        </div>
    `, "chat-media-modal-root");
    refs.callModalRoot.querySelector("[data-chat-media-close]")?.addEventListener("click", closeModalRoot);
    try {
        const data = await apiFetch(`/api/chats/${chat.id}/media`);
        const tabs = ["photos", "videos", "documents", "links"];
        const render = (tab = state.mediaTab || "photos") => {
            state.mediaTab = tab;
            const card = refs.callModalRoot.querySelector(".chat-media-card");
            if (!card) return;
            card.innerHTML = `
                <header class="call-modal-header">
                    <button type="button" class="call-modal-icon" data-chat-media-close aria-label="Close">&times;</button>
                    <h2>Media</h2>
                    <div class="call-modal-icon ghost"></div>
                </header>
                <div class="chat-media-tabs">
                    ${tabs.map((item) => `<button type="button" class="${item === tab ? "active" : ""}" data-chat-media-tab="${item}">${escapeHtml(item[0].toUpperCase() + item.slice(1))}</button>`).join("")}
                </div>
                <div class="chat-media-body">${renderChatMediaGrid(data, tab)}</div>
            `;
            card.querySelector("[data-chat-media-close]")?.addEventListener("click", closeModalRoot);
            card.querySelectorAll("[data-chat-media-tab]").forEach((button) => {
                button.addEventListener("click", () => render(button.dataset.chatMediaTab));
            });
            card.querySelectorAll("[data-media-src]").forEach((button) => {
                button.addEventListener("click", () => openMediaViewer({
                    src: button.dataset.mediaSrc,
                    kind: button.dataset.mediaKind,
                    title: button.dataset.mediaTitle,
                    caption: button.dataset.mediaCaption,
                }));
            });
        };
        render(state.mediaTab);
    } catch (error) {
        showToast(error.message, "error");
        closeModalRoot();
    }
}

function setupSocket() {
    if (!window.io || !state.socketToken) return;
    state.socket = window.io({
        auth: { token: state.socketToken },
        transports: ["websocket", "polling"],
        reconnection: true,
        reconnectionAttempts: Infinity,
        reconnectionDelay: 500,
        reconnectionDelayMax: 4000,
        timeout: 20000,
    });
    state.socket.on("socket:ready", () => {
        if (state.me) {
            state.me.isOnline = true;
            state.me.lastSeenAt = new Date().toISOString();
        }
        if (state.screen === "profile") renderProfileScreen();
        showToast("Realtime connected.");
    });
    state.socket.on("connect_error", () => {
        showToast("Realtime connection failed. Calls need the live server connection.", "error");
    });
    state.socket.on("disconnect", () => {
        if (state.me) {
            state.me.isOnline = false;
            state.me.lastSeenAt = new Date().toISOString();
        }
        if (state.screen === "profile") renderProfileScreen();
        if (state.screen === "conversation") renderConversationHeader();
    });
    state.socket.on("message:new", handleIncomingMessage);
    state.socket.on("chat:upsert", upsertChat);
    state.socket.on("message:deleted", handleDeletedMessage);
    state.socket.on("message:status", handleMessageStatusUpdate);
    state.socket.on("messages:read", (payload) => (payload.messageIds || []).forEach((messageId) => handleMessageStatusUpdate({ messageId, status: "read", readAt: payload.readAt })));
    state.socket.on("typing", (payload) => {
        if (String(payload.chatId) !== String(state.activeChatId)) return;
        const user = counterpartForChat(currentChat());
        refs.conversationStatus.textContent = payload.isTyping ? "Typing..." : (user?.isOnline ? "Online" : "Offline");
    });
    state.socket.on("presence:update", (payload) => {
        if (state.me?.id === payload.userId) {
            state.me.isOnline = payload.isOnline;
            state.me.lastSeenAt = payload.lastSeenAt;
        }
        state.chats.forEach((chat) => {
            if (chat.counterpart?.id === payload.userId) {
                chat.counterpart.isOnline = payload.isOnline;
                chat.counterpart.lastSeenAt = payload.lastSeenAt;
            }
        });
        renderConversationHeader();
        if (state.screen === "profile") renderProfileScreen();
        if (state.screen === "chats") renderChatsList();
    });
    state.socket.on("chat:deleted", (payload) => {
        removeChatLocally(payload.chatId);
        updateNavBadges();
    });
    state.socket.on("status:new", (payload) => {
        upsertStatusPost(payload);
        updateNavBadges();
        if (state.screen === "status") renderStoriesScreen();
    });
    state.socket.on("status:update", (payload) => {
        upsertStatusPost(payload);
        refreshActiveStoryPost(payload);
        if (state.screen === "status") renderStoriesScreen();
    });
    state.socket.on("profile:update", (payload) => {
        mergeUserProfile(payload);
    });
    state.socket.on("call:incoming", handleIncomingCall);
    state.socket.on("call:outgoing", () => updateCallStatus("Ringing..."));
    state.socket.on("call:ringing", () => updateCallStatus("Ringing..."));
    state.socket.on("call:answered", handleCallAnswered);
    state.socket.on("call:ice_candidate", handleRemoteIceCandidate);
    state.socket.on("call:rejected", (payload) => endCallUi(payload.reason || "declined"));
    state.socket.on("call:ended", (payload) => endCallUi(payload.reason || "ended"));
    state.socket.on("call:error", (payload) => {
        showToast(payload.error || "Call failed.", "error");
        endCallUi("failed");
    });
}

function bindStaticEvents() {
    refs.selfProfileBtn?.addEventListener("click", () => setScreen("profile"));
    refs.wavemindFab?.addEventListener("click", openWaveMindConversation);
    refs.wavemindClose?.addEventListener("click", closeWaveMind);
    refs.wavemindForm?.addEventListener("submit", (event) => {
        event.preventDefault();
        sendWaveMindMessage();
    });

    refs.chatSearch?.addEventListener("input", (event) => {
        state.search = event.target.value || "";
        state.phoneSearchResult = null;
        if (state.screen === "chats") renderChatsList();
        queuePhoneSearch();
    });

    refs.chatSearch?.addEventListener("keydown", (event) => {
        if (event.key !== "Enter") return;
        const descriptor = contactSearchDescriptor(state.search);
        if (!descriptor) return;
        event.preventDefault();
        startChatByContact(descriptor.type, descriptor.value);
    });

    refs.chatList.addEventListener("click", (event) => {
        const contactResultButton = event.target.closest("[data-start-chat-contact]");
        if (contactResultButton) {
            startChatByContact(contactResultButton.dataset.startChatType, contactResultButton.dataset.startChatContact);
            return;
        }
        const phoneResultButton = event.target.closest("[data-start-chat-phone]");
        if (phoneResultButton) {
            startChatByPhone(phoneResultButton.dataset.startChatPhone);
            return;
        }
        if (event.target.closest("[data-call-keypad-open]")) {
            openCallKeypad();
            return;
        }
        if (event.target.closest("[data-wavemind-call]")) {
            startWaveMindCall();
            return;
        }
        const chatButton = event.target.closest("[data-chat-id]");
        if (chatButton) {
            openConversation(normalizeChatIdValue(chatButton.dataset.chatId));
            return;
        }
        if (event.target.closest("[data-add-story], #add-story-btn")) {
            openStorySheet();
            return;
        }
        const storyButton = event.target.closest("[data-story-user-id]");
        if (storyButton) {
            openStoryGroup(storyButton.dataset.storyUserId);
            return;
        }
        if (event.target.closest("#my-profile-avatar-btn, #profile-choose-photo-btn")) {
            event.preventDefault();
            openProfilePhotoPicker();
            return;
        }
        if (event.target.closest("#profile-camera-photo-btn")) {
            openCaptureModal("profile");
            return;
        }
        if (event.target.closest("#profile-logout-btn")) {
            logout();
        }
    });
    refs.chatList.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        if (!event.target.closest("#my-profile-avatar-btn, #profile-choose-photo-btn")) return;
        event.preventDefault();
        openProfilePhotoPicker();
    });
    refs.chatList.addEventListener("change", (event) => {
        if (!event.target.matches("[data-profile-photo-input]")) return;
        handleProfilePhotoSelected(event);
    });

    refs.mobileBottomNav.addEventListener("click", (event) => {
        const button = event.target.closest("[data-mobile-tab]");
        if (!button) return;
        const tab = button.dataset.mobileTab;
        if (tab === "camera") return openCaptureModal("chat");
        if (tab === "chats") return setScreen("chats");
        if (tab === "status") return setScreen("status");
        if (tab === "profile") return setScreen("profile");
        if (tab === "calls") return setScreen("calls");
    });

    refs.mobileBackBtn.addEventListener("click", () => setScreen("chats"));
    refs.conversationMetaBtn.addEventListener("click", () => {
        const chat = currentChat();
        if (!chat || chat.isWaveMind) return;
        openContactProfile(chat);
    });
    refs.voiceCallBtn.addEventListener("click", () => {
        if (currentChat()?.isWaveMind) return startWaveMindCall();
        return startCall("voice");
    });
    refs.videoCallBtn.addEventListener("click", () => startCall("video"));
    refs.composerReplyCancel?.addEventListener("click", clearReplyContext);

    refs.chatInfoBtn.addEventListener("click", () => {
        if (currentChat()?.isWaveMind) return;
        const hidden = refs.chatMenu.classList.toggle("hidden");
        refs.chatInfoBtn.setAttribute("aria-expanded", hidden ? "false" : "true");
    });
    refs.chatMenu.addEventListener("click", async (event) => {
        const action = event.target.closest("[data-chat-menu-action]")?.dataset.chatMenuAction;
        const chat = currentChat();
        if (!action || !chat) return;
        refs.chatMenu.classList.add("hidden");
        refs.chatInfoBtn.setAttribute("aria-expanded", "false");
        if (chat.isWaveMind) return;
        if (action === "profile") return openContactProfile(chat);
        if (action === "media") return openChatMediaPage(chat);
        if (action === "mute") return toggleMuteChat(chat);
        if (action === "delete") return deleteChat(chat);
    });

    refs.attachmentBtn?.addEventListener("click", toggleAttachmentSheetFromEvent);
    refs.attachmentBtn?.addEventListener("pointerup", toggleAttachmentSheetFromEvent);
    refs.attachmentBtn?.addEventListener("touchend", toggleAttachmentSheetFromEvent, { passive: false });
    refs.attachmentSheetClose?.addEventListener("click", closeAttachmentSheet);
    refs.attachmentSheetClose?.addEventListener("pointerup", closeAttachmentSheet);
    refs.attachmentSheetBackdrop?.addEventListener("click", handleAttachmentSheetDismiss);
    refs.attachmentSheetBackdrop?.addEventListener("pointerup", handleAttachmentSheetDismiss);
    refs.attachmentSheet?.addEventListener("click", handleAttachmentSheetInteraction);
    refs.attachmentSheet?.addEventListener("pointerup", handleAttachmentSheetInteraction);
    refs.attachmentSheet?.addEventListener("touchend", handleAttachmentSheetInteraction, { passive: false });

    refs.composer.addEventListener("submit", async (event) => {
        event.preventDefault();
        const chat = currentChat();
        const text = refs.messageInput.value.trim();
        if (!chat || (!text && !state.pendingAttachment)) return;
        if (chat.isWaveMind) {
            if (state.pendingAttachment) {
                showToast("Attachments can be sent to contacts, not WaveMind.", "info");
                return;
            }
            refs.messageInput.value = "";
            clearReplyContext();
            await submitWaveMindPrompt(text);
            return;
        }
        if (state.pendingAttachment) {
            refs.messageInput.value = "";
            clearReplyContext();
            try {
                await uploadPendingAttachment(chat, text);
            } catch (error) {
                showToast(error.message, "error");
            }
            return;
        }
        const replyMarker = state.replyContext
            ? `[[wc_reply:${encodeReplyMetadata({
                id: state.replyContext.messageId,
                author: state.replyContext.author,
                preview: state.replyContext.preview,
            })}]]`
            : "";
        const payload = {
            chatId: chat.id,
            clientMessageId: `m_${Date.now()}_${Math.random().toString(16).slice(2, 10)}`,
            text: `${replyMarker}${text}`,
        };
        refs.messageInput.value = "";
        clearReplyContext();
        try {
            if (state.socket?.connected) {
                state.socket.emit("send_message", payload);
            } else {
                const response = await apiFetch("/api/messages/text", { method: "POST", body: JSON.stringify(payload) });
                handleIncomingMessage(response.message);
            }
        } catch (error) {
            showToast(error.message, "error");
        }
    });

    refs.messageInput.addEventListener("input", () => {
        const chat = currentChat();
        if (chat?.isWaveMind) return;
        if (!chat || !state.socket?.connected) return;
        state.socket.emit("typing", { chatId: chat.id, isTyping: true });
        clearTimeout(state.typingTimer);
        state.typingTimer = setTimeout(() => {
            state.socket?.emit("typing", { chatId: chat.id, isTyping: false });
        }, 1200);
    });

    refs.chatPhotoInput?.addEventListener("change", handleMessageFileSelected);
    refs.chatVideoInput?.addEventListener("change", handleMessageFileSelected);
    refs.chatDocumentInput?.addEventListener("change", handleMessageFileSelected);
    refs.fileInput.addEventListener("change", handleMessageFileSelected);
    refs.statusFileInput.addEventListener("change", handleStatusFileSelected);
    refs.profilePhotoInput.addEventListener("change", handleProfilePhotoSelected);
    refs.profilePhotoCameraInput.addEventListener("change", handleProfilePhotoSelected);
    refs.storyViewerClose.addEventListener("click", closeStoryViewer);
    refs.storyReplyBtn?.addEventListener("click", reactToActiveStory);
    refs.storyViewer?.addEventListener("click", (event) => {
        const ownerToggle = event.target.closest("[data-story-owner-toggle]");
        if (!ownerToggle) return;
        event.preventDefault();
        toggleStoryOwnerPanel(ownerToggle);
    });
    refs.storyViewerBody?.addEventListener("click", handleStoryViewerBodyClick);
    refs.storyViewerBody?.addEventListener("dblclick", handleStoryViewerBodyDoubleClick);
    refs.storyViewerBody?.addEventListener("keydown", handleStoryViewerBodyKeydown);
    refs.storySheetClose.addEventListener("click", closeStorySheet);
    refs.storySheetBackdrop.addEventListener("click", closeStorySheet);
    refs.mediaViewerBackdrop?.addEventListener("click", closeMediaViewer);
    refs.mediaViewerClose?.addEventListener("click", closeMediaViewer);
    refs.messages?.addEventListener("click", handleMessageSelectionClick);
    refs.messages?.addEventListener("click", handleMediaViewerTargetActivation);
    refs.messages?.addEventListener("pointerup", handleMediaViewerTargetInteraction);
    refs.messages?.addEventListener("touchend", handleMediaViewerTargetInteraction, { passive: false });
    refs.messages?.addEventListener("keydown", handleMediaViewerTargetKeydown);
    refs.storySheet.addEventListener("click", (event) => {
        const action = event.target.closest("[data-story-sheet-action]")?.dataset.storySheetAction;
        if (!action) return;
        closeStorySheet();
        state.statusPickerKind = action === "video" ? "video" : "photo";
        refs.statusFileInput.accept = LOCAL_STORAGE_FILE_ACCEPT;
        refs.statusFileInput.removeAttribute("capture");
        triggerFilePicker(refs.statusFileInput);
    });
    refs.captureCloseBtn.addEventListener("click", closeCaptureModal);
    refs.captureModal?.addEventListener("cancel", (event) => {
        event.preventDefault();
        closeCaptureModal();
    });
    refs.captureShareBackdrop?.addEventListener("click", closeCaptureShareSheet);
    refs.captureShareClose?.addEventListener("click", closeCaptureShareSheet);
    refs.captureShareList?.addEventListener("click", (event) => {
        const storyButton = event.target.closest("[data-capture-share-target='story']");
        if (storyButton) {
            handleCaptureShareSelection("story");
            return;
        }
        const chatButton = event.target.closest("[data-capture-share-chat-id]");
        if (chatButton) {
            handleCaptureShareSelection("chat", chatButton.dataset.captureShareChatId);
        }
    });
    refs.captureSwitchBtn.addEventListener("click", async () => {
        state.cameraFacing = state.cameraFacing === "user" ? "environment" : "user";
        await startCaptureStream();
    });
    refs.captureTextBtn?.addEventListener("click", () => showToast("Text stickers are coming soon.", "info"));
    refs.captureEmojiBtn?.addEventListener("click", () => {
        applyCaptureFilter("love");
        showToast("Emoji filter applied.", "info");
    });
    refs.captureEffectsBtn?.addEventListener("click", () => {
        applyCaptureFilter("stars");
        showToast("Effects filter applied.", "info");
    });
    refs.capturePhotoBtn.addEventListener("click", () => setCaptureMode("photo"));
    refs.captureVideoBtn.addEventListener("click", () => setCaptureMode("video"));
    refs.captureRecordBtn.addEventListener("click", handleCapturePrimaryAction);
    refs.captureUseBtn.addEventListener("click", useCapturedMedia);
    document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") return;
        if (refs.wavemindPanel && !refs.wavemindPanel.classList.contains("hidden")) {
            closeWaveMind();
            return;
        }
        if (!refs.mediaViewer?.classList.contains("hidden")) {
            closeMediaViewer();
            return;
        }
        if (!refs.attachmentSheet?.classList.contains("hidden")) {
            closeAttachmentSheet();
        }
    });
    refs.messages?.addEventListener("pointerdown", handleMessageHoldStart);
    refs.messages?.addEventListener("pointerup", handleMessageHoldEnd);
    refs.messages?.addEventListener("pointercancel", handleMessageHoldEnd);
    refs.messages?.addEventListener("pointerleave", handleMessageHoldEnd);
    refs.messages?.addEventListener("touchstart", handleMessageHoldStart, { passive: true });
    refs.messages?.addEventListener("touchend", handleMessageHoldEnd);
    refs.messages?.addEventListener("touchcancel", handleMessageHoldEnd);
    refs.messages?.addEventListener("touchmove", handleMessageHoldEnd, { passive: true });
    refs.messages?.addEventListener("contextmenu", (event) => {
        const messageRow = event.target.closest?.("[data-message-id]");
        if (!messageRow) return;
        event.preventDefault();
        openMessageActionSheet(currentMessageById(Number(messageRow.dataset.messageId)), messageRow);
    });
    window.addEventListener("resize", refreshCaptureViewportLayout);
    window.addEventListener("resize", refreshFloatingCallPosition);
    window.visualViewport?.addEventListener("resize", refreshCaptureViewportLayout);
    window.visualViewport?.addEventListener("resize", refreshFloatingCallPosition);
    window.addEventListener("beforeunload", () => {
        stopCaptureStream();
        teardownCall();
    });
}

async function bootstrap() {
    const data = await apiFetch("/api/bootstrap");
    state.me = normalizeUserForUi(data.me);
    state.csrfToken = data.csrfToken || "";
    state.socketToken = data.socketToken || app.dataset.socketToken || "";
    setChats(data.chats || []);
    state.callHistory = (data.callHistory || []).map((call) => ({
        ...call,
        counterpart: call.counterpart ? normalizeUserForUi(call.counterpart) : call.counterpart,
        avatarUrl: call.avatarUrl ? cacheBustUrl(call.avatarUrl) : call.avatarUrl,
    }));
    state.statusPosts = (data.statusPosts || []).map((post) => ({
        ...post,
        user: post.user ? normalizeUserForUi(post.user) : post.user,
    })).sort((left, right) => (
        (parseServerDate(right.createdAt)?.getTime() || 0) - (parseServerDate(left.createdAt)?.getTime() || 0)
    ));
    updateNavBadges();
    if (state.chats.length) {
        state.activeChatId = state.chats[0].id;
    }
    renderSelfProfileButton();
    renderSidebarScreen();
    requestAnimationFrame(() => bindChatListAvatarImages(refs.chatList));
}

function updateMediaOrientation(mediaElement, width, height) {
    if (!mediaElement || !width || !height) return;
    mediaElement.classList.remove("is-portrait", "is-landscape", "is-square");
    mediaElement.closest(".message-bubble")?.classList.remove("is-portrait", "is-landscape", "is-square");

    const orientation = width / height > 1.08
        ? "is-landscape"
        : height / width > 1.08
            ? "is-portrait"
            : "is-square";

    mediaElement.classList.add(orientation);
    mediaElement.closest(".message-bubble")?.classList.add(orientation);
}

function bindMediaOrientation(root) {
    root?.querySelectorAll("img.message-media, img.story-viewer-media, img.media-viewer-media").forEach((mediaElement) => {
        if (mediaElement.dataset.orientationBound === "true") return;
        const update = () => updateMediaOrientation(mediaElement, mediaElement.naturalWidth, mediaElement.naturalHeight);
        mediaElement.dataset.orientationBound = "true";
        if (mediaElement.complete) update();
        mediaElement.addEventListener("load", update, { once: true });
    });

    root?.querySelectorAll("video.message-media, video.story-viewer-media, video.media-viewer-media").forEach((mediaElement) => {
        if (mediaElement.dataset.orientationBound === "true") return;
        const update = () => updateMediaOrientation(mediaElement, mediaElement.videoWidth, mediaElement.videoHeight);
        mediaElement.dataset.orientationBound = "true";
        if (mediaElement.readyState >= 1) update();
        mediaElement.addEventListener("loadedmetadata", update, { once: true });
    });
}

async function init() {
    restoreWaveMindMessages();
    prepareNativeFileInputs();
    prepareAttachmentSheetActions();
    ensureCaptureControlStructure();
    syncCaptureViewportMetrics();
    bindStaticEvents();
    renderReplyComposer();
    await bootstrap();
    setupSocket();
    if (!state.activeChatId) setScreen("chats");
}

init().catch((error) => {
    console.error(error);
    showToast(error.message || "Unable to start WaveChat.", "error");
});
