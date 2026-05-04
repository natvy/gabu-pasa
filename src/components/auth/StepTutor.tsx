import { useState } from 'react'
import type { TutorData } from '@/hooks/useRegister'

interface StepTutorProps {
  data: TutorData
  error: string
  loading: boolean
  onChange: (data: Partial<TutorData>) => void
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

const HABILIDADES_PREDEFINIDAS = [
  "Didáctica",
  "Paciencia",
  "Comunicación",
  "Resolución de problemas",
  "Organización",
  "Empatía",
  "Creatividad",
  "Liderazgo",
  "Trabajo en equipo",
  "Pensamiento crítico",
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

export default function StepTutor({ data, error, loading, onChange, onSubmit }: StepTutorProps) {
  const [otroSkillName, setOtroSkillName] = useState('')
  const [otroSkillLevel, setOtroSkillLevel] = useState(50)

  // Habilidades seleccionadas como burbujas tienen nivel 80 por defecto
  const toggleSkill = (skillName: string) => {
    const exists = data.skills.find((s) => s.name === skillName)
    if (exists) {
      onChange({ skills: data.skills.filter((s) => s.name !== skillName) })
    } else {
      onChange({ skills: [...data.skills, { name: skillName, level: 80 }] })
    }
  }

  const selectedSkillNames = data.skills.map((s) => s.name)

  const toggleMateria = (materia: string) => {
    if (data.subjects.includes(materia)) {
      onChange({ subjects: data.subjects.filter((s) => s !== materia) })
    } else {
      onChange({ subjects: [...data.subjects, materia] })
    }
  }

  const addOtroSkill = () => {
    const t = otroSkillName.trim()
    if (!t) return
    if (data.skills.find((s) => s.name === t)) return
    onChange({ skills: [...data.skills, { name: t, level: otroSkillLevel }] })
    setOtroSkillName('')
    setOtroSkillLevel(50)
  }

  return (
    <div className="register-step">
      <div className="step-header">
        <div className="step-pill">Paso 2 de 2 — Tutor</div>
        <h2>Tu perfil de tutor</h2>
        <p>Cuéntanos sobre ti para que los estudiantes puedan encontrarte.</p>
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
            value={data.educationLevel}
            onChange={(e) => onChange({ educationLevel: e.target.value })}
          >
            <option value="">Selecciona tu nivel</option>
            <option value="Preparatoria">Preparatoria</option>
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

      {/* Descripción */}
      <div className="field-group">
        <label className="field-label">Descripción</label>
        <textarea
          className="field-input field-textarea"
          placeholder="Cuéntanos sobre tu experiencia como tutor..."
          value={data.description}
          onChange={(e) => onChange({ description: e.target.value })}
        />
      </div>

      {/* Materias — burbujas */}
      <div className="field-group">
        <label className="field-label">Materias que impartes</label>
        <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: '0.5rem' }}>
          Selecciona todas las que apliquen
        </p>
        <BubbleSelector
          options={MATERIAS}
          selected={data.subjects}
          onToggle={toggleMateria}
        />
      </div>

      {/* Habilidades — burbujas predefinidas */}
      <div className="field-group">
        <label className="field-label">Habilidades</label>
        <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: '0.5rem' }}>
          Selecciona las que mejor te describan
        </p>
        <BubbleSelector
          options={HABILIDADES_PREDEFINIDAS}
          selected={selectedSkillNames}
          onToggle={toggleSkill}
        />

        {/* Habilidades seleccionadas con nivel editable */}
        {data.skills.length > 0 && (
          <div className="skills-wrap" style={{ marginTop: '0.75rem' }}>
            {data.skills.map((s, i) => (
              <div key={i} className="skill-chip">
                <span>{s.name}</span>
                <div className="skill-bar-wrap">
                  <div className="skill-bar" style={{ width: `${s.level}%` }} />
                </div>
                <span className="skill-pct">{s.level}%</span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={s.level}
                  className="skill-slider"
                  style={{ width: 70 }}
                  onChange={(e) => {
                    const updated = data.skills.map((sk, idx) =>
                      idx === i ? { ...sk, level: Number(e.target.value) } : sk
                    )
                    onChange({ skills: updated })
                  }}
                />
                <button
                  type="button"
                  onClick={() => onChange({ skills: data.skills.filter((_, idx) => idx !== i) })}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Otros — input libre */}
        <div style={{ marginTop: '0.85rem' }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
            Otros
          </p>
          <div className="skill-input-row">
            <input
              className="field-input"
              type="text"
              placeholder="Escribe una habilidad..."
              value={otroSkillName}
              onChange={(e) => setOtroSkillName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addOtroSkill()}
            />
            <div className="skill-slider-wrap">
              <span className="skill-level-label">{otroSkillLevel}%</span>
              <input
                type="range"
                min={0}
                max={100}
                value={otroSkillLevel}
                onChange={(e) => setOtroSkillLevel(Number(e.target.value))}
                className="skill-slider"
              />
            </div>
            <button className="btn-tag-add" type="button" onClick={addOtroSkill}>+</button>
          </div>
        </div>
      </div>

      {error && <p className="login-error">{error}</p>}

      <button className="btn-primary" type="button" onClick={onSubmit} disabled={loading}>
        {loading ? 'Creando cuenta...' : 'Crear cuenta →'}
      </button>
    </div>
  )
}