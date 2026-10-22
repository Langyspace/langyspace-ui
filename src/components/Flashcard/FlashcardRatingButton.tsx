import * as Styled from './FlashcardRatingButton.styles'
import type { FlashcardRatingButtonProps } from './FlashcardRatingButton.types'

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
      <Styled.Label>{children}</Styled.Label>{' '}
      <Styled.Interval>{interval}</Styled.Interval>
    </Styled.Button>
  )
}
