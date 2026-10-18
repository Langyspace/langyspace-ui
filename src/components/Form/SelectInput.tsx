import { forwardRef } from 'react'
import { useFieldControl } from '../../internal/useFieldControl'

import type { SelectHTMLAttributes } from 'react'
import type { FieldControlSize } from '../../foundations/fields'

import { styled } from 'styled-components'
import {
  fieldControlStyles,
  type FieldControlStyleProps,
} from '../../foundations/fields'
import * as token from '../../foundations/tokenValues'

const Select = styled.select.withConfig({
  componentId: 'lsui-sc-select-input',
})<FieldControlStyleProps>`
  ${fieldControlStyles}
  padding-right: ${token.spacing8};
`

export interface SelectInputProps extends Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'size'
> {
  size?: FieldControlSize
}

export const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps>(
  function SelectInput({ size = 'md', ...props }, ref) {
    const field = useFieldControl(props, size)

    return (
      <Select
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

export type { FieldControlSize as SelectInputSize } from '../../foundations/fields'
