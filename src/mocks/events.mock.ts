// Este archivo contiene datos de ejemplo para los eventos del calendario, 
// que pueden ser utilizados para pruebas y desarrollo antes de integrar con una API real.


import { CalendarEvent } from '@/types/calendar';

export const eventsMock: CalendarEvent[] = [
    {
        id: "e1",
        title: "Sesión de Álgebra",
        start: new Date("2024-06-05T15:00:00Z"),
        end: new Date("2024-06-05T16:00:00Z"),
    },
    {
        id: "e2",
        title: "Revisión de Funciones",
        start: new Date("2024-06-10T14:00:00Z"),
        end: new Date("2024-06-10T15:00:00Z"),
    },
    {
        id: "e3",
        title: "Sesión de Trigonometría",
        start: new Date("2024-06-15T16:00:00Z"),
        end: new Date("2024-06-15T17:00:00Z"),
    },
    {
        id: "e4",
        title: "Revisión de Ecuaciones",
        start: new Date("2024-06-20T14:00:00Z"),
        end: new Date("2024-06-20T15:00:00Z"),
    },
    {
        id: "e5",
        title: "Sesión de Gráficas",
        start: new Date("2024-06-25T15:00:00Z"),
        end: new Date("2024-06-25T16:00:00Z"),
    }
];