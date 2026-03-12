import { chatHeader, closeButton } from "@/styles/styles.css";
import type { IChatMessages, IUseChatMessages } from "@/types/IFloatingChat";

const ChatHeader: React.FC<
  Pick<IChatMessages, "name"> & Pick<IUseChatMessages, "handleCloseChat">
> = ({ name, handleCloseChat }) => {
  return (
    <div className={chatHeader}>
      {name}
      <button type="button" className={closeButton} onClick={handleCloseChat}>
        x
      </button>
    </div>
  );
};

export default ChatHeader;
