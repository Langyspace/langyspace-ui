import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface StatCardProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'children'
> {
  tone?: 'neutral' | 'brand'
  value: ReactNode
  label: ReactNode
  action?: ReactNode
}
