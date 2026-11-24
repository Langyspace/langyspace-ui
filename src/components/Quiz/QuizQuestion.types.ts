import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface QuizQuestionProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode
  /** Evidence for a standalone comprehension/decision question, separate from its prompt. */
  context?: ReactNode
  /** Consumer-owned narration or another accessible question action. */
  action?: ReactNode
  density?: 'regular' | 'compact'
  tone?: 'default' | 'material'
}
