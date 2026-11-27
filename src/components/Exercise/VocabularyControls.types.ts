export interface VocabularyControlsProps {
  interaction?: 'toggle' | 'progressive'
  hintDisabled?: boolean
  /** Compact controls for inline language support; regular preserves existing controls. */
  density?: 'regular' | 'compact'
  labels?: Partial<{
    hint: string
    showAll: string
    hideAll: string
    reset: string
  }>
  showInitial: boolean
  showAll?: boolean
  onToggleInitial: () => void
  /** Omit when the activity needs only its primary hint control. */
  onToggleAll?: () => void
  /** Restore the activity's hidden words/hints and stop its current playback. */
  onReset?: () => void
}
