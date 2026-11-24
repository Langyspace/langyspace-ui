import * as Styled from './MessageBubble.styles'
import type { MessageBubbleProps } from './MessageBubble.types'

export function MessageBubble({
  children,
  dateTime,
  side = 'incoming',
  appearance = 'brand',
  status,
  statusLabel,
  timestamp,
  ref,
  ...props
}: MessageBubbleProps) {
  return (
    <Styled.Container
      {...props}
      ref={ref}
      $side={side}
      $appearance={appearance}
      $status={status}
      data-side={side}
      data-status={status}
      data-ui-message-bubble="true"
    >
      <Styled.Bubble $side={side} $status={status} $appearance={appearance}>
        <Styled.Content>{children}</Styled.Content>
        <Styled.Meta $side={side} $status={status} $appearance={appearance}>
          <Styled.Timestamp dateTime={dateTime}>{timestamp}</Styled.Timestamp>
          {statusLabel ? <Styled.Status>{statusLabel}</Styled.Status> : null}
        </Styled.Meta>
      </Styled.Bubble>
    </Styled.Container>
  )
}
