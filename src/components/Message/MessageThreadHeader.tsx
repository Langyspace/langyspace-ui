import { Avatar } from '../Avatar/Avatar'
import * as Styled from './MessageThreadHeader.styles'
import type { MessageThreadHeaderProps } from './MessageThreadHeader.types'

export function MessageThreadHeader({
  imageUrl,
  initials,
  leadingAction,
  subtitle,
  title,
  trailingAction,
  ref,
  ...headerProps
}: MessageThreadHeaderProps) {
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
}
