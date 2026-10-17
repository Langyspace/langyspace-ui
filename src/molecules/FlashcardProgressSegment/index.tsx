import * as Styled from './styles'
import type { FlashcardProgressSegmentProps } from './types'

export function FlashcardProgressSegment({
  state = 'pending',
  ...props
}: FlashcardProgressSegmentProps) {
  return <Styled.Root {...props} state={state} />
}

export type { FlashcardProgressSegmentProps } from './types'
