import type { ComponentPropsWithRef, ReactNode } from 'react'

import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

const Root = styled.div.withConfig({
  componentId: 'lsui-sc-flashcard-progress-track',
})`
  min-width: 0;
  flex: 1;
  display: flex;
  gap: ${token.spacing1};
`

export interface FlashcardProgressTrackProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode
}

export function FlashcardProgressTrack({
  children,
  ...props
}: FlashcardProgressTrackProps) {
  return <Root {...props}>{children}</Root>
}
