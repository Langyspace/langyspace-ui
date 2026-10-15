import { styled } from 'styled-components'
import { authRecipe } from '../../foundations/authRecipe'
export const Root = styled.span.withConfig({
  componentId: 'lsui-sc-auth-brand-accent',
})`
  background-image: linear-gradient(
    ${authRecipe.colors.brand.accent},
    ${authRecipe.colors.brand.accent}
  );
  background-position: 0 100%;
  background-repeat: no-repeat;
  background-size: 100% 0.25rem;
  padding-bottom: ${authRecipe.spacing[1]};
`
