import { authRecipe } from '../../foundations/authRecipe'
import { styled } from 'styled-components'

export const Container = styled.div.withConfig({
  componentId: 'lsui-sc-auth-resend-action',
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${authRecipe.spacing[2]};
  margin-top: ${authRecipe.spacing[5]};
  color: ${authRecipe.colors.text.muted};
  font-size: ${authRecipe.typography.fontSize.sm};
`
