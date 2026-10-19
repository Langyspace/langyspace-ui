import type { ComponentPropsWithRef, ReactNode } from 'react'
import * as Styled from './MetricSummary.styles'

export interface MetricSummaryProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'children'
> {
  value: ReactNode
  label: ReactNode
}

export function MetricSummary({ value, label, ...props }: MetricSummaryProps) {
  return (
    <Styled.Root {...props}>
      <Styled.Value data-ui-metric-value>{value}</Styled.Value>
      <Styled.Label data-ui-metric-label>{label}</Styled.Label>
    </Styled.Root>
  )
}
