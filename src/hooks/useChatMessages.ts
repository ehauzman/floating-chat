import { useState } from "react";

import { initialMessage } from "@/constants/Chat";
import { useClickOutside } from "@/hooks/useClickOutside";
import type {
  IChatMessages,
  IOnSendHelpers,
  IUseChatMessages,
} from "@/types/IFloatingChat";

export const useChatMessages = ({
  name,
  initial: customInitialMessage,
  onSend,
  onClose,
}: Pick<
  IChatMessages,
  "name" | "initial" | "onSend" | "onClose"
>): IUseChatMessages => {
  const getInitialBotMessage = () => {
    const defaultInitialMessage = initialMessage(name);

    return {
      ...defaultInitialMessage,
      text: customInitialMessage ?? defaultInitialMessage.text,
    };
  };

  const [messages, setMessages] = useState<
    Array<{ text: string; isUser: boolean; id: number }>
  >([getInitialBotMessage()]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [input, setInput] = useState<string>("");

  const appendMessage: IOnSendHelpers["appendMessage"] = (message) => {
    setMessages((prev) => [
      ...prev,
      {
        id: message.id ?? Date.now(),
        isUser: message.isUser,
        text: message.text,
      },
    ]);
  };

  const appendBotMessage: IOnSendHelpers["appendBotMessage"] = (text) => {
    appendMessage({ text, isUser: false });
  };

  const handleChangeMessage = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setInput(e.target.value);

  const handleSendMessage = async () => {
    const nextInput = input.trim();
    if (!nextInput || loading) return;

    appendMessage({ text: nextInput, isUser: true });
    setInput("");
    setError(null);
    setLoading(true);

    try {
      await onSend(nextInput, {
        appendMessage,
        appendBotMessage,
        setLoading,
        setError,
      });
    } catch (sendError) {
      setError(
        sendError instanceof Error
          ? sendError.message
          : "Failed to send message.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSendOnEnter = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ): void => {
    if (e.key === "Enter") handleSendMessage();
  };

  const handleCloseChat = (): void => {
    setMessages([getInitialBotMessage()]);
    setError(null);
    onClose();
  };

  const chatRef = useClickOutside<HTMLDivElement>(handleCloseChat);

  return {
    chatRef,
    input,
    messages,
    loading,
    error,
    handleSendOnEnter,
    handleChangeMessage,
    handleSendMessage,
    handleCloseChat,
  };
};
