'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import type { StudentData, TutorData } from '@/hooks/useRegister'

const defaultStudent: StudentData = {
  name: '', level: '', needs: [], interests: [],
  telefono: '', semestre: '', carrera: '',
}

const defaultTutor: TutorData = {
  name: '', description: '', subjects: [], educationLevel: '',
  skills: [], telefono: '', semestre: '', carrera: '',
}

export function useCompleteProfile(role: 'student' | 'tutor') {
  const router = useRouter()
  const [studentData, setStudentState] = useState<StudentData>(defaultStudent)
  const [tutorData, setTutorState] = useState<TutorData>(defaultTutor)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const setStudentData = (data: Partial<StudentData>) =>
    setStudentState((prev) => ({ ...prev, ...data }))

  const setTutorData = (data: Partial<TutorData>) =>
    setTutorState((prev) => ({ ...prev, ...data }))

  const handleSubmit = async () => {
    setError('')
    setLoading(true)

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { setError('Sesión no encontrada.'); setLoading(false); return }

    const d = role === 'student' ? studentData : tutorData

    // Guardar perfil base
    const { error: profileError } = await supabase.from('profiles').insert({
      id: user.id,
      correo: user.email,
      telefono: d.telefono,
      semestre: d.semestre,
      carrera: d.carrera,
      role,
    })
    if (profileError) { setError('Error al guardar el perfil.'); setLoading(false); return }

    if (role === 'student') {
      await supabase.from('students').insert({
        id: user.id,
        name: studentData.name,
        level: studentData.level,
        needs: studentData.needs,
        interests: studentData.interests,
      })
    } else {
      await supabase.from('tutors').insert({
        id: user.id,
        name: tutorData.name,
        description: tutorData.description,
        subjects: tutorData.subjects,
        education_level: tutorData.educationLevel,
      })
      if (tutorData.skills.length > 0) {
        await supabase.from('tutor_skills').insert(
          tutorData.skills.map((s) => ({ tutor_id: user.id, name: s.name, level: s.level }))
        )
      }
    }

    setLoading(false)
    router.push(role === 'student' ? '/home_student' : '/home')
  }

  return { studentData, tutorData, loading, error,
    setStudentData, setTutorData, handleSubmit }
}