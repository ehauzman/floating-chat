import {
  message,
  messageContainer,
  messageContainerUser,
  messageUser,
} from "@/styles/styles.css";

const UserMessage: React.FC<{ text: string }> = ({
  text,
}) => {
  return (
    <div className={`${messageContainer} ${messageContainerUser}`}>
      <div className={`${message} ${messageUser}`}>{text}</div>
    </div>
  );
};

export default UserMessage;
