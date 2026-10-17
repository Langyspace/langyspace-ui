import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

export const Root = styled.a.withConfig({ componentId: 'lsui-sc-brand-link' })`
  display: inline-flex;
  flex: 0 1 auto;
  min-width: 0;
  align-items: center;
  text-decoration: none;
  &:focus-visible {
    outline: 3px solid ${token.colorFocus};
    outline-offset: 2px;
  }
`
