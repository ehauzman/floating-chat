import { useMemo, useState } from "react";

import FloatingChat from "@/components/FloatingChat/FloatingChat";
import type { IOnSendHelpers } from "@/types/IFloatingChat";

import "./App.css";
import Avatar from "~demo/components/Avatar/Avatar";
import Properties from "~demo/components/Properties/Properties";
import Snippet from "~demo/components/Snippet/Snippet";
import Usage from "~demo/components/Usage/Usage";
import { DEFAULT_CONFIG } from "~demo/constants/DemoConfig";

function App() {
  const [name, setName] = useState(DEFAULT_CONFIG.name);
  const [initial, setInitial] = useState(DEFAULT_CONFIG.initial);
  const [thinking, setThinking] = useState(DEFAULT_CONFIG.thinking);
  const [avatarType, setAvatarType] = useState(DEFAULT_CONFIG.avatarType);
  const [avatarValue, setAvatarValue] = useState(DEFAULT_CONFIG.avatarValue);
  const [avatarImageUrl, setAvatarImageUrl] = useState(
    DEFAULT_CONFIG.avatarImageUrl,
  );
  const [size, setSize] = useState(DEFAULT_CONFIG.size);
  const [top, setTop] = useState(DEFAULT_CONFIG.top);
  const [right, setRight] = useState(DEFAULT_CONFIG.right);
  const [bottom, setBottom] = useState(DEFAULT_CONFIG.bottom);
  const [left, setLeft] = useState(DEFAULT_CONFIG.left);
  const [responseDelay, setResponseDelay] = useState(
    DEFAULT_CONFIG.responseDelay,
  );

  const parseOptionalNumber = (value: string): number | undefined => {
    if (value.trim() === "") {
      return undefined;
    }

    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : undefined;
  };

  const resolvedProps = useMemo(
    () => ({
      name,
      initial,
      thinking,
      size,
      top: parseOptionalNumber(top),
      right: parseOptionalNumber(right),
      bottom: parseOptionalNumber(bottom),
      left: parseOptionalNumber(left),
    }),
    [bottom, initial, left, name, right, size, thinking, top],
  );

  const handleSend = async (msg: string, helpers: IOnSendHelpers) => {
    await new Promise((resolve) => setTimeout(resolve, responseDelay));
    helpers.appendBotMessage(`You said: ${msg}`);
    console.log("Message sent:", msg);
  };

  return (
    <div className="app">
      <header className="app__header">
        <p className="app__eyebrow">Floating Chat Library</p>
        <h1 className="app__title">Live Demo</h1>
        <p className="app__subtitle">
          This view exists only for development. The library build exports the
          FloatingChat component.
        </p>
      </header>

      <Usage />

      <Properties
        name={name}
        initial={initial}
        thinking={thinking}
        avatarType={avatarType}
        avatarValue={avatarValue}
        avatarImageUrl={avatarImageUrl}
        size={size}
        top={top}
        right={right}
        bottom={bottom}
        left={left}
        responseDelay={responseDelay}
        setName={setName}
        setInitial={setInitial}
        setThinking={setThinking}
        setAvatarType={setAvatarType}
        setAvatarValue={setAvatarValue}
        setAvatarImageUrl={setAvatarImageUrl}
        setSize={setSize}
        setTop={setTop}
        setRight={setRight}
        setBottom={setBottom}
        setLeft={setLeft}
        setResponseDelay={setResponseDelay}
      />

      <Snippet
        name={name}
        initial={initial}
        thinking={thinking}
        size={size}
        top={top}
        right={right}
        bottom={bottom}
        left={left}
        avatarValue={avatarValue}
        avatarType={avatarType}
        avatarImageUrl={avatarImageUrl}
      />

      <FloatingChat
        name={resolvedProps.name}
        initial={resolvedProps.initial || undefined}
        thinking={resolvedProps.thinking || undefined}
        size={resolvedProps.size}
        top={resolvedProps.top}
        right={resolvedProps.right}
        bottom={resolvedProps.bottom}
        left={resolvedProps.left}
        onSend={handleSend}
      >
        <Avatar
          avatarImageUrl={avatarImageUrl}
          avatarType={avatarType}
          avatarValue={avatarValue}
        />
      </FloatingChat>
    </div>
  );
}

export default App;
