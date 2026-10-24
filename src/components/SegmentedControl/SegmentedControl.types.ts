import type { ComponentPropsWithRef } from 'react'
import type { CompatibleAccessibleName } from '../../foundations/accessibility'
import type { ChoiceOption, ChoiceValue } from '../../foundations/selection'

export type SegmentedControlShape = 'pill' | 'rounded'

export type SegmentedControlSurface = 'inverse' | 'light'

export type SegmentedControlProps<Value extends ChoiceValue = string> = Omit<
  ComponentPropsWithRef<'div'>,
  'aria-label' | 'aria-labelledby' | 'defaultValue' | 'onChange'
> &
  CompatibleAccessibleName & {
    defaultValue?: Value
    onValueChange?: (value: Value) => void
    options: readonly ChoiceOption<Value>[]
    shape?: SegmentedControlShape
    surface?: SegmentedControlSurface
    value?: Value
  }

export type { ChoiceOption, ChoiceValue } from '../../foundations/selection'
