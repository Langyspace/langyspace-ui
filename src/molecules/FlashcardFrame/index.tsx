import * as Styled from './styles'
import type { FlashcardFrameProps } from './types'

export function FlashcardFrame(props: FlashcardFrameProps) {
  return <Styled.Root {...props} />
}

export type { FlashcardFrameProps } from './types'
