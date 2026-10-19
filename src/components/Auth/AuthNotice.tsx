import * as Styled from './AuthNotice.styles'

import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export type AuthNoticeTone = 'error' | 'info'

export interface AuthNoticeProps extends ComponentPropsWithoutRef<'p'> {
  children: ReactNode
  tone?: AuthNoticeTone
}

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
