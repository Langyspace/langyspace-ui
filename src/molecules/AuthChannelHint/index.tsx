import * as Styled from './styles'
import type { AuthChannelHintProps } from './types'
export function AuthChannelHint({ children, ...props }: AuthChannelHintProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
export type { AuthChannelHintProps } from './types'
