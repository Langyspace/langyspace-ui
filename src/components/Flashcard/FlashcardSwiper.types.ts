import type { ComponentPropsWithRef } from 'react'

/** Where the card flies to when rated; CSS lengths and angle. */
export interface FlashcardSwiperExit {
  rotate: string
  x: string
  y: string
}

export interface FlashcardSwiperProps extends ComponentPropsWithRef<'div'> {
  /** Starts the exit animation towards the given vector. */
  exit?: FlashcardSwiperExit | null
}
