'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { useCompleteProfile } from '@/hooks/useCompleteProfile'
import StepStudent from '@/components/auth/StepStudent'
import StepTutor from '@/components/auth/StepTutor'
import '@/app/login/login.css'
import '@/app/register/register.css'

function CompleteContent() {
  const searchParams = useSearchParams()
  const role = (searchParams.get('role') as 'student' | 'tutor') ?? 'student'

  const { studentData, tutorData, loading, error,
    setStudentData, setTutorData, handleSubmit } = useCompleteProfile(role)

  return (
    <main className="login-page">
      <div className="login-wrap register-wrap">

        {/* Panel izquierdo — Hero */}
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
            <div className="hero-badge">Último paso</div>
            <h1 className="hero-title">
              Completa tu perfil para continuar.
            </h1>
            <p className="hero-sub">
              {role === 'student'
                ? 'Cuéntanos sobre ti para conectarte con los tutores ideales.'
                : 'Comparte tu experiencia para que los estudiantes puedan encontrarte.'}
            </p>
          </div>

          {/* Indicador de paso */}
          <div className="step-indicators">
            <div className="step-dot active">
              <span>✓</span>
              <p>Cuenta</p>
            </div>
            <div className="step-line" />
            <div className="step-dot active">
              <span>2</span>
              <p>Perfil</p>
            </div>
          </div>
        </div>

        {/* Panel derecho — Formulario */}
        <div className="login-form-side register-form-side">
          {role === 'student' ? (
            <StepStudent
              data={studentData}
              error={error}
              loading={loading}
              onChange={setStudentData}
              onSubmit={handleSubmit}
            />
          ) : (
            <StepTutor
              data={tutorData}
              error={error}
              loading={loading}
              onChange={setTutorData}
              onSubmit={handleSubmit}
            />
          )}
        </div>

      </div>
    </main>
  )
}

export default function CompletePage() {
  return <Suspense><CompleteContent /></Suspense>
}