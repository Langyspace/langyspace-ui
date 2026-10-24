import type { FlashcardGhostProps } from './FlashcardGhost.types'
import * as Styled from './FlashcardGhost.styles'

export function FlashcardGhost({
  layer,
  obscured = false,
  ...props
}: FlashcardGhostProps) {
  return <Styled.Root {...props} $layer={layer} $obscured={obscured} />
}
