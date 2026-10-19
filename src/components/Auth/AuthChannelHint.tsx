import type { ComponentPropsWithRef, ReactNode } from 'react'

import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

const Root = styled.div.withConfig({
  componentId: 'lsui-sc-auth-channel-hint',
})`
  display: flex;
  align-items: center;
  gap: ${token.spacing3};
  margin-top: ${token.spacing4};
  border-radius: ${token.radiusRounded};
  background-color: ${token.colorNeutral50};
  padding: 0.75rem 1rem;
  color: ${token.colorContentMuted};
  font-size: ${token.typographyFontSizeXs};
  line-height: 1.45;

  @media (min-width: 768px) {
    font-size: ${token.typographyFontSizeSm};
  }
`

export interface AuthChannelHintProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode
}

export function AuthChannelHint({ children, ...props }: AuthChannelHintProps) {
  return <Root {...props}>{children}</Root>
}
