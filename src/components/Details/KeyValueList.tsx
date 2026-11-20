import type { KeyValueListProps } from './KeyValueList.types'
import * as Styled from './KeyValueList.styles'

export function KeyValueList({
  items,
  tone = 'default',
  ...props
}: KeyValueListProps) {
  return (
    <Styled.Root {...props}>
      {items.map((item) => (
        <Styled.Row key={item.id} $material={tone === 'material'}>
          <Styled.Label $material={tone === 'material'}>
            {item.label}
          </Styled.Label>
          <Styled.Value $material={tone === 'material'}>
            {item.value}
          </Styled.Value>
        </Styled.Row>
      ))}
    </Styled.Root>
  )
}
