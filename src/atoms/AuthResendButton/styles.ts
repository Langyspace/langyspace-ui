import { authRecipe } from '../../foundations/authRecipe'
import { Pressable } from '../../primitives/Pressable'
import { styled } from 'styled-components'

export const ResendButton = styled(Pressable).withConfig({
  componentId: 'lsui-sc-auth-resend-button',
})`
  border: 0;
  background: transparent;
  color: ${authRecipe.colors.text.primary};
  font-weight: ${authRecipe.typography.fontWeight.semibold};

  &:disabled {
    color: ${authRecipe.colors.text.subtle};
  }
`
