import type { ComponentPropsWithRef, ReactNode } from 'react'

import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

const Root = styled.div.withConfig({
  componentId: 'lsui-sc-inline-notice',
})`
  padding: ${token.spacing3} ${token.spacing4};
  border: 1px solid ${token.colorSurfaceBorderSubtle};
  border-radius: ${token.radiusCard};
  color: ${token.colorContentSecondary};
  background: ${token.colorNeutral50};
  font-size: ${token.typographyFontSizeSm};
  line-height: ${token.typographyLineHeightNormal};
`

export interface InlineNoticeProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode
}

export function InlineNotice({ children, ...props }: InlineNoticeProps) {
  return <Root {...props}>{children}</Root>
}
