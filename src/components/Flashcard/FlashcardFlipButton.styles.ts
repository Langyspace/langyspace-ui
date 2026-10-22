import { styled } from 'styled-components'
import { Pressable } from '../Pressable'
import { theme } from '../../foundations/theme/theme'

export const Button = styled(Pressable).withConfig({
  componentId: 'lsui-sc-flashcard-flip-button',
})`
  position: absolute;
  inset: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  border-radius: 1.625rem;
  background: transparent;

  &:focus-visible {
    outline: 3px solid ${theme.colors.focusRing};
    outline-offset: -3px;
  }
`
