import * as Styled from './FlashcardFrame.styles'
import type { FlashcardFrameProps } from './FlashcardFrame.types'

export function FlashcardFrame({
  layout = 'content',
  ...props
}: FlashcardFrameProps) {
  return <Styled.Root {...props} $layout={layout} />
}
