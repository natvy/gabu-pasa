'use client'

import { useRegister } from '@/hooks/useRegister'
import RegisterCard from '@/components/auth/RegisterCard'
import '@/app/login/login.css'
import '@/app/register/register.css'

export default function RegisterPage() {
  const {
    step,
    account,
    studentData,
    tutorData,
    loading,
    error,
    setAccount,
    setStudentData,
    setTutorData,
    handleNextStep,
    handleRegister,
  } = useRegister()

  return (
    <main className="login-page">
      <RegisterCard
        step={step}
        account={account}
        studentData={studentData}
        tutorData={tutorData}
        error={error}
        loading={loading}
        onAccountChange={setAccount}
        onStudentChange={setStudentData}
        onTutorChange={setTutorData}
        onNext={handleNextStep}
        onSubmit={handleRegister}
      />
    </main>
  )
}