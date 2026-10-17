import * as Styled from './styles'
import type { FlashcardProgressTrackProps } from './types'

export function FlashcardProgressTrack({
  children,
  ...props
}: FlashcardProgressTrackProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}

export type { FlashcardProgressTrackProps } from './types'
