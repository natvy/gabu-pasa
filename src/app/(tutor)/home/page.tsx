"use client";

import LastStudent from "@/components/cards/LastStudent";
import CalendarWrapper from "@/components/calendar/CalendarWrapper";
import TutorRatingStars from "@/components/feedback/TutorRatingStars";
import SolicitudesTutor from "@/components/feedback/SolicitudesTutor";
import PageHeader from "@/components/shared/PageHeader";
import { studentsMock } from "@/mocks/students.mock";
import { tutorSessionsMock } from "@/mocks/tutorSessions.mock";

export default function Page() {
  const recentStudents = studentsMock.slice(0, 4);

  return (
    <div className="app-page">
      <PageHeader
        title="Dashboard del tutor"
        subtitle="Resumen general de tus metricas, actividad reciente, tutorias agendadas y solicitudes pendientes."
      />

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.95fr)]">
        <div className="space-y-6">
          <div className="app-card p-6">
            <h2 className="app-title mb-2 text-xl font-semibold">
              Tu calificacion general es de 100%
            </h2>
            <p className="mb-5 text-sm app-muted">
              Este panel resume la retroalimentacion recibida por parte del alumnado.
            </p>
            <TutorRatingStars />
          </div>

          <div className="app-card p-6">
            <h2 className="app-title mb-4 text-2xl font-semibold">
              Tutorias programadas
            </h2>
            {tutorSessionsMock.length === 0 ? (
              <p className="text-sm app-muted">No hay tutorias programadas.</p>
            ) : (
              <CalendarWrapper events={tutorSessionsMock} />
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="app-card-soft p-6">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="app-title text-lg font-semibold">Alumnos recientes</h2>
              <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[color:var(--secondary)]">
                {recentStudents.length} activos
              </span>
            </div>

            {recentStudents.length === 0 ? (
              <p className="text-sm app-muted">No hay alumnos recientes.</p>
            ) : (
              <div className="app-scrollbar max-h-72 space-y-4 overflow-y-auto pr-2">
                {recentStudents.map((student) => (
                  <LastStudent
                    key={student.id}
                    id={student.id}
                    name={student.name}
                    subjects={student.interests}
                    rating={student.rating ?? 0}
                  />
                ))}
              </div>
            )}
          </div>

          <SolicitudesTutor
            count={5}
            onManage={() => console.log("Administrar solicitudes")}
          />
        </div>
      </section>
    </div>
  );
}
