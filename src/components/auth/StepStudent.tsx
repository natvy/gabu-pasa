import type { StudentData } from '@/hooks/useRegister'

interface StepStudentProps {
  data: StudentData
  error: string
  loading: boolean
  onChange: (data: Partial<StudentData>) => void
  onSubmit: () => void
}

const CARRERAS = [
  "Ingeniería en Software",
  "Ingeniería en Sistemas Computacionales",
  "Ingeniería Mecatrónica",
  "Ingeniería Industrial",
  "Ingeniería Civil",
  "Ingeniería Química",
  "Ingeniería Eléctrica",
  "Administración de Empresas",
  "Contaduría Pública",
  "Psicología",
  "Medicina",
  "Derecho",
  "Arquitectura",
  "Diseño Gráfico",
  "Comunicación",
]

const SEMESTRES = Array.from({ length: 12 }, (_, i) => `${i + 1}`)

const MATERIAS = [
  "Cálculo",
  "Álgebra",
  "Bases de datos",
  "Programación Orientada a Objetos",
  "Física",
  "Matemáticas aplicadas",
  "Química",
  "Programación",
  "Desarrollo de software",
  "Biología",
]

const INTERESES = [
  "Matemáticas",
  "Ciencia",
  "Tecnología",
  "Programación",
  "Física",
  "Química",
  "Biología",
  "Administración",
  "Diseño",
  "Comunicación",
  "Investigación",
  "Arte",
]

function BubbleSelector({
  options,
  selected,
  onToggle,
}: {
  options: string[]
  selected: string[]
  onToggle: (value: string) => void
}) {
  return (
    <div className="tags-wrap">
      {options.map((option) => {
        const isSelected = selected.includes(option)
        return (
          <button
            key={option}
            type="button"
            onClick={() => onToggle(option)}
            className={`tag transition-all ${
              isSelected
                ? 'bg-[color:var(--accent)] text-white border-[color:var(--accent)]'
                : 'bg-[color:var(--surface-accent)] text-[color:var(--accent)] border-[rgba(91,142,125,0.2)] hover:bg-[color:var(--accent-soft)]'
            }`}
            style={{ cursor: 'pointer', userSelect: 'none' }}
          >
            {isSelected && <span style={{ fontSize: 11 }}>✓ </span>}
            {option}
          </button>
        )
      })}
    </div>
  )
}

export default function StepStudent({ data, error, loading, onChange, onSubmit }: StepStudentProps) {
  const toggleItem = (field: 'needs' | 'interests', value: string) => {
    const current = data[field]
    if (current.includes(value)) {
      onChange({ [field]: current.filter((v) => v !== value) })
    } else {
      onChange({ [field]: [...current, value] })
    }
  }

  return (
    <div className="register-step">
      <div className="step-header">
        <div className="step-pill">Paso 2 de 2 — Estudiante</div>
        <h2>Tu perfil académico</h2>
        <p>Esta información nos ayuda a conectarte con los tutores ideales.</p>
      </div>

      {/* Nombre */}
      <div className="field-group">
        <label className="field-label">Nombre completo</label>
        <input
          className="field-input"
          type="text"
          placeholder="Tu nombre"
          value={data.name}
          onChange={(e) => onChange({ name: e.target.value })}
        />
      </div>

      <div className="fields-grid">
        {/* Carrera */}
        <div className="field-group">
          <label className="field-label">Carrera</label>
          <select
            className="field-input"
            value={data.carrera}
            onChange={(e) => onChange({ carrera: e.target.value })}
          >
            <option value="">Selecciona tu carrera</option>
            {CARRERAS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Semestre */}
        <div className="field-group">
          <label className="field-label">Semestre</label>
          <select
            className="field-input"
            value={data.semestre}
            onChange={(e) => onChange({ semestre: e.target.value })}
          >
            <option value="">Selecciona tu semestre</option>
            {SEMESTRES.map((s) => (
              <option key={s} value={s}>{s}° semestre</option>
            ))}
          </select>
        </div>

        {/* Nivel educativo */}
        <div className="field-group">
          <label className="field-label">Nivel educativo</label>
          <select
            className="field-input"
            value={data.level}
            onChange={(e) => onChange({ level: e.target.value })}
          >
            <option value="">Selecciona tu nivel</option>
            <option value="Licenciatura">Licenciatura</option>
            <option value="Maestría">Maestría</option>
            <option value="Doctorado">Doctorado</option>
          </select>
        </div>

        {/* Teléfono */}
        <div className="field-group">
          <label className="field-label">Teléfono</label>
          <input
            className="field-input"
            type="tel"
            placeholder="Ej: 6621234567"
            value={data.telefono}
            onChange={(e) => onChange({ telefono: e.target.value })}
          />
        </div>
      </div>

      {/* Materias donde necesita apoyo */}
      <div className="field-group">
        <label className="field-label">¿En qué materias necesitas apoyo?</label>
        <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: '0.5rem' }}>
          Selecciona todas las que apliquen
        </p>
        <BubbleSelector
          options={MATERIAS}
          selected={data.needs}
          onToggle={(v) => toggleItem('needs', v)}
        />
      </div>

      {/* Intereses */}
      <div className="field-group">
        <label className="field-label">Tus intereses</label>
        <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: '0.5rem' }}>
          Selecciona todas las que apliquen
        </p>
        <BubbleSelector
          options={INTERESES}
          selected={data.interests}
          onToggle={(v) => toggleItem('interests', v)}
        />
      </div>

      {error && <p className="login-error">{error}</p>}

      <button className="btn-primary" type="button" onClick={onSubmit} disabled={loading}>
        {loading ? 'Creando cuenta...' : 'Crear cuenta →'}
      </button>
    </div>
  )
}