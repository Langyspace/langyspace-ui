import type { ComponentPropsWithRef } from 'react'

import { styled } from 'styled-components'
import { Skeleton } from '../Skeleton/Skeleton'
import { flashcardWordLayout } from '../../internal/flashcardWordLayout'

const Root = styled.div.withConfig({
  componentId: 'lsui-sc-flashcard-word-skeleton',
})`
  ${flashcardWordLayout}
  justify-content: center;
`

const Word = styled(Skeleton)`
  width: 68%;
  height: 2.25rem;
`

const Rule = styled(Skeleton)`
  width: 1.875rem;
  height: 0.1875rem;
`

const Phonetic = styled(Skeleton)`
  width: 44%;
  height: 0.875rem;
`

export type FlashcardWordSkeletonProps = Omit<
  ComponentPropsWithRef<'div'>,
  'children' | 'aria-hidden' | 'role' | 'tabIndex'
>

export function FlashcardWordSkeleton(props: FlashcardWordSkeletonProps) {
  return (
    <Root {...props} aria-hidden="true">
      <Word />
      <Rule />
      <Phonetic />
    </Root>
  )
}
