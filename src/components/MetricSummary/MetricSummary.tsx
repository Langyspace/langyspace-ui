import * as Styled from './MetricSummary.styles'
import type { MetricSummaryProps } from './MetricSummary.types'

export function MetricSummary({
  value,
  label,
  variant = 'summary',
  ...props
}: MetricSummaryProps) {
  return (
    <Styled.Root {...props} $variant={variant} data-variant={variant}>
      <Styled.Value data-ui-metric-value>{value}</Styled.Value>
      <Styled.Label data-ui-metric-label>{label}</Styled.Label>
    </Styled.Root>
  )
}
