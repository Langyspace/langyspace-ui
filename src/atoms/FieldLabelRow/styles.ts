import { styled } from 'styled-components'
import { tokens } from '../../foundations/tokens'
export const Root = styled.span.withConfig({
  componentId: 'lsui-sc-field-label-row',
})`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${tokens.spacing[3]};
  color: ${tokens.color.content.default};
  font-size: ${tokens.typography.fontSize.sm};
  font-weight: ${tokens.typography.fontWeight.semibold};
  line-height: ${tokens.typography.lineHeight.snug};
`
