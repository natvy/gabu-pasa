import { AvailabilityDay } from "@/mocks/tutorAvailability.mock";

interface Props {
  day: number;
  data?: AvailabilityDay;
}

export default function CalendarDayCell({ day, data }: Props) {
  const colorMap = {
    morning: "bg-[color:var(--primary)]",
    evening: "bg-[color:var(--secondary)]",
    any: "bg-[color:var(--accent)]",
  };

  const color = data?.preference ? colorMap[data.preference] : "";

  return (
    <div className="relative h-24 rounded-lg bg-gray-200 p-2 text-[color:var(--foreground)]">
      <span className="text-xs text-[color:var(--foreground)]">{day}</span>

      {data && (
        <div
          className={`absolute bottom-4 left-4 right-4 h-3 rounded ${color}`}
        />
      )}
    </div>
  );
}
