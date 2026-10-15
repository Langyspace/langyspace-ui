import type { ComponentPropsWithRef } from 'react'

export interface FlashcardAudioButtonProps extends Omit<
  ComponentPropsWithRef<'button'>,
  'children' | 'type' | 'aria-label'
> {
  label: string
  placement?: 'image' | 'term'
  playing?: boolean
}
