import type { TDemoConfig } from "~demo/types/DemoConfig";

export interface IProperties {
  name: TDemoConfig["name"];
  initial: TDemoConfig["initial"];
  thinking: TDemoConfig["thinking"];
  avatarType: TDemoConfig["avatarType"];
  avatarValue: TDemoConfig["avatarValue"];
  avatarImageUrl: TDemoConfig["avatarImageUrl"];
  size: TDemoConfig["size"];
  top: TDemoConfig["top"];
  right: TDemoConfig["right"];
  bottom: TDemoConfig["bottom"];
  left: TDemoConfig["left"];
  responseDelay: TDemoConfig["responseDelay"];
  setName: React.Dispatch<React.SetStateAction<TDemoConfig["name"]>>;
  setInitial: React.Dispatch<React.SetStateAction<TDemoConfig["initial"]>>;
  setThinking: React.Dispatch<React.SetStateAction<TDemoConfig["thinking"]>>;
  setAvatarType: React.Dispatch<
    React.SetStateAction<TDemoConfig["avatarType"]>
  >;
  setAvatarValue: React.Dispatch<
    React.SetStateAction<TDemoConfig["avatarValue"]>
  >;
  setAvatarImageUrl: React.Dispatch<
    React.SetStateAction<TDemoConfig["avatarImageUrl"]>
  >;
  setSize: React.Dispatch<React.SetStateAction<TDemoConfig["size"]>>;
  setTop: React.Dispatch<React.SetStateAction<TDemoConfig["top"]>>;
  setRight: React.Dispatch<React.SetStateAction<TDemoConfig["right"]>>;
  setBottom: React.Dispatch<React.SetStateAction<TDemoConfig["bottom"]>>;
  setLeft: React.Dispatch<React.SetStateAction<TDemoConfig["left"]>>;
  setResponseDelay: React.Dispatch<
    React.SetStateAction<TDemoConfig["responseDelay"]>
  >;
}
