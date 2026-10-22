import { styled, keyframes } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Container = styled.div.withConfig({
  componentId: 'lsui-sc-auth-success-state',
})`
  display: flex;
  min-height: 22rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing[5]} 0;
  text-align: center;

  @media (max-height: ${theme.viewportHeights.sm}) {
    min-height: 18rem;
  }
`

const pop = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`

export const Icon = styled.div.withConfig({
  componentId: 'lsui-sc-auth-success-icon',
})`
  display: inline-flex;
  width: 6rem;
  height: 6rem;
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.spacing[6]};
  border-radius: ${theme.radius.circle};
  background-color: ${theme.colors.brand.accent};
  color: ${theme.colors.text.inverse};
  animation: ${pop} 400ms cubic-bezier(0.2, 1.4, 0.4, 1);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`
