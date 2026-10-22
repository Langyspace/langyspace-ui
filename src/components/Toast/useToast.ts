import { use } from 'react'
import { ToastContext } from './toastContext'

export function useToast() {
  const controller = use(ToastContext)

  if (!controller) throw new Error('useToast must be used inside ToastProvider')

  return controller
}
