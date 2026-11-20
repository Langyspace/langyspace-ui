import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface KeyValueListProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'children'
> {
  tone?: 'default' | 'material'
  density?: 'regular' | 'compact'
  items: readonly { id: string; label: ReactNode; value: ReactNode }[]
}
