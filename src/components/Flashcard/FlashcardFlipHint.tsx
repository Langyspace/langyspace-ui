import type { ComponentPropsWithRef } from 'react'

import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

const Root = styled.div.withConfig({
  componentId: 'lsui-sc-flashcard-flip-hint',
})`
  display: inline-flex;
  align-items: center;
  align-self: center;
  gap: 0.4375rem;
  padding-top: 0.375rem;
  color: var(--fc-muted-2);
  font-size: ${token.typographyFontSizeXs};
  font-weight: ${token.typographyFontWeightMedium};

  svg {
    opacity: 0.7;
  }
`

export type FlashcardFlipHintProps = ComponentPropsWithRef<'div'>

export function FlashcardFlipHint(props: FlashcardFlipHintProps) {
  return <Root {...props} data-ui-flashcard-flip-hint="true" />
}
