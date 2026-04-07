# Wave Chat

This project runs as a static mirror of the published Wave Chat frontend.

The upgraded product-style app lives inside the existing static build at `reference/legacy_static_app` and is served at `/existing/`.

## Run

Use one of these commands from the project root:

```bash
npm.cmd run dev
```

```bash
npm.cmd start
```

Then open:

```text
http://127.0.0.1:4173/
```

## Existing app

The upgraded front-end flow is available at:

```text
http://127.0.0.1:4173/existing/
```

## Working Flow

The `/existing/` app now follows this front-end procedure:

1. Select country and enter mobile number
2. Validate the number against the selected country's mobile format
3. Request OTP
4. Verify OTP in a hidden default auto-verification flow, with manual fallback
5. Enter profile name
6. Add profile photo by camera capture or gallery upload
7. Enable notifications or skip
8. Continue into chats, status, calls, and favorites

## Method

The current implementation works like this:

- Phone validation is handled on the front-end with country-specific mobile rules.
- OTP generation is done locally in memory for the demo build and is not displayed on screen.
- Default OTP flow is hidden auto-verification, with manual entry available as a fallback.
- Profile photo selection uses device file inputs:
  - `capture="user"` for on-the-spot camera capture on supported mobile devices
  - Standard file picker for gallery or local storage selection
- Notification permission uses the browser `Notification` API.
- User onboarding state, chats, stories, and favorites persist in `localStorage`.

## Production Integration Note

For a real production build, the OTP part should be moved to a backend or auth provider such as Firebase Phone Auth, Twilio Verify, or your own API. The current static app demonstrates the front-end flow and hidden verification behavior, but real SMS delivery must be handled server-side or by a managed authentication provider.

## Verify

Run:

```bash
npm.cmd run build
```

That checks the mirrored frontend files and exits without starting a server.

## Notes

- The exact published frontend lives in `index.html`, `/_runtimes`, `/_components`, `/_json`, and `/_assets`.
- The already-existing app is served from `reference/legacy_static_app` at `/existing/`.
- The original extracted Figma source bundle is preserved in `reference/zip_extract`.
- The earlier prototype is preserved in `reference/legacy_static_app`.
