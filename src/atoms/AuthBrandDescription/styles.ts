import { styled } from 'styled-components'
import { authRecipe } from '../../foundations/authRecipe'
export const Root = styled.p.withConfig({
  componentId: 'lsui-sc-auth-brand-description',
})`
  max-width: 27.5rem;
  margin-top: ${authRecipe.spacing.responsive.block.sm};
  color: rgba(255, 255, 255, 0.7);
  font-size: ${authRecipe.typography.fontSize.lg};
  line-height: ${authRecipe.typography.lineHeight.normal};
`
