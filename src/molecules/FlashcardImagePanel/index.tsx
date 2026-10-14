import * as Styled from './styles'
import type { FlashcardImagePanelProps } from './types'
export function FlashcardImagePanel({ ...props }: FlashcardImagePanelProps) {
  return <Styled.Root {...props} />
}
export type { FlashcardImagePanelProps } from './types'
