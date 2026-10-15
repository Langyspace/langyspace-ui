import * as Styled from './styles'
import type { FlashcardFlipProps } from './types'
export function FlashcardFlip({
  flipped = false,
  ...props
}: FlashcardFlipProps) {
  return <Styled.Root {...props} $flipped={flipped} />
}
export type { FlashcardFlipProps } from './types'
