// src/components/feedback/RatingStars.tsx
// Este es un componente de estrellas de calificación reutilizable.
// Acepta un valor numérico para la calificación, un valor máximo opcional,
// una función onChange para manejar cambios en la calificación, y una 
// propiedad readonly para hacer que las estrellas sean solo de lectura.

interface RatingStarsProps {
  value: number;
  max?: number;
  onChange?: (value: number) => void;
  readonly?: boolean;
}

// Este componente muestra una serie de estrellas que representan 
// la calificación.
export default function RatingStars({ value, max = 5, onChange, readonly = false }: RatingStarsProps) {
  const handleClick = (index: number) => {
    if (!readonly && onChange) {
      onChange(index + 1);
    }
  };
  
  return (
    <div className="rating-stars">
      {[...Array(max)].map((_, index) => (
        <span
          key={index}
          className={`star ${index < value ? "filled" : ""} ${readonly ? "readonly" : "interactive"}`}
          onClick={() => handleClick(index)}
        >
          ★
        </span>
      ))}
    </div>
  );
}