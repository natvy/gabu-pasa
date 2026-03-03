// src/types/calendar.ts
// Este archivo define la interfaz para los eventos del calendario en el sistema. 
// La interfaz CalendarEvent incluye información básica como id, título, fecha de inicio y fecha de fin.

export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
}