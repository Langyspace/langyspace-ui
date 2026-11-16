import type { ComponentPropsWithRef, ReactNode } from 'react'

export type QuizOptionState = 'default' | 'correct' | 'wrong' | 'dim'

export type QuizOptionProps = ComponentPropsWithRef<'button'> & {
  letter: ReactNode
  state?: QuizOptionState
  /** Compact choices for a slide panel; existing practice density is the default. */
  density?: 'regular' | 'compact'
}
