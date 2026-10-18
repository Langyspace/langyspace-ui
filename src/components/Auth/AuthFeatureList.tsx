import type { ComponentPropsWithRef, ReactNode } from 'react'

import { styled } from 'styled-components'
import { authRecipe } from '../../foundations/authRecipe'

const Root = styled.ul.withConfig({
  componentId: 'lsui-sc-auth-feature-list',
})`
  display: none;
  margin: ${authRecipe.spacing.responsive.block['2xl']} 0 0;
  padding: 0;
  list-style: none;

  @media (min-width: ${authRecipe.breakpoints.md}) {
    display: grid;
    gap: ${authRecipe.spacing[3]};
  }
`

export interface AuthFeatureListProps extends ComponentPropsWithRef<'ul'> {
  children: ReactNode
}

export function AuthFeatureList({ children, ...props }: AuthFeatureListProps) {
  return <Root {...props}>{children}</Root>
}
