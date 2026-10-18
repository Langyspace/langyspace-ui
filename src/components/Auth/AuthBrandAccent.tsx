import type { ComponentPropsWithRef, ReactNode } from 'react'

import { styled } from 'styled-components'
import { authRecipe } from '../../foundations/authRecipe'

const Root = styled.span.withConfig({
  componentId: 'lsui-sc-auth-brand-accent',
})`
  background-image: linear-gradient(
    ${authRecipe.colors.brand.accent},
    ${authRecipe.colors.brand.accent}
  );
  background-position: 0 100%;
  background-repeat: no-repeat;
  background-size: 100% 0.25rem;
  padding-bottom: ${authRecipe.spacing[1]};
`

export interface AuthBrandAccentProps extends ComponentPropsWithRef<'span'> {
  children: ReactNode
}

export function AuthBrandAccent({ children, ...props }: AuthBrandAccentProps) {
  return <Root {...props}>{children}</Root>
}
