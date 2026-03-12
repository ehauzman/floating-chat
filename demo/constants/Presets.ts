import { DEFAULT_CONFIG } from "~demo/constants/DemoConfig";
import type { TDemoConfig } from "~demo/types/DemoConfig";

export const PRESETS: Array<{ label: string; config: TDemoConfig }> = [
  {
    label: "Bottom left",
    config: {
      ...DEFAULT_CONFIG,
      top: "",
      right: "",
      bottom: "20",
      left: "20",
    },
  },
  {
    label: "Top right",
    config: {
      ...DEFAULT_CONFIG,
      top: "20",
      right: "20",
      bottom: "",
      left: "",
    },
  },
];
