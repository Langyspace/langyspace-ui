import type { ReactNode } from 'react'
import type { PressableProps } from '../Pressable.types'

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
