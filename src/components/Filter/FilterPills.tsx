import { useControllableState } from '../../internal/useControllableState'
import * as Styled from './FilterPills.styles'
import type { ChoiceValue } from '../../foundations/selection'
import type { FilterPillsProps } from './FilterPills.types'

export function FilterPills<Value extends ChoiceValue>({
  counts,
  defaultValue,
  onValueChange,
  options,
  overflow = 'scroll',
  size = 'md',
  value: controlledValue,
  ...props
}: FilterPillsProps<Value>) {
  const [value, setValue] = useControllableState({
    defaultValue: defaultValue ?? options[0]?.value,
    onChange: onValueChange,
    value: controlledValue,
  })

  return (
    <Styled.Group {...props} $overflow={overflow} role="group">
      {options.map((option) => {
        const count = counts?.[option.value]
        const accessibleLabel =
          option.accessibleLabel ??
          (typeof option.label === 'string' ? option.label : undefined)

        return (
          <Styled.Item
            key={option.value}
            $active={option.value === value}
            $size={size}
            aria-label={
              count !== undefined && accessibleLabel
                ? `${accessibleLabel}: ${count}`
                : accessibleLabel
            }
            aria-pressed={option.value === value}
            disabled={option.disabled}
            type="button"
            onClick={() => {
              setValue(option.value)
            }}
          >
            {option.label}
            {count !== undefined ? <Styled.Count>{count}</Styled.Count> : null}
          </Styled.Item>
        )
      })}
    </Styled.Group>
  )
}
