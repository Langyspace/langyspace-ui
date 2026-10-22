import { styled } from 'styled-components'
import { Pressable } from '../Pressable'
import { theme } from '../../foundations/theme/theme'

export const Container = styled.div.withConfig({
  componentId: 'lsui-sc-auth-resend-action',
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing[2]};
  margin-top: ${theme.spacing[5]};
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.sm};
`

export const ResendButton = styled(Pressable).withConfig({
  componentId: 'lsui-sc-auth-resend-button',
})`
  border: 0;
  background: transparent;
  color: ${theme.colors.text.primary};
  font-weight: ${theme.typography.fontWeight.semibold};

  &:disabled {
    color: ${theme.colors.text.subtle};
  }
`
