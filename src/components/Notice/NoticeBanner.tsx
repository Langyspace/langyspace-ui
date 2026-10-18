import { forwardRef } from 'react'
import * as Styled from './NoticeBanner.styles'

import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export interface NoticeBannerProps extends Omit<
  ComponentPropsWithoutRef<'aside'>,
  'title'
> {
  icon: ReactNode
  title: string
  children: ReactNode
  actions?: ReactNode
}

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
