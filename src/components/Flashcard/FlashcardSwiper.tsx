import * as Styled from './FlashcardSwiper.styles'
import type { FlashcardSwiperProps } from './FlashcardSwiper.types'

export function FlashcardSwiper({
  exit = null,
  ...props
}: FlashcardSwiperProps) {
  return <Styled.Root {...props} $exit={exit} />
}
