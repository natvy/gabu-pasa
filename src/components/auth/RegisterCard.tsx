import type { AccountData, StudentData, TutorData } from '@/hooks/useRegister'
import StepAccount from './StepAccount'
import StepStudent from './StepStudent'
import StepTutor from './StepTutor'

interface RegisterCardProps {
  step: 1 | 2
  account: AccountData
  studentData: StudentData
  tutorData: TutorData
  error: string
  loading: boolean
  onAccountChange: (data: Partial<AccountData>) => void
  onStudentChange: (data: Partial<StudentData>) => void
  onTutorChange: (data: Partial<TutorData>) => void
  onNext: () => void
  onSubmit: () => void
}

export default function RegisterCard({
  step, account, studentData, tutorData,
  error, loading,
  onAccountChange, onStudentChange, onTutorChange,
  onNext, onSubmit,
}: RegisterCardProps) {
  return (
    <div className="login-wrap register-wrap">

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
          <div className="hero-badge">Únete hoy</div>
          <h1 className="hero-title">Empieza tu experiencia académica.</h1>
          <p className="hero-sub">
            Crea tu cuenta en segundos y accede a tutores, sesiones y recursos desde el primer día.
          </p>
        </div>

        {/* Indicador de pasos */}
        <div className="step-indicators">
          <div className={`step-dot ${step >= 1 ? 'active' : ''}`}>
            <span>1</span>
            <p>Cuenta</p>
          </div>
          <div className="step-line" />
          <div className={`step-dot ${step >= 2 ? 'active' : ''}`}>
            <span>2</span>
            <p>Perfil</p>
          </div>
        </div>
      </div>

      {/* Panel derecho — Formulario por paso */}
      <div className="login-form-side register-form-side">
        {step === 1 && (
          <StepAccount
            data={account}
            error={error}
            onChange={onAccountChange}
            onNext={onNext}
          />
        )}
        {step === 2 && account.role === 'student' && (
          <StepStudent
            data={studentData}
            error={error}
            loading={loading}
            onChange={onStudentChange}
            onSubmit={onSubmit}
          />
        )}
        {step === 2 && account.role === 'tutor' && (
          <StepTutor
            data={tutorData}
            error={error}
            loading={loading}
            onChange={onTutorChange}
            onSubmit={onSubmit}
          />
        )}
      </div>

    </div>
  )
}