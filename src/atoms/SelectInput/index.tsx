import { forwardRef } from 'react'
import { useFieldControl } from '../../internal/useFieldControl'
import * as Styled from './styles'
import type { SelectInputProps } from './types'

export const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps>(
  function SelectInput({ size = 'md', ...props }, ref) {
    const field = useFieldControl(props, size)

    return (
      <Styled.Select
        {...props}
        {...field.attributes}
        aria-invalid={field.invalid || undefined}
        disabled={field.disabled}
        ref={ref}
        $invalid={field.invalid}
        $size={field.size}
        data-ui-field="true"
      />
    )
  },
)

export type { SelectInputProps } from './types'
export type { FieldControlSize as SelectInputSize } from '../../foundations/fields'
