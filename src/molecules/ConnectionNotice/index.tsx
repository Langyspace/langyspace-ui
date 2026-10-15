import * as Styled from './styles'
import type { ConnectionNoticeProps } from './types'
export function ConnectionNotice({
  children,
  ...props
}: ConnectionNoticeProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
export type { ConnectionNoticeProps } from './types'
