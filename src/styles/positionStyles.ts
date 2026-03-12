import type { CSSProperties } from "react";

import type { IAvatarContainer } from "@/types/IFloatingChat";

const toPx = (value: number) => `${value}px`;

export const getAvatarPositionStyle = ({
  size,
  top,
  right,
  bottom,
  left,
}: IAvatarContainer): CSSProperties => {
  const resolvedSize = size ?? 60;

  return {
    height: toPx(resolvedSize),
    width: toPx(resolvedSize),
    ...(top !== undefined ? { top: toPx(top) } : {}),
    ...(right !== undefined ? { right: toPx(right) } : {}),
    ...(bottom !== undefined ? { bottom: toPx(bottom) } : {}),
    ...(left !== undefined ? { left: toPx(left) } : {}),
  };
};

export const getChatWindowPositionStyle = ({
  size,
  top,
  right,
  bottom,
  left,
}: IAvatarContainer): CSSProperties => {
  const resolvedSize = size ?? 60;

  return {
    ...(top !== undefined ? { top: toPx(resolvedSize + top + 20) } : {}),
    ...(right !== undefined ? { right: toPx(right) } : {}),
    ...(bottom !== undefined
      ? { bottom: toPx(resolvedSize + bottom + 20) }
      : {}),
    ...(left !== undefined ? { left: toPx(left) } : {}),
  };
};
