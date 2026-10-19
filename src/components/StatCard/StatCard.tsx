import type { ComponentPropsWithRef, ReactNode } from 'react'
import * as Styled from './StatCard.styles'

export interface StatCardProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'children'
> {
  tone?: 'neutral' | 'brand'
  value: ReactNode
  label: ReactNode
  action?: ReactNode
}

export function StatCard({
  tone = 'neutral',
  value,
  label,
  action,
  ...props
}: StatCardProps) {
  return (
    <Styled.Root {...props} data-tone={tone}>
      {action != null && action !== false && (
        <Styled.Action data-ui-stat-action>{action}</Styled.Action>
      )}
      <Styled.Value data-ui-stat-value>{value}</Styled.Value>
      <Styled.Label data-ui-stat-label>{label}</Styled.Label>
    </Styled.Root>
  )
}
