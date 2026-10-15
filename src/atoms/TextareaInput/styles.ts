import { styled } from 'styled-components'
import {
  fieldControlStyles,
  type FieldControlStyleProps,
} from '../../foundations/fields'
import * as token from '../../foundations/tokenValues'

export const Textarea = styled.textarea.withConfig({
  componentId: 'lsui-sc-textarea-input',
})<FieldControlStyleProps>`
  ${fieldControlStyles}
  min-height: 6rem;
  padding-top: ${token.spacing3};
  padding-bottom: ${token.spacing3};
  line-height: ${token.typographyLineHeightNormal};
  resize: vertical;
`
