import * as Styled from './styles'
import type { InlineNoticeProps } from './types'

export function InlineNotice({ children, ...props }: InlineNoticeProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>
}

export type { InlineNoticeProps } from './types'
