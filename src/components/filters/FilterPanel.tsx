// src/components/filters/FilterPanel.tsx
// Este es un componente de panel de filtros reutilizable.
// Acepta una lista de filtros, cada uno con un título y opciones,
// y una función onChange para manejar cambios en los filtros.

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

// Este componente muestra un panel de filtros con un título para cada filtro
// y un menú desplegable para seleccionar una opción. Cuando se selecciona
// una opción, se llama a la función onChange con el título del filtro
// y el valor seleccionado.
export default function FilterPanel({ filters, onChange }: FilterPanelProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {filters.map((filter) => (
        <div key={filter.title} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <span style={{ fontWeight: "bold" }}>{filter.title}</span>
          <select onChange={(e) => onChange(filter.title, e.target.value)} style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}>
            <option value="">Selecciona una opción</option>
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