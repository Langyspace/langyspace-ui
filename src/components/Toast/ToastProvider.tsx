import { useCallback, useMemo, useRef, useState } from 'react'
import { ToastContext } from './toastContext'
import { Toaster } from './Toaster'
import type {
  ToastInput,
  ToastProviderProps,
  ToasterItem,
} from './Toaster.types'

// Local toast state for products without their own store; use `useToast` to show toasts.
export function ToastProvider({
  children,
  duration = 4200,
  ...toasterProps
}: ToastProviderProps) {
  const [toasts, setToasts] = useState<readonly ToasterItem[]>([])
  const nextIdRef = useRef(0)

  const dismiss = useCallback((id: string) => {
    setToasts((current) => current.filter((toast) => toast.id !== id))
  }, [])

  const show = useCallback((toast: ToastInput) => {
    nextIdRef.current += 1
    const id = toast.id ?? `toast-${String(nextIdRef.current)}`

    setToasts((current) => [
      ...current.filter((item) => item.id !== id),
      { ...toast, id },
    ])

    return id
  }, [])

  const controller = useMemo(() => ({ dismiss, show }), [dismiss, show])

  return (
    <ToastContext value={controller}>
      {children}
      <Toaster
        {...toasterProps}
        duration={duration}
        toasts={toasts}
        onDismiss={dismiss}
      />
    </ToastContext>
  )
}
