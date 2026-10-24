import type { ComponentPropsWithRef } from 'react'
import type { CompatibleAccessibleName } from '../../foundations/accessibility'
import type { ChoiceOption, ChoiceValue } from '../../foundations/selection'

export type FilterPillsOverflow = 'scroll' | 'wrap'

export type FilterPillsSize = 'sm' | 'md'

export type FilterPillsProps<Value extends ChoiceValue = string> = Omit<
  ComponentPropsWithRef<'div'>,
  'aria-label' | 'aria-labelledby' | 'defaultValue' | 'onChange'
> &
  CompatibleAccessibleName & {
    counts?: Partial<Record<Value, number>>
    defaultValue?: Value
    onValueChange?: (value: Value) => void
    options: readonly ChoiceOption<Value>[]
    overflow?: FilterPillsOverflow
    size?: FilterPillsSize
    value?: Value
  }
