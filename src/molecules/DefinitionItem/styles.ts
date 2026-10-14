import { styled } from 'styled-components'
import { tokens } from '../../foundations/tokens'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-definition-item',
})`
  min-width: 0;
  border: 1px solid ${tokens.color.surfaceBorder.default};
  border-radius: 14px;
  padding: 12px;
`
export const Label = styled.span`
  display: block;
  color: ${tokens.color.content.muted};
  font-size: 12px;
  font-weight: 700;
`
export const Value = styled.strong`
  display: block;
  margin-top: 4px;
  color: ${tokens.color.content.default};
  font-size: 14px;
  font-weight: 700;
  overflow-wrap: anywhere;
`
