import { FlashcardFlipContext } from '../../internal/FlashcardFlipContext'
import * as Styled from './styles'
import type { FlashcardFlipProps } from './types'
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
export type { FlashcardFlipProps } from './types'
