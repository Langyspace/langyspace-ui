import * as Styled from './FlashcardSwiper.styles'

import type { ComponentPropsWithRef } from 'react'

export interface FlashcardSwiperProps extends ComponentPropsWithRef<'div'> {
  exiting?: boolean
}

export function FlashcardSwiper({
  exiting = false,
  ...props
}: FlashcardSwiperProps) {
  return <Styled.Root {...props} $exiting={exiting} />
}
