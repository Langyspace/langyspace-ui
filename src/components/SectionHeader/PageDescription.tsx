import type { ComponentPropsWithRef, ReactNode } from 'react'

import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

const Root = styled.p.withConfig({
  componentId: 'lsui-sc-page-description',
})`
  margin: 4px 0 0;
  color: ${token.colorContentMuted};
  font-size: 14px;
  line-height: ${token.typographyLineHeightNormal};
`

export interface PageDescriptionProps extends ComponentPropsWithRef<'p'> {
  children: ReactNode
}

export function PageDescription({ children, ...props }: PageDescriptionProps) {
  return <Root {...props}>{children}</Root>
}
