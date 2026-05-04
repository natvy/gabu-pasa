'use client'

import type { Role } from '@/hooks/useAuth'

interface RoleTabsProps {
  role: Role
  onChange: (role: Role) => void
}

export default function RoleTabs({ role, onChange }: RoleTabsProps) {
  return (
    <div className="role-tabs" suppressHydrationWarning>
      <button
        className={`role-tab ${role === 'student' ? 'active' : ''}`}
        onClick={() => onChange('student')}
        type="button"
        suppressHydrationWarning
      >
        Estudiante
      </button>
      <button
        className={`role-tab ${role === 'tutor' ? 'active' : ''}`}
        onClick={() => onChange('tutor')}
        type="button"
        suppressHydrationWarning
      >
        Tutor
      </button>
    </div>
  )
}