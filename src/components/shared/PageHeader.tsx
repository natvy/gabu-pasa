interface Props {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <section className="app-card-accent p-6 md:p-8">
      <div className="relative z-10 space-y-4">
        <span
          className="inline-flex rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]"
          style={{
            background: "var(--hero-badge-bg)",
            borderColor: "var(--hero-badge-border)",
            color: "var(--hero-badge-text)",
          }}
        >
          Experiencia academica
        </span>

        <h1
          className="text-3xl font-semibold md:text-4xl"
          style={{ color: "var(--hero-text)" }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="max-w-3xl text-sm leading-7 md:text-base"
            style={{ color: "var(--hero-muted)" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
