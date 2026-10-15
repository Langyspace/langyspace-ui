import { authRecipe } from '../../foundations/authRecipe'
import { styled, keyframes } from 'styled-components'

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
  margin-bottom: ${authRecipe.spacing[6]};
  border-radius: ${authRecipe.radius.circle};
  background-color: ${authRecipe.colors.brand.accent};
  color: ${authRecipe.colors.text.inverse};
  animation: ${pop} 400ms cubic-bezier(0.2, 1.4, 0.4, 1);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`
