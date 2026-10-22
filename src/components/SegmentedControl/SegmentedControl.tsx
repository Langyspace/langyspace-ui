import { useControllableState } from '../../internal/useControllableState'
import * as Styled from './SegmentedControl.styles'
import type { ChoiceValue } from '../../foundations/selection'
import type { SegmentedControlProps } from './SegmentedControl.types'

export function SegmentedControl<Value extends ChoiceValue>({
  defaultValue,
  onValueChange,
  options,
  shape = 'rounded',
  surface = 'light',
  value: controlledValue,
  ...props
}: SegmentedControlProps<Value>) {
  const [value, setValue] = useControllableState({
    defaultValue: defaultValue ?? options[0]?.value,
    onChange: onValueChange,
    value: controlledValue,
  })

  return (
    <Styled.Group {...props} $shape={shape} $surface={surface} role="group">
      {options.map((option) => (
        <Styled.Item
          key={option.value}
          $active={option.value === value}
          $shape={shape}
          $surface={surface}
          aria-label={option.accessibleLabel}
          aria-pressed={option.value === value}
          disabled={option.disabled}
          type="button"
          onClick={() => {
            setValue(option.value)
          }}
        >
          {option.label}
        </Styled.Item>
      ))}
    </Styled.Group>
  )
}
