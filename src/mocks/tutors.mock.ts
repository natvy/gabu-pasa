// src/mocks/tutors.mock.ts
// Este archivo contiene datos de ejemplo para los tutores, 
// que pueden ser utilizados para pruebas y desarrollo antes 
// de integrar con una API real.

import { Tutor } from "@/types/tutor";

export const tutorsMock: Tutor[] = [
  {
    id: "t1",
    name: "Laura Méndez",
    description: "Especialista en cálculo y álgebra avanzada.",
    subjects: ["Cálculo", "Álgebra"],
    rating: 4,
    educationLevel: "Licenciatura",
    skills: [
      { name: "Didáctica", level: 85 },
      { name: "Resolución de problemas", level: 92 },
    ],
  },
    {
    id: "t2",
    name: "Carlos Gómez",
    description: "Experto en física y matemáticas aplicadas.",
    subjects: ["Física", "Matemáticas aplicadas"],
    rating: 5,
    educationLevel: "Maestría",
    skills: [
      { name: "Comunicación", level: 90 },
      { name: "Paciencia", level: 95 },
    ],
  },
  {
    id: "t3",
    name: "Ana Rodríguez",
    description: "Profesora de química con amplia experiencia en educación secundaria.",
    subjects: ["Química"],
    rating: 4,
    educationLevel: "Licenciatura",
    skills: [
      { name: "Organización", level: 88 },
      { name: "Empatía", level: 91 },
    ],
  },
  {
    id: "t4",
    name: "Miguel Torres",
    description: "Tutor especializado en programación y desarrollo de software.",
    subjects: ["Programación", "Desarrollo de software"],
    rating: 5,
    educationLevel: "Maestría",
    skills: [
      { name: "Resolución de problemas", level: 94 },
      { name: "Creatividad", level: 89 },
    ],
  }
];