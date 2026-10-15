import { styled } from 'styled-components'
import {
  fieldControlStyles,
  type FieldControlStyleProps,
} from '../../foundations/fields'
import * as token from '../../foundations/tokenValues'

export const Select = styled.select.withConfig({
  componentId: 'lsui-sc-select-input',
})<FieldControlStyleProps>`
  ${fieldControlStyles}
  padding-right: ${token.spacing8};
`
