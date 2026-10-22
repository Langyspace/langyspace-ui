import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Viewport = styled.div.withConfig({
  componentId: 'lsui-sc-toast-viewport',
})`
  position: fixed;
  top: ${theme.spacing[6]};
  right: ${theme.spacing[6]};
  z-index: ${theme.zIndex.toast};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: min(24rem, calc(100vw - ${theme.spacing[6]} - ${theme.spacing[6]}));
  gap: ${theme.spacing[2]};
  pointer-events: none;
  @media (max-width: ${theme.breakpoints.sm}) {
    top: ${theme.spacing[4]};
    right: ${theme.spacing[4]};
    left: ${theme.spacing[4]};
    width: auto;
  }
`
