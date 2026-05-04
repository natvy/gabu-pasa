"use client";

import RatingStars from "../feedback/RatingStars";

interface CardAlumnoProps {
  id: string;
  name: string;
  subject: string;
  rating: number;
  onClick?: () => void;
}

export default function CardAlumno({
  name,
  subject,
  rating,
  onClick,
}: CardAlumnoProps) {
  const subjectsArray = subject.split(",").map((item) => item.trim());

  return (
    <div
      onClick={onClick}
      className={`
        app-card h-full rounded-[1.5rem] p-5 transition hover:-translate-y-1 hover:shadow-[var(--shadow)]
        ${onClick ? "cursor-pointer" : ""}
      `}
    >
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--accent-soft)] font-semibold text-[color:var(--accent)]">
          {name.charAt(0)}
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[color:var(--primary-strong)]">
            {name}
          </h2>

          <div className="mt-1 flex items-center gap-2">
            <RatingStars value={rating} readonly />
            <span className="text-sm app-muted">{rating}/5</span>
          </div>
        </div>
      </div>

      <div className="mt-2 flex flex-wrap gap-2">
        {subjectsArray.map((subjectItem) => (
          <span
            key={subjectItem}
            className="rounded-full bg-[color:var(--accent-soft)] px-3 py-1 text-xs text-[color:var(--accent)]"
          >
            {subjectItem}
          </span>
        ))}
      </div>
    </div>
  );
}
