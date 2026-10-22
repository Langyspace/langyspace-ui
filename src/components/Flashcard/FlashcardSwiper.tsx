import * as Styled from './FlashcardSwiper.styles'
import type { FlashcardSwiperProps } from './FlashcardSwiper.types'

export function FlashcardSwiper({
  exiting = false,
  ...props
}: FlashcardSwiperProps) {
  return <Styled.Root {...props} $exiting={exiting} />
}
