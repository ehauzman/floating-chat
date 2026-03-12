import { useState } from "react";

import type { IUseFloatingChat } from "@/types/IFloatingChat";

export const useFloatingChat = (): IUseFloatingChat => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenChat = (): void => {
    setIsOpen(true);
  };

  const handleCloseChat = (): void => {
    setIsOpen(false);
  };

  return {
    isOpen,
    handleOpenChat,
    handleCloseChat,
  };
};
