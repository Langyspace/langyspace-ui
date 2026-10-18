import type { ComponentPropsWithRef, ReactNode } from 'react'

import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

const Root = styled.div.withConfig({
  componentId: 'lsui-sc-practice-cover-value',
})`
  color: inherit;
  font-size: 40px;
  font-weight: ${token.typographyFontWeightBold};
  line-height: 1;
  display: flex;
  align-items: center;
`

export interface PracticeCoverValueProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode
}

export function PracticeCoverValue({
  children,
  ...props
}: PracticeCoverValueProps) {
  return <Root {...props}>{children}</Root>
}
