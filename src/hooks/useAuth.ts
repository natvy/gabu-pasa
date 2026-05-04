'use client'
 
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
 
export type Role = 'student' | 'tutor'
 
interface UseAuthReturn {
  email: string
  password: string
  role: Role
  loading: boolean
  error: string
  setEmail: (v: string) => void
  setPassword: (v: string) => void
  setRole: (v: Role) => void
  handleLogin: () => Promise<void>
  handleGoogle: () => Promise<void>
}
 
export function useAuth(initialRole: Role = 'student'): UseAuthReturn {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState<Role>(initialRole)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
 
  const checkAndRedirect = async (userId: string, fallbackRole: Role) => {
  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', userId)
    .single()

  if (!profile) {
    // No tiene perfil → a completar registro
    router.push(`/register/complete?role=${fallbackRole}`)
    return
  }

  router.push(profile.role === 'student' ? '/home_student' : '/home')
}

const handleLogin = async () => {
  setError('')
  setLoading(true)
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  setLoading(false)
  if (error) { setError('Correo o contraseña incorrectos.'); return }
  await checkAndRedirect(data.user.id, role)
}

const handleGoogle = async () => {
  setError('')
  await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  })
}
 
  return {
    email,
    password,
    role,
    loading,
    error,
    setEmail,
    setPassword,
    setRole,
    handleLogin,
    handleGoogle,
  }
}