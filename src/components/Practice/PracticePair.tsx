import { MobileFrame } from '../Device/MobileFrame'
import { SegmentedControl } from '../SegmentedControl/SegmentedControl'
import { useControllableState } from '../../internal/useControllableState'
import type { PracticePairProps } from './PracticePair.types'
import * as S from './PracticePair.styles'

/** Two actual content slots share the canonical phone; no activity or progress is fabricated. */
export function PracticePair({
  items,
  activeId,
  onActiveIdChange,
  selectionLabel = 'Choose a practice activity',
  ...props
}: PracticePairProps) {
  const [selected, setSelected] = useControllableState({
    value: activeId,
    defaultValue: items[0].id,
    onChange: onActiveIdChange,
  })
  return (
    <S.Root {...props}>
      <S.Selection>
        <SegmentedControl
          aria-label={selectionLabel}
          value={selected}
          onValueChange={setSelected}
          options={items.map((item) => ({ value: item.id, label: item.label }))}
        />
      </S.Selection>
      <S.Screens>
        {items.map((item) => (
          <S.Screen key={item.id} $selected={item.id === selected}>
            <MobileFrame
              title={item.label}
              size="compact"
              aria-label={item.label}
            >
              {item.content}
            </MobileFrame>
          </S.Screen>
        ))}
      </S.Screens>
    </S.Root>
  )
}
