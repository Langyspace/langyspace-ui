import * as Styled from './styles'
import type { FlashcardWordProps } from './types'
export function FlashcardWord({ ...props }: FlashcardWordProps) {
  return <Styled.Root {...props} />
}
export type { FlashcardWordProps } from './types'
