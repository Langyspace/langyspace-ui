import type { FlashcardFlipHintProps } from './FlashcardFlipHint.types'
import * as Styled from './FlashcardFlipHint.styles'

export function FlashcardFlipHint(props: FlashcardFlipHintProps) {
  return <Styled.Root {...props} data-ui-flashcard-flip-hint="true" />
}
