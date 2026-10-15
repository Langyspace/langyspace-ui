import { authRecipe } from '../../foundations/authRecipe'
import { styled } from 'styled-components'

export const Highlight = styled.span.withConfig({
  componentId: 'lsui-sc-auth-top-link-highlight',
})`
  color: ${authRecipe.colors.text.primary};
  text-decoration: underline;
  text-underline-offset: 0.12em;
`
