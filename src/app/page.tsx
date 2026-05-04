import Link from "next/link";

const entryPoints = [
  {
    title: "Panel de estudiante",
    href: "/login?role=student",
    description:
      "Explora tutores, consulta materiales, revisa tus sesiones y califica la experiencia recibida.",
    stats: ["Busqueda de tutores", "Mensajeria", "Archivos academicos"],
  },
  {
    title: "Panel de tutor",
    href: "/login?role=tutor",
    description:
      "Gestiona estudiantes, organiza tus horarios, comparte recursos y da seguimiento a solicitudes.",
    stats: ["Dashboard", "Videollamadas", "Disponibilidad"],
  },
];

const highlights = [
  {
    title: "Aprende con alumnos cualificados",
    description:
      "Adquiere la confianza de estudiantes y tutores con perfiles detallados, valoraciones y experiencia academica clara.",
  },
  {
    title: "Comparte tu conocimiento con otros",
    description:
      "Facilita el intercambio de materiales, recursos y feedback entre estudiantes y tutores para potenciar el aprendizaje colaborativo.",
  },
  {
    title: "Refuerza tu conocimiento o optimizalo por medio de nosotros",
    description:
      "Ya seas estudiante buscando apoyo o tutor ofreciendo tu experiencia, nuestra plataforma conecta a ambos para potenciar el aprendizaje y crecimiento academico de manera clara y cercana.",
  },
];

export default function Page() {
  return (
    <main className="app-shell px-4 py-6 md:px-8 md:py-8 xl:px-12">
      <div className="mx-auto max-w-6xl space-y-6">
        <section className="app-card-accent overflow-hidden p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr] lg:items-end">
            <div className="space-y-5">
              <span className="inline-flex rounded-full bg-white/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                Plataforma de tutorias
              </span>

              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
                  Gabu Pasa conecta estudiantes y tutores en una experiencia academica mas clara y cercana.
                </h1>

                <p className="max-w-2xl text-sm leading-7 text-white/80 md:text-base">
                  Esta demo presenta una interfaz para explorar tutores, organizar sesiones,
                  compartir materiales y mantener seguimiento del progreso academico desde ambos lados.
                </p>
              </div>
            </div>

            <div className="app-card border-none bg-white/10 p-6 text-white shadow-none">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                Que muestra esta demo
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/85">
                <li>Dashboards con indicadores y actividad reciente.</li>
                <li>Busqueda, filtros y gestion de perfiles academicos.</li>
                <li>Mensajeria, calendario, archivos y evaluaciones.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          {entryPoints.map((entry) => (
            <Link
              key={entry.href}
              href={entry.href}
              className="app-card group p-6 transition duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-3">
                  <span className="app-badge">{entry.title}</span>
                  <h2 className="app-title text-2xl font-semibold">{entry.title}</h2>
                  <p className="max-w-xl text-sm leading-7 app-muted">
                    {entry.description}
                  </p>
                </div>

                <div className="rounded-full bg-[color:var(--surface-accent)] px-4 py-2 text-sm font-semibold text-[color:var(--secondary)] transition group-hover:bg-[color:var(--secondary-soft)]">
                  Entrar
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {entry.stats.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[color:var(--border)] bg-white/80 px-3 py-1 text-xs font-medium text-[color:var(--primary)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="app-card-soft p-6">
              <h3 className="app-title text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 app-muted">{item.description}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
