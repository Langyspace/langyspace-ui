import * as Styled from './styles'
import type { FlashcardBackProps } from './types'

export function FlashcardBack({
  term,
  phonetic,
  translation,
  example,
  ...props
}: FlashcardBackProps) {
  return (
    <Styled.Root {...props}>
      <Styled.Term>{term}</Styled.Term>
      {phonetic != null && <Styled.Phonetic>{phonetic}</Styled.Phonetic>}
      <Styled.Divider aria-hidden="true" />
      <Styled.Translation>{translation}</Styled.Translation>
      {example != null && <Styled.Example>{example}</Styled.Example>}
    </Styled.Root>
  )
}
export type { FlashcardBackProps } from './types'
