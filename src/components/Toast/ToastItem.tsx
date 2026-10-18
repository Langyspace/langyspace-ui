import { forwardRef } from 'react'
import * as Styled from './ToastItem.styles'

import type { ReactNode } from 'react'
import type { PressableProps } from '../Button/Pressable'

export type ToastTone = 'neutral' | 'success' | 'danger' | 'warning' | 'brand'

export interface ToastItemProps extends Omit<
  PressableProps,
  'children' | 'title'
> {
  message: string
  title?: string
  actionLabel?: string
  icon?: ReactNode
  tone?: ToastTone
}

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
