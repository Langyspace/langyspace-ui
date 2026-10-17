import { forwardRef } from 'react'
import * as Styled from './styles'
import type { ToastItemProps } from './types'

export const ToastItem = forwardRef<HTMLButtonElement, ToastItemProps>(
  function ToastItem(
    { message, title, actionLabel, icon, tone = 'neutral', ...props },
    ref,
  ) {
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
  },
)

export type { ToastItemProps, ToastTone } from './types'
