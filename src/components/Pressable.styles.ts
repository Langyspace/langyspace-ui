import { styled } from 'styled-components'
import { resolveTheme } from '../foundations/theme/resolveTheme'
import { theme as defaultTheme } from '../foundations/theme/theme'

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
    outline: 3px solid
      ${(context) => resolveTheme(context).semantic?.focus.ring ?? defaultTheme.semantic.focus.ring};
    outline-offset: 2px;
  }

  &:disabled {
    cursor: default;
  }
`
