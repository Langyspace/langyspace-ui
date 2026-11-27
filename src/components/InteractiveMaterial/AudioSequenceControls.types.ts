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
  /** Optional contextual control beside Next, owned by the caller. */
  supportAction?: {
    label: string
    icon: ReactNode
    onClick: () => void
    /** Opt in when this contextual action reveals a speaking hint. */
    feedbackSound?: 'hint'
    pressed?: boolean
    disabled?: boolean
  }
  /** Compact transport fits inside a device, with no panel or progress dots. */
  density?: 'regular' | 'compact'
  /** Opt-in play/pause transport; legacy replay controls remain unchanged. */
  playback?: {
    state: 'idle' | 'playing' | 'paused' | 'error'
    onToggle: () => void
  }
  labels?: Partial<{
    play: string
    pause: string
    resume: string
    previous: string
    next: string
    replay: string
    progress: string
  }>
}
