import type { ComponentPropsWithRef, ReactNode } from 'react'
export interface RevealCardProps extends ComponentPropsWithRef<'button'> {
  marker?: ReactNode
  answer: ReactNode
  revealed: boolean
  /** Prompt mode reveals support below the question without an extra button. */
  presentation?: 'card' | 'prompt'
}
