import React from "react";

import { thinkingMessage } from "@/constants/Chat";
import { loadingMessage } from "@/styles/styles.css";

const ThinkingMessage: React.FC<{ thinking?: string }> = ({
  thinking,
}) => {
  return (
    <div className={loadingMessage}>
      {thinkingMessage(thinking)}
    </div>
  );
};

export default ThinkingMessage;
