import { styled } from 'styled-components'
import { fieldControlStyles } from '../../foundations/fields'
import type { FieldControlStyleProps } from '../../foundations/fields'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.input.withConfig({
  componentId: 'lsui-sc-file-input',
})<FieldControlStyleProps>`
  ${fieldControlStyles}
  min-height: ${theme.sizes.control.lg};
  padding-top: ${theme.spacing[2]};
  padding-bottom: ${theme.spacing[2]};
  &::file-selector-button {
    font: inherit;
  }
  &:not(:disabled)::file-selector-button {
    cursor: pointer;
  }
`
