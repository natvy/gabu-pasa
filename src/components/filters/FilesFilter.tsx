"use client";

type Props = {
  selectedTutor: string;
  selectedType: string;
  setSelectedTutor: (value: string) => void;
  setSelectedType: (value: string) => void;
  tutors: { id: string; name: string }[];
};

export default function FilesFilters({
  selectedTutor,
  selectedType,
  setSelectedTutor,
  setSelectedType,
  tutors,
}: Props) {
  return (
    <section className="app-card-soft p-4">
      <div className="grid gap-4 md:grid-cols-2">
        <select
          className="w-full rounded-2xl border border-[color:var(--border)] bg-white/85 p-3 text-sm text-[color:var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[color:var(--primary-soft)]"
          value={selectedTutor}
          onChange={(e) => setSelectedTutor(e.target.value)}
        >
          <option value="">Todos los tutores</option>
          {tutors.map((tutor) => (
            <option key={tutor.id} value={tutor.id}>
              {tutor.name}
            </option>
          ))}
        </select>

        <select
          className="w-full rounded-2xl border border-[color:var(--border)] bg-white/85 p-3 text-sm text-[color:var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[color:var(--primary-soft)]"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">Todos los tipos</option>
          <option value="pdf">PDF</option>
          <option value="doc">Word</option>
          <option value="xls">Excel</option>
        </select>
      </div>
    </section>
  );
}
