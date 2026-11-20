export type SlideAudioStatus =
  'idle' | 'loading' | 'playing' | 'paused' | 'ended' | 'error'
export interface SlideAudioActionProps {
  context: string
  status: SlideAudioStatus
  disabled?: boolean
  describedBy?: string
  onClick: () => void
}
