import * as Styled from './styles'
import type { FlashcardImagePanelProps } from './types'

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

export type { FlashcardImagePanelProps } from './types'
