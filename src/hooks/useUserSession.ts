// src/hooks/useUserSession.ts
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export interface UserProfile {
  id: string
  correo: string
  telefono: string
  semestre: string
  carrera: string
  role: 'student' | 'tutor'
  display_name?: string
  avatar_url?: string
}

export function useUserSession() {
  const router = useRouter()
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function loadProfile() {
      const { data: { user } } = await supabase.auth.getUser()
      if (cancelled || !user) { setLoading(false); return }

      const { data } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()

      if (!cancelled) {
        setProfile(data ?? null)
        setLoading(false)
      }
    }

    loadProfile()
    return () => { cancelled = true }
  }, [])

  async function refetch() {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single()

    setProfile(data ?? null)
  }

  const signOut = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  const deleteAccount = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    await supabase.from('tutor_skills').delete().eq('tutor_id', user.id)
    await supabase.from('tutors').delete().eq('id', user.id)
    await supabase.from('students').delete().eq('id', user.id)
    await supabase.from('profiles').delete().eq('id', user.id)

    await supabase.auth.signOut()
    router.push('/login')
  }

  const switchRole = async (newRole: 'student' | 'tutor') => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user || !profile) return

    const { error } = await supabase
      .from('profiles')
      .update({ role: newRole })
      .eq('id', user.id)

    if (!error) {
      setProfile({ ...profile, role: newRole })
      router.push(newRole === 'student' ? '/home_student' : '/home')
    }
  }

  return { profile, loading, signOut, deleteAccount, switchRole, refetch }
}