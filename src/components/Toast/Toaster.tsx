import { useEffect, useState } from 'react'
import { ToastItem } from './ToastItem'
import { ToastViewport } from './ToastViewport'
import type { ToasterEntryProps, ToasterProps } from './Toaster.types'

const defaultItemLabel = () => 'Fechar notificação'

function ToasterEntry({
  duration,
  label,
  onDismiss,
  onPauseChange,
  onSelect,
  paused,
  toast,
}: ToasterEntryProps) {
  useEffect(() => {
    if (duration === undefined || !Number.isFinite(duration) || paused) return

    const timeout = window.setTimeout(() => {
      onDismiss(toast.id)
    }, duration)

    return () => {
      window.clearTimeout(timeout)
    }
  }, [duration, onDismiss, paused, toast.id])

  return (
    <ToastItem
      actionLabel={toast.actionLabel}
      aria-label={label}
      icon={toast.icon}
      message={toast.message}
      title={toast.title}
      tone={toast.tone}
      onBlur={() => {
        onPauseChange(false)
      }}
      onClick={() => {
        if (onSelect) onSelect(toast)
        else onDismiss(toast.id)
      }}
      onFocus={() => {
        onPauseChange(true)
      }}
      onPointerEnter={() => {
        onPauseChange(true)
      }}
      onPointerLeave={() => {
        onPauseChange(false)
      }}
    />
  )
}

// Renders a toast list from any store and owns announcement and timing.
export function Toaster({
  duration,
  getItemLabel = defaultItemLabel,
  onDismiss,
  onSelect,
  toasts,
  ...viewportProps
}: ToasterProps) {
  const [paused, setPaused] = useState(false)

  return (
    <ToastViewport {...viewportProps}>
      {toasts.map((toast) => (
        <ToasterEntry
          duration={toast.duration ?? duration}
          key={toast.id}
          label={getItemLabel(toast)}
          paused={paused}
          toast={toast}
          onDismiss={onDismiss}
          onPauseChange={setPaused}
          onSelect={onSelect}
        />
      ))}
    </ToastViewport>
  )
}
