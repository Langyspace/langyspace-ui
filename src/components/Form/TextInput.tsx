import { forwardRef } from 'react'
import { useFieldControl } from '../../internal/useFieldControl'

import type { InputHTMLAttributes } from 'react'
import type { FieldControlSize } from '../../foundations/fields'

import { styled } from 'styled-components'
import {
  fieldControlStyles,
  type FieldControlStyleProps,
} from '../../foundations/fields'

const Input = styled.input.withConfig({
  componentId: 'lsui-sc-text-input',
})<FieldControlStyleProps>`
  ${fieldControlStyles}
`

export interface TextInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size'
> {
  size?: FieldControlSize
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  function TextInput({ size = 'md', ...props }, ref) {
    const field = useFieldControl(props, size)

    return (
      <Input
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

export type { FieldControlSize as TextInputSize } from '../../foundations/fields'
