import { styled } from 'styled-components'
import { tokens } from '../../foundations/tokens'

export const Viewport = styled.div.withConfig({
  componentId: 'lsui-sc-toast-viewport',
})`
  position: fixed;
  top: ${tokens.spacing[6]};
  right: ${tokens.spacing[6]};
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: min(24rem, calc(100vw - ${tokens.spacing[6]} - ${tokens.spacing[6]}));
  gap: ${tokens.spacing[2]};
  pointer-events: none;
  @media (max-width: 640px) {
    top: ${tokens.spacing[4]};
    right: ${tokens.spacing[4]};
    left: ${tokens.spacing[4]};
    width: auto;
  }
`
