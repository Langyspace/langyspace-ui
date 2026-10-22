import type { InlineNoticeProps } from './InlineNotice.types'
import * as Styled from './InlineNotice.styles'

export function InlineNotice({ children, ...props }: InlineNoticeProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}
