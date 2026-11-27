import type { KeyValueListProps } from './KeyValueList.types'
import * as Styled from './KeyValueList.styles'

export function KeyValueList({
  items,
  tone = 'default',
  density = 'regular',
  layout = 'inline',
  ...props
}: KeyValueListProps) {
  return (
    <Styled.Root {...props} $compact={density === 'compact'}>
      {items.map((item) => (
        <Styled.Row
          key={item.id}
          $material={tone === 'material'}
          $compact={density === 'compact'}
          $stacked={layout === 'stacked'}
        >
          <Styled.Label $material={tone === 'material'}>
            {item.label}
          </Styled.Label>
          <Styled.Value
            $material={tone === 'material'}
            $compact={density === 'compact'}
            $stacked={layout === 'stacked'}
          >
            {item.value}
          </Styled.Value>
        </Styled.Row>
      ))}
    </Styled.Root>
  )
}
