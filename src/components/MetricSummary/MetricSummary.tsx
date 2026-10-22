import * as Styled from './MetricSummary.styles'
import type { MetricSummaryProps } from './MetricSummary.types'

export function MetricSummary({ value, label, ...props }: MetricSummaryProps) {
  return (
    <Styled.Root {...props}>
      <Styled.Value data-ui-metric-value>{value}</Styled.Value>
      <Styled.Label data-ui-metric-label>{label}</Styled.Label>
    </Styled.Root>
  )
}
