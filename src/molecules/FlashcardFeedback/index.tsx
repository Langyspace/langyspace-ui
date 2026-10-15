import * as Styled from './styles'
import type { FlashcardFeedbackProps } from './types'
export function FlashcardFeedback({ ...props }: FlashcardFeedbackProps) {
  return <Styled.Root {...props} />
}
export type { FlashcardFeedbackProps } from './types'
