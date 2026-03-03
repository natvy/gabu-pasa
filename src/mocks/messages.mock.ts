// src/mocks/messages.mock.ts
// Este archivo contiene datos de ejemplo para los mensajes, 
// que pueden ser utilizados para pruebas y desarrollo antes 
// de integrar con una API real.

import { Message } from "@/types/message";

export const messagesMock: Message[] = [
    {
        id: "m1",
        senderId: "t1",
        receiverId: "s1",
        content: "Hola Natalia, ¿cómo estás? Quería saber si necesitas ayuda con álgebra.",
        timestamp: "2024-06-01T10:00:00Z",
    },
    {
        id: "m2",
        senderId: "s1",
        receiverId: "t1",
        content: "Hola Carlos, estoy bien, gracias. Sí, me vendría bien ayuda con álgebra.",
        timestamp: "2024-06-01T10:05:00Z",
    },
    {
        id: "m3",
        senderId: "t1",
        receiverId: "s1",
        content: "Perfecto, ¿qué temas específicos te gustaría repasar?",
        timestamp: "2024-06-01T10:10:00Z",
    },
    {
        id: "m4",
        senderId: "s1",
        receiverId: "t1",
        content: "Me gustaría repasar ecuaciones cuadráticas y funciones.",
        timestamp: "2024-06-01T10:15:00Z",
    }
];