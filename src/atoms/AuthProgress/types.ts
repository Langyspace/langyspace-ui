import type { ComponentPropsWithRef } from 'react'
export type AuthProgressProps = Omit<
  ComponentPropsWithRef<'div'>,
  'children' | 'aria-hidden'
>
