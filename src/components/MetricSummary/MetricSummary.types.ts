import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface MetricSummaryProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'children'
> {
  value: ReactNode
  label: ReactNode
}
