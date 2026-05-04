import type { AccountData } from '@/hooks/useRegister'
import type { Role } from '@/hooks/useAuth'

interface StepAccountProps {
  data: AccountData
  error: string
  onChange: (data: Partial<AccountData>) => void
  onNext: () => void
}

export default function StepAccount({ data, error, onChange, onNext }: StepAccountProps) {
  return (
    <div className="register-step">
      <div className="step-header">
        <div className="step-pill">Paso 1 de 2</div>
        <h2>Crea tu cuenta</h2>
        <p>Primero dinos cómo vas a usar Gabu Pasa.</p>
      </div>

      {/* Rol */}
      <div className="role-tabs">
        {(['student', 'tutor'] as Role[]).map((r) => (
          <button
            key={r}
            type="button"
            className={`role-tab ${data.role === r ? 'active' : ''}`}
            onClick={() => onChange({ role: r })}
          >
            {r === 'student' ? 'Estudiante' : 'Tutor'}
          </button>
        ))}
      </div>

      {/* Email */}
      <div className="field-group">
        <label className="field-label">Correo electrónico</label>
        <input
          className="field-input"
          type="email"
          placeholder="correo@ejemplo.com"
          value={data.email}
          onChange={(e) => onChange({ email: e.target.value })}
        />
      </div>

      {/* Password */}
      <div className="field-group">
        <label className="field-label">Contraseña</label>
        <input
          className="field-input"
          type="password"
          placeholder="Mínimo 6 caracteres"
          value={data.password}
          onChange={(e) => onChange({ password: e.target.value })}
        />
      </div>

      {error && <p className="login-error">{error}</p>}

      <button className="btn-primary" type="button" onClick={onNext}>
        Continuar →
      </button>

      <p className="form-footer">
        ¿Ya tienes cuenta? <a href="/login">Inicia sesión</a>
      </p>
    </div>
  )
}