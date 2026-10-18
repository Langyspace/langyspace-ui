import { useFieldControlAttributes } from '../../internal/FieldControlContext'

import type { ComponentPropsWithRef } from 'react'

import { styled } from 'styled-components'
import {
  fieldControlStyles,
  type FieldControlStyleProps,
} from '../../foundations/fields'
import * as token from '../../foundations/tokenValues'

const Root = styled.input.withConfig({
  componentId: 'lsui-sc-file-input',
})<FieldControlStyleProps>`
  ${fieldControlStyles}
  min-height: ${token.controlHeightLg};
  padding-top: ${token.spacing2};
  padding-bottom: ${token.spacing2};
  &::file-selector-button {
    font: inherit;
  }
  &:not(:disabled)::file-selector-button {
    cursor: pointer;
  }
`

export type FileInputProps = Omit<
  ComponentPropsWithRef<'input'>,
  'type' | 'size' | 'value' | 'defaultValue' | 'children'
>

export function FileInput(props: FileInputProps) {
  const field = useFieldControlAttributes(props)
  const invalid =
    field['aria-invalid'] === true || field['aria-invalid'] === 'true'

  return (
    <Root
      {...props}
      {...field}
      type="file"
      $invalid={invalid}
      $size="md"
      data-ui-field="true"
    />
  )
}
