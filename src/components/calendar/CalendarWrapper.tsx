interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
}

interface CalendarWrapperProps {
  events: CalendarEvent[];
}

export default function CalendarWrapper({ events }: CalendarWrapperProps) {
  return (
    <div className="app-card-soft p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <h2 className="app-title text-lg font-semibold">Calendario</h2>
          <p className="mt-1 text-sm app-muted">Sesiones y eventos programados</p>
        </div>

        <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[color:var(--secondary)]">
          {events.length} eventos
        </span>
      </div>

      <div className="space-y-3">
        {events.length === 0 && (
          <p className="text-sm app-muted">No hay eventos programados.</p>
        )}

        {events.map((event, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/70 bg-white/80 p-4 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
          >
            <p className="font-medium text-[color:var(--primary)]">{event.title}</p>
            <p className="mt-1 text-xs app-muted">
              {event.start.toLocaleString()} - {event.end.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
