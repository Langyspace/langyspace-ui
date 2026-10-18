import type { ComponentPropsWithRef, ReactNode } from 'react'

import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

const authTitleSize = { mobile: '1.75rem', desktop: '2.375rem' } as const
const authTitleBreakpoint = '768px'
const authTitleLineHeight = 1.1

const Title = styled.h2.withConfig({
  componentId: 'lsui-sc-auth-title',
})`
  margin: 0;
  color: ${token.colorContentDefault};
  font-size: ${authTitleSize.mobile};
  font-weight: ${token.typographyFontWeightBold};
  letter-spacing: 0;
  line-height: ${authTitleLineHeight};

  @media (min-width: ${authTitleBreakpoint}) {
    font-size: ${authTitleSize.desktop};
  }
`

export interface AuthTitleProps extends ComponentPropsWithRef<'h2'> {
  children: ReactNode
}

export function AuthTitle({ children, ...props }: AuthTitleProps) {
  return <Title {...props}>{children}</Title>
}
