import type { FlashcardStageProps } from './FlashcardStage.types'
import * as Styled from './FlashcardStage.styles'

export function FlashcardStage(props: FlashcardStageProps) {
  return <Styled.Root {...props} data-ui-flashcard-stage="true" />
}
