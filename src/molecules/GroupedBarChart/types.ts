import type { ComponentPropsWithRef } from 'react'

export interface GroupedBarChartProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'children'
> {
  items: readonly {
    id: string
    label: string
    description: string
    values: readonly number[]
  }[]
}
