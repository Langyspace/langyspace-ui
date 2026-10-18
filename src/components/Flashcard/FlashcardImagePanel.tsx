import * as Styled from './FlashcardImagePanel.styles'

import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface FlashcardImagePanelProps extends ComponentPropsWithRef<'div'> {
  emoji?: ReactNode
}

export function FlashcardImagePanel({
  emoji,
  children,
  ...props
}: FlashcardImagePanelProps) {
  return (
    <Styled.Root {...props}>
      {emoji != null && <Styled.Emoji aria-hidden="true">{emoji}</Styled.Emoji>}
      {children}
    </Styled.Root>
  )
}
