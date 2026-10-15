import type { ComponentPropsWithRef } from 'react'
export type PracticeResultMarkProps = Omit<
  ComponentPropsWithRef<'div'>,
  'children' | 'aria-hidden'
>
