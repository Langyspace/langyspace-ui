import { forwardRef } from 'react'
import { useFieldControl } from '../../internal/useFieldControl'
import * as Styled from './styles'
import type { TextInputProps } from './types'

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  function TextInput({ size = 'md', ...props }, ref) {
    const field = useFieldControl(props, size)

    return (
      <Styled.Input
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

export type { TextInputProps } from './types'
export type { FieldControlSize as TextInputSize } from '../../foundations/fields'
