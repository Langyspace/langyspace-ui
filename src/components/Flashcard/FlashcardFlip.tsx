import { FlashcardFlipContext } from '../../internal/FlashcardFlipContext'
import type { FlashcardFlipProps } from './FlashcardFlip.types'
import * as Styled from './FlashcardFlip.styles'

export function FlashcardFlip({
  flipped = false,
  ...props
}: FlashcardFlipProps) {
  return (
    <FlashcardFlipContext value={flipped}>
      <Styled.Root {...props} $flipped={flipped} />
    </FlashcardFlipContext>
  )
}
