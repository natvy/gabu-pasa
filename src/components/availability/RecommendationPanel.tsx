"use client";

export default function RecommendationPanel() {
  return (
    <div className="app-card-soft h-full space-y-6 p-6">
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <div className="flex h-28 w-28 items-center justify-center rounded-full border-[10px] border-[color:var(--primary)]">
          <div className="h-16 w-4 rounded bg-[color:var(--secondary)]" />
        </div>

        <p className="text-sm app-muted">
          Selecciona las horas que veas recomendables.
        </p>
      </div>

      <div className="space-y-3">
        <Legend label="Matutino" color="bg-[color:var(--primary)]" />
        <Legend label="Vespertino" color="bg-[color:var(--secondary)]" />
        <Legend label="Cualquier hora" color="bg-[color:var(--accent)]" />
      </div>
    </div>
  );
}

function Legend({ label, color }: { label: string; color: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="w-28 text-sm app-muted sm:text-right">{label}</span>
      <div className={`h-4 flex-1 rounded-lg ${color}`} />
    </div>
  );
}
