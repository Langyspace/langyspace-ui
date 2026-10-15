import { tokens } from '../../foundations/tokens'
import { styled } from 'styled-components'
import { Button as BaseButton } from '../../atoms/Button'

export const Button = styled(BaseButton).withConfig({
  componentId: 'lsui-sc-auth-back-button',
})`
  margin-bottom: ${tokens.spacing[5]};

  @media (min-width: 768px) {
    margin-bottom: ${tokens.spacing[6]};
  }
`
