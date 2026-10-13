import type { ComponentPropsWithRef, ReactNode } from 'react'
export type FlashcardGrade = 'again' | 'hard' | 'good' | 'easy'
export type FlashcardRatingButtonProps = ComponentPropsWithRef<'button'> & {
  grade: FlashcardGrade
  selected?: boolean
  interval: ReactNode
}
