export const initialMessage = (name: string) => ({
  text: `Olá, meu nome é ${name}! Como posso te ajudar?`,
  isUser: false,
  id: new Date().getMilliseconds(),
});

export const inputPlaceholder = "Digite sua mensagem...";

export const thinkingMessage = (thinking?: string) => thinking ?? "Pensando...";
