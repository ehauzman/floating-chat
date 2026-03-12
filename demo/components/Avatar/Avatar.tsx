import { DEFAULT_CONFIG } from "~demo/constants/DemoConfig";
import type { TDemoConfig } from "~demo/types/DemoConfig";

const Avatar: React.FC<
  Pick<TDemoConfig, "avatarType" | "avatarImageUrl" | "avatarValue">
> = ({ avatarType, avatarImageUrl, avatarValue }) => {
  switch (avatarType) {
    case "image":
      return (
        <img
          className="app__avatar-image"
          src={avatarImageUrl || DEFAULT_CONFIG.avatarImageUrl}
          alt="Chat avatar"
        />
      );
    case "badge":
      return <div className="app__avatar-badge">{avatarValue || "AI"}</div>;
    case "text":
      return <span>{avatarValue || "Chat"}</span>;
    default:
      return <span>{avatarValue || "💬"}</span>;
  }
};

export default Avatar;
