import * as Styled from './FlashcardImagePanel.styles'
import type { FlashcardImagePanelProps } from './FlashcardImagePanel.types'

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
