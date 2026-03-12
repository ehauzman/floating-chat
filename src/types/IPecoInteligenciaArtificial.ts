export type TPecoInteligenciaArtificialPayload = {
  modeloGptChat?: 'gpt-4';
  perguntaChat: string;
  contexto: string;
};

export type TPecoInteligenciaArtificialResponse = {
  resposta: string;
  contexto: string;
  pergunta: string;
  modelo: string;
  data: string;
  id: string;
};
