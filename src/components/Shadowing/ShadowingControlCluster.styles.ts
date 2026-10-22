import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-shadowing-control-cluster',
})`
  display: flex;
  width: min(22rem, 100%);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing[4]};

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 100%;
    gap: ${theme.spacing[4]};
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme.breakpoints.mobileShell}) and (min-height: ${theme.viewportHeights.tall}) {
    width: min(28rem, 100%);
  }
`
