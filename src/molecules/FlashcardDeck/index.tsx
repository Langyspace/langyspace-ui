import * as Styled from './styles'
import type { FlashcardDeckProps } from './types'

export function FlashcardDeck(props: FlashcardDeckProps) {
  return <Styled.Root {...props} />
}

export type { FlashcardDeckProps } from './types'
