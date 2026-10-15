import type { ComponentPropsWithRef, ReactNode } from 'react'
import type { FlashcardGrade } from '../FlashcardRatingButton/types'

export interface FlashcardFeedbackProps extends ComponentPropsWithRef<'div'> {
  grade: FlashcardGrade
  mark: ReactNode
  next?: ReactNode
}
