import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface StatCardProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'children'
> {
  /** `sm` uses a smaller value for dense summaries. @default 'md' */
  size?: 'md' | 'sm'
  tone?: 'neutral' | 'brand'
  value: ReactNode
  label: ReactNode
  action?: ReactNode
}
