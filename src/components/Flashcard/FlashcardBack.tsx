import * as Styled from './FlashcardBack.styles'

import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface FlashcardBackProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'children'
> {
  term: ReactNode
  translation: ReactNode
  phonetic?: ReactNode
  example?: ReactNode
}

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
