import type { ComponentPropsWithRef, ReactNode } from 'react'

import { styled } from 'styled-components'

const Root = styled.a.withConfig({
  componentId: 'lsui-sc-auth-footer-link',
})`
  color: inherit;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.16em;

  &:hover {
    opacity: 0.8;
  }
`

export interface AuthFooterLinkProps extends ComponentPropsWithRef<'a'> {
  children: ReactNode
}

export function AuthFooterLink({ children, ...props }: AuthFooterLinkProps) {
  return <Root {...props}>{children}</Root>
}
