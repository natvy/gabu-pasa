"use client";

import { useState } from "react";
import { tutorsMock } from "@/mocks/tutors.mock";
import RatingStars from "@/components/feedback/RatingStars";
import Button from "@/components/ui/Button";

export default function RateTutorForm() {
  const [selectedTutor, setSelectedTutor] = useState("");
  const [comment, setComment] = useState("");

  const [ratings, setRatings] = useState({
    puntualidad: 0,
    materiales: 0,
    conocimiento: 0,
    comunicacion: 0,
  });

  const ratingSections = [
    { key: "puntualidad", label: "Puntualidad" },
    { key: "materiales", label: "Materiales compartidos" },
    { key: "conocimiento", label: "Conocimiento" },
    { key: "comunicacion", label: "Comunicacion" },
  ];

  const handleRatingChange = (key: string, value: number) => {
    setRatings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    const allRated = Object.values(ratings).every((rating) => rating > 0);

    if (!selectedTutor) {
      alert("Debes seleccionar un tutor.");
      return;
    }

    if (!allRated) {
      alert("Debes calificar todas las categorias.");
      return;
    }

    const payload = {
      tutorId: selectedTutor,
      ratings,
      comment,
      createdAt: new Date(),
    };

    console.log("Review enviada:", payload);
  };

  return (
    <div className="space-y-8">
      <section className="app-card p-4 md:p-5">
        <select
          className="app-field"
          value={selectedTutor}
          onChange={(e) => setSelectedTutor(e.target.value)}
        >
          <option value="">Escoge tutor</option>
          {tutorsMock.map((tutor) => (
            <option key={tutor.id} value={tutor.id}>
              {tutor.name}
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

      <div className="flex">
        <Button onClick={handleSubmit}>Enviar</Button>
      </div>
    </div>
  );
}
