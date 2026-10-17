import * as Styled from './styles'
import type { FlashcardWordProps } from './types'

export function FlashcardWord({
  children,
  phonetic,
  example,
  ...props
}: FlashcardWordProps) {
  return (
    <Styled.Root {...props}>
      <Styled.Word>{children}</Styled.Word>
      <Styled.Rule aria-hidden="true" />
      {phonetic != null && <Styled.Phonetic>{phonetic}</Styled.Phonetic>}
      {example != null && <Styled.Example>{example}</Styled.Example>}
    </Styled.Root>
  )
}

export type { FlashcardWordProps } from './types'
