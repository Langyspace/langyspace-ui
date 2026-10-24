import type { ReactNode } from 'react'
import type { ToastTone } from './ToastItem.types'
import type { ToastViewportProps } from './ToastViewport.types'

export interface ToasterItem {
  actionLabel?: string
  /** Milliseconds before the toast dismisses itself; overrides `Toaster.duration`. */
  duration?: number
  icon?: ReactNode
  id: string
  message: string
  title?: string
  tone?: ToastTone
}

export interface ToasterProps extends Omit<
  ToastViewportProps,
  'children' | 'onSelect'
> {
  /** Milliseconds before each toast dismisses itself. Omit to keep toasts until dismissed. */
  duration?: number
  /** Accessible name of each toast button. @default 'Fechar notificação' */
  getItemLabel?: (toast: ToasterItem) => string
  onDismiss: (id: string) => void
  /** Runs instead of dismissing when a toast is activated. */
  onSelect?: (toast: ToasterItem) => void
  toasts: readonly ToasterItem[]
}

export interface ToasterEntryProps {
  duration: number | undefined
  label: string
  onDismiss: (id: string) => void
  onPauseChange: (paused: boolean) => void
  onSelect: ((toast: ToasterItem) => void) | undefined
  paused: boolean
  toast: ToasterItem
}

export type ToastInput = Omit<ToasterItem, 'id'> & { id?: string }

export interface ToastController {
  dismiss: (id: string) => void
  /** Shows a toast and returns its id. */
  show: (toast: ToastInput) => string
}

export type ToastProviderProps = Omit<
  ToasterProps,
  'onDismiss' | 'onSelect' | 'toasts'
> & {
  children: ReactNode
}
