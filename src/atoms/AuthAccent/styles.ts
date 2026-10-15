import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

export const Accent = styled.span.withConfig({
  componentId: 'lsui-sc-auth-accent',
})`
  color: ${token.colorAccentDefault};
`
