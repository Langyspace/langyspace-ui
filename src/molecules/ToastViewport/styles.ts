import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

export const Viewport = styled.div.withConfig({
  componentId: 'lsui-sc-toast-viewport',
})`
  position: fixed;
  top: ${token.spacing6};
  right: ${token.spacing6};
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: min(24rem, calc(100vw - ${token.spacing6} - ${token.spacing6}));
  gap: ${token.spacing2};
  pointer-events: none;
  @media (max-width: 640px) {
    top: ${token.spacing4};
    right: ${token.spacing4};
    left: ${token.spacing4};
    width: auto;
  }
`
