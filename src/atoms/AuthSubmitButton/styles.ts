import * as token from '../../foundations/tokenValues'
import { Button as SharedButton } from '../../atoms/Button'
import { styled } from 'styled-components'

export const Button = styled(SharedButton).withConfig({
  componentId: 'lsui-sc-auth-submit-button',
})`
  margin-top: clamp(${token.spacing4}, 3svh, ${token.spacing6});

  @media (max-width: 900px) {
    margin-top: clamp(${token.spacing3}, 2.5svh, ${token.spacing5});
  }
`
