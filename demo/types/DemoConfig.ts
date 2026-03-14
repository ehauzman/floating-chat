export type TDemoConfig = {
  name: string;
  initial: string;
  thinking: string;
  avatarType: "initials" | "emoji" | "text" | "badge" | "image";
  avatarValue: string;
  avatarImageUrl: string;
  size: number;
  top: string;
  right: string;
  bottom: string;
  left: string;
  responseDelay: number;
};
