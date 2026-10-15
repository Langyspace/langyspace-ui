import * as Styled from './styles'
import type { KeyValueListProps } from './types'
export function KeyValueList({ items, ...props }: KeyValueListProps) {
  return (
    <Styled.Root {...props}>
      {items.map((item) => (
        <Styled.Row key={item.id}>
          <Styled.Label>{item.label}</Styled.Label>
          <Styled.Value>{item.value}</Styled.Value>
        </Styled.Row>
      ))}
    </Styled.Root>
  )
}
export type { KeyValueListProps } from './types'
