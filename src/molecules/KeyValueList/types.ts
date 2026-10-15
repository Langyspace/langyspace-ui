import type { ComponentPropsWithRef, ReactNode } from 'react'
export interface KeyValueListProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'children'
> {
  items: readonly { id: string; label: ReactNode; value: ReactNode }[]
}
