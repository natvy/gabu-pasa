// src/types/file.ts
// Este archivo define la interfaz para los archivos 
// académicos en el sistema. La interfaz AcademicFile 
// incluye información básica como id, nombre, tipo de archivo,
// quién lo subió y a qué tutor o estudiante está relacionado.

export interface AcademicFile {
  id: string;
  name: string;
  type: "pdf" | "png" | "jpg" | "doc";
  uploadedBy: string;
  relatedTo: string; // tutorId o studentId
}