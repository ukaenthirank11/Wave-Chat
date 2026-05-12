# WaveChat

Flask chat app with phone-number sign-in.

## Run Locally

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python app.py
```

Open `http://localhost:5000`.

## Sign In

Enter a valid phone number and continue directly to the chat screen. New phone numbers automatically create a local WaveChat account.

User identity and contact search are phone-number only. Email/Gmail profile values are cleared on startup and are not returned to the mobile UI.

## WaveMind

WaveMind is available as a Google AI Studio / Gemini-powered assistant chat and from the Calls screen as an AI voice call.

By default, WaveMind uses `WAVEMIND_PROVIDER=gemini`, `GEMINI_API_KEY`, Gemini's direct `generateContent` API, and `WAVEMIND_MODEL=gemini-2.5-flash`. It enables `WAVEMIND_GOOGLE_SEARCH=true` so Gemini can use Google Search grounding for elections, news, prices, sports, laws, and other current topics. The app does not use the old simple local assistant as the live AI provider.

For Render, set `GEMINI_API_KEY` in Environment Variables, keep `WAVEMIND_PROVIDER=gemini`, then redeploy or restart the service. Do not upload `.env`, `.env.local`, or any real API key to GitHub.

WaveMind sends the live server date/time to Gemini on every request, using `WAVEMIND_TIMEZONE=Asia/Kolkata` by default, so questions like "what is today's date?" use the current date instead of model memory. When Google Search grounding is used, WaveMind also appends source links returned by Gemini. It uses a 60-second Gemini timeout and retries short temporary Gemini failures four times. Visit `/api/wavemind/config` while signed in to confirm the deployed server mode without exposing any key value.

For 24/7 availability, the hosting service must stay awake and the Google AI Studio project must have available quota. UptimeRobot can help keep Render warm, but it cannot fix Gemini quota or rate-limit errors.

Before running locally, check the private Gemini setup:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\check-gemini-env.ps1
```

Then start localhost:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\run-local.ps1
```

## Keep Render Warm

WaveChat exposes a public health check at `/health`. It returns only `ok`, does not require sign-in, and does not call WaveMind, uploads, chats, or the database.

For UptimeRobot, create an HTTP(s) monitor for:

```text
https://your-render-app.onrender.com/health
```

Use the free 5-minute interval and expect `200 OK` with the keyword `ok`. This can keep a Render Free service warm during normal idle periods, but Render can still restart or suspend free services because of free-plan limits. If you need uploaded photos, videos, and SQLite data to survive restarts, keep the paid/starter Render service with the disk configured in `render.yaml`, or move uploads and the database to external storage before switching fully to Render Free.

To test the live provider from the deployed app, sign in and send a `POST` request to `/api/wavemind/test`. It returns the configured provider/model plus a short test reply or the exact provider error.

The correct deployed WaveMind status should show:

```text
provider: gemini
model: gemini-2.5-flash
configured: true
googleSearchGrounding: true
```

If `configured` is false on Render, the server does not have `GEMINI_API_KEY` yet. Add it in Render Environment Variables and redeploy.

Photo and video uploads are configured with extension-based local-storage pickers on mobile. Selected files show a preview in the composer before sending. Render sets `MAX_UPLOAD_SIZE_MB=64` so normal mobile videos are not rejected too early.

## Realtime And Calls

Render must start the app with the project `Procfile`/`render.yaml` command:

```bash
gunicorn -w 1 --threads 100 -b 0.0.0.0:$PORT wsgi:app
```

Do not use `gunicorn -k gevent ...` unless `gevent` is added and tested. WaveChat is configured for Flask-SocketIO threading mode with `simple-websocket`, so using `-k gevent` on Render can fail with `ModuleNotFoundError: No module named 'gevent'`.

Messages use the realtime socket first and fall back to HTTP if the socket is temporarily disconnected. Voice/video calls require both users to be online at the same time. The browser keeps reconnecting the realtime socket and queues early WebRTC ICE candidates so calls do not fail just because network setup events arrive out of order. For reliable mobile calls across different networks, set a TURN server in Render with `RTC_TURN_URLS`, `RTC_TURN_USERNAME`, and `RTC_TURN_CREDENTIAL`; STUN-only calls can fail on some mobile carriers.
