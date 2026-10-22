import type { ComponentPropsWithRef } from 'react'

export interface SkeletonProps extends Omit<
  ComponentPropsWithRef<'span'>,
  'children' | 'aria-hidden'
> {
  shape?: 'line' | 'circle'
}
