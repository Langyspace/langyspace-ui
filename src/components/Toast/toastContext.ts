import { createContext } from 'react'
import type { ToastController } from './Toaster.types'

export const ToastContext = createContext<ToastController | null>(null)
