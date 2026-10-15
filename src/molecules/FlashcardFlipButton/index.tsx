import * as Styled from './styles'
import type { FlashcardFlipButtonProps } from './types'

export function FlashcardFlipButton({
  label,
  ...props
}: FlashcardFlipButtonProps) {
  return <Styled.Button {...props} aria-label={label} type="button" />
}

export type { FlashcardFlipButtonProps } from './types'
