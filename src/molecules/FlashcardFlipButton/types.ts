import type { ComponentPropsWithRef } from 'react'

export interface FlashcardFlipButtonProps extends Omit<
  ComponentPropsWithRef<'button'>,
  'children' | 'type' | 'aria-label'
> {
  label: string
}
