import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.label.withConfig({
  componentId: 'lsui-sc-auth-token-label',
})`
  display: block;
  margin-bottom: ${theme.spacing[3]};
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.semibold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`
