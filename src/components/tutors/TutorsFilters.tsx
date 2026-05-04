import FilterPanel from "@/components/filters/FilterPanel";
import Input from "@/components/ui/Input";

interface Props {
  subjects: string[];
  query: string;
  setQuery: (value: string) => void;
  setSelectedSubject: (value: string) => void;
}

export default function TutorsFilters({
  subjects,
  query,
  setQuery,
  setSelectedSubject,
}: Props) {
  const subjectFilter = {
    title: "Materias",
    options: subjects.map((subject) => ({
      label: subject,
      value: subject,
    })),
  };

  return (
    <section className="app-card-soft p-4 md:p-5">
      <div className="space-y-4 text-[color:var(--foreground)]">
        <FilterPanel
          filters={[subjectFilter]}
          onChange={(_, value) => setSelectedSubject(value)}
        />

        <Input
          type="search"
          placeholder="Buscar por nombre o materia..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </section>
  );
}
