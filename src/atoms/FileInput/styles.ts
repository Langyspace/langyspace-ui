import { styled } from 'styled-components'
import {
  fieldControlStyles,
  type FieldControlStyleProps,
} from '../../foundations/fields'
import { tokens } from '../../foundations/tokens'
export const Root = styled.input.withConfig({
  componentId: 'lsui-sc-file-input',
})<FieldControlStyleProps>`
  ${fieldControlStyles}
  min-height: ${tokens.control.height.lg};
  padding-top: ${tokens.spacing[2]};
  padding-bottom: ${tokens.spacing[2]};
  &::file-selector-button {
    font: inherit;
  }
  &:not(:disabled)::file-selector-button {
    cursor: pointer;
  }
`
