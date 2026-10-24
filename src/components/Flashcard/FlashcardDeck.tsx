import type { FlashcardDeckProps } from './FlashcardDeck.types'
import * as Styled from './FlashcardDeck.styles'

export function FlashcardDeck(props: FlashcardDeckProps) {
  return <Styled.Root {...props} />
}
