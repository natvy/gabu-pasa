'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import type { Role } from '@/hooks/useAuth'

export interface AccountData {
  email: string
  password: string
  role: Role
}

export interface StudentData {
  name: string
  level: string
  needs: string[]
  interests: string[]
  telefono: string
  semestre: string
  carrera: string
}

export interface TutorData {
  name: string
  description: string
  subjects: string[]
  educationLevel: string
  skills: { name: string; level: number }[]
  telefono: string
  semestre: string
  carrera: string
}

interface UseRegisterReturn {
  step: 1 | 2
  account: AccountData
  studentData: StudentData
  tutorData: TutorData
  loading: boolean
  error: string
  setAccount: (data: Partial<AccountData>) => void
  setStudentData: (data: Partial<StudentData>) => void
  setTutorData: (data: Partial<TutorData>) => void
  handleNextStep: () => void
  handleRegister: () => Promise<void>
}

const defaultAccount: AccountData = { email: '', password: '', role: 'student' }

const defaultStudent: StudentData = {
  name: '', level: '', needs: [], interests: [],
  telefono: '', semestre: '', carrera: '',
}

const defaultTutor: TutorData = {
  name: '', description: '', subjects: [], educationLevel: '',
  skills: [], telefono: '', semestre: '', carrera: '',
}

export function useRegister(): UseRegisterReturn {
  const router = useRouter()
  const [step, setStep] = useState<1 | 2>(1)
  const [account, setAccountState] = useState<AccountData>(defaultAccount)
  const [studentData, setStudentState] = useState<StudentData>(defaultStudent)
  const [tutorData, setTutorState] = useState<TutorData>(defaultTutor)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const setAccount = (data: Partial<AccountData>) =>
    setAccountState((prev) => ({ ...prev, ...data }))

  const setStudentData = (data: Partial<StudentData>) =>
    setStudentState((prev) => ({ ...prev, ...data }))

  const setTutorData = (data: Partial<TutorData>) =>
    setTutorState((prev) => ({ ...prev, ...data }))

  const handleNextStep = () => {
    if (!account.email || !account.password) {
      setError('Completa el correo y la contraseña.')
      return
    }
    if (account.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.')
      return
    }
    setError('')
    setStep(2)
  }

  const handleRegister = async () => {
  setError('')
  setLoading(true)

  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: account.email,
    password: account.password,
    options: {
      // Guardamos el rol y los datos en metadata para usarlos después
      data: {
        role: account.role,
        pendingProfile: account.role === 'student'
          ? { ...studentData }
          : { ...tutorData },
      },
    },
  })

  setLoading(false)

  if (authError || !authData.user) {
    setError(authError?.message ?? 'Error al crear la cuenta.')
    return
  }

  // Avisamos que debe verificar su correo
  router.push('/register/verify')
}

  return {
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
  }
}