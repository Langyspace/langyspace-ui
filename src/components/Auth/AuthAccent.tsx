import type { ComponentPropsWithRef, ReactNode } from 'react'

import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

const Accent = styled.span.withConfig({
  componentId: 'lsui-sc-auth-accent',
})`
  color: ${token.colorAccentDefault};
`

export interface AuthAccentProps extends ComponentPropsWithRef<'span'> {
  children: ReactNode
}

export function AuthAccent({ children, ...props }: AuthAccentProps) {
  return <Accent {...props}>{children}</Accent>
}
