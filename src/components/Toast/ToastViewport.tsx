import { Viewport } from './ToastViewport.styles'
import type { ToastViewportProps } from './ToastViewport.types'

// A polite live region by default so every toast is announced.
export function ToastViewport({ ref, ...props }: ToastViewportProps) {
  return (
    <Viewport
      aria-live="polite"
      aria-relevant="additions"
      role="status"
      {...props}
      ref={ref}
    />
  )
}
