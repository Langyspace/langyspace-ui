import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface SessionProgressProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'children'
> {
  name: ReactNode
  counter: ReactNode
  value: number
}
