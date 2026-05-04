import CardTutor from "@/components/cards/CardTutor";
import type { Tutor } from "@/types/tutor";

interface Props {
  tutors: Tutor[];
}

export default function TutorResults({ tutors }: Props) {
  return (
    <div className="space-y-4">
      <h2 className="app-title text-lg font-semibold">Resultados</h2>

      {tutors.length > 0 ? (
        tutors.map((tutor) => <CardTutor key={tutor.id} {...tutor} />)
      ) : (
        <div className="app-card p-6 text-sm app-muted">
          No se encontraron tutores con esos criterios.
        </div>
      )}
    </div>
  );
}
