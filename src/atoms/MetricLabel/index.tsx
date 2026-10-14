import * as Styled from './styles'
import type { MetricLabelProps } from './types'
export function MetricLabel(props: MetricLabelProps) {
  return <Styled.Root {...props} data-ui-metric-label />
}
export type { MetricLabelProps } from './types'
