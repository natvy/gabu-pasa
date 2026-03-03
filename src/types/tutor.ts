// src/types/tutor.ts
// Este archivo define las interfaces para los tutores y 
// sus habilidades en el sistema. La interfaz Tutor incluye información
// básica como id, nombre, descripción, materias que enseña, calificación,
// habilidades específicas y nivel educativo. La interfaz Skill define
// el nombre de la habilidad y su nivel de competencia en una escala de 0 a 100.

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface Tutor {
  id: string;
  name: string;
  description: string;
  subjects: string[];
  rating: number;
  skills: Skill[];
  educationLevel: string;
}