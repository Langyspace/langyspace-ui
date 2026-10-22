import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface DetailRowProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'children'
> {
  label: ReactNode
  value: ReactNode
  icon?: ReactNode
  action?: ReactNode
}
