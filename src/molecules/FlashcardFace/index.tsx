import * as Styled from './styles'
import type { FlashcardFaceProps } from './types'
export function FlashcardFace({
  side = 'front',
  ...props
}: FlashcardFaceProps) {
  return <Styled.Root {...props} data-side={side} />
}
export type { FlashcardFaceProps } from './types'
