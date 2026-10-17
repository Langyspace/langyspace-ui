import * as Styled from './styles'
import type { MetricValueProps } from './types'

export function MetricValue(props: MetricValueProps) {
  return <Styled.Root {...props} data-ui-metric-value />
}

export type { MetricValueProps } from './types'
