import { styled } from 'styled-components'
import { fieldControlStyles } from '../../foundations/fields'
import type { FieldControlStyleProps } from '../../foundations/fields'
import { theme } from '../../foundations/theme/theme'

export const Select = styled.select.withConfig({
  componentId: 'lsui-sc-select-input',
})<FieldControlStyleProps>`
  ${fieldControlStyles}
  padding-right: ${theme.spacing[8]};
`
