import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

export const Pressable = styled.button.withConfig({
  componentId: 'lsui-sc-pressable',
})`
  box-sizing: border-box;
  margin: 0;
  appearance: none;
  font: inherit;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:focus-visible {
    outline: 3px solid ${token.colorFocus};
    outline-offset: 2px;
  }

  &:disabled {
    cursor: default;
  }
`
