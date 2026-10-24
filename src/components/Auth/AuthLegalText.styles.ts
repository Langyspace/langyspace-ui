import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.p.withConfig({
  componentId: 'lsui-sc-auth-legal-text',
})`
  margin: 1rem 0 0;
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.xs};
  line-height: ${theme.typography.lineHeight.normal};

  & + button,
  & + div > button {
    margin-top: ${theme.spacing[4]};
  }
`
