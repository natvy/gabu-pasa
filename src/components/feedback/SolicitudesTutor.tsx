"use client";

import Button from "@/components/ui/Button";
import ProgressCircle from "./ProgressCircle";

interface SolicitudesTutorProps {
  count: number;
  onManage?: () => void;
}

export default function SolicitudesTutor({
  count,
  onManage,
}: SolicitudesTutorProps) {
  return (
    <div className="app-card grid gap-6 p-6 md:grid-cols-2">
      <div className="flex flex-col items-start justify-center gap-3">
        <span className="app-badge">Seguimiento</span>
        <h2 className="app-title text-xl font-semibold">
          Solicitudes pendientes del alumnado
        </h2>
        <span className="text-5xl font-semibold tracking-tight text-[color:var(--primary)]">
          {count}
        </span>
        <Button onClick={onManage} className="text-sm">
          Administrar solicitudes
        </Button>
      </div>

      <div className="app-card-soft flex flex-col items-center justify-center gap-3 p-5 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--secondary)]">
          Recompensas
        </p>
        <p className="text-sm app-muted">Avance actual hacia el siguiente beneficio</p>
        <ProgressCircle value={7} max={10} />
      </div>
    </div>
  );
}
