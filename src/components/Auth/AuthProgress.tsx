import type { ComponentPropsWithRef } from 'react'

import { authRecipe } from '../../foundations/authRecipe'
import { styled, keyframes } from 'styled-components'

const load = keyframes`
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
`

const Progress = styled.div.withConfig({
  componentId: 'lsui-sc-auth-progress',
})`
  width: 8.75rem;
  height: 0.1875rem;
  overflow: hidden;
  margin-top: ${authRecipe.spacing[6]};
  border-radius: ${authRecipe.radius.pill};
  background-color: ${authRecipe.colors.surface.subtle};

  &::after {
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${authRecipe.colors.brand.accent};
    animation: ${load} 2600ms ease forwards;
    content: '';
    transform-origin: left;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
      transform: scaleX(1);
    }
  }
`

export type AuthProgressProps = Omit<
  ComponentPropsWithRef<'div'>,
  'children' | 'aria-hidden'
>

export function AuthProgress(props: AuthProgressProps) {
  return <Progress {...props} aria-hidden="true" />
}
