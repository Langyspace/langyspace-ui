import type { ComponentPropsWithRef } from 'react'

export type QuizFeedbackProps = ComponentPropsWithRef<'div'> & {
  tone: 'correct' | 'wrong'
}
