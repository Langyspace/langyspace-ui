import type { ComponentPropsWithRef, ReactNode } from 'react'

import { authRecipe } from '../../foundations/authRecipe'
import { styled } from 'styled-components'

const Container = styled.div.withConfig({
  componentId: 'lsui-sc-auth-success-state',
})`
  display: flex;
  min-height: 22rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${authRecipe.spacing[5]} 0;
  text-align: center;

  @media (max-height: 620px) {
    min-height: 18rem;
  }
`

export interface AuthSuccessStateProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode
}

export function AuthSuccessState({
  children,
  ...props
}: AuthSuccessStateProps) {
  return <Container {...props}>{children}</Container>
}
