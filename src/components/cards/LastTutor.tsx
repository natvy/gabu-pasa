import RatingStars from "../feedback/RatingStars";

interface CardTutorProps {
  id: string;
  name: string;
  subjects: string[];
  rating: number;
  onClick?: () => void;
}

export default function LastTutor({
  name,
  subjects,
  rating,
  onClick,
}: CardTutorProps) {
  const subject = subjects?.[0];

  return (
    <div
      onClick={onClick}
      className={`
        app-card-strong flex items-center gap-4 p-4 transition duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]
        ${onClick ? "cursor-pointer" : ""}
      `}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--primary-soft)] font-semibold text-[color:var(--primary)]">
        {name.charAt(0)}
      </div>

      <div className="flex-1">
        <p className="font-medium text-[color:var(--primary)]">{name}</p>
        <p className="text-xs app-muted">{subject}</p>

        <div className="mt-1 flex items-center gap-2">
          <RatingStars value={rating} readonly />
          <span className="text-xs app-muted">{rating}/5</span>
        </div>
      </div>
    </div>
  );
}
