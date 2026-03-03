// src/components/cards/CardAlumno.tsx
// Este es un componente de tarjeta para mostrar información 
// de un alumno. Acepta props como id, name, subject y rating.

interface CardAlumnoProps {
  id: string;
  name: string;
  subject: string;
  rating: number;
}
// Componente de tarjeta para alumno
export default function CardAlumno({
  id,
  name,
  subject,
  rating,
}: CardAlumnoProps) {
  return (
    <div className="card-alumno" style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "16px", margin: "8px" }}>
      <h2>{name}</h2>
      <p><strong>Subject:</strong> {subject}</p>
      <p><strong>Rating:</strong> {rating}/5</p>
    </div>
  );
}