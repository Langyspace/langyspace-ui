import { forwardRef } from 'react'
import * as Styled from './styles'
import type { NoticeBannerProps } from './types'

export const NoticeBanner = forwardRef<HTMLElement, NoticeBannerProps>(
  function NoticeBanner({ actions, children, icon, title, ...props }, ref) {
    return (
      <Styled.Notice ref={ref} {...props}>
        <Styled.Icon>{icon}</Styled.Icon>
        <Styled.Copy>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Text>{children}</Styled.Text>
        </Styled.Copy>
        {actions ? <Styled.Actions>{actions}</Styled.Actions> : null}
      </Styled.Notice>
    )
  },
)

export type { NoticeBannerProps } from './types'
