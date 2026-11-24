import type { ReactNode } from 'react'

export interface MaterialTeacherIdentity {
  name: string
  avatarUrl?: string
}
export interface MaterialTeacherProviderProps {
  materialKey: string
  children: ReactNode
}
