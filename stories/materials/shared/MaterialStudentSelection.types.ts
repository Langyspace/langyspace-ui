import type { ReactNode } from 'react'

export interface MaterialStudentOption {
  id: string
  name: string
  avatarUrl?: string
}
export interface MaterialStudentSelection {
  options: MaterialStudentOption[]
  selectedId: string | null
  status: string
  select: (id: string | null) => void
}
export interface MaterialStudentSelectionProviderProps {
  materialKey: string
  children: ReactNode
}
