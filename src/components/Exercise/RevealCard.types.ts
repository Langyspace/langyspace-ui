import type { ComponentPropsWithRef, ReactNode } from 'react'
export interface RevealCardProps extends ComponentPropsWithRef<'button'> {
  marker?: ReactNode
  answer: ReactNode
  revealed: boolean
}
