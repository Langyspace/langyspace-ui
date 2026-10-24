import type { KeyValueListProps } from './KeyValueList.types'
import * as Styled from './KeyValueList.styles'

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
