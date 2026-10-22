import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { alpha } from '../../foundations/theme/alpha'

export const Root = styled.span.withConfig({
  componentId: 'lsui-sc-practice-level-badge',
})`
  align-self: flex-end;
  padding: 2px 8px;
  border-radius: ${theme.radius.pill};
  background: ${alpha(theme.colors.palette.white, 0.16)};
  font-size: 12px;
  font-weight: ${theme.typography.fontWeight.bold};
  line-height: ${theme.typography.lineHeight.snug};
`
