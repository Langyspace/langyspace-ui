import { styled } from 'styled-components'
import { theme } from '../foundations/theme/theme'

export const Root = styled.button.withConfig({
  componentId: 'lsui-sc-pressable',
})`
  box-sizing: border-box;
  margin: 0;
  appearance: none;
  font: inherit;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:focus-visible {
    outline: 3px solid ${theme.semantic.focus.ring};
    outline-offset: 2px;
  }

  &:disabled {
    cursor: default;
  }
`
