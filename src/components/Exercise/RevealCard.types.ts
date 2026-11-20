import type { ComponentPropsWithRef, ReactNode } from 'react'
export interface RevealCardProps extends ComponentPropsWithRef<'button'> {
  marker?: ReactNode
  answer: ReactNode
  revealed: boolean
  /** Prompt mode reveals support below the question without an extra button. */
  presentation?: 'card' | 'prompt'
  /** Minimum space for a short model when the selected prompt can change. Never clips longer text. */
  answerMinLines?: number
}
