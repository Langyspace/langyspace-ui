import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-shadowing-context-phrase',
})`
  min-height: 1.25rem;
  max-width: 22rem;
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: 400;
  line-height: ${theme.typography.lineHeight.normal};

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme.breakpoints.mobileShell}) and (min-height: ${theme.viewportHeights.tall}) {
    max-width: 32rem;
    font-size: ${theme.typography.fontSize.md};
  }
`
