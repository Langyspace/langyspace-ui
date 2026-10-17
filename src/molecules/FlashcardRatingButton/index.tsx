import * as Styled from './styles'
import type { FlashcardRatingButtonProps } from './types'

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

export type { FlashcardGrade, FlashcardRatingButtonProps } from './types'
