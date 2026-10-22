import * as Styled from './AuthNotice.styles'
import type { AuthNoticeProps } from './AuthNotice.types'

export function AuthNotice({
  children,
  tone = 'error',
  ...props
}: AuthNoticeProps) {
  return (
    <Styled.Notice {...props} $tone={tone}>
      {children}
    </Styled.Notice>
  )
}
