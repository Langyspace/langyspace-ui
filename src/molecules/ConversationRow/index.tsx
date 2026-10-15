import * as Styled from './styles'
import type { ConversationRowProps } from './types'
export function ConversationRow({
  avatar,
  title,
  preview,
  meta,
  badge,
  unread = false,
  type = 'button',
  ...props
}: ConversationRowProps) {
  const selected = Boolean(
    props['aria-current'] && props['aria-current'] !== 'false',
  )
  return (
    <Styled.Root {...props} type={type} $selected={selected}>
      {avatar}
      <Styled.Body>
        <Styled.Top>
          <Styled.Title title={title}>{title}</Styled.Title>
          {meta && <Styled.Meta>{meta}</Styled.Meta>}
        </Styled.Top>
        <Styled.Bottom>
          <Styled.Preview $unread={unread} title={preview}>
            {preview}
          </Styled.Preview>
          {badge}
        </Styled.Bottom>
      </Styled.Body>
    </Styled.Root>
  )
}
export type { ConversationRowProps } from './types'
