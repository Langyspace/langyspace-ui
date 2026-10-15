import * as Styled from './styles'
import type { FlashcardWordSkeletonProps } from './types'

export function FlashcardWordSkeleton(props: FlashcardWordSkeletonProps) {
  return (
    <Styled.Root {...props} aria-hidden="true">
      <Styled.Word />
      <Styled.Rule />
      <Styled.Phonetic />
    </Styled.Root>
  )
}
export type { FlashcardWordSkeletonProps } from './types'
