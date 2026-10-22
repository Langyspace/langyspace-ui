import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-shadowing-active-phrase',
})`
  max-width: 22rem;
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  line-height: 1.34;
  text-wrap: balance;

  [data-ui-skeleton] {
    margin-right: auto;
    margin-left: auto;
  }

  [data-ui-skeleton] + [data-ui-skeleton] {
    margin-top: ${theme.spacing[2]};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.typography.fontSize['2xl']};
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme.breakpoints.mobileShell}) and (min-height: ${theme.viewportHeights.tall}) {
    max-width: 34rem;
    font-size: ${theme.typography.fontSize['3xl']};
    line-height: 1.28;
  }
`
