// src/types/message.ts
// Este archivo define la interfaz para los mensajes en el sistema.
// La interfaz Message incluye información básica como id, senderId, 
// receiverId, content y timestamp.

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
}