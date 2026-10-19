import type { ComponentPropsWithRef, ReactNode } from 'react'

import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

const Root = styled.nav.withConfig({
  componentId: 'lsui-sc-document-navigation',
})`
  display: flex;
  align-items: center;
  gap: ${token.spacing2};
`

export interface DocumentNavigationProps extends ComponentPropsWithRef<'nav'> {
  children: ReactNode
}

export function DocumentNavigation({
  children,
  ...props
}: DocumentNavigationProps) {
  return <Root {...props}>{children}</Root>
}
