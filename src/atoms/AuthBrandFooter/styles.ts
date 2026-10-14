import { styled } from 'styled-components'
import { authRecipe } from '../../foundations/authRecipe'
export const Root = styled.p.withConfig({
  componentId: 'lsui-sc-auth-brand-footer',
})`
  margin-top: auto;
  padding-top: ${authRecipe.spacing.responsive.block['2xl']};
  color: rgba(255, 255, 255, 0.5);
  font-size: ${authRecipe.typography.fontSize.xs};
`
