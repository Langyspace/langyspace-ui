import type { ComponentPropsWithRef } from 'react'
export interface WeeklyCountChartProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'children'
> {
  items: readonly {
    id: string
    label: string
    value: number
    active?: boolean
  }[]
}
