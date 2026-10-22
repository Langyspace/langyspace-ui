import type { ConnectionNoticeProps } from './ConnectionNotice.types'
import * as Styled from './ConnectionNotice.styles'

export function ConnectionNotice({
  children,
  ...props
}: ConnectionNoticeProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
