import type { ComponentPropsWithRef } from 'react'
export interface FlashcardProgressSegmentProps extends ComponentPropsWithRef<'span'> {
  state?: 'pending' | 'current' | 'done'
}
