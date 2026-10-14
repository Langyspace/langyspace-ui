import { useFieldControlAttributes } from '../../internal/FieldControlContext'
import * as Styled from './styles'
import type { FileInputProps } from './types'
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

export type { FileInputProps } from './types'
