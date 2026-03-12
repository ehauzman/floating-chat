import React, { type PropsWithChildren } from "react";

import { getAvatarPositionStyle } from "@/styles/positionStyles";
import { avatarContainer } from "@/styles/styles.css";
import type { IAvatarButton } from "@/types/IFloatingChat";

const ChatAvatar: React.FC<PropsWithChildren<IAvatarButton>> = ({
  size,
  bottom,
  left,
  right,
  top,
  children,
  handleOpenChat,
}) => {
  return (
    <button
      type="button"
      onClick={handleOpenChat}
      className={avatarContainer}
      style={getAvatarPositionStyle({ size, top, right, bottom, left })}
    >
      {children}
    </button>
  );
};

export default ChatAvatar;
