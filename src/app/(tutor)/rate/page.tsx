"use client";

import { useState } from "react";
import { studentsMock } from "@/mocks/students.mock";
import RatingStars from "@/components/feedback/RatingStars";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/shared/PageHeader";

export default function Page() {
  const [selectedStudent, setSelectedStudent] = useState("");
  const [comment, setComment] = useState("");

  const [ratings, setRatings] = useState({
    puntualidad: 0,
    actitud: 0,
    cooperacion: 0,
    retroalimentacion: 0,
  });

  const handleRatingChange = (key: string, value: number) => {
    setRatings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const ratingSections = [
    { key: "puntualidad", label: "Puntualidad" },
    { key: "actitud", label: "Actitud" },
    { key: "cooperacion", label: "Cooperacion" },
    { key: "retroalimentacion", label: "Retroalimentacion" },
  ];

  const handleSubmit = () => {
    const allRated = Object.values(ratings).every((rating) => rating > 0);

    if (!selectedStudent) {
      alert("Debes seleccionar un alumno.");
      return;
    }

    if (!allRated) {
      alert("Debes calificar todas las categorias.");
      return;
    }

    const payload = {
      studentId: selectedStudent,
      ratings,
      comment,
      createdAt: new Date(),
    };

    console.log("Review enviada:", payload);
  };

  return (
    <div className="app-page">
      <PageHeader
        title="CALIFICA A TU ALUMNO"
        subtitle="Otorga una calificacion justa e imparcial al alumno con el que te ha tocado colaborar."
      />

      <section className="app-card p-4 md:p-5">
        <select
          className="app-field"
          value={selectedStudent}
          onChange={(e) => setSelectedStudent(e.target.value)}
        >
          <option value="">Escoge alumno</option>
          {studentsMock.map((student) => (
            <option key={student.id} value={student.id}>
              {student.name}
            </option>
          ))}
        </select>
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {ratingSections.map((section) => (
          <div key={section.key} className="app-card-soft space-y-4 p-6">
            <h3 className="font-semibold text-[color:var(--primary-strong)]">
              {section.label}
            </h3>

            <RatingStars
              value={ratings[section.key as keyof typeof ratings]}
              onChange={(value) => handleRatingChange(section.key, value)}
            />
          </div>
        ))}
      </section>

      <section className="app-card space-y-3 p-5">
        <h3 className="font-semibold text-[color:var(--primary-strong)]">
          Deja un comentario
        </h3>

        <textarea
          className="app-field min-h-[140px] resize-y"
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Escribe tu experiencia..."
        />
      </section>

      <div className="flex justify-start">
        <Button onClick={handleSubmit}>Enviar</Button>
      </div>
    </div>
  );
}
