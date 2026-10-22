import type { FlashcardFlipButtonProps } from './FlashcardFlipButton.types'
import * as Styled from './FlashcardFlipButton.styles'

export function FlashcardFlipButton({
  label,
  ...props
}: FlashcardFlipButtonProps) {
  return <Styled.Button {...props} aria-label={label} type="button" />
}
