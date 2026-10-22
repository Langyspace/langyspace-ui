import type { AuthChannelHintProps } from './AuthChannelHint.types'
import * as Styled from './AuthChannelHint.styles'

export function AuthChannelHint({ children, ...props }: AuthChannelHintProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
