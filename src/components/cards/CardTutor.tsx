import Button from "../ui/Button";
import RatingStars from "../feedback/RatingStars";

interface CardTutorProps {
  id: string;
  name: string;
  description: string;
  subjects: string[];
  rating: number;
  onClick?: () => void;
}

export default function CardTutor({
  name,
  description,
  subjects,
  rating,
  onClick,
}: CardTutorProps) {
  return (
    <div
      onClick={onClick}
      className={`
        app-card h-full rounded-[1.5rem] p-5 transition hover:-translate-y-1 hover:shadow-[var(--shadow)]
        ${onClick ? "cursor-pointer" : ""}
      `}
    >
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--primary-soft)] font-semibold text-[color:var(--primary)]">
          {name.charAt(0)}
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[color:var(--primary-strong)]">
            {name}
          </h2>

          <div className="flex items-center gap-2">
            <RatingStars value={rating} readonly />
            <span className="text-sm app-muted">{rating}/5</span>
          </div>
        </div>
      </div>

      <p className="mb-4 text-sm app-muted">{description}</p>

      <div className="mb-6 flex flex-wrap gap-2">
        {subjects.map((subject) => (
          <span
            key={subject}
            className="rounded-full bg-[color:var(--accent-soft)] px-3 py-1 text-xs text-[color:var(--accent)]"
          >
            {subject}
          </span>
        ))}
      </div>

      <div className="flex justify-center border-t border-[color:var(--border)] pt-4">
        <Button
          variant="primary"
          size="sm"
          className="shadow-sm sm:w-auto"
          onClick={() => console.log("Enviar Solicitud")}
        >
          Enviar solicitud
        </Button>
      </div>
    </div>
  );
}
