import { forwardRef } from 'react'
import { Viewport } from './styles'
import type { ToastViewportProps } from './types'

export const ToastViewport = forwardRef<HTMLDivElement, ToastViewportProps>(
  function ToastViewport(props, ref) {
    return <Viewport {...props} ref={ref} />
  },
)

export type { ToastViewportProps } from './types'
