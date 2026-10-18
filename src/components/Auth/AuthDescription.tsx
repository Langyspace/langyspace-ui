import type { ComponentPropsWithRef, ReactNode } from 'react'

import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

const authDescriptionWidth = '25rem'
const authDescriptionLineHeight = 1.55
const authDescriptionSpacing = `clamp(${token.spacing2}, 1.5svh, ${token.spacing3})`

const Description = styled.p.withConfig({
  componentId: 'lsui-sc-auth-description',
})`
  max-width: ${authDescriptionWidth};
  margin: 0;
  margin-top: ${authDescriptionSpacing};
  color: ${token.colorContentMuted};
  font-size: ${token.typographyFontSizeSm};
  line-height: ${authDescriptionLineHeight};
`

export interface AuthDescriptionProps extends ComponentPropsWithRef<'p'> {
  children: ReactNode
}

export function AuthDescription({ children, ...props }: AuthDescriptionProps) {
  return <Description {...props}>{children}</Description>
}
