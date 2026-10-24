import * as Styled from './ToastItem.styles'
import type { ToastItemProps } from './ToastItem.types'

export function ToastItem({
  message,
  title,
  actionLabel,
  icon,
  tone = 'neutral',
  ref,
  ...props
}: ToastItemProps) {
  return (
    <Styled.Item ref={ref} $tone={tone} {...props}>
      {icon ? <Styled.Icon $tone={tone}>{icon}</Styled.Icon> : null}
      <Styled.Text>
        {title ? <Styled.Title>{title}</Styled.Title> : null}
        <Styled.Message>{message}</Styled.Message>
        {actionLabel ? <Styled.Action>{actionLabel}</Styled.Action> : null}
      </Styled.Text>
    </Styled.Item>
  )
}
