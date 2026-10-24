import type { ReactNode } from 'react'

export interface AuthBrandContentProps {
  logo: ReactNode
  title: ReactNode
  highlight?: ReactNode
  description: ReactNode
  features: readonly ReactNode[]
  footer?: ReactNode
}
