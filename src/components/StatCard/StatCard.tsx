import * as Styled from './StatCard.styles'

import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface StatCardProps extends ComponentPropsWithRef<'div'> {
  tone?: 'neutral' | 'brand'
  value?: ReactNode
  label?: ReactNode
  action?: ReactNode
}

export function StatCard({
  tone = 'neutral',
  value,
  label,
  action,
  children,
  ...props
}: StatCardProps) {
  const showAction = action != null && action !== false
  const hasContent = value !== undefined || label !== undefined || showAction

  return (
    <Styled.Root {...props} data-tone={tone}>
      {hasContent ? (
        <>
          {showAction && (
            <Styled.Action data-ui-stat-action>{action}</Styled.Action>
          )}
          <Styled.Value>{value}</Styled.Value>
          <Styled.Label>{label}</Styled.Label>
        </>
      ) : (
        children
      )}
    </Styled.Root>
  )
}
