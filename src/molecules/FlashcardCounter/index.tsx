import * as Styled from './styles'
import type { FlashcardCounterProps } from './types'
export function FlashcardCounter({
  children,
  ...props
}: FlashcardCounterProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
export type { FlashcardCounterProps } from './types'
