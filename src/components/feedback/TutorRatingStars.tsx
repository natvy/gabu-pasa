"use client";

import { useState } from "react";
import RatingStars from "@/components/feedback/RatingStars";

type Metric = {
  id: string;
  name: string;
  rating: number;
  cover: string;
  description: string;
};

const metrics: Metric[] = [
  {
    id: "clarity",
    name: "Claridad al explicar",
    rating: 4,
    cover: "linear-gradient(135deg, rgba(217,131,91,0.95), rgba(233,196,106,0.95))",
    description:
      "El alumnado valora que los temas se explican con estructura, ejemplos claros y seguimiento en cada sesion.",
  },
  {
    id: "patience",
    name: "Paciencia",
    rating: 5,
    cover: "linear-gradient(135deg, rgba(91,142,125,0.95), rgba(38,70,83,0.95))",
    description:
      "Refleja la calma y disponibilidad para resolver dudas sin perder el ritmo del aprendizaje.",
  },
  {
    id: "knowledge",
    name: "Dominio del tema",
    rating: 4,
    cover: "linear-gradient(135deg, rgba(38,70,83,0.95), rgba(93,126,138,0.95))",
    description:
      "Evalua la seguridad con la que se abordan conceptos, ejercicios y aplicaciones practicas.",
  },
  {
    id: "helpfulness",
    name: "Utilidad de la sesion",
    rating: 5,
    cover: "linear-gradient(135deg, rgba(233,196,106,0.95), rgba(244,207,190,0.95))",
    description:
      "Resume que tan valiosa fue la tutoria para avanzar en objetivos academicos concretos.",
  },
];

export default function TutorRatingStars() {
  const [activeMetric, setActiveMetric] = useState(metrics[0]);

  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <div className="app-card-strong relative w-full max-w-xl overflow-hidden">
        <div className="h-32" style={{ background: activeMetric.cover }} />

        <div className="space-y-3 p-6">
          <h3 className="text-lg font-semibold text-[color:var(--primary)]">
            {activeMetric.name}
          </h3>

          <RatingStars value={activeMetric.rating} readonly />

          <p className="text-sm leading-relaxed app-muted">
            {activeMetric.description}
          </p>
        </div>
      </div>

      <div className="flex gap-2 lg:flex-col">
        {metrics.map((metric) => {
          const active = metric.id === activeMetric.id;

          return (
            <button
              key={metric.id}
              type="button"
              onClick={() => setActiveMetric(metric)}
              className={`
                flex h-11 w-11 items-center justify-center rounded-2xl text-lg font-semibold transition
                ${
                  active
                    ? "bg-[color:var(--primary)] text-white shadow-lg shadow-[rgba(38,70,83,0.18)]"
                    : "bg-white/80 text-[color:var(--primary)] hover:bg-[color:var(--primary-soft)]"
                }
              `}
            >
              ★
            </button>
          );
        })}
      </div>
    </div>
  );
}
