import type { ComponentPropsWithRef, ReactNode } from 'react'

import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

const Root = styled.div.withConfig({
  componentId: 'lsui-sc-flashcard-counter',
})`
  flex-shrink: 0;
  color: var(--fc-muted-2, #6b6b6b);
  font-size: ${token.typographyFontSizeXs};
  font-variant-numeric: tabular-nums;
  font-weight: ${token.typographyFontWeightMedium};

  b {
    color: var(--fc-ink, #0a0a0a);
    font-weight: ${token.typographyFontWeightBold};
  }
`

export interface FlashcardCounterProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode
}

export function FlashcardCounter({
  children,
  ...props
}: FlashcardCounterProps) {
  return <Root {...props}>{children}</Root>
}
