import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface QuizQuestionProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode
  density?: 'regular' | 'compact'
  tone?: 'default' | 'material'
}
