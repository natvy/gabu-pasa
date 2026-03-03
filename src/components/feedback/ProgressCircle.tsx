// src/components/feedback/ProgressCircle.tsx
// Este es un componente de círculo de progreso reutilizable.
// Acepta un valor numérico para el progreso, un valor máximo, 
// y un tamaño opcional.

interface ProgressCircleProps {
  value: number;
  max: number;
  size?: number;
}

// Este componente muestra un círculo de progreso con un porcentaje en el centro.
export default function ProgressCircle({ value, max, size = 100 }: ProgressCircleProps) {
  const radius = (size - 10) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / max) * circumference;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size / 2} cy={size / 2} r={radius} stroke="#eee" strokeWidth="10" fill="none" />
      <circle cx={size / 2} cy={size / 2} r={radius} stroke="#4caf50" strokeWidth="10" fill="none" strokeDasharray={circumference} strokeDashoffset={offset} />
      <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="1.5em">{Math.round((value / max) * 100)}%</text>
    </svg>
  );
}