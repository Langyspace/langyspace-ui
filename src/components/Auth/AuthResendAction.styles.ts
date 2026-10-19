import { styled } from 'styled-components'
import { authRecipe } from '../../foundations/authRecipe'
import { Pressable } from '../Pressable'

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
