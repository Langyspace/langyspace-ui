import type { ComponentPropsWithRef, ReactNode } from 'react'
export interface AudioSequenceControlsProps extends ComponentPropsWithRef<'div'> {
  index: number
  count: number
  onNext: () => void
  onPrevious?: () => void
  onReplay: () => void
  disabled?: boolean
  loading?: boolean
  status?: ReactNode
  /** Compact transport fits inside a device, with no panel or progress dots. */
  density?: 'regular' | 'compact'
  labels?: Partial<{
    previous: string
    next: string
    replay: string
    progress: string
  }>
}
