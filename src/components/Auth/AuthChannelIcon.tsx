import type { ComponentPropsWithRef } from 'react'

import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

const Root = styled.span.withConfig({
  componentId: 'lsui-sc-auth-channel-icon',
})<{ $channel: 'sms' | 'whatsapp' }>`
  display: inline-flex;
  width: 1.625rem;
  height: 1.625rem;
  align-items: center;
  justify-content: center;
  border: 2px solid #ffffff;
  border-radius: 50%;
  background-color: ${({ $channel }) =>
    $channel === 'sms' ? '#000000' : '#16A34A'};
  color: ${token.colorNeutral0};

  & + & {
    margin-left: -0.625rem;
  }
`

export interface AuthChannelIconProps extends ComponentPropsWithRef<'span'> {
  channel?: 'sms' | 'whatsapp'
}

export function AuthChannelIcon({
  channel = 'sms',
  ...props
}: AuthChannelIconProps) {
  return <Root {...props} $channel={channel} />
}
