import ProgressCircle from "@/components/feedback/ProgressCircle";

const stats = [
  {
    label: "Tutorias completadas",
    value: "12",
    tone: "app-card-accent",
    valueClass: "text-white",
    labelClass: "text-white/75",
  },
  {
    label: "Tutorias pendientes",
    value: "3",
    tone: "app-card-soft",
    valueClass: "text-[color:var(--secondary)]",
    labelClass: "app-muted",
  },
];

export default function StatsSection() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {stats.map((stat) => (
        <article key={stat.label} className={`${stat.tone} p-6`}>
          <h3 className={`text-sm font-semibold ${stat.labelClass}`}>{stat.label}</h3>
          <p className={`mt-4 text-5xl font-semibold tracking-tight ${stat.valueClass}`}>
            {stat.value}
          </p>
        </article>
      ))}

      <article className="app-card flex flex-col items-center justify-center gap-3 p-6">
        <h3 className="text-sm font-semibold app-muted">Progreso academico</h3>
        <ProgressCircle value={70} max={100} />
      </article>
    </section>
  );
}
