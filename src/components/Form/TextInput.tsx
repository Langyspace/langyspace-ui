import { useFieldControl } from '../../internal/useFieldControl'
import type { TextInputProps } from './TextInput.types'
import * as Styled from './TextInput.styles'

export function TextInput({ size = 'md', ref, ...props }: TextInputProps) {
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
}
