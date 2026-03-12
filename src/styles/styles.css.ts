import { globalStyle, keyframes, style } from "@vanilla-extract/css";

export const avatarContainer = style({
  alignItems: "center",
  background: "#ffffff",
  borderRadius: "50%",
  border: "none",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  overflow: "hidden",
  padding: 0,
  position: "fixed",
  transition: "transform 0.2s ease",
  zIndex: 100000,
  selectors: {
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
});

export const chatWindow = style({
  background: "#ffffff",
  borderRadius: 12,
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
  display: "flex",
  flexDirection: "column",
  height: 500,
  position: "fixed",
  width: 350,
  zIndex: 100001,
});

export const chatHeader = style({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 16,
  padding: 12,
});

export const closeButton = style({
  background: "none",
  border: "none",
  cursor: "pointer",
  fontSize: 16,
  height: 30,
  width: 30,
});

export const messagesWindow = style({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  gap: 8,
  marginBottom: 16,
  overflowY: "auto",
  padding: 4,
});

export const messageContainer = style({
  alignItems: "flex-start",
  display: "flex",
  flexFlow: "row nowrap",
  gap: 8,
  maxWidth: "80%",
});

export const messageContainerUser = style({
  alignSelf: "flex-end",
});

export const messageContainerBot = style({
  alignSelf: "flex-start",
});

export const messageAvatar = style({
  alignItems: "center",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  maxWidth: 30,
  minWidth: 30,
  overflow: "hidden",
});

export const message = style({
  borderRadius: 8,
  fontSize: 14,
  padding: "8px 12px",
  position: "relative",
});

export const messageUser = style({
  background: "#007bff",
  color: "#ffffff",
});

export const messageBot = style({
  background: "#f0f2f5",
  color: "#1f1f1f",
  selectors: {
    "&::before": {
      borderBottom: "8px solid transparent",
      borderLeft: "8px solid transparent",
      borderRight: "8px solid #f0f2f5",
      borderTop: "8px solid #f0f2f5",
      content: "",
      height: 0,
      left: -8,
      position: "absolute",
      top: 0,
      width: 0,
    },
  },
});

const thinkAnimation = keyframes({
  to: { opacity: 0 },
});

export const loadingMessage = style({
  animation: `${thinkAnimation} 1s linear infinite alternate`,
  fontSize: 14,
  padding: "8px 12px",
});

export const errorMessage = style({
  background: "#fff1f1",
  border: "1px solid #f5c2c2",
  borderRadius: 8,
  color: "#8a1d1d",
  fontSize: 13,
  padding: "8px 12px",
});

export const chatInput = style({
  display: "flex",
  gap: 8,
  padding: 12,
});

export const chatInputField = style({});
export const chatInputButton = style({});

globalStyle(`${chatInput} .${chatInputField}`, {
  border: "1px solid #ddd",
  borderRadius: 6,
  flex: 1,
  outline: "none",
  padding: "8px 12px",
});

globalStyle(`${chatInput} .${chatInputField}:focus`, {
  borderColor: "#007bff",
});

globalStyle(`${chatInput} .${chatInputButton}`, {
  background: "#007bff",
  border: "none",
  borderRadius: 6,
  color: "white",
  cursor: "pointer",
  margin: 1,
  padding: "8px 16px",
});

globalStyle(`${chatInput} .${chatInputButton}:hover`, {
  background: "#0056b3",
});

globalStyle(`${chatInput} .${chatInputButton}:disabled`, {
  background: "#ccc",
  cursor: "not-allowed",
});
