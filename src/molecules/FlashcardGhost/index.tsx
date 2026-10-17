import * as Styled from './styles'
import type { FlashcardGhostProps } from './types'

export function FlashcardGhost({
  layer = 1,
  obscured = false,
  ...props
}: FlashcardGhostProps) {
  return <Styled.Root {...props} $layer={layer} $obscured={obscured} />
}

export type { FlashcardGhostProps } from './types'
