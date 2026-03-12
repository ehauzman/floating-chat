import { inputPlaceholder } from "@/constants/Chat";
import {
  chatInput,
  chatInputButton,
  chatInputField,
} from "@/styles/styles.css";
import type { IUseChatMessages } from "@/types/IFloatingChat";

const ChatInput: React.FC<
  Pick<
    IUseChatMessages,
    | "input"
    | "loading"
    | "handleSendOnEnter"
    | "handleChangeMessage"
    | "handleSendMessage"
  >
> = ({
  input,
  loading,
  handleSendOnEnter,
  handleChangeMessage,
  handleSendMessage,
}) => {
  return (
    <div className={chatInput}>
      <input
        className={chatInputField}
        value={input}
        placeholder={inputPlaceholder}
        onKeyDown={handleSendOnEnter}
        onChange={handleChangeMessage}
      />
      <button
        type="button"
        className={chatInputButton}
        disabled={loading}
        onClick={handleSendMessage}
      >
        Enviar
      </button>
    </div>
  );
};

export default ChatInput;
