// src/types/student.ts
// Este archivo define la interfaz para los estudiantes en el sistema. 
// La interfaz Student incluye información básica como id, nombre, nivel educativo,
// necesidades de aprendizaje, intereses y una calificación opcional.

export interface Student {
  id: string;
  name: string;
  level: string;
  needs: string[];
  interests: string[];
  rating?: number;
}