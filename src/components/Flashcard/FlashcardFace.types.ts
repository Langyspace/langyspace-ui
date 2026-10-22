import type { ComponentPropsWithRef } from 'react'

export interface FlashcardFaceProps extends ComponentPropsWithRef<'div'> {
  side?: 'front' | 'back'
}
