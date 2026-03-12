import { useEffect, useState } from "react";

export const useTipewriter = (message: string, speed: number) => {
  const [currentText, setCurrentText] = useState<string>("");

  useEffect(() => {
    if (speed <= 0) return;

    const characters = Array.from(message);
    const timeouts = characters.map((_, index) =>
      setTimeout(
        () => setCurrentText(characters.slice(0, index + 1).join("")),
        speed * index,
      ),
    );

    return () => timeouts.forEach(clearTimeout);
  }, [message, speed]);

  return speed > 0 ? currentText : message;
};
