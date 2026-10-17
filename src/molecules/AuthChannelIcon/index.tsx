import * as Styled from './styles'
import type { AuthChannelIconProps } from './types'

export function AuthChannelIcon({
  channel = 'sms',
  ...props
}: AuthChannelIconProps) {
  return <Styled.Root {...props} $channel={channel} />
}

export type { AuthChannelIconProps } from './types'
