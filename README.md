# Wave Chat

Wave Chat now runs as a small Express + Socket.IO app.

- `/` serves the mirrored published Figma frontend.
- `/existing/` serves the upgraded interactive app.
- `/api/*` provides OTP auth, chat bootstrap, messaging, stories, calls, favorites, and profile sync.
- `/socket.io/*` powers presence, typing, and live message updates.

## Run

From `D:\UK codex\NC`:

```bash
npm.cmd run dev
```

Open:

- `http://127.0.0.1:4173/` for the mirrored Figma site
- `http://127.0.0.1:4173/existing/` for the working Wave Chat app

## Current Wave Chat Flow

1. Choose country and enter a phone number
2. Request OTP from the backend
3. Use the dev OTP shown on screen to verify the number
4. Enter profile details and profile image
5. Allow notifications or skip
6. Continue into chats, stories, camera, and calls

## Implemented App Features

- Phone-number signup with backend OTP generation and verification
- Real-time chat events with Socket.IO for typing, message updates, and presence
- Chat search by name or phone number
- Delivery and read state mapped into message ticks
- Delete chat from the chat info sheet
- Story bootstrap and story reply endpoints
- Call history and scheduling endpoints
- Desktop chat workspace for wide screens
- Existing mobile card layout preserved for smaller screens

## Verify

```bash
npm.cmd run build
```

This runs syntax validation for the server and the main front-end scripts.
