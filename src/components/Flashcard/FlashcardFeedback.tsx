import * as Styled from './FlashcardFeedback.styles'

import type { ComponentPropsWithRef, ReactNode } from 'react'
import type { FlashcardGrade } from './FlashcardRatingButton'

export interface FlashcardFeedbackProps extends ComponentPropsWithRef<'div'> {
  grade: FlashcardGrade
  mark: ReactNode
  next?: ReactNode
}

export function FlashcardFeedback({
  grade,
  mark,
  children,
  next,
  ...props
}: FlashcardFeedbackProps) {
  return (
    <Styled.Root {...props}>
      <Styled.Mark $grade={grade} aria-hidden="true">
        {mark}
      </Styled.Mark>
      <Styled.Message $grade={grade}>{children}</Styled.Message>
      {next != null && <Styled.Next aria-live="polite">{next}</Styled.Next>}
    </Styled.Root>
  )
}
