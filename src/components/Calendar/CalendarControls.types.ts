import type { ReactNode } from 'react'

export interface CalendarControlsProps {
  /** Accessible name of the control group. @default 'Navegação do calendário' */
  groupLabel?: string
  label: ReactNode
  previousLabel: string
  nextLabel: string
  onPrevious: () => void
  onNext: () => void
  onToday: () => void
  /** @default 'Hoje' */
  todayLabel?: string
  children?: ReactNode
}
