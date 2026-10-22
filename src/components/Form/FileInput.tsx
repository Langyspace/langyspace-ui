import { useFieldControlAttributes } from '../../internal/FieldControlContext'
import type { FileInputProps } from './FileInput.types'
import * as Styled from './FileInput.styles'

export function FileInput(props: FileInputProps) {
  const field = useFieldControlAttributes(props)
  const invalid =
    field['aria-invalid'] === true || field['aria-invalid'] === 'true'

  return (
    <Styled.Root
      {...props}
      {...field}
      type="file"
      $invalid={invalid}
      $size="md"
      data-ui-field="true"
    />
  )
}
