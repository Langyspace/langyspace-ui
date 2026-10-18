import type { ComponentPropsWithRef, ReactNode } from 'react'

import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

const Root = styled.a.withConfig({ componentId: 'lsui-sc-brand-link' })`
  display: inline-flex;
  flex: 0 1 auto;
  min-width: 0;
  align-items: center;
  text-decoration: none;
  &:focus-visible {
    outline: 3px solid ${token.colorFocus};
    outline-offset: 2px;
  }
`

export interface BrandLinkProps extends ComponentPropsWithRef<'a'> {
  children: ReactNode
}

export function BrandLink({ children, ...props }: BrandLinkProps) {
  return <Root {...props}>{children}</Root>
}
