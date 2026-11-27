import type { ReactNode } from 'react'
export interface MaterialLearnerIdentity {
  firstName: string
  avatarUrl: string
}
export interface MaterialLearnerProviderProps {
  materialKey: string
  children: ReactNode
}
