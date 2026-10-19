import { forwardRef } from 'react'
import { Avatar } from '../Avatar/Avatar'
import * as Styled from './MessageThreadHeader.styles'

import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface MessageThreadHeaderProps extends Omit<
  ComponentPropsWithRef<'header'>,
  'children' | 'title'
> {
  imageUrl?: string
  initials: string
  leadingAction?: ReactNode
  subtitle?: string
  title: string
  trailingAction?: ReactNode
}

export const MessageThreadHeader = forwardRef<
  HTMLElement,
  MessageThreadHeaderProps
>(function MessageThreadHeader(
  {
    imageUrl,
    initials,
    leadingAction,
    subtitle,
    title,
    trailingAction,
    ...headerProps
  },
  ref,
) {
  return (
    <Styled.Header
      {...headerProps}
      ref={ref}
      data-ui-message-thread-header="true"
    >
      {leadingAction != null ? (
        <Styled.Action data-ui-message-thread-header-part="leading-action">
          {leadingAction}
        </Styled.Action>
      ) : null}
      <Styled.Identity>
        <Avatar
          aria-hidden="true"
          imageUrl={imageUrl}
          initials={initials}
          size="sm"
        />
        <Styled.Text>
          <Styled.Title title={title}>{title}</Styled.Title>
          {subtitle ? (
            <Styled.Subtitle title={subtitle}>{subtitle}</Styled.Subtitle>
          ) : null}
        </Styled.Text>
      </Styled.Identity>
      {trailingAction != null ? (
        <Styled.Action data-ui-message-thread-header-part="trailing-action">
          {trailingAction}
        </Styled.Action>
      ) : null}
    </Styled.Header>
  )
})
