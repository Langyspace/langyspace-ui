import type { AuthChannelIconProps } from './AuthChannelIcon.types'
import * as Styled from './AuthChannelIcon.styles'

export function AuthChannelIcon({
  channel = 'sms',
  ...props
}: AuthChannelIconProps) {
  return <Styled.Root {...props} $channel={channel} />
}
