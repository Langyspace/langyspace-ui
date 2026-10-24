import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Form = styled.form.withConfig({
  componentId: 'lsui-sc-auth-form',
})`
  margin-top: ${theme.spacing.responsive.block.xl};
  min-width: 0;

  @media (max-width: ${theme.breakpoints.mobileShell}) {
    margin-top: ${theme.spacing.responsive.compactBlock.xl};
  }

  @media (min-width: ${theme.breakpoints.lg}) and (max-height: ${theme.viewportHeights.lg}) {
    margin-top: ${theme.spacing[6]};
  }
`
