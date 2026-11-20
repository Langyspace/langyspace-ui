import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface KeyValueListProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'children'
> {
  tone?: 'default' | 'material'
  density?: 'regular' | 'compact'
  /** Stack descriptive values beneath their labels instead of squeezing them into one row. */
  layout?: 'inline' | 'stacked'
  items: readonly { id: string; label: ReactNode; value: ReactNode }[]
}
