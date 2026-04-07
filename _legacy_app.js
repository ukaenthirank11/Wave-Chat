(function () {
  const data = window.WAVECHAT_DATA;
  const splashDelayMs = 2400;
  const readyDelayMs = 1500;
  const storyStepMs = 140;
  const storyProgressStep = 0.0225;
  const requestedScreen = new URLSearchParams(window.location.search).get("screen");

  const state = {
    screen: "splash",
    homeTint: "light",
    selectedCountryId: "IN",
    countryQuery: "",
    showCountryPicker: false,
    phoneNumber: "",
    otpDigits: ["1", "2", "3", "4", "", ""],
    profileName: "Ukaenthiran",
    homeSearch: "",
    selectedChatId: "sarah",
    chatDraft: "",
    conversations: {},
    stories: [],
    callLogs: [],
    favoriteContactIds: [],
    selectedStoryId: "story-sarah",
    showStoryComposer: false,
    storyProgress: 0.08,
    cameraMode: "photo",
    cameraFilterId: "cool",
    callsSearch: "",
    selectedContacts: ["david"],
    selectContactsSource: "calls",
    scheduleDate: "07-Apr-2026",
    scheduleTime: "5:30 PM",
    scheduleCalendarOpen: true,
    dialerValue: "",
    favoritesPickerOpen: false,
    showChatMenu: false,
    showChatProfile: false,
    showEmojiPanel: false,
    showAttachmentSheet: false,
    isChatTyping: false,
    messageMinute: 12,
    toastTimer: null,
    splashTimer: null,
    readyTimer: null,
    storyTimer: null,
    chatTypingTimer: null,
    chatReplyTimer: null
  };

  const elements = {
    app: null,
    toast: null
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }

  function init() {
    elements.app = document.getElementById("app");
    elements.toast = document.getElementById("toast");
    state.conversations = buildConversations();
    state.stories = clone(data.stories || []);
    state.callLogs = clone(data.callLogs || []);
    state.favoriteContactIds = clone(data.favoriteContactIds || []);

    bindEvents();
    applyRequestedScreen();
    render();

    if (state.screen === "splash") {
      queueSplashAdvance();
    } else if (state.screen === "story") {
      startStoryProgress();
    }
  }

  function bindEvents() {
    elements.app.addEventListener("click", handleClick);
    elements.app.addEventListener("input", handleInput);
    elements.app.addEventListener("keydown", handleKeyDown);
    elements.app.addEventListener("submit", handleSubmit);
  }

  function buildConversations() {
    const result = {};

    data.contacts.forEach(function (contact) {
      if (contact.id === "sarah") {
        result[contact.id] = clone(data.chatMessages);
        return;
      }

      result[contact.id] = [
        {
          id: "seed-" + contact.id + "-1",
          type: "text",
          author: "contact",
          text: contact.preview,
          time: contact.time === "yesterday" ? "Yesterday" : "9:10 AM"
        },
        {
          id: "seed-" + contact.id + "-2",
          type: "text",
          author: "self",
          text: "Noted. I will get back to you soon.",
          time: "9:12 AM",
          seen: true
        }
      ];
    });

    return result;
  }

  function handleClick(event) {
    const actionButton = event.target.closest("[data-action]");

    if (!actionButton) {
      return;
    }

    handleAction(actionButton.dataset.action, actionButton);
  }

  function handleInput(event) {
    const target = event.target;
    const focus = captureFocus(target);

    if (target.id === "countrySearchInput") {
      state.countryQuery = target.value;
      render(focus);
      return;
    }

    if (target.id === "phoneNumberInput") {
      state.phoneNumber = target.value.replace(/\D/g, "").slice(0, 10);
      render(focus);
      return;
    }

    if (target.matches("[data-otp-index]")) {
      handleOtpInput(target);
      return;
    }

    if (target.id === "profileNameInput") {
      state.profileName = target.value.slice(0, 24);
      render(focus);
      return;
    }

    if (target.id === "homeSearchInput") {
      state.homeSearch = target.value;
      render(focus);
      return;
    }

    if (target.id === "chatComposerInput") {
      state.chatDraft = target.value.slice(0, 180);
      render(focus);
      return;
    }

    if (target.id === "callsSearchInput") {
      state.callsSearch = target.value;
      render(focus);
    }
  }

  function handleKeyDown(event) {
    const target = event.target;

    if (target.matches("[data-otp-index]")) {
      handleOtpKeyDown(event, target);
      return;
    }

    if (target.id === "chatComposerInput" && event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendChatMessage();
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const action = form.dataset.action;

    if (action === "send-chat") {
      sendChatMessage();
    }
  }

  function handleOtpInput(target) {
    const digits = target.value.replace(/\D/g, "");
    const startIndex = Number(target.dataset.otpIndex);

    if (!digits) {
      state.otpDigits[startIndex] = "";
      render({ focusId: target.id });
      return;
    }

    digits.split("").forEach(function (digit, offset) {
      const index = startIndex + offset;
      if (index < state.otpDigits.length) {
        state.otpDigits[index] = digit;
      }
    });

    const nextIndex = Math.min(startIndex + digits.length, state.otpDigits.length - 1);
    render({ focusId: "otp-" + nextIndex });
  }

  function handleOtpKeyDown(event, target) {
    const index = Number(target.dataset.otpIndex);

    if (event.key === "Backspace" && !target.value && index > 0) {
      state.otpDigits[index - 1] = "";
      event.preventDefault();
      render({ focusId: "otp-" + (index - 1) });
      return;
    }

    if (event.key === "ArrowLeft" && index > 0) {
      event.preventDefault();
      render({ focusId: "otp-" + (index - 1) });
      return;
    }

    if (event.key === "ArrowRight" && index < state.otpDigits.length - 1) {
      event.preventDefault();
      render({ focusId: "otp-" + (index + 1) });
    }
  }

  function handleAction(action, element) {
    switch (action) {
      case "start-onboarding":
        navigate("phone");
        return;
      case "open-country-picker":
        state.showCountryPicker = true;
        render();
        return;
      case "close-country-picker":
        state.showCountryPicker = false;
        render();
        return;
      case "select-country":
        state.selectedCountryId = element.dataset.countryId;
        state.countryQuery = "";
        state.showCountryPicker = false;
        render();
        return;
      case "continue-phone":
        if (!isPhoneValid()) {
          flashToast("Enter a valid phone number first.");
          return;
        }
        navigate("otp");
        return;
      case "verify-otp":
        if (!isOtpValid()) {
          flashToast("Complete all six digits to continue.");
          return;
        }
        navigate("profile");
        return;
      case "save-profile":
        if (!isProfileValid()) {
          flashToast("Add the name shown in your profile.");
          return;
        }
        navigate("ready");
        return;
      case "toggle-home-theme":
        state.homeTint = state.homeTint === "light" ? "night" : "light";
        render();
        return;
      case "open-chat":
        state.selectedChatId = element.dataset.chatId;
        state.chatDraft = "";
        closeChatPanels();
        navigate("chat");
        return;
      case "go-home":
        navigate("chats");
        return;
      case "open-updates":
        navigate("updates");
        return;
      case "open-story":
        openStoryById(state.selectedStoryId || getDefaultStoryId());
        return;
      case "open-story-view":
        openStoryById(element.dataset.storyId);
        return;
      case "open-story-composer":
        state.showStoryComposer = true;
        render();
        return;
      case "close-story-composer":
        state.showStoryComposer = false;
        render();
        return;
      case "story-add-media":
        state.showStoryComposer = false;
        flashToast("Opening the camera to add a new story.");
        navigate("camera");
        return;
      case "story-close":
        navigate("updates");
        return;
      case "story-reply":
        flashToast("Reply sent to " + getSelectedStory().name + ".");
        return;
      case "story-react":
        flashToast("Reaction sent to the story.");
        return;
      case "open-camera":
        navigate("camera");
        return;
      case "open-calls":
        navigate("calls");
        return;
      case "open-favorites":
        state.favoritesPickerOpen = false;
        navigate("favorites");
        return;
      case "favorites-back":
        state.favoritesPickerOpen = false;
        navigate("calls");
        return;
      case "open-favorites-add":
        state.favoritesPickerOpen = true;
        render();
        return;
      case "close-favorites-add":
        state.favoritesPickerOpen = false;
        render();
        return;
      case "toggle-favorite-contact":
        toggleFavoriteContact(element.dataset.contactId);
        render();
        return;
      case "favorite-call":
        flashToast(
          (element.dataset.callType === "video" ? "Video" : "Voice") +
            " calling " +
            getContactById(element.dataset.contactId).name +
            "..."
        );
        return;
      case "recent-call":
        flashToast(
          (element.dataset.callType === "video" ? "Video" : "Voice") +
            " calling " +
            getContactById(element.dataset.contactId).name +
            "..."
        );
        return;
      case "camera-close":
        navigate("chats");
        return;
      case "camera-reset":
        state.cameraFilterId = "cool";
        state.cameraMode = "photo";
        render();
        return;
      case "camera-tool":
        flashToast(element.dataset.toolLabel + " controls are part of the demo layer.");
        return;
      case "select-filter":
        state.cameraFilterId = element.dataset.filterId;
        render();
        return;
      case "set-camera-mode":
        state.cameraMode = element.dataset.mode;
        render();
        return;
      case "calls-back":
        navigate("chats");
        return;
      case "toggle-chat-menu":
        state.showChatMenu = !state.showChatMenu;
        if (state.showChatMenu) {
          state.showEmojiPanel = false;
          state.showAttachmentSheet = false;
        }
        render();
        return;
      case "close-chat-menu":
        state.showChatMenu = false;
        render();
        return;
      case "open-chat-profile":
        state.showChatProfile = true;
        state.showChatMenu = false;
        render();
        return;
      case "close-chat-profile":
        state.showChatProfile = false;
        render();
        return;
      case "toggle-emoji-panel":
        state.showEmojiPanel = !state.showEmojiPanel;
        state.showAttachmentSheet = false;
        state.showChatMenu = false;
        render({ focusId: "chatComposerInput" });
        return;
      case "insert-emoji":
        state.chatDraft = (state.chatDraft + " " + getQuickEmojiValue(element.dataset.emojiKey)).trim();
        render({ focusId: "chatComposerInput" });
        return;
      case "toggle-attachment-sheet":
        state.showAttachmentSheet = !state.showAttachmentSheet;
        state.showEmojiPanel = false;
        state.showChatMenu = false;
        render();
        return;
      case "attach-item":
        sendAttachment(element.dataset.attachmentId);
        return;
      case "chat-call":
        flashToast("Voice calling " + getSelectedContact().name + "...");
        return;
      case "chat-video":
        flashToast("Video calling " + getSelectedContact().name + "...");
        return;
      case "chat-menu-select":
        handleChatMenuSelection(element.dataset.menuId);
        return;
      case "dismiss-chat-floating":
        closeChatPanels();
        render();
        return;
      case "open-keypad":
        navigate("dialer");
        return;
      case "open-schedule":
        state.scheduleCalendarOpen = true;
        navigate("schedule");
        return;
      case "toggle-calendar":
        state.scheduleCalendarOpen = !state.scheduleCalendarOpen;
        render();
        return;
      case "select-calendar-day":
        state.scheduleDate = padDay(element.dataset.day) + "-Apr-2026";
        render();
        return;
      case "schedule-back":
        navigate("calls");
        return;
      case "schedule-confirm":
        state.selectContactsSource = "schedule";
        navigate("selectContacts");
        return;
      case "open-contact-select":
        state.selectContactsSource = "calls";
        navigate("selectContacts");
        return;
      case "select-contacts-back":
        navigate(state.selectContactsSource === "schedule" ? "schedule" : "calls");
        return;
      case "toggle-call-contact":
        toggleSelectedContact(element.dataset.contactId);
        render();
        return;
      case "open-dialer":
        if (!state.selectedContacts.length) {
          flashToast("Choose at least one contact first.");
          return;
        }
        navigate("dialer");
        return;
      case "dialer-back":
        navigate("calls");
        return;
      case "press-key":
        if (state.dialerValue.length < 14) {
          state.dialerValue += element.dataset.key;
          render();
        }
        return;
      case "dialer-backspace":
        state.dialerValue = state.dialerValue.slice(0, -1);
        render();
        return;
      case "dialer-call":
        flashToast(state.dialerValue ? "Calling " + state.dialerValue + "..." : "Enter a number to call.");
        return;
      case "send-chat":
        sendChatMessage();
        return;
      default:
        return;
    }
  }

  function sendChatMessage() {
    const text = state.chatDraft.trim();

    if (!text) {
      flashToast("Type a message first.");
      return;
    }

    appendOutgoingMessage({
      type: "text",
      text: text
    });
    state.chatDraft = "";
    state.showEmojiPanel = false;
    queueAutoReply("text");
    render({ focusId: "chatComposerInput" });
  }

  function sendAttachment(attachmentId) {
    const option = getAttachmentOption(attachmentId);

    if (!option) {
      flashToast("That attachment is not available yet.");
      return;
    }

    if (attachmentId === "photo") {
      appendOutgoingMessage({
        type: "image",
        title: "Shared a sunset photo",
        imageSrc: "assets/img/chat/sunset.png"
      });
      queueAutoReply("photo");
    } else if (attachmentId === "video") {
      appendOutgoingMessage({
        type: "video",
        title: "Shared a short launch clip",
        videoSrc: "assets/media/SRC.mp4"
      });
      queueAutoReply("video");
    } else {
      appendOutgoingMessage({
        type: "document",
        title: "project-notes.txt",
        subtitle: "12 KB plain text"
      });
      queueAutoReply("document");
    }

    state.showAttachmentSheet = false;
    render({ focusId: "chatComposerInput" });
  }

  function navigate(screen) {
    stopStoryProgress();
    window.clearTimeout(state.readyTimer);
    clearChatReplyTimers();
    state.screen = screen;

    if (screen !== "phone") {
      state.showCountryPicker = false;
    }

    if (screen !== "updates") {
      state.showStoryComposer = false;
    }

    if (screen !== "favorites") {
      state.favoritesPickerOpen = false;
    }

    if (screen !== "chat") {
      closeChatPanels();
    }

    if (screen === "otp") {
      state.otpDigits = ["1", "2", "3", "4", "", ""];
    }

    if (screen === "ready") {
      state.readyTimer = window.setTimeout(function () {
        navigate("chats");
      }, readyDelayMs);
    }

    if (screen === "story") {
      state.storyProgress = 0.08;
      startStoryProgress();
    }

    if (screen === "dialer") {
      state.dialerValue = state.dialerValue || "";
    }

    render();
  }

  function render(focus) {
    elements.app.dataset.skin = isDarkScreen(state.screen) ? "dark" : "light";
    elements.app.dataset.screen = state.screen;
    elements.app.innerHTML = renderScreen();

    if (state.screen === "chat") {
      const thread = elements.app.querySelector("[data-chat-thread]");
      if (thread) {
        thread.scrollTop = thread.scrollHeight;
      }
    }

    restoreFocus(focus);
  }

  function renderScreen() {
    switch (state.screen) {
      case "splash":
        return renderSplashScreen();
      case "welcome":
        return renderWelcomeScreen();
      case "phone":
        return renderPhoneScreen();
      case "otp":
        return renderOtpScreen();
      case "profile":
        return renderProfileScreen();
      case "ready":
        return renderReadyScreen();
      case "chats":
        return renderChatsScreen();
      case "updates":
        return renderUpdatesScreen();
      case "chat":
        return renderChatScreen();
      case "story":
        return renderStoryScreen();
      case "camera":
        return renderCameraScreen();
      case "calls":
        return renderCallsScreen();
      case "favorites":
        return renderFavoritesScreen();
      case "schedule":
        return renderScheduleScreen();
      case "selectContacts":
        return renderSelectContactsScreen();
      case "dialer":
        return renderDialerScreen();
      default:
        return "";
    }
  }

  function renderSplashScreen() {
    return (
      '<section class="screen screen--splash">' +
      '<div class="screen__center">' +
      '<span class="loading-ring" aria-hidden="true"></span>' +
      "</div>" +
      "</section>"
    );
  }

  function renderWelcomeScreen() {
    return (
      '<section class="screen screen--welcome">' +
      '<div class="welcome-card">' +
      '<div class="brand-mark brand-mark--hero">' +
      renderWaveMark() +
      "</div>" +
      "<h1>Welcome to Wave Chat</h1>" +
      "<p>Connect with friends and family with secure, fast messaging</p>" +
      '<ul class="feature-list">' +
      renderFeatureItem("shield", "Fast &amp; Secure", "End to end encryption") +
      renderFeatureItem("chat", "Rich Messaging", "Photos, videos &amp; more") +
      renderFeatureItem("call", "Voice &amp; Video Calls", "Crystal clear quality") +
      "</ul>" +
      '<button class="primary-button primary-button--hero" type="button" data-action="start-onboarding">' +
      '<span>Get Started</span>' +
      icon("arrow-right") +
      "</button>" +
      "</div>" +
      "</section>"
    );
  }

  function renderPhoneScreen() {
    const country = getCurrentCountry();
    const invalidNumber = Boolean(state.phoneNumber) && !isPhoneValid();

    return (
      '<section class="screen screen--light">' +
      '<div class="auth-card">' +
      '<div class="auth-card__icon auth-card__icon--phone">' +
      icon("call") +
      "</div>" +
      "<h1>Enter your phone number</h1>" +
      "<p>We'll send you a verification code to confirm your number</p>" +
      '<button class="country-field" type="button" data-action="open-country-picker">' +
      '<span class="country-field__label">' +
      "<strong>" +
      escapeHtml(country.id) +
      "</strong>" +
      "<span>" +
      escapeHtml(country.name) +
      "</span>" +
      "<small>" +
      escapeHtml(country.dialCode) +
      "</small>" +
      "</span>" +
      icon("chevron-down") +
      "</button>" +
      '<label class="phone-field' +
      (invalidNumber ? " phone-field--invalid" : "") +
      '">' +
      '<span class="phone-field__prefix">' +
      escapeHtml(country.id) +
      " " +
      escapeHtml(country.dialCode) +
      "</span>" +
      '<input id="phoneNumberInput" type="tel" inputmode="numeric" autocomplete="tel-national" placeholder="79045" value="' +
      escapeHtml(state.phoneNumber) +
      '">' +
      '<span class="phone-field__status">' +
      (isPhoneValid() ? icon("check") : icon("warning")) +
      "</span>" +
      "</label>" +
      '<p class="field-note field-note--error">' +
      (invalidNumber ? "Please enter a valid India phone number (10 digits)" : "&nbsp;") +
      "</p>" +
      '<button class="primary-button primary-button--full" type="button" data-action="continue-phone"' +
      (isPhoneValid() ? "" : " disabled") +
      ">Continue</button>" +
      "</div>" +
      (state.showCountryPicker ? renderCountryPicker() : "") +
      "</section>"
    );
  }

  function renderCountryPicker() {
    const filteredCountries = getFilteredCountries();

    return (
      '<div class="sheet-overlay">' +
      '<button class="sheet-overlay__backdrop" type="button" data-action="close-country-picker" aria-label="Close"></button>' +
      '<section class="sheet sheet--country" aria-label="Select country">' +
      '<div class="sheet__header">' +
      "<h2>Select Country</h2>" +
      '<button class="icon-button icon-button--sheet" type="button" data-action="close-country-picker">' +
      icon("close") +
      "</button>" +
      "</div>" +
      '<label class="search-field search-field--sheet">' +
      icon("search") +
      '<input id="countrySearchInput" type="text" placeholder="Search country or code..." value="' +
      escapeHtml(state.countryQuery) +
      '">' +
      "</label>" +
      '<div class="country-list">' +
      filteredCountries
        .map(function (country) {
          return (
            '<button class="country-row' +
            (country.id === state.selectedCountryId ? " country-row--active" : "") +
            '" type="button" data-action="select-country" data-country-id="' +
            escapeHtml(country.id) +
            '">' +
            '<span class="country-row__code">' +
            escapeHtml(country.id) +
            "</span>" +
            '<span class="country-row__copy">' +
            "<strong>" +
            escapeHtml(country.name) +
            "</strong>" +
            "<small>" +
            escapeHtml(country.dialCode) +
            "</small>" +
            "</span>" +
            (country.id === state.selectedCountryId ? '<span class="country-row__tick">' + icon("check") + "</span>" : "") +
            "</button>"
          );
        })
        .join("") +
      "</div>" +
      "</section>" +
      "</div>"
    );
  }

  function renderOtpScreen() {
    return (
      '<section class="screen screen--light">' +
      '<div class="auth-card auth-card--otp">' +
      '<div class="auth-card__icon auth-card__icon--otp">' +
      icon("chat") +
      "</div>" +
      "<h1>Enter verification code</h1>" +
      "<p>We sent a code to " +
      escapeHtml(getCurrentCountry().dialCode + " " + getFormattedPhoneNumber()) +
      "</p>" +
      '<div class="otp-row">' +
      state.otpDigits
        .map(function (digit, index) {
          return (
            '<input class="otp-box' +
            (digit ? " otp-box--filled" : "") +
            '" id="otp-' +
            index +
            '" type="tel" inputmode="numeric" maxlength="1" value="' +
            escapeHtml(digit) +
            '" data-otp-index="' +
            index +
            '" aria-label="OTP digit ' +
            (index + 1) +
            '">'
          );
        })
        .join("") +
      "</div>" +
      '<button class="link-button" type="button">Resend code</button>' +
      '<button class="primary-button primary-button--full primary-button--muted" type="button" data-action="verify-otp"' +
      (isOtpValid() ? "" : " disabled") +
      ">Verify</button>" +
      "</div>" +
      "</section>"
    );
  }

  function renderProfileScreen() {
    return (
      '<section class="screen screen--light">' +
      '<div class="auth-card">' +
      '<div class="auth-card__icon auth-card__icon--profile">' +
      icon("person") +
      "</div>" +
      "<h1>What's your name?</h1>" +
      "<p>This is how you'll appear to your contacts</p>" +
      '<label class="text-field">' +
      '<input id="profileNameInput" type="text" maxlength="24" value="' +
      escapeHtml(state.profileName) +
      '" placeholder="Enter your name">' +
      "</label>" +
      '<button class="primary-button primary-button--full" type="button" data-action="save-profile"' +
      (isProfileValid() ? "" : " disabled") +
      ">Continue</button>" +
      "</div>" +
      "</section>"
    );
  }

  function renderReadyScreen() {
    return (
      '<section class="screen screen--light screen--ready">' +
      '<div class="ready-state">' +
      '<span class="ready-state__dot"></span>' +
      "<h1>You&apos;re all set!</h1>" +
      "<p>Welcome to Wave Chat, " +
      escapeHtml(state.profileName.trim() || "there") +
      "</p>" +
      "</div>" +
      "</section>"
    );
  }

  function renderChatsScreen() {
    const contacts = getFilteredContacts(state.homeSearch);

    return (
      '<section class="screen screen--home screen--home-' +
      escapeHtml(state.homeTint) +
      '">' +
      '<header class="home-header">' +
      '<div class="brand-lockup">' +
      '<span class="brand-lockup__mark">' +
      renderWaveMark() +
      "</span>" +
      "<strong>Wave Chat</strong>" +
      "</div>" +
      '<button class="icon-button icon-button--home" type="button" data-action="toggle-home-theme" aria-label="Toggle theme">' +
      icon(state.homeTint === "light" ? "moon" : "sun") +
      "</button>" +
      "</header>" +
      '<label class="search-field search-field--home">' +
      icon("search") +
      '<input id="homeSearchInput" type="search" placeholder="Search conversations" value="' +
      escapeHtml(state.homeSearch) +
      '">' +
      "</label>" +
      '<div class="conversation-list">' +
      (contacts.length
        ? contacts.map(renderContactRow).join("")
        : '<div class="empty-state">No conversations match that search.</div>') +
      "</div>" +
      renderBottomTabs("chats") +
      "</section>"
    );
  }

  function renderUpdatesScreen() {
    const ownStory = getOwnStory();
    const recentStories = getRecentStories();
    const viewedStories = getViewedStories();

    return (
      '<section class="screen screen--light screen--updates">' +
      '<header class="updates-header">' +
      '<div class="brand-lockup">' +
      '<span class="brand-lockup__mark">' +
      renderWaveMark() +
      "</span>" +
      "<strong>Stories</strong>" +
      "</div>" +
      '<button class="icon-button icon-button--home" type="button" data-action="open-story-composer" aria-label="Add story">' +
      icon("plus") +
      "</button>" +
      "</header>" +
      '<div class="updates-list">' +
      (ownStory ? renderOwnStoryCard(ownStory) : "") +
      (recentStories.length
        ? '<section class="updates-section"><p class="updates-section__label">Recent stories</p>' +
          recentStories.map(renderStoryListRow).join("") +
          "</section>"
        : "") +
      (viewedStories.length
        ? '<section class="updates-section"><p class="updates-section__label">Viewed stories</p>' +
          viewedStories.map(renderStoryListRow).join("") +
          "</section>"
        : "") +
      "</div>" +
      renderBottomTabs("stories") +
      (state.showStoryComposer ? renderStoryComposerSheet() : "") +
      "</section>"
    );
  }

  function renderChatScreen() {
    const contact = getSelectedContact();
    const messages = getCurrentConversation();

    return (
      '<section class="screen screen--chat">' +
      ((state.showChatMenu || state.showEmojiPanel || state.showAttachmentSheet)
        ? '<button class="floating-overlay-backdrop" type="button" data-action="dismiss-chat-floating" aria-label="Dismiss overlay"></button>'
        : "") +
      '<header class="thread-header">' +
      '<div class="thread-header__main">' +
      '<button class="icon-button icon-button--plain" type="button" data-action="go-home" aria-label="Back">' +
      icon("arrow-left") +
      "</button>" +
      '<button class="thread-header__profile" type="button" data-action="open-chat-profile" aria-label="View contact">' +
      renderAvatar(contact, "avatar avatar--thread", false) +
      "</button>" +
      '<div class="thread-header__copy">' +
      "<strong>" +
      escapeHtml(contact.name) +
      "</strong>" +
      "<span>" +
      escapeHtml(contact.status) +
      "</span>" +
      "</div>" +
      "</div>" +
      '<div class="thread-header__actions">' +
      '<button class="icon-button icon-button--plain" type="button" data-action="chat-call" aria-label="Call">' +
      icon("call") +
      "</button>" +
      '<button class="icon-button icon-button--plain" type="button" data-action="chat-video" aria-label="Video">' +
      icon("video") +
      "</button>" +
      '<button class="icon-button icon-button--plain" type="button" data-action="toggle-chat-menu" aria-label="More">' +
      icon("more") +
      "</button>" +
      "</div>" +
      "</header>" +
      (state.showChatMenu ? renderChatMenu() : "") +
      '<div class="thread" data-chat-thread="true">' +
      messages.map(renderMessageRow).join("") +
      (state.isChatTyping ? renderTypingRow(contact) : "") +
      "</div>" +
      (state.showEmojiPanel ? renderEmojiPanel() : "") +
      (state.showAttachmentSheet ? renderAttachmentSheet() : "") +
      '<form class="chat-composer" data-action="send-chat">' +
      '<button class="icon-button icon-button--composer' +
      (state.showEmojiPanel ? " icon-button--composer-active" : "") +
      '" type="button" data-action="toggle-emoji-panel" aria-label="Emoji">' +
      icon("smile") +
      "</button>" +
      '<label class="chat-composer__field">' +
      '<input id="chatComposerInput" type="text" maxlength="180" placeholder="Message" value="' +
      escapeHtml(state.chatDraft) +
      '">' +
      "</label>" +
      '<button class="icon-button icon-button--composer' +
      (state.showAttachmentSheet ? " icon-button--composer-active" : "") +
      '" type="button" data-action="toggle-attachment-sheet" aria-label="Attach">' +
      icon("paperclip") +
      "</button>" +
      '<button class="send-button" type="submit" data-action="send-chat" aria-label="Send">' +
      icon("send") +
      "</button>" +
      "</form>" +
      (state.showChatProfile ? renderChatProfileModal(contact) : "") +
      "</section>"
    );
  }

  function renderStoryScreen() {
    const story = getSelectedStory();

    return (
      '<section class="screen screen--story" style="--story-start:' +
      escapeHtml(story.accentStart || "#6d2ff0") +
      ";--story-end:" +
      escapeHtml(story.accentEnd || "#ff6a00") +
      ';">' +
      '<div class="story-view">' +
      '<div class="story-media">' +
      renderStoryMedia(story) +
      '<div class="story-media__veil"></div>' +
      "</div>" +
      '<div class="story-top">' +
      '<button class="icon-button icon-button--story" type="button" data-action="story-close" aria-label="Close">' +
      icon("close") +
      "</button>" +
      '<div class="story-top__copy">' +
      renderStoryAvatar(story) +
      '<div><strong>' +
      escapeHtml(story.name) +
      "</strong><span>" +
      escapeHtml(story.timeLabel) +
      "</span></div>" +
      "</div>" +
      "</div>" +
      '<div class="story-progress"><span id="storyProgressFill" style="width:' +
      (state.storyProgress * 100).toFixed(1) +
      '%"></span></div>' +
      '<div class="story-center">' +
      "<h1>" +
      escapeHtml(story.title) +
      "</h1>" +
      "<p>" +
      escapeHtml(story.subtitle) +
      "</p>" +
      "</div>" +
      '<div class="story-reply">' +
      '<button class="story-reply__field" type="button" data-action="story-reply">Reply to story...</button>' +
      '<button class="story-reply__heart" type="button" data-action="story-react" aria-label="React">' +
      icon("heart") +
      "</button>" +
      "</div>" +
      "</div>" +
      "</section>"
    );
  }

  function renderCameraScreen() {
    const filter = getCurrentFilter();

    return (
      '<section class="screen screen--camera">' +
      '<div class="camera-view" style="--camera-start:' +
      escapeHtml(filter.previewStart) +
      ";--camera-end:" +
      escapeHtml(filter.previewEnd) +
      ';">' +
      '<div class="camera-view__top">' +
      '<button class="icon-button icon-button--camera" type="button" data-action="camera-close" aria-label="Close">' +
      icon("close") +
      "</button>" +
      '<span class="camera-badge">Demo Mode</span>' +
      '<button class="icon-button icon-button--camera" type="button" data-action="camera-reset" aria-label="Reset">' +
      icon("undo") +
      "</button>" +
      "</div>" +
      '<div class="camera-tools">' +
      renderCameraTool("T", "Text") +
      renderCameraTool(icon("smile"), "Emoji") +
      renderCameraTool(icon("sparkles"), "Effects") +
      "</div>" +
      '<div class="camera-controls">' +
      '<div class="camera-filters">' +
      '<span class="camera-arrow">&lsaquo;</span>' +
      data.cameraFilters.map(renderFilterChip).join("") +
      '<span class="camera-arrow">&rsaquo;</span>' +
      "</div>" +
      '<div class="camera-footer">' +
      '<button class="camera-mode' +
      (state.cameraMode === "photo" ? " camera-mode--active" : "") +
      '" type="button" data-action="set-camera-mode" data-mode="photo">PHOTO</button>' +
      '<button class="shutter' +
      (state.cameraMode === "video" ? " shutter--video" : "") +
      '" type="button" aria-label="Capture">' +
      '<span></span>' +
      "</button>" +
      '<button class="camera-mode' +
      (state.cameraMode === "video" ? " camera-mode--active" : "") +
      '" type="button" data-action="set-camera-mode" data-mode="video">VIDEO</button>' +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>"
    );
  }

  function renderCallsScreen() {
    const logs = getFilteredCallLogs(state.callsSearch);

    return (
      '<section class="screen screen--dark screen--calls">' +
      '<header class="calls-header">' +
      '<div class="brand-lockup brand-lockup--dark">' +
      '<span class="brand-lockup__mark">' +
      renderWaveMark() +
      "</span>" +
      "<strong>Calls</strong>" +
      "</div>" +
      '<div class="calls-header__actions">' +
      '<button class="icon-button icon-button--dark" type="button" data-action="open-favorites" aria-label="Favorites">' +
      icon("heart") +
      "</button>" +
      '<button class="icon-button icon-button--dark" type="button" data-action="open-contact-select" aria-label="Select contacts">' +
      icon("person-add") +
      "</button>" +
      "</div>" +
      "</header>" +
      '<label class="search-field search-field--dark search-field--calls">' +
      icon("search") +
      '<input id="callsSearchInput" type="search" placeholder="Search name or number..." value="' +
      escapeHtml(state.callsSearch) +
      '">' +
      "</label>" +
      '<div class="calls-quick-grid">' +
      renderCallsQuickAction("open-contact-select", "call", "Call", "Start a voice call") +
      renderCallsQuickAction("open-schedule", "calendar", "Schedule", "Plan it for later") +
      renderCallsQuickAction("open-keypad", "grid", "Keypad", "Dial a number") +
      renderCallsQuickAction("open-favorites", "heart", "Favorites", "Quick call people you pin") +
      "</div>" +
      '<p class="calls-section-label">Recent</p>' +
      '<div class="dark-contact-list dark-contact-list--calls">' +
      (logs.length
        ? logs.map(renderCallLogRow).join("")
        : '<div class="empty-state empty-state--dark">No calls match that search.</div>') +
      "</div>" +
      '<button class="calls-fab" type="button" data-action="open-contact-select" aria-label="New call">' +
      icon("plus") +
      "</button>" +
      renderBottomTabs("calls") +
      "</section>"
    );
  }

  function renderFavoritesScreen() {
    const favorites = getFavoriteContacts();

    return (
      '<section class="screen screen--dark screen--favorites">' +
      '<header class="panel-header panel-header--favorites">' +
      '<button class="icon-button icon-button--dark" type="button" data-action="favorites-back" aria-label="Back">' +
      icon("arrow-left") +
      "</button>" +
      "<strong>Favorites</strong>" +
      '<button class="icon-button icon-button--dark" type="button" data-action="open-favorites-add" aria-label="Add favorite">' +
      icon("plus") +
      "</button>" +
      "</header>" +
      '<div class="favorites-body">' +
      '<div class="favorites-grid">' +
      favorites.map(renderFavoriteCard).join("") +
      (favorites.length < 12
        ? '<button class="favorite-card favorite-card--add" type="button" data-action="open-favorites-add">' +
          '<span class="favorite-card__add-icon">' +
          icon("plus") +
          "</span>" +
          "<strong>Add</strong>" +
          "</button>"
        : "") +
      "</div>" +
      '<p class="favorites-note">Tap the phone or video icons to quickly reach your favorite contacts.</p>' +
      "</div>" +
      (state.favoritesPickerOpen ? renderFavoritesPicker() : "") +
      "</section>"
    );
  }

  function renderScheduleScreen() {
    const selectedDay = String(Number(state.scheduleDate.slice(0, 2)));

    return (
      '<section class="screen screen--dark screen--schedule">' +
      '<header class="panel-header">' +
      '<button class="icon-button icon-button--dark" type="button" data-action="schedule-back" aria-label="Back">' +
      icon("close") +
      "</button>" +
      "<strong>Schedule call</strong>" +
      '<span class="panel-header__spacer"></span>' +
      "</header>" +
      '<div class="schedule-card">' +
      '<div class="schedule-card__row schedule-card__row--stack">' +
      "<strong>" +
      escapeHtml((state.profileName.trim() || "Your") + "'s call") +
      "</strong>" +
      "<small>Description (optional)</small>" +
      "</div>" +
      '<button class="schedule-card__row" type="button" data-action="toggle-calendar">' +
      '<span class="schedule-card__label">' +
      icon("calendar") +
      "<strong>" +
      escapeHtml(state.scheduleDate) +
      "</strong>" +
      "</span>" +
      "<strong>" +
      escapeHtml(state.scheduleTime) +
      "</strong>" +
      "</button>" +
      "</div>" +
      (state.scheduleCalendarOpen
        ? '<div class="calendar-sheet">' +
          '<div class="calendar-sheet__header"><strong>April 2026</strong><span>&rsaquo;</span></div>' +
          '<div class="calendar-days"><span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span></div>' +
          '<div class="calendar-grid">' +
          data.calendarRows
            .map(function (row, rowIndex) {
              return row
                .map(function (day) {
                  const isMuted = (rowIndex === 0 && Number(day) >= 29) || (rowIndex === data.calendarRows.length - 1 && Number(day) <= 2);
                  return (
                    '<button class="calendar-day' +
                    (isMuted ? " calendar-day--muted" : "") +
                    (day === selectedDay ? " calendar-day--selected" : "") +
                    '" type="button" data-action="select-calendar-day" data-day="' +
                    escapeHtml(day) +
                    '">' +
                    escapeHtml(day) +
                    "</button>"
                  );
                })
                .join("");
            })
            .join("") +
          "</div>" +
          '<button class="calendar-cancel" type="button" data-action="toggle-calendar">Cancel</button>' +
          "</div>"
        : "") +
      '<button class="floating-confirm" type="button" data-action="schedule-confirm" aria-label="Confirm schedule">' +
      icon("check") +
      "</button>" +
      "</section>"
    );
  }

  function renderSelectContactsScreen() {
    return (
      '<section class="screen screen--dark screen--select-contacts">' +
      '<header class="panel-header panel-header--select">' +
      '<button class="icon-button icon-button--dark" type="button" data-action="select-contacts-back" aria-label="Back">' +
      icon("arrow-left") +
      "</button>" +
      "<strong>Select Contacts</strong>" +
      '<button class="done-pill" type="button" data-action="open-dialer"' +
      (state.selectedContacts.length ? "" : " disabled") +
      ">Done (" +
      state.selectedContacts.length +
      ")</button>" +
      "</header>" +
      '<div class="dark-contact-list dark-contact-list--compact">' +
      data.contacts.map(renderSelectableContactRow).join("") +
      "</div>" +
      "</section>"
    );
  }

  function renderDialerScreen() {
    return (
      '<section class="screen screen--dark screen--dialer">' +
      '<header class="panel-header panel-header--dialer">' +
      '<button class="icon-button icon-button--dark" type="button" data-action="dialer-back" aria-label="Back">' +
      icon("arrow-left") +
      "</button>" +
      '<span class="panel-header__spacer"></span>' +
      '<button class="icon-button icon-button--dark" type="button" data-action="open-contact-select" aria-label="Add person">' +
      icon("person-add") +
      "</button>" +
      "</header>" +
      '<div class="dialer-display">' +
      "<strong>" +
      (state.dialerValue ? escapeHtml(state.dialerValue) : "&nbsp;") +
      "</strong>" +
      "<span>Enter number to call</span>" +
      "</div>" +
      '<div class="dialer-grid">' +
      data.keypad
        .map(function (item) {
          return (
            '<button class="dialer-key" type="button" data-action="press-key" data-key="' +
            escapeHtml(item.value) +
            '">' +
            "<strong>" +
            escapeHtml(item.value) +
            "</strong>" +
            "<small>" +
            escapeHtml(item.letters) +
            "</small>" +
            "</button>"
          );
        })
        .join("") +
      "</div>" +
      '<div class="dialer-actions">' +
      '<button class="call-button" type="button" data-action="dialer-call" aria-label="Call">' +
      icon("call") +
      "</button>" +
      '<button class="backspace-button" type="button" data-action="dialer-backspace" aria-label="Delete">' +
      icon("backspace") +
      "</button>" +
      "</div>" +
      "</section>"
    );
  }

  function renderContactRow(contact) {
    return (
      '<button class="contact-row" type="button" data-action="open-chat" data-chat-id="' +
      escapeHtml(contact.id) +
      '">' +
      renderAvatar(contact, "avatar avatar--list", true) +
      '<span class="contact-row__copy">' +
      "<strong>" +
      escapeHtml(contact.name) +
      "</strong>" +
      "<small>" +
      escapeHtml(contact.preview) +
      "</small>" +
      "</span>" +
      '<span class="contact-row__meta">' +
      "<small>" +
      escapeHtml(contact.time) +
      "</small>" +
      (contact.unread
        ? '<span class="contact-row__badge">' + contact.unread + "</span>"
        : "") +
      "</span>" +
      "</button>"
    );
  }

  function renderOwnStoryCard(story) {
    return (
      '<button class="story-own-card" type="button" data-action="open-story-composer">' +
      '<span class="story-own-card__avatar">' +
      renderStoryAvatar(story) +
      '<span class="story-own-card__plus">' +
      icon("plus") +
      "</span>" +
      "</span>" +
      '<span class="story-own-card__copy">' +
      "<strong>My Story</strong>" +
      "<small>Tap to add story</small>" +
      "</span>" +
      "</button>"
    );
  }

  function renderStoryListRow(story) {
    return (
      '<button class="story-row" type="button" data-action="open-story-view" data-story-id="' +
      escapeHtml(story.id) +
      '">' +
      '<span class="story-row__avatar' +
      (story.viewed ? " story-row__avatar--viewed" : "") +
      '">' +
      renderStoryAvatar(story) +
      "</span>" +
      '<span class="story-row__copy">' +
      "<strong>" +
      escapeHtml(story.name) +
      "</strong>" +
      "<small>" +
      escapeHtml(story.timeLabel) +
      "</small>" +
      "</span>" +
      "</button>"
    );
  }

  function renderStoryComposerSheet() {
    return (
      '<div class="sheet-overlay">' +
      '<button class="sheet-overlay__backdrop" type="button" data-action="close-story-composer" aria-label="Close"></button>' +
      '<section class="sheet sheet--story-composer" aria-label="Add story">' +
      '<div class="sheet__header">' +
      "<h2>Add to Story</h2>" +
      '<button class="icon-button icon-button--sheet" type="button" data-action="close-story-composer">' +
      icon("close") +
      "</button>" +
      "</div>" +
      '<div class="story-composer-options">' +
      renderStoryComposerOption("photo", "camera", "Photo", "Take or upload a photo") +
      renderStoryComposerOption("video", "video", "Video", "Record or upload a clip") +
      "</div>" +
      "</section>" +
      "</div>"
    );
  }

  function renderStoryComposerOption(kind, iconName, title, description) {
    return (
      '<button class="story-composer-option" type="button" data-action="story-add-media" data-story-kind="' +
      escapeHtml(kind) +
      '">' +
      '<span class="story-composer-option__icon">' +
      icon(iconName) +
      "</span>" +
      '<span class="story-composer-option__copy">' +
      "<strong>" +
      title +
      "</strong>" +
      "<small>" +
      description +
      "</small>" +
      "</span>" +
      "</button>"
    );
  }

  function renderCallsQuickAction(action, iconName, title, description) {
    return (
      '<button class="calls-quick-action" type="button" data-action="' +
      action +
      '">' +
      '<span class="calls-quick-action__icon">' +
      icon(iconName) +
      "</span>" +
      "<strong>" +
      title +
      "</strong>" +
      "<small>" +
      description +
      "</small>" +
      "</button>"
    );
  }

  function renderCallLogRow(callLog) {
    const contact = getContactById(callLog.contactId);

    return (
      '<article class="call-log-row">' +
      renderAvatar(contact, "avatar avatar--list", false) +
      '<div class="call-log-row__copy">' +
      '<div class="call-log-row__title">' +
      "<strong>" +
      escapeHtml(contact.name) +
      "</strong>" +
      (callLog.count > 1
        ? '<span class="call-log-row__count">(' + callLog.count + ")</span>"
        : "") +
      "</div>" +
      '<small class="call-log-row__meta call-log-row__meta--' +
      escapeHtml(callLog.direction) +
      '">' +
      '<span class="call-log-row__arrow">' +
      escapeHtml(getCallDirectionArrow(callLog.direction)) +
      "</span>" +
      "<span>" +
      escapeHtml(callLog.timeLabel) +
      "</span>" +
      "</small>" +
      "</div>" +
      '<button class="icon-button icon-button--dark icon-button--call-log" type="button" data-action="recent-call" data-contact-id="' +
      escapeHtml(callLog.contactId) +
      '" data-call-type="' +
      escapeHtml(callLog.callType) +
      '" aria-label="Call">' +
      icon(callLog.callType === "video" ? "video" : "call") +
      "</button>" +
      "</article>"
    );
  }

  function renderFavoriteCard(contact) {
    return (
      '<article class="favorite-card">' +
      '<button class="favorite-card__remove" type="button" data-action="toggle-favorite-contact" data-contact-id="' +
      escapeHtml(contact.id) +
      '" aria-label="Remove favorite">' +
      icon("close") +
      "</button>" +
      renderAvatar(contact, "avatar avatar--favorite", false) +
      "<strong>" +
      escapeHtml(contact.name.split(" ")[0]) +
      "</strong>" +
      '<div class="favorite-card__actions">' +
      '<button class="favorite-card__action" type="button" data-action="favorite-call" data-contact-id="' +
      escapeHtml(contact.id) +
      '" data-call-type="voice" aria-label="Voice call">' +
      icon("call") +
      "</button>" +
      '<button class="favorite-card__action" type="button" data-action="favorite-call" data-contact-id="' +
      escapeHtml(contact.id) +
      '" data-call-type="video" aria-label="Video call">' +
      icon("video") +
      "</button>" +
      "</div>" +
      "</article>"
    );
  }

  function renderFavoritesPicker() {
    return (
      '<div class="favorites-picker">' +
      '<div class="favorites-picker__header">' +
      '<button class="icon-button icon-button--dark" type="button" data-action="close-favorites-add" aria-label="Close">' +
      icon("arrow-left") +
      "</button>" +
      "<strong>Add to Favorites</strong>" +
      '<span class="panel-header__spacer"></span>' +
      "</div>" +
      '<div class="favorites-picker__list">' +
      data.contacts.map(renderFavoritePickerRow).join("") +
      "</div>" +
      "</div>"
    );
  }

  function renderFavoritePickerRow(contact) {
    const isFavorite = state.favoriteContactIds.indexOf(contact.id) >= 0;

    return (
      '<button class="favorite-picker-row' +
      (isFavorite ? " favorite-picker-row--active" : "") +
      '" type="button" data-action="toggle-favorite-contact" data-contact-id="' +
      escapeHtml(contact.id) +
      '">' +
      renderAvatar(contact, "avatar avatar--list", false) +
      '<span class="favorite-picker-row__copy">' +
      "<strong>" +
      escapeHtml(contact.name) +
      "</strong>" +
      "<small>" +
      escapeHtml(isFavorite ? "Already in favorites" : contact.preview) +
      "</small>" +
      "</span>" +
      '<span class="favorite-picker-row__status">' +
      (isFavorite ? icon("check") : icon("plus")) +
      "</span>" +
      "</button>"
    );
  }

  function renderChatMenu() {
    return (
      '<div class="chat-menu">' +
      data.chatMenuItems
        .map(function (item) {
          return (
            '<button class="chat-menu__item' +
            (item.id === "block" || item.id === "report" ? " chat-menu__item--danger" : "") +
            '" type="button" data-action="chat-menu-select" data-menu-id="' +
            escapeHtml(item.id) +
            '">' +
            escapeHtml(item.label) +
            "</button>"
          );
        })
        .join("") +
      "</div>"
    );
  }

  function renderEmojiPanel() {
    return (
      '<section class="emoji-panel" aria-label="Quick emoji">' +
      data.quickEmojis
        .map(function (emojiKey) {
          return (
            '<button class="emoji-panel__chip" type="button" data-action="insert-emoji" data-emoji-key="' +
            escapeHtml(emojiKey) +
            '">' +
            escapeHtml(getQuickEmojiValue(emojiKey)) +
            "</button>"
          );
        })
        .join("") +
      "</section>"
    );
  }

  function renderAttachmentSheet() {
    return (
      '<section class="attachment-sheet" aria-label="Attachments">' +
      data.attachmentOptions.map(renderAttachmentOption).join("") +
      "</section>"
    );
  }

  function renderAttachmentOption(option) {
    return (
      '<button class="attachment-sheet__option" type="button" data-action="attach-item" data-attachment-id="' +
      escapeHtml(option.id) +
      '">' +
      '<span class="attachment-sheet__icon">' +
      icon(option.icon) +
      "</span>" +
      '<span class="attachment-sheet__copy">' +
      "<strong>" +
      escapeHtml(option.label) +
      "</strong>" +
      "<small>" +
      escapeHtml(option.description) +
      "</small>" +
      "</span>" +
      "</button>"
    );
  }

  function renderTypingRow(contact) {
    return (
      '<article class="message-row">' +
      renderAvatar(contact, "avatar avatar--tiny avatar--typing", false) +
      '<div class="typing-indicator">' +
      '<span></span><span></span><span></span>' +
      "</div>" +
      "</article>"
    );
  }

  function renderChatProfileModal(contact) {
    return (
      '<div class="chat-profile">' +
      '<button class="chat-profile__backdrop" type="button" data-action="close-chat-profile" aria-label="Close profile"></button>' +
      '<div class="chat-profile__sheet">' +
      '<div class="chat-profile__header">' +
      '<button class="icon-button icon-button--dark" type="button" data-action="close-chat-profile" aria-label="Close">' +
      icon("close") +
      "</button>" +
      '<div class="chat-profile__copy">' +
      "<strong>" +
      escapeHtml(contact.name) +
      "</strong>" +
      "<small>Wave Chat</small>" +
      "</div>" +
      "</div>" +
      '<div class="chat-profile__image">' +
      (contact.avatarSrc
        ? '<img src="' + escapeHtml(contact.avatarSrc) + '" alt="' + escapeHtml(contact.name) + '">'
        : renderAvatar(contact, "avatar avatar--profile", false)) +
      "</div>" +
      "</div>" +
      "</div>"
    );
  }

  function renderCallContactRow(contact) {
    return (
      '<button class="dark-contact-row" type="button" data-action="toggle-call-contact" data-contact-id="' +
      escapeHtml(contact.id) +
      '">' +
      renderAvatar(contact, "avatar avatar--list", false) +
      '<span class="dark-contact-row__copy">' +
      "<strong>" +
      escapeHtml(contact.name) +
      "</strong>" +
      "<small>" +
      escapeHtml(contact.preview) +
      "</small>" +
      "</span>" +
      '<span class="selector-dot' +
      (state.selectedContacts.indexOf(contact.id) >= 0 ? " selector-dot--selected" : "") +
      '"></span>' +
      "</button>"
    );
  }

  function renderSelectableContactRow(contact) {
    return (
      '<button class="dark-contact-row dark-contact-row--selectable" type="button" data-action="toggle-call-contact" data-contact-id="' +
      escapeHtml(contact.id) +
      '">' +
      renderAvatar(contact, "avatar avatar--list", false) +
      '<span class="dark-contact-row__copy">' +
      "<strong>" +
      escapeHtml(contact.name) +
      "</strong>" +
      "</span>" +
      '<span class="selector-dot' +
      (state.selectedContacts.indexOf(contact.id) >= 0 ? " selector-dot--selected" : "") +
      '"></span>' +
      "</button>"
    );
  }

  function renderMessageRow(message) {
    const isSelf = message.author === "self";

    if (message.type === "image" || message.type === "video") {
      return (
        '<article class="message-row' +
        (isSelf ? " message-row--self" : "") +
        '">' +
        '<div class="message-card message-card--image' +
        (message.type === "video" ? " message-card--video" : "") +
        '">' +
        '<div class="message-card__art">' +
        (message.type === "video"
          ? '<video class="message-card__video" src="' +
            escapeHtml(message.videoSrc) +
            '" controls muted playsinline preload="metadata"></video>'
          : message.imageSrc
            ? '<img class="message-card__image" src="' + escapeHtml(message.imageSrc) + '" alt="' + escapeHtml(message.title) + '">'
            : message.artwork) +
        "</div>" +
        '<div class="message-card__caption">' +
        escapeHtml(message.title) +
        "</div>" +
        '<div class="message-meta">' +
        escapeHtml(message.time) +
        (message.seen ? '<span class="message-meta__ticks">' + icon("double-check") + "</span>" : "") +
        "</div>" +
        "</div>" +
        "</article>"
      );
    }

    if (message.type === "document") {
      return (
        '<article class="message-row' +
        (isSelf ? " message-row--self" : "") +
        '">' +
        '<div class="message-card message-card--document">' +
        '<div class="message-card__doc-icon">' +
        icon("file") +
        "</div>" +
        '<div class="message-card__doc-copy">' +
        "<strong>" +
        escapeHtml(message.title) +
        "</strong>" +
        "<small>" +
        escapeHtml(message.subtitle || "Shared document") +
        "</small>" +
        "</div>" +
        '<div class="message-meta">' +
        escapeHtml(message.time) +
        (message.seen ? '<span class="message-meta__ticks">' + icon("double-check") + "</span>" : "") +
        "</div>" +
        "</div>" +
        "</article>"
      );
    }

    return (
      '<article class="message-row' +
      (isSelf ? " message-row--self" : "") +
      '">' +
      '<div class="message-bubble' +
      (isSelf ? " message-bubble--self" : " message-bubble--contact") +
      '">' +
      '<div class="message-bubble__text">' +
      escapeHtml(message.text) +
      "</div>" +
      '<div class="message-meta">' +
      escapeHtml(message.time) +
      (message.seen ? '<span class="message-meta__ticks">' + icon("double-check") + "</span>" : "") +
      "</div>" +
      "</div>" +
      "</article>"
    );
  }

  function renderBottomTabs(activeTab) {
    return (
      '<nav class="bottom-tabs" aria-label="Primary">' +
      data.tabs
        .map(function (tab) {
          const action = getTabAction(tab.id);
          return (
            '<button class="tab-button' +
            (tab.id === activeTab ? " tab-button--active" : "") +
            '" type="button" data-action="' +
            action +
            '">' +
            '<span class="tab-button__icon">' +
            icon(tab.icon) +
            (tab.badge ? '<span class="tab-button__badge">' + tab.badge + "</span>" : "") +
            "</span>" +
            '<span class="tab-button__label">' +
            escapeHtml(tab.label) +
            "</span>" +
            "</button>"
          );
        })
        .join("") +
      "</nav>"
    );
  }

  function renderFilterChip(filter) {
    return (
      '<button class="filter-chip' +
      (filter.id === state.cameraFilterId ? " filter-chip--active" : "") +
      '" type="button" data-action="select-filter" data-filter-id="' +
      escapeHtml(filter.id) +
      '">' +
      '<span class="filter-chip__face">' +
      escapeHtml(filter.emoji) +
      "</span>" +
      "</button>"
    );
  }

  function renderFeatureItem(iconName, title, description) {
    return (
      "<li>" +
      '<span class="feature-list__icon">' +
      icon(iconName) +
      "</span>" +
      '<span class="feature-list__copy">' +
      "<strong>" +
      title +
      "</strong>" +
      "<small>" +
      description +
      "</small>" +
      "</span>" +
      "</li>"
    );
  }

  function renderCameraTool(content, label) {
    return (
      '<button class="camera-tool-button" type="button" data-action="camera-tool" data-tool-label="' +
      escapeHtml(label) +
      '">' +
      content +
      "</button>"
    );
  }

  function renderAvatar(contact, className, showPresence) {
    return (
      '<span class="' +
      className +
      '" style="--avatar-start:' +
      escapeHtml(contact.colorStart) +
      ";--avatar-end:" +
      escapeHtml(contact.colorEnd) +
      ';">' +
      (contact.avatarSrc
        ? '<img class="avatar__image" src="' + escapeHtml(contact.avatarSrc) + '" alt="' + escapeHtml(contact.name || contact.initials) + '">'
        : '<span class="avatar__initials">' + escapeHtml(contact.initials) + "</span>") +
      (showPresence ? '<span class="avatar__presence"></span>' : "") +
      "</span>"
    );
  }

  function renderStoryAvatar(story) {
    return (
      '<span class="avatar avatar--story" style="--avatar-start:' +
      escapeHtml(story.accentStart || "#ff4f61") +
      ";--avatar-end:" +
      escapeHtml(story.accentEnd || "#ff9f45") +
      ';">' +
      (story.avatarSrc
        ? '<img class="avatar__image" src="' + escapeHtml(story.avatarSrc) + '" alt="' + escapeHtml(story.name) + '">'
        : '<span class="avatar__initials">' + escapeHtml((story.name || "?").slice(0, 2)) + "</span>") +
      "</span>"
    );
  }

  function renderStoryMedia(story) {
    if (story.mediaType === "video" && story.videoSrc) {
      return (
        '<video class="story-media__video" src="' +
        escapeHtml(story.videoSrc) +
        '" autoplay muted loop playsinline preload="metadata"></video>'
      );
    }

    if (story.imageSrc) {
      return '<img class="story-media__image" src="' + escapeHtml(story.imageSrc) + '" alt="' + escapeHtml(story.title) + '">';
    }

    return '<div class="story-media__fallback">' + icon("camera-solid") + "</div>";
  }

  function renderWaveMark() {
    return (
      '<svg viewBox="0 0 36 36" aria-hidden="true">' +
      '<path d="M7 8H26C28.2 8 30 9.8 30 12V20C30 22.2 28.2 24 26 24H16L10.2 28.8V24H7C4.8 24 3 22.2 3 20V12C3 9.8 4.8 8 7 8Z"></path>' +
      '<path d="M11 18C13 11.8 18.7 9 25 10.7"></path>' +
      '<path d="M11.5 21C14.5 16.4 19.2 14.8 24 15.7"></path>' +
      '<path d="M11.8 13.8C15.8 11.4 20.4 11.1 24.4 13"></path>' +
      "</svg>"
    );
  }

  function icon(name) {
    const icons = {
      "arrow-right": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12H19"></path><path d="M13 6L19 12L13 18"></path></svg>',
      "arrow-left": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"></path><path d="M11 6L5 12L11 18"></path></svg>',
      shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3L19 6V11C19 15.5 16.2 19.5 12 21C7.8 19.5 5 15.5 5 11V6L12 3Z"></path><path d="M9 12L11 14L15 10"></path></svg>',
      chat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 6.5C5 5.67 5.67 5 6.5 5H17.5C18.33 5 19 5.67 19 6.5V14.5C19 15.33 18.33 16 17.5 16H10L6 19V16H6.5C5.67 16 5 15.33 5 14.5V6.5Z"></path></svg>',
      call: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4H10L11.5 8L9.5 10C10.4 11.8 11.9 13.3 13.7 14.2L15.7 12.2L20 13.7V18C20 19.1 19.1 20 18 20C10.3 20 4 13.7 4 6C4 4.9 4.9 4 6 4Z"></path></svg>',
      video: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 8L20 6V18L15 16V8Z"></path><rect x="4" y="7" width="11" height="10" rx="2"></rect></svg>',
      person: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.2"></circle><path d="M5.5 18C6.8 14.9 9.1 13.3 12 13.3C14.9 13.3 17.2 14.9 18.5 18"></path></svg>',
      search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"></circle><path d="M16 16L21 21"></path></svg>',
      "chevron-down": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9L12 15L18 9"></path></svg>',
      close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"></path><path d="M18 6L6 18"></path></svg>',
      check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 13L9 17L19 7"></path></svg>',
      warning: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 8V13"></path><path d="M12 16H12.01"></path></svg>',
      moon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.2 14.5C15.8 15.6 14 16.2 12 16.2C7.6 16.2 4 12.6 4 8.2C4 6.5 4.5 4.9 5.4 3.6C3.3 4.8 2 7.1 2 9.7C2 13.8 5.3 17.1 9.4 17.1C12.3 17.1 14.9 15.5 16.2 13.1C16.5 13.6 16.8 14 17.2 14.5Z"></path></svg>',
      sun: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2V5"></path><path d="M12 19V22"></path><path d="M2 12H5"></path><path d="M19 12H22"></path><path d="M4.9 4.9L7 7"></path><path d="M17 17L19.1 19.1"></path><path d="M17 7L19.1 4.9"></path><path d="M4.9 19.1L7 17"></path></svg>',
      story: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="7.5"></circle><circle cx="12" cy="12" r="2.2"></circle></svg>',
      camera: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6L10.4 4H13.6L15 6H18C19.1 6 20 6.9 20 8V17C20 18.1 19.1 19 18 19H6C4.9 19 4 18.1 4 17V8C4 6.9 4.9 6 6 6H9Z"></path><circle cx="12" cy="12.5" r="3.3"></circle></svg>',
      grid: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="6" height="6" rx="1"></rect><rect x="14" y="4" width="6" height="6" rx="1"></rect><rect x="4" y="14" width="6" height="6" rx="1"></rect><rect x="14" y="14" width="6" height="6" rx="1"></rect></svg>',
      link: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 14L14 10"></path><path d="M7.5 16.5L6 18C4.34 19.66 1.66 19.66 0 18C-1.66 16.34 -1.66 13.66 0 12L3 9"></path><path d="M16.5 7.5L18 6C19.66 4.34 22.34 4.34 24 6C25.66 7.66 25.66 10.34 24 12L21 15"></path></svg>',
      "person-add": '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"></circle><path d="M3.5 18C4.8 14.9 7 13.4 9.8 13.4C10.9 13.4 11.9 13.6 12.8 14"></path><path d="M18 8V14"></path><path d="M15 11H21"></path></svg>',
      calendar: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="6" width="16" height="14" rx="2"></rect><path d="M8 3V8"></path><path d="M16 3V8"></path><path d="M4 10H20"></path></svg>',
      "camera-solid": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6L10.5 4H13.5L15 6H18C19.1 6 20 6.9 20 8V17C20 18.1 19.1 19 18 19H6C4.9 19 4 18.1 4 17V8C4 6.9 4.9 6 6 6H9Z" fill="currentColor" stroke="none"></path><circle cx="12" cy="12.5" r="3.3" fill="#ffffff" stroke="none"></circle></svg>',
      heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20L4.5 12.8C2.8 11.1 2.8 8.3 4.5 6.6C6.2 4.9 9 4.9 10.7 6.6L12 7.9L13.3 6.6C15 4.9 17.8 4.9 19.5 6.6C21.2 8.3 21.2 11.1 19.5 12.8L12 20Z"></path></svg>',
      undo: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 7H19C20.1 7 21 7.9 21 9V10"></path><path d="M9 7L12 4"></path><path d="M9 7L12 10"></path><path d="M19 12C19 15.3 16.3 18 13 18H7"></path></svg>',
      sparkles: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3L13.6 7.4L18 9L13.6 10.6L12 15L10.4 10.6L6 9L10.4 7.4L12 3Z"></path><path d="M18.5 14.5L19.2 16.3L21 17L19.2 17.7L18.5 19.5L17.8 17.7L16 17L17.8 16.3L18.5 14.5Z"></path></svg>',
      paperclip: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 12.5L14.5 6C16.16 4.34 18.84 4.34 20.5 6C22.16 7.66 22.16 10.34 20.5 12L11.5 21C9.01 23.49 4.99 23.49 2.5 21C0.01 18.51 0.01 14.49 2.5 12L11 3.5"></path></svg>',
      send: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 11.5L20 4L13 20L11 13L4 11.5Z"></path></svg>',
      smile: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"></circle><path d="M9 10H9.01"></path><path d="M15 10H15.01"></path><path d="M9 14C9.9 15.1 10.9 15.6 12 15.6C13.1 15.6 14.1 15.1 15 14"></path></svg>',
      more: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="5" r="1.6" fill="currentColor" stroke="none"></circle><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"></circle><circle cx="12" cy="19" r="1.6" fill="currentColor" stroke="none"></circle></svg>',
      "double-check": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12L8 16L14 8"></path><path d="M10 12L14 16L20 8"></path></svg>',
      backspace: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5L3 12L9 19H19C20.1 19 21 18.1 21 17V7C21 5.9 20.1 5 19 5H9Z"></path><path d="M12 9L17 14"></path><path d="M17 9L12 14"></path></svg>',
      plus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5V19"></path><path d="M5 12H19"></path></svg>',
      file: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3H14L19 8V20C19 20.55 18.55 21 18 21H8C6.9 21 6 20.1 6 19V5C6 3.9 6.9 3 8 3Z"></path><path d="M14 3V8H19"></path><path d="M9 13H15"></path><path d="M9 17H14"></path></svg>'
    };

    return icons[name] || icons.chat;
  }

  function queueSplashAdvance() {
    window.clearTimeout(state.splashTimer);
    state.splashTimer = window.setTimeout(function () {
      navigate("welcome");
    }, splashDelayMs);
  }

  function applyRequestedScreen() {
    const validScreens = [
      "splash",
      "welcome",
      "phone",
      "otp",
      "profile",
      "ready",
      "chats",
      "updates",
      "chat",
      "story",
      "camera",
      "calls",
      "favorites",
      "schedule",
      "selectContacts",
      "dialer"
    ];

    if (validScreens.indexOf(requestedScreen) === -1) {
      return;
    }

    state.screen = requestedScreen;
    state.phoneNumber = "7904564217";
    state.homeSearch = "";
    state.chatDraft = "";
    state.selectedStoryId = getDefaultStoryId();
  }

  function startStoryProgress() {
    stopStoryProgress();
    state.storyTimer = window.setInterval(function () {
      state.storyProgress = Math.min(1, state.storyProgress + storyProgressStep);
      const progress = document.getElementById("storyProgressFill");

      if (progress) {
        progress.style.width = (state.storyProgress * 100).toFixed(1) + "%";
      }

      if (state.storyProgress >= 1) {
        navigate("updates");
      }
    }, storyStepMs);
  }

  function stopStoryProgress() {
    window.clearInterval(state.storyTimer);
    state.storyTimer = null;
  }

  function openStoryById(storyId) {
    const story = getStoryById(storyId) || getStoryById(getDefaultStoryId());

    if (!story) {
      return;
    }

    story.viewed = story.isOwn ? story.viewed : true;
    state.selectedStoryId = story.id;
    navigate("story");
  }

  function closeChatPanels() {
    state.showChatMenu = false;
    state.showChatProfile = false;
    state.showEmojiPanel = false;
    state.showAttachmentSheet = false;
  }

  function clearChatReplyTimers() {
    window.clearTimeout(state.chatTypingTimer);
    window.clearTimeout(state.chatReplyTimer);
    state.chatTypingTimer = null;
    state.chatReplyTimer = null;
    state.isChatTyping = false;
  }

  function appendOutgoingMessage(partialMessage) {
    getCurrentConversation().push(
      Object.assign(
        {
          id: "msg-" + Date.now(),
          author: "self",
          time: nextMessageTime(),
          seen: true
        },
        partialMessage
      )
    );
  }

  function queueAutoReply(kind) {
    clearChatReplyTimers();
    state.chatTypingTimer = window.setTimeout(function () {
      state.isChatTyping = true;
      render();
    }, 700);

    state.chatReplyTimer = window.setTimeout(function () {
      state.isChatTyping = false;
      getCurrentConversation().push(buildAutoReply(kind));
      render();
    }, 2300);
  }

  function buildAutoReply(kind) {
    const contact = getSelectedContact();
    const responses = {
      text: "Thanks for your message. I will get back to you soon.",
      photo: "Great photo. The colors look amazing.",
      video: "Nice video. Thanks for sharing that clip.",
      document: "Perfect, I received the notes."
    };

    return {
      id: "reply-" + Date.now(),
      type: "text",
      author: "contact",
      text: responses[kind] || responses.text,
      time: nextMessageTime(),
      contactId: contact.id
    };
  }

  function handleChatMenuSelection(menuId) {
    state.showChatMenu = false;

    if (menuId === "view-contact") {
      state.showChatProfile = true;
      render();
      return;
    }

    if (menuId === "clear-chat") {
      state.conversations[state.selectedChatId] = [];
      flashToast("Chat cleared.");
      render();
      return;
    }

    if (menuId === "export-chat") {
      exportCurrentChat();
      flashToast("Chat exported.");
      render();
      return;
    }

    if (menuId === "search-chat") {
      render({ focusId: "chatComposerInput" });
      flashToast("Quick search can be added next.");
      return;
    }

    flashToast(getMenuFeedback(menuId));
    render();
  }

  function exportCurrentChat() {
    const contact = getSelectedContact();
    const lines = getCurrentConversation().map(function (message) {
      const sender = message.author === "self" ? state.profileName.trim() || "You" : contact.name;
      const body =
        message.type === "text"
          ? message.text
          : message.type === "image"
            ? "[Photo] " + message.title
            : message.type === "video"
              ? "[Video] " + message.title
              : "[Document] " + message.title;

      return "[" + message.time + "] " + sender + ": " + body;
    });

    const anchor = document.createElement("a");
    const blob = new Blob([lines.join("\r\n")], { type: "text/plain;charset=utf-8" });

    anchor.href = URL.createObjectURL(blob);
    anchor.download = getSelectedContact().name.toLowerCase().replace(/\s+/g, "-") + "-chat.txt";
    anchor.click();
    window.setTimeout(function () {
      URL.revokeObjectURL(anchor.href);
    }, 1000);
  }

  function getMenuFeedback(menuId) {
    const feedback = {
      media: "Media, links, and docs is ready for a detailed pass next.",
      mute: "Notifications muted for this chat.",
      shortcut: "Shortcut added to your app shortcuts.",
      block: "This contact has been blocked in the demo state.",
      report: "Report submitted for review."
    };

    return feedback[menuId] || "Action updated.";
  }

  function getCurrentCountry() {
    return data.countries.find(function (country) {
      return country.id === state.selectedCountryId;
    }) || data.countries[0];
  }

  function getContactById(contactId) {
    return data.contacts.find(function (contact) {
      return contact.id === contactId;
    }) || data.contacts[0];
  }

  function getSelectedContact() {
    return getContactById(state.selectedChatId);
  }

  function getCurrentConversation() {
    return state.conversations[state.selectedChatId];
  }

  function getStories() {
    return state.stories || [];
  }

  function getDefaultStoryId() {
    const match = getStories().find(function (story) {
      return !story.isOwn;
    });

    return match ? match.id : "";
  }

  function getStoryById(storyId) {
    return getStories().find(function (story) {
      return story.id === storyId;
    });
  }

  function getSelectedStory() {
    return getStoryById(state.selectedStoryId) || getStoryById(getDefaultStoryId()) || getStories()[0];
  }

  function getOwnStory() {
    return getStories().find(function (story) {
      return story.isOwn;
    });
  }

  function getRecentStories() {
    return getStories().filter(function (story) {
      return !story.isOwn && !story.viewed;
    });
  }

  function getViewedStories() {
    return getStories().filter(function (story) {
      return !story.isOwn && story.viewed;
    });
  }

  function getCurrentFilter() {
    return data.cameraFilters.find(function (filter) {
      return filter.id === state.cameraFilterId;
    }) || data.cameraFilters[0];
  }

  function getFilteredCountries() {
    const query = state.countryQuery.trim().toLowerCase();

    if (!query) {
      return data.countries;
    }

    return data.countries.filter(function (country) {
      return (
        country.name.toLowerCase().indexOf(query) >= 0 ||
        country.id.toLowerCase().indexOf(query) >= 0 ||
        country.dialCode.indexOf(query) >= 0
      );
    });
  }

  function getFilteredContacts(query) {
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
      return data.contacts;
    }

    return data.contacts.filter(function (contact) {
      return (
        contact.name.toLowerCase().indexOf(normalized) >= 0 ||
        contact.preview.toLowerCase().indexOf(normalized) >= 0 ||
        contact.initials.toLowerCase().indexOf(normalized) >= 0
      );
    });
  }

  function getFilteredCallLogs(query) {
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
      return state.callLogs;
    }

    return state.callLogs.filter(function (callLog) {
      const contact = getContactById(callLog.contactId);
      return (
        contact.name.toLowerCase().indexOf(normalized) >= 0 ||
        contact.preview.toLowerCase().indexOf(normalized) >= 0 ||
        callLog.callType.toLowerCase().indexOf(normalized) >= 0 ||
        callLog.direction.toLowerCase().indexOf(normalized) >= 0
      );
    });
  }

  function toggleSelectedContact(contactId) {
    const index = state.selectedContacts.indexOf(contactId);

    if (index >= 0) {
      state.selectedContacts.splice(index, 1);
    } else {
      state.selectedContacts.push(contactId);
    }
  }

  function toggleFavoriteContact(contactId) {
    const index = state.favoriteContactIds.indexOf(contactId);

    if (index >= 0) {
      state.favoriteContactIds.splice(index, 1);
      return;
    }

    if (state.favoriteContactIds.length >= 12) {
      flashToast("Favorites can hold up to 12 contacts.");
      return;
    }

    state.favoriteContactIds.push(contactId);
    state.favoritesPickerOpen = false;
  }

  function getFavoriteContacts() {
    return state.favoriteContactIds
      .map(function (contactId) {
        return getContactById(contactId);
      })
      .filter(Boolean);
  }

  function getAttachmentOption(optionId) {
    return (data.attachmentOptions || []).find(function (option) {
      return option.id === optionId;
    });
  }

  function getQuickEmojiValue(emojiKey) {
    const map = {
      ":)": String.fromCodePoint(0x1f642),
      "<3": String.fromCodePoint(0x2764, 0xfe0f),
      haha: String.fromCodePoint(0x1f606),
      wow: String.fromCodePoint(0x1f62e),
      fire: String.fromCodePoint(0x1f525),
      party: String.fromCodePoint(0x1f973)
    };

    return map[emojiKey] || emojiKey;
  }

  function getCallDirectionArrow(direction) {
    const arrows = {
      incoming: String.fromCodePoint(0x2193),
      outgoing: String.fromCodePoint(0x2191),
      missed: String.fromCodePoint(0x2193)
    };

    return arrows[direction] || String.fromCodePoint(0x2192);
  }

  function getFormattedPhoneNumber() {
    return state.phoneNumber || "7904564217";
  }

  function isPhoneValid() {
    return state.phoneNumber.length === 10;
  }

  function isOtpValid() {
    return state.otpDigits.every(Boolean);
  }

  function isProfileValid() {
    return state.profileName.trim().length >= 2;
  }

  function isDarkScreen(screen) {
    return ["splash", "story", "camera", "calls", "favorites", "schedule", "selectContacts", "dialer"].indexOf(screen) >= 0;
  }

  function nextMessageTime() {
    const minute = state.messageMinute;
    state.messageMinute += 1;
    return "9:" + String(minute).padStart(2, "0") + " AM";
  }

  function getTabAction(tabId) {
    if (tabId === "stories") {
      return "open-updates";
    }

    if (tabId === "camera") {
      return "open-camera";
    }

    if (tabId === "calls") {
      return "open-calls";
    }

    return "go-home";
  }

  function padDay(day) {
    return String(Number(day)).padStart(2, "0");
  }

  function captureFocus(target) {
    if (!target || !target.id) {
      return null;
    }

    return {
      focusId: target.id,
      selectionStart: typeof target.selectionStart === "number" ? target.selectionStart : null,
      selectionEnd: typeof target.selectionEnd === "number" ? target.selectionEnd : null
    };
  }

  function restoreFocus(focus) {
    if (!focus || !focus.focusId) {
      return;
    }

    const element = document.getElementById(focus.focusId);

    if (!element) {
      return;
    }

    element.focus();

    if (typeof focus.selectionStart === "number" && typeof element.setSelectionRange === "function") {
      element.setSelectionRange(
        focus.selectionStart,
        focus.selectionEnd == null ? focus.selectionStart : focus.selectionEnd
      );
    }
  }

  function flashToast(message) {
    elements.toast.textContent = message;
    elements.toast.dataset.visible = "true";
    window.clearTimeout(state.toastTimer);
    state.toastTimer = window.setTimeout(function () {
      elements.toast.dataset.visible = "false";
      elements.toast.textContent = "";
    }, 2200);
  }

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
})();
