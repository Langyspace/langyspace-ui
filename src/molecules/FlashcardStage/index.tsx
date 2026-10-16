import * as Styled from './styles'
import type { FlashcardStageProps } from './types'
export function FlashcardStage(props: FlashcardStageProps) {
  return <Styled.Root {...props} data-ui-flashcard-stage="true" />
}
export type { FlashcardStageProps } from './types'
