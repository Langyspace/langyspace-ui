import { useFieldControl } from '../../internal/useFieldControl'
import type { SelectInputProps } from './SelectInput.types'
import * as Styled from './SelectInput.styles'

export function SelectInput({ size = 'md', ref, ...props }: SelectInputProps) {
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
}
