import type { ReactNode } from 'react'

export interface AuthFrameProps {
  children: ReactNode
  brand: ReactNode
  brandLabel: string
  mobileLogo: ReactNode
  formAriaLabel: string
  topAction: ReactNode
  footer?: ReactNode
}
