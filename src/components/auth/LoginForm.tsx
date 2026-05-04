'use client'

interface LoginFormProps {
  email: string
  password: string
  loading: boolean
  error: string
  onEmailChange: (v: string) => void
  onPasswordChange: (v: string) => void
  onSubmit: () => void
}

export default function LoginForm({
  email, password, loading, error,
  onEmailChange, onPasswordChange, onSubmit,
}: LoginFormProps) {
  return (
    <div className="login-form-fields">
      <div className="field-group">
        <label className="field-label">Correo electrónico</label>
        <input
          className="field-input"
          type="email"
          placeholder="correo@ejemplo.com"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          suppressHydrationWarning
        />
      </div>

      <div className="field-group">
        <label className="field-label">Contraseña</label>
        <input
          className="field-input"
          type="password"
          placeholder="Ingresa tu contraseña"
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
          suppressHydrationWarning
        />
      </div>

      <span className="forgot-link">¿Olvidaste tu contraseña?</span>

      {error && <p className="login-error">{error}</p>}

      <button
        className="btn-primary"
        onClick={onSubmit}
        disabled={loading}
        type="button"
        suppressHydrationWarning
      >
        {loading ? 'Ingresando...' : 'Ingresar →'}

      </button>
    </div>
  )
}