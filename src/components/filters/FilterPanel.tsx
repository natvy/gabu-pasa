interface FilterOption {
  label: string;
  value: string;
}

interface FilterPanelProps {
  filters: {
    title: string;
    options: FilterOption[];
  }[];
  onChange: (filterKey: string, value: string) => void;
}

export default function FilterPanel({ filters, onChange }: FilterPanelProps) {
  return (
    <div className="flex flex-col gap-4">
      {filters.map((filter) => (
        <div key={filter.title} className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[color:var(--primary)]">
            {filter.title}
          </label>

          <select
            onChange={(e) => onChange(filter.title, e.target.value)}
            className="app-field"
          >
            <option value="">Selecciona una opcion</option>

            {filter.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}
