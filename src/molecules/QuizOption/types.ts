import type { ComponentPropsWithRef, ReactNode } from 'react'

export type QuizOptionState = 'default' | 'correct' | 'wrong' | 'dim'

export type QuizOptionProps = ComponentPropsWithRef<'button'> & {
  letter: ReactNode
  state?: QuizOptionState
}
