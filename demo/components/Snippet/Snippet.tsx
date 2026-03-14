import React from "react";

import type { TDemoConfig } from "~demo/types/DemoConfig";

const Snippet: React.FC<{
  name: TDemoConfig["name"];
  initial: TDemoConfig["initial"];
  thinking: TDemoConfig["thinking"];
  size: TDemoConfig["size"];
  top: TDemoConfig["top"];
  right: TDemoConfig["right"];
  bottom: TDemoConfig["bottom"];
  left: TDemoConfig["left"];
  avatarValue: TDemoConfig["avatarValue"];
  avatarType: TDemoConfig["avatarType"];
  avatarImageUrl: TDemoConfig["avatarImageUrl"];
}> = ({
  name,
  initial,
  thinking,
  size,
  top,
  right,
  bottom,
  left,
  avatarValue,
  avatarType,
  avatarImageUrl,
}) => {
  const snippet = React.useMemo(() => {
    const parts: string[] = [
      `name="${name || "Support"}"`,
      `size={${size}}`,
      `onSend={handleSend}`,
    ];

    if (initial.trim()) {
      parts.push(`initial="${initial}"`);
    }

    if (thinking.trim()) {
      parts.push(`thinking="${thinking}"`);
    }

    if (top !== undefined) {
      parts.push(`top={${top}}`);
    }

    if (right !== undefined) {
      parts.push(`right={${right}}`);
    }

    if (bottom !== undefined) {
      parts.push(`bottom={${bottom}}`);
    }

    if (left !== undefined) {
      parts.push(`left={${left}}`);
    }

    if (avatarType === "initials") {
      return `<FloatingChat ${parts.join(" ")} />`;
    }

    let childSnippet = `<span>${avatarValue || "💬"}</span>`;

    if (avatarType === "text") {
      childSnippet = `<span>${avatarValue || "Chat"}</span>`;
    }

    if (avatarType === "badge") {
      childSnippet = `<div className="avatar-badge">${avatarValue || "AI"}</div>`;
    }

    if (avatarType === "image") {
      childSnippet = `<img src="${avatarImageUrl || "https://example.com/avatar.png"}" alt="Chat avatar" />`;
    }

    return `<FloatingChat ${parts.join(" ")}>
  ${childSnippet}
</FloatingChat>`;
  }, [
    avatarImageUrl,
    avatarType,
    avatarValue,
    initial,
    thinking,
    name,
    bottom,
    left,
    right,
    top,
    size,
  ]);

  return (
    <section className="app__card app__controls">
      <h3>Current JSX</h3>
      <pre>
        <code>{snippet}</code>
      </pre>
    </section>
  );
};

export default Snippet;
