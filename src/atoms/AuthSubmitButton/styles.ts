import { tokens } from '../../foundations/tokens'
import { Button as SharedButton } from '../../atoms/Button'
import { styled } from 'styled-components'

export const Button = styled(SharedButton).withConfig({
  componentId: 'lsui-sc-auth-submit-button',
})`
  margin-top: clamp(${tokens.spacing[4]}, 3svh, ${tokens.spacing[6]});

  @media (max-width: 900px) {
    margin-top: clamp(${tokens.spacing[3]}, 2.5svh, ${tokens.spacing[5]});
  }
`
