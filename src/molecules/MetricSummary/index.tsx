import * as Styled from './styles'
import type { MetricSummaryProps } from './types'
export function MetricSummary({ children, ...props }: MetricSummaryProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
export type { MetricSummaryProps } from './types'
