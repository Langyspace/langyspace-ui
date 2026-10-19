import { forwardRef } from 'react'
import { useFieldControl } from '../../internal/useFieldControl'

import type { TextareaHTMLAttributes } from 'react'
import type { FieldControlSize } from '../../foundations/fields'

import { styled } from 'styled-components'
import {
  fieldControlStyles,
  type FieldControlStyleProps,
} from '../../foundations/fields'
import * as token from '../../foundations/tokenValues'

const Textarea = styled.textarea.withConfig({
  componentId: 'lsui-sc-textarea-input',
})<FieldControlStyleProps>`
  ${fieldControlStyles}
  min-height: 6rem;
  padding-top: ${token.spacing3};
  padding-bottom: ${token.spacing3};
  line-height: ${token.typographyLineHeightNormal};
  resize: vertical;
`

export interface TextareaInputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: FieldControlSize
}

export const TextareaInput = forwardRef<
  HTMLTextAreaElement,
  TextareaInputProps
>(function TextareaInput({ size = 'md', ...props }, ref) {
  const field = useFieldControl(props, size)

  return (
    <Textarea
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
})

export type { FieldControlSize as TextareaInputSize } from '../../foundations/fields'
