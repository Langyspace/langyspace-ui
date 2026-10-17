import type { ReactNode } from 'react'

export interface CalendarControlsProps {
  label: ReactNode
  previousLabel: string
  nextLabel: string
  onPrevious: () => void
  onNext: () => void
  onToday: () => void
  children?: ReactNode
}
