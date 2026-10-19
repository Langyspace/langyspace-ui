import * as Styled from './FlashcardRatingButton.styles'

import type { ComponentPropsWithRef, ReactNode } from 'react'

export type FlashcardGrade = 'again' | 'hard' | 'good' | 'easy'

export type FlashcardRatingButtonProps = ComponentPropsWithRef<'button'> & {
  grade: FlashcardGrade
  selected?: boolean
  interval: ReactNode
}

export function FlashcardRatingButton({
  children,
  grade,
  interval,
  selected = false,
  type = 'button',
  ...props
}: FlashcardRatingButtonProps) {
  return (
    <Styled.Button
      {...props}
      type={type}
      $grade={grade}
      $selected={selected}
      data-ui-flashcard-rating-button="true"
    >
      <span className="label">{children}</span>{' '}
      <span className="interval">{interval}</span>
    </Styled.Button>
  )
}
