import * as Styled from './FlashcardWord.styles'

import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface FlashcardWordProps extends ComponentPropsWithRef<'div'> {
  phonetic?: ReactNode
  example?: ReactNode
}

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
