"use client";

import { useState } from "react";
import { studentsMock } from "@/mocks/students.mock";
import CardAlumno from "@/components/cards/CardAlumno";
import FilterPanel from "@/components/filters/FilterPanel";
import Input from "@/components/ui/Input";
import { subjectsMock } from "@/mocks/subjects.mock";
import { studentRequestsMock } from "@/mocks/StudentRequest.mock";
import StudentRequestCard from "@/components/cards/StudentRequestCard";
import PageHeader from "@/components/shared/PageHeader";

export default function SearchStudent() {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [query, setQuery] = useState("");

  const filteredStudents = studentsMock.filter((student) => {
    const matchesSubject = selectedSubject
      ? student.interests.includes(selectedSubject)
      : true;

    const matchesQuery = query
      ? student.name.toLowerCase().includes(query.toLowerCase()) ||
        student.interests.some((interest) =>
          interest.toLowerCase().includes(query.toLowerCase())
        )
      : true;

    return matchesSubject && matchesQuery;
  });

  const subjectFilter = {
    title: "Materias",
    options: subjectsMock.map((subject) => ({
      label: subject,
      value: subject,
    })),
  };

  return (
    <div className="app-page">
      <PageHeader
        title="BUSCAR ESTUDIANTES"
        subtitle="Encuentra a tus estudiantes de forma rapida y sencilla."
      />

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(300px,0.9fr)]">
        <section className="min-w-0 space-y-6">
          <div className="app-card-soft space-y-4 p-4 md:p-5">
            <FilterPanel
              filters={[subjectFilter]}
              onChange={(_, value) => setSelectedSubject(value)}
            />
            <Input
              type="search"
              placeholder="Buscar por nombre o materia..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="space-y-4">
            <h2 className="app-section-heading">Resultados</h2>

            {filteredStudents.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {filteredStudents.map((student) => (
                  <CardAlumno
                    key={student.id}
                    id={student.id}
                    name={student.name}
                    subject={student.interests.join(", ")}
                    rating={student.rating ?? 0}
                  />
                ))}
              </div>
            ) : (
              <div className="app-card p-6 text-sm app-muted">
                No se encontraron estudiantes con esos criterios.
              </div>
            )}
          </div>
        </section>

        <aside className="min-w-0 xl:sticky xl:top-8">
          <div className="app-card app-scrollbar space-y-4 overflow-y-auto p-4 md:p-5 xl:max-h-[calc(100vh-11rem)]">
            <h3 className="app-section-heading">Solicitudes de alumnos</h3>

            {studentRequestsMock.map((request) => (
              <StudentRequestCard
                key={request.id}
                id={request.id}
                studentName={request.studentName}
                subject={request.subject}
                onAccept={() => console.log("Aceptar", request.id)}
                onReject={() => console.log("Rechazar", request.id)}
              />
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
