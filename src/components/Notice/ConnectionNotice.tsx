import type { ComponentPropsWithRef, ReactNode } from 'react'

import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

const Root = styled.div.withConfig({
  componentId: 'lsui-sc-connection-notice',
})`
  display: flex;
  align-items: center;
  gap: ${token.spacing2};
  margin-bottom: ${token.spacing3};
  color: ${token.colorStatusWarningForeground};
  font-size: ${token.typographyFontSizeSm};
  line-height: ${token.typographyLineHeightNormal};

  svg {
    flex: 0 0 auto;
  }
`

export interface ConnectionNoticeProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode
}

export function ConnectionNotice({
  children,
  ...props
}: ConnectionNoticeProps) {
  return <Root {...props}>{children}</Root>
}
