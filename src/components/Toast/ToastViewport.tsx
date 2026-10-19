import { forwardRef } from 'react'
import { Viewport } from './ToastViewport.styles'

import type { ComponentPropsWithoutRef } from 'react'

export type ToastViewportProps = ComponentPropsWithoutRef<'div'>

export const ToastViewport = forwardRef<HTMLDivElement, ToastViewportProps>(
  function ToastViewport(props, ref) {
    return <Viewport {...props} ref={ref} />
  },
)
