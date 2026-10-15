import { authRecipe } from '../../foundations/authRecipe'
import { styled } from 'styled-components'

export const Form = styled.form.withConfig({
  componentId: 'lsui-sc-auth-form',
})`
  margin-top: ${authRecipe.spacing.responsive.block.xl};
  min-width: 0;

  @media (max-width: ${authRecipe.breakpoints.mobileShell}) {
    margin-top: ${authRecipe.spacing.responsive.compactBlock.xl};
  }

  @media (min-width: ${authRecipe.breakpoints.lg}) and (max-height: 760px) {
    margin-top: ${authRecipe.spacing[6]};
  }
`
