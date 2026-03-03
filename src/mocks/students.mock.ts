// src/mocks/students.mock.ts
// Este archivo contiene datos de ejemplo para los estudiantes, 
// que pueden ser utilizados para pruebas y desarrollo antes 
// de integrar con una API real.

import { Student } from "@/types/student";

export const studentsMock: Student[] = [
  {
    id: "s1",
    name: "Natalia Urias",
    level: "6to semestre",
    needs: ["Ayuda con álgebra", "Preparación para exámenes"],
    interests: ["Matemáticas", "Ciencia"],
    rating: 5,
  },
    {
    id: "s2",
    name: "Diego Fernández",
    level: "4to semestre",
    needs: ["Apoyo en física", "Tareas de programación"],
    interests: ["Física", "Programación"],
    rating: 5,
    },
    {
    id: "s3",
    name: "Sofía Martínez",
    level: "2do semestre",
    needs: ["Ayuda con química", "Organización de estudio"],
    interests: ["Química", "Biología"],
    rating: 4,
    },
    {
    id: "s4",
    name: "Lucas Gómez",
    level: "8vo semestre",
    needs: ["Preparación para tesis", "Revisión de proyectos"],
    interests: ["Investigación", "Desarrollo de software"],
    rating: 5,
  },
];