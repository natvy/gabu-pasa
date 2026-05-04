import { useId } from "react";

interface ProgressCircleProps {
  value: number;
  max: number;
  size?: number;
}

export default function ProgressCircle({
  value,
  max,
  size = 120,
}: ProgressCircleProps) {
  const gradientId = useId();
  const radius = (size - 14) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = value / max;
  const offset = circumference - progress * circumference;
  const percentage = Math.round(progress * 100);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d9835b" />
          <stop offset="100%" stopColor="#e9c46a" />
        </linearGradient>
      </defs>

      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="rgba(38, 70, 83, 0.12)"
        strokeWidth="10"
        fill="none"
      />

      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={`url(#${gradientId})`}
        strokeWidth="10"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ transition: "stroke-dashoffset 0.6s ease" }}
      />

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="1.4em"
        fontWeight="bold"
        fill="#264653"
      >
        {percentage}%
      </text>
    </svg>
  );
}
