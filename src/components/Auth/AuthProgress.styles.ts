import { styled, keyframes } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

const load = keyframes`
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
`

export const Progress = styled.div.withConfig({
  componentId: 'lsui-sc-auth-progress',
})`
  width: 8.75rem;
  height: 0.1875rem;
  overflow: hidden;
  margin-top: ${theme.spacing[6]};
  border-radius: ${theme.radius.pill};
  background-color: ${theme.colors.surface.subtle};

  &::after {
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.brand.accent};
    animation: ${load} 2600ms ease forwards;
    content: '';
    transform-origin: left;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
      transform: scaleX(1);
    }
  }
`
