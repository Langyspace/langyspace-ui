import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
export const Root = styled.span.withConfig({
  componentId: 'lsui-sc-quiz-blank',
})`
  display: inline-block;
  width: 58px;
  height: 3px;
  margin: 0 5px;
  border-radius: ${token.radiusPill};
  background: var(--quiz-line-strong, #d9d9d6);
  vertical-align: baseline;
  @media (max-width: 640px) {
    width: 48px;
  }
`
