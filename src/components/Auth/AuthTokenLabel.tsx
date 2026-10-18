import type { ComponentPropsWithRef, ReactNode } from 'react'

import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

const Root = styled.label.withConfig({
  componentId: 'lsui-sc-auth-token-label',
})`
  display: block;
  margin-bottom: ${token.spacing3};
  color: ${token.colorContentMuted};
  font-size: ${token.typographyFontSizeXs};
  font-weight: ${token.typographyFontWeightSemibold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

export interface AuthTokenLabelProps extends ComponentPropsWithRef<'label'> {
  children: ReactNode
}

export function AuthTokenLabel({ children, ...props }: AuthTokenLabelProps) {
  return <Root {...props}>{children}</Root>
}
