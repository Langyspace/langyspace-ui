import type { ComponentPropsWithRef } from 'react'

export interface FlashcardGhostProps extends ComponentPropsWithRef<'div'> {
  layer: 1 | 2
  obscured?: boolean
}
