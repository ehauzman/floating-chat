import React from "react";

import ChatHeader from "@/components/ChatMessages/ChatHeader";
import ChatInput from "@/components/ChatMessages/ChatInput";
import ErrorMessage from "@/components/ChatMessages/ErrorMessage";
import ResponseMessage from "@/components/ChatMessages/ResponseMessage";
import ThinkingMessage from "@/components/ChatMessages/ThinkingMessage";
import UserMessage from "@/components/ChatMessages/UserMessage";
import { useChatMessages } from "@/hooks/useChatMessages";
import { useScroll } from "@/hooks/useScroll";
import { getChatWindowPositionStyle } from "@/styles/positionStyles";
import { chatWindow, messagesWindow } from "@/styles/styles.css";
import type { IChatMessages } from "@/types/IFloatingChat";

const ChatMessages: React.FC<IChatMessages> = ({
  name,
  initial,
  thinking,
  bottom,
  left,
  right,
  top,
  size = 60,
  children,
  onSend,
  onClose,
}) => {
  const {
    chatRef,
    input,
    messages,
    loading,
    error,
    handleSendOnEnter,
    handleChangeMessage,
    handleSendMessage,
    handleCloseChat,
  } = useChatMessages({
    name,
    initial,
    onSend,
    onClose,
  });

  const scrollRef = useScroll([...messages]);

  return (
    <div
      ref={chatRef}
      className={chatWindow}
      style={getChatWindowPositionStyle({ size, top, right, bottom, left })}
    >
      <ChatHeader name={name} handleCloseChat={handleCloseChat} />

      <div className={messagesWindow}>
        {messages.map((msg) =>
          msg.isUser ? (
            <UserMessage key={msg.id} text={msg.text} />
          ) : (
            <ResponseMessage key={msg.id} text={msg.text} children={children} />
          ),
        )}
        {loading && <ThinkingMessage thinking={thinking} />}
        {error && <ErrorMessage error={error} />}
        <div ref={scrollRef} />
      </div>

      <ChatInput
        input={input}
        loading={loading}
        handleChangeMessage={handleChangeMessage}
        handleSendOnEnter={handleSendOnEnter}
        handleSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default ChatMessages;
