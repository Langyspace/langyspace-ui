import { forwardRef } from 'react'
import { useFieldControl } from '../../internal/useFieldControl'
import { authRecipe } from '../../foundations/authRecipe'

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

  @media (width < ${authRecipe.breakpoints.md}) {
    &[type='date'] {
      display: block;
      max-width: 100%;
      height: var(--lsui-field-control-height, var(--lsui-field-size-height));
      padding-top: calc(
        (
            var(--lsui-field-control-height, var(--lsui-field-size-height)) -
              1.5em - 2px
          ) /
          2
      );
      padding-bottom: calc(
        (
            var(--lsui-field-control-height, var(--lsui-field-size-height)) -
              1.5em - 2px
          ) /
          2
      );
      line-height: 1.5;
      -webkit-appearance: none;
      appearance: none;
    }

    &[type='date']::-webkit-date-and-time-value {
      min-height: 1.5em;
      text-align: left;
    }
  }
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
