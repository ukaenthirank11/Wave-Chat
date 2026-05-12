document.body.classList.add("wavechat-auth-preview");
document.body.classList.remove("theme-dark");
document.body.classList.add("theme-light");

const csrfToken = document.querySelector('meta[name="csrf-token"]')?.content || "";

const steps = Array.from(document.querySelectorAll(".auth-step"));
const statusBox = document.getElementById("auth-status");

const phoneNumberInput = document.getElementById("phone-number");
const phoneInputWrap = document.getElementById("phone-input-wrap");
const phoneHint = document.getElementById("phone-hint");
const continueButton = document.getElementById("phone-login-btn");
const countrySelectButton = document.getElementById("country-select-btn");
const countryFlag = document.getElementById("country-flag");
const countryName = document.getElementById("country-name");
const countryDial = document.getElementById("country-dial");
const phoneFlag = document.getElementById("phone-flag");
const phoneDial = document.getElementById("phone-dial");
const displayNameInput = document.getElementById("display-name");
const nameHint = document.getElementById("name-hint");
const nameContinueButton = document.getElementById("name-login-btn");
const selectedCountrySummary = document.getElementById("selected-country-summary");
const summaryCountryFlag = document.getElementById("summary-country-flag");
const summaryCountryName = document.getElementById("summary-country-name");
const summaryCountryTimezone = document.getElementById("summary-country-timezone");

const countrySheet = document.getElementById("country-sheet");
const countryCloseButton = document.getElementById("country-close-btn");
const countrySearch = document.getElementById("country-search");
const countryList = document.getElementById("country-list");

const COUNTRY_FLAGS = {
    US: String.fromCodePoint(0x1F1FA, 0x1F1F8),
    GB: String.fromCodePoint(0x1F1EC, 0x1F1E7),
    IN: String.fromCodePoint(0x1F1EE, 0x1F1F3),
    CA: String.fromCodePoint(0x1F1E8, 0x1F1E6),
    AU: String.fromCodePoint(0x1F1E6, 0x1F1FA),
    DE: String.fromCodePoint(0x1F1E9, 0x1F1EA),
};

const COUNTRY_TIME_ZONES = {
    US: "America/New_York",
    GB: "Europe/London",
    IN: "Asia/Kolkata",
    CA: "America/Toronto",
    AU: "Australia/Sydney",
    DE: "Europe/Berlin",
};

const state = {
    step: "phone",
    country: {
        code: "US",
        name: "United States",
        dial: "+1",
        flag: COUNTRY_FLAGS.US,
        length: 10,
        timeZone: "America/New_York",
    },
    phoneDigits: "",
    displayName: "",
    redirect: "/",
};

function setStatus(message = "", isError = false) {
    if (!statusBox) return;
    statusBox.textContent = message;
    statusBox.classList.toggle("hidden", !message);
    statusBox.classList.toggle("error-text", Boolean(isError));
}

function normalizeDigits(value) {
    return String(value || "").replace(/\D/g, "");
}

function setStep(step) {
    state.step = step;
    steps.forEach((panel) => {
        panel.classList.toggle("active", panel.dataset.step === step);
    });
    if (step === "phone") phoneNumberInput?.focus();
    if (step === "name") displayNameInput?.focus();
    setStatus("");
}

function updateCountryUI() {
    const resolvedFlag = COUNTRY_FLAGS[state.country.code] || state.country.flag;
    if (countryFlag) countryFlag.textContent = resolvedFlag;
    if (countryName) countryName.textContent = state.country.name;
    if (countryDial) countryDial.textContent = state.country.dial;
    if (phoneFlag) phoneFlag.textContent = resolvedFlag;
    if (phoneDial) phoneDial.textContent = state.country.dial;
    if (summaryCountryFlag) summaryCountryFlag.textContent = resolvedFlag;
    if (summaryCountryName) summaryCountryName.textContent = state.country.name;
    if (summaryCountryTimezone) summaryCountryTimezone.textContent = state.country.timeZone || COUNTRY_TIME_ZONES[state.country.code] || "UTC";
    updatePhoneValidation();
}

function buildFullNumber() {
    return `${state.country.dial}${state.phoneDigits}`;
}

function validatePhoneNumber() {
    const digits = state.phoneDigits;
    if (!digits) return { valid: false, message: "" };
    const requiredLength = Number(state.country.length || 10);
    if (digits.length < requiredLength) {
        return { valid: false, message: `Please enter a valid ${state.country.name} phone number (${requiredLength} digits)` };
    }
    if (digits.length > requiredLength) {
        return { valid: false, message: `Phone number should be ${requiredLength} digits` };
    }
    return { valid: true, message: `Valid ${state.country.name} phone number` };
}

function updatePhoneValidation() {
    state.phoneDigits = normalizeDigits(phoneNumberInput?.value || "");
    if (phoneNumberInput) phoneNumberInput.value = state.phoneDigits;
    const result = validatePhoneNumber();
    phoneInputWrap?.classList.toggle("is-valid", result.valid);
    phoneInputWrap?.classList.toggle("is-invalid", !result.valid && state.phoneDigits.length > 0);
    if (phoneHint) {
        phoneHint.textContent = result.message;
        phoneHint.classList.toggle("valid", result.valid);
        phoneHint.classList.toggle("error", !result.valid && state.phoneDigits.length > 0);
    }
    if (continueButton) continueButton.disabled = !result.valid;
}

function validateDisplayName() {
    const name = String(displayNameInput?.value || "").trim().replace(/\s+/g, " ");
    state.displayName = name;
    if (!name) return { valid: false, message: "" };
    if (name.length < 2) return { valid: false, message: "Name must be at least 2 characters" };
    if (name.length > 80) return { valid: false, message: "Name is too long" };
    return { valid: true, message: "Name ready" };
}

function updateNameValidation() {
    const result = validateDisplayName();
    displayNameInput?.classList.toggle("is-valid", result.valid);
    displayNameInput?.classList.toggle("is-invalid", !result.valid && state.displayName.length > 0);
    if (nameHint) {
        nameHint.textContent = result.message;
        nameHint.classList.toggle("valid", result.valid);
        nameHint.classList.toggle("error", !result.valid && state.displayName.length > 0);
    }
    if (nameContinueButton) nameContinueButton.disabled = !result.valid;
}

async function apiFetch(path, body) {
    const response = await fetch(path, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-CSRFToken": csrfToken,
        },
        body: JSON.stringify(body),
    });

    const contentType = response.headers.get("content-type") || "";
    let data = null;
    if (contentType.includes("application/json")) {
        data = await response.json();
    } else {
        const raw = await response.text();
        try {
            data = JSON.parse(raw);
        } catch {
            data = null;
        }
    }
    if (!data) throw new Error("Server error. Please try again.");
    if (!response.ok || data.ok === false) throw new Error(data.error || "Request failed.");
    return data;
}

function finishLogin() {
    window.location.href = state.redirect || "/";
}

function continueWithPhone() {
    const result = validatePhoneNumber();
    if (!result.valid) {
        setStatus(result.message || "Enter a valid phone number.", true);
        updatePhoneValidation();
        return;
    }

    setStep("name");
    updateNameValidation();
}

async function continueWithName() {
    const phoneResult = validatePhoneNumber();
    const nameResult = validateDisplayName();
    if (!phoneResult.valid) {
        setStep("phone");
        setStatus(phoneResult.message || "Enter a valid phone number.", true);
        updatePhoneValidation();
        return;
    }
    if (!nameResult.valid) {
        setStatus(nameResult.message || "Enter your name.", true);
        updateNameValidation();
        return;
    }

    setStatus("Opening chat...");
    if (continueButton) continueButton.disabled = true;
    if (nameContinueButton) nameContinueButton.disabled = true;
    try {
        const data = await apiFetch("/auth/phone-login", {
            phoneNumber: buildFullNumber(),
            displayName: state.displayName,
            countryCode: state.country.code,
            countryName: state.country.name,
            timeZone: state.country.timeZone || COUNTRY_TIME_ZONES[state.country.code] || "UTC",
        });
        state.redirect = data.redirect || "/";
        finishLogin();
    } catch (error) {
        setStatus(error.message, true);
    } finally {
        updatePhoneValidation();
        updateNameValidation();
    }
}

function openCountrySheet() {
    if (!countrySheet) return;
    countrySheet.classList.remove("hidden");
    countrySheet.setAttribute("aria-hidden", "false");
    countrySearch?.focus();
}

function closeCountrySheet() {
    if (!countrySheet) return;
    countrySheet.classList.add("hidden");
    countrySheet.setAttribute("aria-hidden", "true");
    if (countrySearch) countrySearch.value = "";
    filterCountryList("");
}

function selectCountryFromButton(button) {
    if (!button) return;
    const flagText = button.querySelector(".flag")?.textContent?.trim() || COUNTRY_FLAGS[button.dataset.code || ""] || "";
    state.country = {
        code: button.dataset.code || "",
        name: button.dataset.name || "Country",
        dial: button.dataset.dial || "",
        flag: flagText || button.dataset.flag || "",
        length: Number(button.dataset.length || 10),
        timeZone: button.dataset.timeZone || COUNTRY_TIME_ZONES[button.dataset.code || ""] || "UTC",
    };
    countryList?.querySelectorAll(".country-option").forEach((item) => {
        item.classList.toggle("active", item === button);
    });
    updateCountryUI();
    closeCountrySheet();
}

function filterCountryList(query) {
    const value = String(query || "").trim().toLowerCase();
    countryList?.querySelectorAll(".country-option").forEach((button) => {
        const name = String(button.dataset.name || "").toLowerCase();
        const dial = String(button.dataset.dial || "").toLowerCase();
        const code = String(button.dataset.code || "").toLowerCase();
        const match = !value || name.includes(value) || dial.includes(value) || code.includes(value);
        button.classList.toggle("hidden", !match);
    });
}

function attachListeners() {
    phoneNumberInput?.addEventListener("input", updatePhoneValidation);
    phoneNumberInput?.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            continueWithPhone();
        }
    });
    continueButton?.addEventListener("click", continueWithPhone);
    nameContinueButton?.addEventListener("click", continueWithName);
    selectedCountrySummary?.addEventListener("click", openCountrySheet);
    displayNameInput?.addEventListener("input", updateNameValidation);
    displayNameInput?.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            continueWithName();
        }
        if (event.key === "Escape") {
            event.preventDefault();
            setStep("phone");
        }
    });

    countrySelectButton?.addEventListener("click", openCountrySheet);
    countryCloseButton?.addEventListener("click", closeCountrySheet);
    countrySheet?.addEventListener("click", (event) => {
        if (event.target === countrySheet) closeCountrySheet();
    });
    countrySearch?.addEventListener("input", (event) => {
        filterCountryList(event.target.value);
    });
    countryList?.addEventListener("click", (event) => {
        const button = event.target.closest(".country-option");
        if (button) selectCountryFromButton(button);
    });
}

updateCountryUI();
updatePhoneValidation();
setStep("phone");
attachListeners();
