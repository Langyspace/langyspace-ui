import * as token from '../../foundations/tokenValues'
import { styled } from 'styled-components'
import { Button as BaseButton } from '../../atoms/Button'

export const Button = styled(BaseButton).withConfig({
  componentId: 'lsui-sc-auth-back-button',
})`
  margin-bottom: ${token.spacing5};

  @media (min-width: 768px) {
    margin-bottom: ${token.spacing6};
  }
`
