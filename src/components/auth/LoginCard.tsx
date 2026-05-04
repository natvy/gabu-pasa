import type { Role } from '@/hooks/useAuth'
import RoleTabs from './RoleTabs'
import LoginForm from './LoginForm'
import GoogleButton from './GoogleButton'

interface LoginCardProps {
  email: string
  password: string
  role: Role
  loading: boolean
  error: string
  onEmailChange: (v: string) => void
  onPasswordChange: (v: string) => void
  onRoleChange: (role: Role) => void
  onSubmit: () => void
  onGoogle: () => void
}

export default function LoginCard({
  email,
  password,
  role,
  loading,
  error,
  onEmailChange,
  onPasswordChange,
  onRoleChange,
  onSubmit,
  onGoogle,
}: LoginCardProps) {
  return (
    <div className="login-wrap">

      {/* Panel izquierdo — Hero visual */}
      <div className="login-hero">
        <div className="login-hero-grid" aria-hidden="true" />

        <div className="hero-logo">
          <div className="hero-logo-badge">GP</div>
          <div className="hero-logo-text">
            <span className="hero-logo-platform">Plataforma</span>
            <span className="hero-logo-name">Gabu Pasa</span>
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-badge">Experiencia Académica</div>
          <h1 className="hero-title">Tu aprendizaje,<br />a otro nivel.</h1>
          <p className="hero-sub">
            Conecta con tutores, gestiona tus sesiones y avanza en tus estudios.
          </p>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <strong>+0</strong>
            <span>Tutores activos</span>
          </div>
          <div className="hero-stat">
            <strong>0%</strong>
            <span>Satisfacción</span>
          </div>
          <div className="hero-stat">
            <strong>0+</strong>
            <span>Sesiones</span>
          </div>
        </div>
      </div>

      {/* Panel derecho — Formulario */}
      <div className="login-form-side">
        <div className="form-header">
          <h2>Iniciar sesión</h2>
          <p>Bienvenido de vuelta. ¿Cómo ingresas hoy?</p>
        </div>

        <RoleTabs role={role} onChange={onRoleChange} />

        <LoginForm
          email={email}
          password={password}
          loading={loading}
          error={error}
          onEmailChange={onEmailChange}
          onPasswordChange={onPasswordChange}
          onSubmit={onSubmit}
        />

        <div className="login-divider">
          <span>O continúa con</span>
        </div>

        <GoogleButton onClick={onGoogle} />

        <p className="form-footer">
          ¿No tienes cuenta? <a href="/register">Regístrate aquí</a>
        </p>
      </div>

    </div>
  )
}