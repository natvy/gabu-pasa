import CardTutor from "@/components/cards/CardTutor";
import { Tutor } from "@/types/tutor";

interface Props {
  tutors: Tutor[];
}

export default function TopTutors({ tutors }: Props) {
  const topTutors = [...tutors]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <aside className="min-w-0 xl:sticky xl:top-8">
      <div className="app-card-soft space-y-4 p-4 md:p-5">
        <h3 className="app-title font-semibold">Mejores calificados</h3>

        {topTutors.map((tutor) => (
          <div key={tutor.id} className="space-y-2">
            <CardTutor {...tutor} />
          </div>
        ))}
      </div>
    </aside>
  );
}
