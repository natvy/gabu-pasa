import LastTutor from "@/components/cards/LastTutor";
import { tutorsMock } from "@/mocks/tutors.mock";

export default function RecentTutors() {
  return (
    <div className="app-card-soft p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="app-title text-lg font-semibold">Ultimos tutores</h2>
        <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[color:var(--secondary)]">
          {tutorsMock.length} perfiles
        </span>
      </div>

      <div className="app-scrollbar space-y-4 max-h-72 overflow-y-auto pr-2">
        {tutorsMock.slice(0, 4).map((tutor) => (
          <LastTutor key={tutor.id} {...tutor} />
        ))}
      </div>
    </div>
  );
}
