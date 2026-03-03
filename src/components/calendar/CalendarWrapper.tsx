// src/components/calendar/CalendarWrapper.tsx
// Este es un componente de envoltura para un calendario.
// Acepta una lista de eventos, cada uno con un título, 
// fecha de inicio y fecha de fin.

// Cada evento se muestra en el calendario según sus fechas,
// y el título se muestra dentro del evento. Este componente
// puede ser utilizado para mostrar eventos como clases, 
// tutorías o cualquier otro tipo de evento programado.

// Luego mejor le ponemos React Big Calendar
interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
}

interface CalendarWrapperProps {
  events: CalendarEvent[];
}

// Este componente es un ejemplo básico de cómo mostrar eventos en un calendario.
export default function CalendarWrapper({ events }: CalendarWrapperProps) {
  return (
    <div className="calendar-wrapper" style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "16px", margin: "8px" }}>
      <h2>Calendar</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {events.map((event, index) => (
          <li key={index} style={{ marginBottom: "8px", padding: "8px", border: "1px solid #eee", borderRadius: "4px" }}>
            <strong>{event.title}</strong><br />
            <span>{event.start.toLocaleString()} - {event.end.toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}