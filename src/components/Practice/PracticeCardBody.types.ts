import type { ReactNode } from 'react'

export interface PracticeCardBodyProps {
  title: ReactNode
  leadingMeta: ReactNode
  trailingMeta: ReactNode
  value: number
  completed?: boolean
}
