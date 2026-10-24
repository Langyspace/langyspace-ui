import { styled } from 'styled-components'
import { fieldControlStyles } from '../../foundations/fields'
import type { FieldControlStyleProps } from '../../foundations/fields'
import { theme } from '../../foundations/theme/theme'

export const Textarea = styled.textarea.withConfig({
  componentId: 'lsui-sc-textarea-input',
})<FieldControlStyleProps>`
  ${fieldControlStyles}
  min-height: 6rem;
  padding-top: ${theme.spacing[3]};
  padding-bottom: ${theme.spacing[3]};
  line-height: ${theme.typography.lineHeight.normal};
  resize: vertical;
`
