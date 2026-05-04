"use client";

import { studentsMock } from "@/mocks/students.mock";
import { useState } from "react";
import Button from "@/components/ui/Button";
import CallHistory from "@/components/videocall/CallHistory";
import PageHeader from "@/components/shared/PageHeader";

export default function Page() {
  const [selectedStudent, setSelectedStudent] = useState<string>("");

  return (
    <div className="app-page">
      <PageHeader
        title="LLAMADAS"
        subtitle="Inicia clases online a traves de una videollamada."
      />

      <section className="app-card space-y-5 p-5">
        <select
          className="app-field"
          value={selectedStudent}
          onChange={(e) => setSelectedStudent(e.target.value)}
        >
          <option value="">Escoge estudiante</option>
          {studentsMock.map((student) => (
            <option key={student.id} value={student.id}>
              {student.name}
            </option>
          ))}
        </select>

        <Button disabled={!selectedStudent} className="w-full sm:w-auto">
          Iniciar videollamada
        </Button>
      </section>

      <section className="app-card space-y-4 p-5">
        <h2 className="app-title text-2xl font-semibold">
          Historial de llamadas
        </h2>
        <CallHistory />
      </section>
    </div>
  );
}
