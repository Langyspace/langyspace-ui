import * as Styled from './styles'
import type { FlashcardFlipHintProps } from './types'

export function FlashcardFlipHint(props: FlashcardFlipHintProps) {
  return <Styled.Root {...props} data-ui-flashcard-flip-hint="true" />
}

export type { FlashcardFlipHintProps } from './types'
