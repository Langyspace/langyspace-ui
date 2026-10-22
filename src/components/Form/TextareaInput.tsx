import { useFieldControl } from '../../internal/useFieldControl'
import type { TextareaInputProps } from './TextareaInput.types'
import * as Styled from './TextareaInput.styles'

export function TextareaInput({
  size = 'md',
  ref,
  ...props
}: TextareaInputProps) {
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
}
