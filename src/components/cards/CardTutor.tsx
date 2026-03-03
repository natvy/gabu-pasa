// src/components/cards/CardTutor.tsx
// Este es un componente de tarjeta para mostrar información 
// de un tutor. Acepta props como id, name, description, 
// subjects, rating y una función onClick opcional.

interface CardTutorProps {
  id: string;
  name: string;
  description: string;
  subjects: string[];
  rating: number;
  onClick?: () => void;
}

// Este componente muestra el nombre del tutor, una descripción,
// las materias que enseña y su calificación. Si se proporciona
// una función onClick, la tarjeta será clickeable.
export default function CardTutor({
  id,
  name,
  description,
  subjects,
  rating,
  onClick,
}: CardTutorProps) {
  return (
    <div
      className="card-tutor"
      onClick={onClick}
      style={{  border: "1px solid #ccc", borderRadius: "8px", padding: "16px", margin: "8px", cursor: onClick ? "pointer" : "default" }}
    >
      <h2>{name}</h2>
      <p>{description}</p>
      <p><strong>Subjects:</strong> {subjects.join(", ")}</p>
      <p><strong>Rating:</strong> {rating} / 5</p>
    </div>
  );
}