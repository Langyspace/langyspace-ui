import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-definition-item',
})`
  min-width: 0;
  border: 1px solid ${theme.semantic.border.default};
  border-radius: 14px;
  padding: 12px;
`

export const Label = styled.span`
  display: block;
  color: ${theme.colors.text.muted};
  font-size: 12px;
  font-weight: ${theme.typography.fontWeight.bold};
`

export const Value = styled.strong`
  display: block;
  margin-top: 4px;
  color: ${theme.colors.text.primary};
  font-size: 14px;
  font-weight: ${theme.typography.fontWeight.bold};
  overflow-wrap: anywhere;
`
