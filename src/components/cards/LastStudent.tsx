"use client";

import RatingStars from "@/components/feedback/RatingStars";

interface CardStudentProps {
  id: string;
  name: string;
  subjects: string[];
  rating: number;
  onClick?: () => void;
}

export default function LastStudent({
  name,
  subjects,
  rating,
  onClick,
}: CardStudentProps) {
  const subjectsPreview = subjects.length > 0 ? subjects.join(", ") : "-";

  return (
    <div
      className={`
        app-card-strong p-4 transition duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]
        ${onClick ? "cursor-pointer" : "cursor-default"}
      `}
      onClick={onClick}
    >
      <h2 className="text-lg font-semibold text-[color:var(--primary)]">{name}</h2>

      <p className="mt-2 text-sm app-muted">
        <strong className="font-semibold text-[color:var(--primary)]">Materias:</strong>{" "}
        {subjectsPreview}
      </p>

      <div className="mt-3 flex items-center gap-2">
        <RatingStars value={rating} max={5} readonly />
        <span className="text-sm app-muted">{rating} / 5</span>
      </div>
    </div>
  );
}
