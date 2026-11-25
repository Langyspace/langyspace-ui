import type { ComponentPropsWithRef, ReactNode } from 'react'
export type RevealGuidanceLevel = 'cue' | 'hint' | 'full'
export interface RevealGuidance {
  level: RevealGuidanceLevel
  hint: ReactNode
  onChange: (level: RevealGuidanceLevel) => void
  labels?: { hint?: string; answer?: string; hide?: string }
}
export interface RevealCardProps extends ComponentPropsWithRef<'button'> {
  marker?: ReactNode
  answer: ReactNode
  revealed: boolean
  /** Prompt mode reveals support below the question without an extra button. */
  presentation?: 'card' | 'prompt'
  /** Minimum space for a short model when the selected prompt can change. Never clips longer text. */
  answerMinLines?: number
  /** Optional explicit Hint → Answer → Hide control beneath the prompt. */
  guidance?: RevealGuidance
  /** External guidance uses the question for answer checks and a parent control for hints. */
  guidanceControl?: 'inline' | 'external'
}
