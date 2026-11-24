import { useState } from 'react'
import { SegmentedControl } from '../SegmentedControl/SegmentedControl'
import * as S from './DeviceGallery.styles'
import type { DeviceGalleryProps } from './DeviceGallery.types'

/** Device frames stay owned by their canonical components; this owner only arranges/selects them. */
export function DeviceGallery({
  items,
  selectionLabel = 'Choose an activity',
  onActiveIdChange,
  ...props
}: DeviceGalleryProps) {
  const [selected, select] = useState(items[0].id)
  return (
    <S.Root {...props}>
      <S.Selection>
        <SegmentedControl
          aria-label={selectionLabel}
          value={selected}
          options={items.map(({ id, label }) => ({ value: id, label }))}
          onValueChange={(id) => {
            select(id)
            onActiveIdChange?.(id)
          }}
        />
      </S.Selection>
      <S.Grid $count={items.length}>
        {items.map((item) => (
          <S.Item
            key={item.id}
            aria-label={item.label}
            $selected={selected === item.id}
          >
            <h3>{item.label}</h3>
            {item.content}
          </S.Item>
        ))}
      </S.Grid>
    </S.Root>
  )
}
