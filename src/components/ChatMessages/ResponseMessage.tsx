import type { PropsWithChildren } from "react";

import { useTipewriter } from "@/hooks/useTipewriter";
import {
  message,
  messageAvatar,
  messageBot,
  messageContainer,
  messageContainerBot,
} from "@/styles/styles.css";

const ResponseMessage: React.FC<PropsWithChildren<{ text: string }>> = ({
  text,
  children,
}) => {
  const response = useTipewriter(text, 30);

  return (
    <div className={`${messageContainer} ${messageContainerBot}`}>
      <div className={messageAvatar}>{children}</div>
      <div className={`${message} ${messageBot}`}>{response}</div>
    </div>
  );
};

export default ResponseMessage;
