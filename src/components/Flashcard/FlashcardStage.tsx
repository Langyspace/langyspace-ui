import type { ComponentPropsWithRef } from 'react'

import { styled } from 'styled-components'

const Root = styled.div.withConfig({
  componentId: 'lsui-sc-flashcard-stage',
})`
  display: flex;
  min-height: 0;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  padding-block: var(--fc-stage-padding-block);
  padding-inline: var(--fc-stage-padding-inline);
  -webkit-perspective: 1600px;
  perspective: 1600px;

  @media (max-width: 900px) {
    flex: 1 1 auto;
  }

  @media (min-width: 640px) and (max-width: 900px) and (max-height: 500px) {
    grid-column: 1;
    grid-row: 2;
    min-height: 0;
  }
`

export type FlashcardStageProps = ComponentPropsWithRef<'div'>

export function FlashcardStage(props: FlashcardStageProps) {
  return <Root {...props} data-ui-flashcard-stage="true" />
}
