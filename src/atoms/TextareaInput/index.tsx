import { forwardRef } from 'react'
import { useFieldControl } from '../../internal/useFieldControl'
import * as Styled from './styles'
import type { TextareaInputProps } from './types'

export const TextareaInput = forwardRef<
  HTMLTextAreaElement,
  TextareaInputProps
>(function TextareaInput({ size = 'md', ...props }, ref) {
  const field = useFieldControl(props, size)

  return (
    <Styled.Textarea
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

export type { TextareaInputProps } from './types'
export type { FieldControlSize as TextareaInputSize } from '../../foundations/fields'
