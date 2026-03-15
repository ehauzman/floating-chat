# Floating Chat

[![npm version](https://img.shields.io/npm/v/floating-chat.svg)](https://www.npmjs.com/package/floating-chat)
[![npm downloads](https://img.shields.io/npm/dm/floating-chat.svg)](https://www.npmjs.com/package/floating-chat)
[![License: GPL-3.0-or-later](https://img.shields.io/badge/license-GPL--3.0--or--later-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-%3E%3D18-61dafb.svg)](https://react.dev/)

`floating-chat` is a React component library that renders a floating chat button and a chat panel.

Live demo: https://ehauzman.github.io/floating-chat/

The component is designed to be simple to drop into an existing app. You provide:

- A custom avatar via `children`
- A chat name/title via `name`
- A message handler via `onSend`

## Features

- Floating avatar button fixed to screen corners
- Configurable position (`top`, `right`, `bottom`, `left`) and avatar size
- Chat window with:
  - Header + close button
  - Message area
  - Input + send button
- Typewriter animation for the latest bot message
- Click-outside to close behavior
- Built with TypeScript + Vite + vanilla-extract

## Installation

```bash
npm install floating-chat
```

Peer dependencies:

- `react >= 18`
- `react-dom >= 18`

## Compatibility

- React: `>= 18` (validated with React 18 and 19 toolchains)
- Runtime: modern browsers with ES modules support
- Module formats: ESM (`dist/index.mjs`) and CommonJS (`dist/index.cjs`)
- Types: bundled TypeScript declarations (`dist/index.d.ts`)
- Styling: generated CSS bundle (`dist/floating-chat-lib.css`) and vanilla-extract class names
- Bundlers/frameworks: Vite, Webpack, Next.js, and other React setups that support npm package imports

## Basic Usage

```tsx
import { FloatingChat } from "floating-chat";

async function handleSend(
  message: string,
  {
    appendBotMessage,
    setError,
  }: {
    appendBotMessage: (text: string) => void;
    setError: (error: string | null) => void;
  },
) {
  // Send message to your API
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    setError("Could not send your message. Please try again.");
    return;
  }

  const data = await response.json();
  appendBotMessage(data.reply);
}

export function App() {
  return (
    <FloatingChat
      name="Support"
      initial="Hi! I am your assistant. How can I help you today?"
      thinking="Let me think for a moment..."
      onSend={handleSend}
      right={20}
      bottom={20}
    >
      <span style={{ fontSize: 24 }}>💬</span>
    </FloatingChat>
  );
}
```

## API

### `FloatingChat` props

| Prop       | Type                                                      | Required | Default     | Description                                                                                                 |
| ---------- | --------------------------------------------------------- | -------- | ----------- | ----------------------------------------------------------------------------------------------------------- |
| `children` | `React.ReactNode`                                         | Yes      | -           | Avatar content rendered in the floating button and bot message avatar.                                      |
| `name`     | `string`                                                  | Yes      | -           | Name shown in chat header and initial greeting.                                                             |
| `initial`  | `string`                                                  | No       | `undefined` | Custom first bot message shown when chat is initialized.                                                    |
| `thinking` | `string`                                                  | No       | `undefined` | Custom loading text shown while waiting for `onSend` to complete.                                           |
| `onSend`   | `(msg: string, helpers: IOnSendHelpers) => Promise<void>` | Yes      | -           | Async callback called when user sends a message, with helpers to append bot messages and manage chat state. |
| `size`     | `number`                                                  | No       | `60`        | Avatar button size in pixels.                                                                               |
| `top`      | `number`                                                  | No       | `undefined` | Top offset in pixels.                                                                                       |
| `right`    | `number`                                                  | No       | `20`        | Right offset in pixels.                                                                                     |
| `bottom`   | `number`                                                  | No       | `20`        | Bottom offset in pixels.                                                                                    |
| `left`     | `number`                                                  | No       | `undefined` | Left offset in pixels.                                                                                      |

## Behavior Notes

- The component starts with an initial greeting message in Portuguese:
  - `"Ola, meu nome e {name}! Como posso te ajudar?"`
- If `initial` is provided, it is used instead of the default greeting.
- While `onSend` is running, a thinking message is shown.
- If `thinking` is not provided, the default loading text is `"Pensando..."`.
- The input placeholder and send button label are currently in Portuguese.
- `onSend` receives helper functions to:
  - append messages (`appendMessage`, `appendBotMessage`)
  - control loading (`setLoading`)
  - surface errors (`setError`)

## Development

### Run local demo

```bash
npm install
npm run dev
```

### Build library

```bash
npm run build
```

### Build demo static files

```bash
npm run build:demo
```

### Deploy demo to GitHub Pages

This repository includes a workflow that deploys the demo app from `demo/dist` to GitHub Pages.

1. In GitHub, open repository settings.
2. Go to **Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main` (or run the workflow manually from the **Actions** tab).

Build command used for Pages:

```bash
npm run build:demo:pages
```

The Pages URL will be:

```text
https://ehauzman.github.io/floating-chat/
```

### Lint

```bash
npm run lint
```

## Releases

Releases are fully automated with semantic-release when changes are merged into `main`.

- `fix:` commits produce a patch release
- `feat:` commits produce a minor release
- `feat!:` or commits containing `BREAKING CHANGE:` produce a major release

CI runs lint and build first, then semantic-release:

- calculates the next version from commit messages
- creates a Git tag (`vX.Y.Z`)
- publishes the package to npm
- updates `CHANGELOG.md`

No manual `npm run changeset` step is required.

Required repository secrets for publishing:

- `NPM_TOKEN`

This project publishes to npmjs.org.

## Project Structure

- `src/components/FloatingChat`: main exported component
- `src/components/ChatMessages`: chat panel UI and message rendering
- `src/components/ChatAvatar`: floating avatar button
- `src/hooks`: state and behavior hooks (open/close, messages, click outside)
- `demo`: playground app used during local development

## License

Dual-licensed:

- GPL-3.0-or-later for open-source usage and distribution.
- Commercial license for proprietary/commercial use that does not comply with GPL obligations.

See `LICENSE` and `COMMERCIAL-LICENSE.md` for details.
