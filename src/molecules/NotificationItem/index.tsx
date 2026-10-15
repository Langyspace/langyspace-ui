import * as Styled from './styles'
import type { NotificationItemProps } from './types'
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
export type { NotificationItemProps } from './types'
