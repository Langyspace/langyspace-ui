import type { ComponentPropsWithRef } from 'react'

export type PracticeCardSkeletonBodyProps = Omit<
  ComponentPropsWithRef<'div'>,
  'children' | 'aria-hidden' | 'role' | 'tabIndex'
>
