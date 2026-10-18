import * as Styled from './DetailRow.styles'

import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface DetailRowProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'children'
> {
  label: ReactNode
  value: ReactNode
  icon?: ReactNode
  action?: ReactNode
}

export function DetailRow({
  icon,
  label,
  value,
  action,
  ...props
}: DetailRowProps) {
  return (
    <Styled.Root {...props}>
      {icon && <Styled.Icon aria-hidden>{icon}</Styled.Icon>}
      <Styled.Content>
        <Styled.Label>{label}</Styled.Label>
        <Styled.Value>{value}</Styled.Value>
      </Styled.Content>
      {action}
    </Styled.Root>
  )
}
