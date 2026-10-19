import type { ComponentPropsWithRef, ReactNode } from 'react'

import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

const Root = styled.header.withConfig({
  componentId: 'lsui-sc-document-header',
})`
  border-bottom: 1px solid ${token.colorSurfaceBorderSubtle};
  background: ${token.colorNeutral0};
`

export interface DocumentHeaderProps extends ComponentPropsWithRef<'header'> {
  children: ReactNode
}

export function DocumentHeader({ children, ...props }: DocumentHeaderProps) {
  return <Root {...props}>{children}</Root>
}
