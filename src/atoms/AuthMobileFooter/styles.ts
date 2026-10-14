import { styled } from 'styled-components'
import { authRecipe } from '../../foundations/authRecipe'
export const Root = styled.p.withConfig({
  componentId: 'lsui-sc-auth-mobile-footer',
})`
  display: none;
  margin-top: auto;
  padding-top: ${authRecipe.spacing.responsive.compactBlock.sm};
  padding-right: ${authRecipe.spacing[6]};
  padding-bottom: ${authRecipe.spacing.responsive.compactBlock.md};
  padding-left: ${authRecipe.spacing[6]};
  color: ${authRecipe.colors.text.muted};
  font-size: ${authRecipe.typography.fontSize.xs};
  letter-spacing: ${authRecipe.typography.letterSpacing.wide};
  text-align: center;

  @media (min-width: ${authRecipe.breakpoints.sm}) {
    display: block;
  }

  @media (min-width: ${authRecipe.breakpoints.lg}) {
    display: none;
  }
`
