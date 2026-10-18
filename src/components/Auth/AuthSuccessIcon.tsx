import type { ComponentPropsWithRef } from 'react'

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

const Icon = styled.div.withConfig({
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

export type AuthSuccessIconProps = Omit<
  ComponentPropsWithRef<'div'>,
  'children' | 'aria-hidden'
>

export function AuthSuccessIcon(props: AuthSuccessIconProps) {
  return (
    <Icon {...props} aria-hidden="true">
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m20 6-11 11-5-5" />
      </svg>
    </Icon>
  )
}
