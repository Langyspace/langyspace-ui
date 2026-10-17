import { styled } from 'styled-components'
import {
  fieldControlStyles,
  type FieldControlStyleProps,
} from '../../foundations/fields'
import * as token from '../../foundations/tokenValues'

export const Root = styled.input.withConfig({
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
