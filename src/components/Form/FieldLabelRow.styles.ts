import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.span.withConfig({
  componentId: 'lsui-sc-field-label-row',
})`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${theme.spacing[3]};
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.semibold};
  line-height: ${theme.typography.lineHeight.snug};
`
