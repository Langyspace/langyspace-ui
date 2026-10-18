import type { ComponentPropsWithRef, ReactNode } from 'react'

import { styled } from 'styled-components'
import { authRecipe } from '../../foundations/authRecipe'

const Root = styled.h1.withConfig({
  componentId: 'lsui-sc-auth-brand-title',
})`
  max-width: 30rem;
  margin-top: ${authRecipe.spacing.responsive.block['4xl']};
  color: ${authRecipe.colors.text.inverse};
  font-size: 2.25rem;
  font-weight: ${authRecipe.typography.fontWeight.bold};
  letter-spacing: ${authRecipe.typography.letterSpacing.normal};
  line-height: ${authRecipe.typography.lineHeight.tight};

  @media (min-width: ${authRecipe.breakpoints.md}) {
    font-size: ${authRecipe.typography.fontSize['4xl']};
  }

  @media (min-width: ${authRecipe.breakpoints.lg}) {
    font-size: 3.375rem;
  }

  @media (min-width: ${authRecipe.breakpoints.lg}) and (max-height: 760px) {
    margin-top: ${authRecipe.spacing[12]};
  }
`

export interface AuthBrandTitleProps extends ComponentPropsWithRef<'h1'> {
  children: ReactNode
}

export function AuthBrandTitle({ children, ...props }: AuthBrandTitleProps) {
  return <Root {...props}>{children}</Root>
}
