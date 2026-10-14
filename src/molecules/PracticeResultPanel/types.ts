import type { ReactNode } from 'react'

export interface PracticeResultPanelProps {
  title: string
  description: ReactNode
  /** Consumer-owned metrics and status paragraphs; no score or persistence logic. */
  children?: ReactNode
  /** Consumer-owned controls, in their original order. */
  actions: ReactNode
}
