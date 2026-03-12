export type TMessage = {
  text: string;
  isUser: boolean;
  id: number;
};

export interface IOnSendHelpers {
  appendMessage: (message: Omit<TMessage, "id"> & { id?: number }) => void;
  appendBotMessage: (text: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export interface IFloatingChat extends IAvatarContainer {
  children: React.ReactNode;
  name: string;
  initial?: string;
  thinking?: string;
  onSend: (msg: string, helpers: IOnSendHelpers) => Promise<void>;
}

export interface IAvatarContainer {
  size?: number;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export interface IAvatarButton extends IAvatarContainer {
  handleOpenChat: VoidFunction;
}

export interface IChatMessages extends IFloatingChat {
  onClose: VoidFunction;
}

export interface IUseChatMessages {
  chatRef: React.RefObject<HTMLDivElement | null>;
  input: string;
  messages: TMessage[];
  loading: boolean;
  error: string | null;
  handleSendOnEnter: React.KeyboardEventHandler<HTMLInputElement>;
  handleChangeMessage: React.ChangeEventHandler<HTMLInputElement>;
  handleSendMessage: () => Promise<void>;
  handleCloseChat: VoidFunction;
}

export interface IUseFloatingChat {
  isOpen: boolean;
  handleOpenChat: VoidFunction;
  handleCloseChat: VoidFunction;
}
