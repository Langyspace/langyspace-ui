import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.input.withConfig({
  componentId: 'lsui-sc-checkbox',
})`
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin: 0;
  accent-color: ${theme.colors.palette.neutral[900]};
  cursor: pointer;
  &:focus-visible {
    outline: 3px solid ${theme.semantic.focus.ring};
    outline-offset: 3px;
  }
  &:disabled {
    cursor: default;
  }
`
