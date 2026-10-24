import type { ComponentPropsWithRef } from 'react'

export type FlashcardWordSkeletonProps = Omit<
  ComponentPropsWithRef<'div'>,
  'children' | 'aria-hidden' | 'role' | 'tabIndex'
>
