import * as Styled from './styles'
import type { FlashcardSwiperProps } from './types'
export function FlashcardSwiper({
  exiting = false,
  ...props
}: FlashcardSwiperProps) {
  return <Styled.Root {...props} $exiting={exiting} />
}
export type { FlashcardSwiperProps } from './types'
