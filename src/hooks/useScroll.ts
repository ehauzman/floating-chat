import { useEffect, useRef } from "react";

export const useScroll = <T extends HTMLElement = HTMLDivElement>(
  dependencies: unknown[],
) => {
  const scrollRef = useRef<T>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [dependencies]);

  return scrollRef;
};
