import * as Styled from './styles'
import type { DetailRowProps } from './types'

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

export type { DetailRowProps } from './types'
