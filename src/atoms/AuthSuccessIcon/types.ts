import type { ComponentPropsWithRef } from 'react'

export type AuthSuccessIconProps = Omit<
  ComponentPropsWithRef<'div'>,
  'children' | 'aria-hidden'
>
