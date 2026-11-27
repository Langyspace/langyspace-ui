export type SlideAudioStatus =
  'idle' | 'loading' | 'playing' | 'paused' | 'ended' | 'error'
export interface SlideAudioActionProps {
  context: string
  /** Keep dialogue labels by default; narration uses generic audio labels. */
  contentKind?: 'dialogue' | 'audio'
  status: SlideAudioStatus
  disabled?: boolean
  describedBy?: string
  onClick: () => void
  /** Start the complete recording/sequence from the beginning, independently of pause/resume. */
  onRestart?: () => void
}
