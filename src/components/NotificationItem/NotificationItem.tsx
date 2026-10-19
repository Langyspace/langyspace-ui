import * as Styled from './NotificationItem.styles'

import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface NotificationItemProps extends Omit<
  ComponentPropsWithRef<'button'>,
  'children' | 'title'
> {
  avatar: ReactNode
  title: ReactNode
  description: ReactNode
  meta: ReactNode
  action?: ReactNode
}

export function NotificationItem({
  avatar,
  title,
  description,
  meta,
  action,
  type = 'button',
  ...props
}: NotificationItemProps) {
  return (
    <Styled.Root {...props} type={type}>
      {avatar}
      <Styled.Content>
        <Styled.ItemTitle>{title}</Styled.ItemTitle>
        <Styled.ItemBody>{description}</Styled.ItemBody>
        <Styled.ItemMeta>{meta}</Styled.ItemMeta>
      </Styled.Content>
      {action && <Styled.ItemAction>{action}</Styled.ItemAction>}
    </Styled.Root>
  )
}
