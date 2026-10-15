import { styled } from 'styled-components'
import { authRecipe } from '../../foundations/authRecipe'
export const Root = styled.ul.withConfig({
  componentId: 'lsui-sc-auth-feature-list',
})`
  display: none;
  margin: ${authRecipe.spacing.responsive.block['2xl']} 0 0;
  padding: 0;
  list-style: none;

  @media (min-width: ${authRecipe.breakpoints.md}) {
    display: grid;
    gap: ${authRecipe.spacing[3]};
  }
`
