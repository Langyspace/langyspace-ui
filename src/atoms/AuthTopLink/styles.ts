import { authRecipe } from '../../foundations/authRecipe'
import { styled } from 'styled-components'

export const Link = styled.a.withConfig({
  componentId: 'lsui-sc-auth-top-link',
})`
  display: inline-flex;
  flex-wrap: wrap;
  gap: ${authRecipe.spacing[1]};
  color: ${authRecipe.colors.text.muted};
  font-size: ${authRecipe.typography.fontSize.sm};
  font-weight: ${authRecipe.typography.fontWeight.regular};
  line-height: ${authRecipe.typography.lineHeight.normal};
  text-decoration: none;

  @media (max-width: ${authRecipe.breakpoints.xs}) {
    font-size: ${authRecipe.typography.fontSize.xs};
  }
`
