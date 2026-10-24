import { useCallback, useState } from 'react'

interface ControllableStateOptions<Value> {
  defaultValue?: Value
  onChange?: (value: Value) => void
  value?: Value
}

type Setter<Value> = (value: Value) => void

// Shared value/defaultValue/onChange contract: controlled when `value` is set.
export function useControllableState<Value>(
  options: ControllableStateOptions<Value> & { defaultValue: Value },
): readonly [Value, Setter<Value>]
export function useControllableState<Value>(
  options: ControllableStateOptions<Value>,
): readonly [Value | undefined, Setter<Value>]
export function useControllableState<Value>({
  defaultValue,
  onChange,
  value,
}: ControllableStateOptions<Value>) {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue

  const setValue = useCallback(
    (nextValue: Value) => {
      if (!isControlled) setInternalValue(nextValue)
      onChange?.(nextValue)
    },
    [isControlled, onChange],
  )

  return [currentValue, setValue] as const
}
