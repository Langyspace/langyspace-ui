import type { ReactNode } from 'react'

export interface MaterialTeacherIdentity {
  name: string
  avatarUrl?: string
}
export interface ResolvedMaterialTeacherIdentity extends MaterialTeacherIdentity {
  /** Whether the display name comes from a real profile rather than the role fallback. */
  identified: boolean
}
export interface MaterialTeacherProviderProps {
  materialKey: string
  children: ReactNode
}
