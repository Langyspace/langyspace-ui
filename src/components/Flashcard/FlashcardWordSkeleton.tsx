import type { FlashcardWordSkeletonProps } from './FlashcardWordSkeleton.types'
import * as Styled from './FlashcardWordSkeleton.styles'

export function FlashcardWordSkeleton(props: FlashcardWordSkeletonProps) {
  return (
    <Styled.Root {...props} aria-hidden="true">
      <Styled.Word />
      <Styled.Rule />
      <Styled.Phonetic />
    </Styled.Root>
  )
}
