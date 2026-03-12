import React from "react";

import { useTipewriter } from "@/hooks/useTipewriter";

const Typewriter: React.FC<{
  message: string;
  speed: number;
}> = ({ message, speed }) => {
  const text = useTipewriter(message, speed);

  return text;
};

export default Typewriter;
