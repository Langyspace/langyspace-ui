import type { ComponentPropsWithRef } from 'react'

import { styled } from 'styled-components'

const Root = styled.div.withConfig({
  componentId: 'lsui-sc-flashcard-deck',
})`
  position: relative;
  width: 100%;
  max-width: 20.125rem;
  max-height: 100%;
  height: clamp(
    var(--fc-card-min-height),
    var(--fc-card-fluid-height),
    var(--fc-card-max-height)
  );
`

export type FlashcardDeckProps = ComponentPropsWithRef<'div'>

export function FlashcardDeck(props: FlashcardDeckProps) {
  return <Root {...props} />
}
