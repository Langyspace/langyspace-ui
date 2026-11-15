import type { ReactNode } from 'react'

export interface OverlayCloseButtonProps {
  children?: ReactNode
  disabled: boolean
  label: string
  onClick: () => void
}
