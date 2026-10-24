import * as Styled from './StatCard.styles'
import type { StatCardProps } from './StatCard.types'

export function StatCard({
  size = 'md',
  tone = 'neutral',
  value,
  label,
  action,
  ...props
}: StatCardProps) {
  return (
    <Styled.Root {...props} data-size={size} data-tone={tone}>
      {action != null && action !== false && (
        <Styled.Action data-ui-stat-action>{action}</Styled.Action>
      )}
      <Styled.Value data-ui-stat-value>{value}</Styled.Value>
      <Styled.Label data-ui-stat-label>{label}</Styled.Label>
    </Styled.Root>
  )
}
