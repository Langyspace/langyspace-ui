import type { ComponentPropsWithRef, ReactNode } from 'react'

import { styled } from 'styled-components'
import { authRecipe } from '../../foundations/authRecipe'

const Root = styled.p.withConfig({
  componentId: 'lsui-sc-auth-brand-footer',
})`
  margin-top: auto;
  padding-top: ${authRecipe.spacing.responsive.block['2xl']};
  color: rgba(255, 255, 255, 0.5);
  font-size: ${authRecipe.typography.fontSize.xs};
`

export interface AuthBrandFooterProps extends ComponentPropsWithRef<'p'> {
  children: ReactNode
}

export function AuthBrandFooter({ children, ...props }: AuthBrandFooterProps) {
  return <Root {...props}>{children}</Root>
}
