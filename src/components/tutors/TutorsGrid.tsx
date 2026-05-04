import CardTutor from "@/components/cards/CardTutor";
import { Tutor } from "@/types/tutor";

interface Props {
  tutors: Tutor[];
}

export default function TutorsGrid({ tutors }: Props) {
  return (
    <section>
      <h2 className="app-section-heading mb-4">Resultados</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {tutors.length > 0 ? (
          tutors.map((tutor) => <CardTutor key={tutor.id} {...tutor} />)
        ) : (
          <div className="app-card p-6 text-sm app-muted md:col-span-2 xl:col-span-3">
            No se encontraron tutores con esos criterios.
          </div>
        )}
      </div>
    </section>
  );
}
