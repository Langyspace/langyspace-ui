export interface VocabularyControlsProps {
  /** Compact controls for inline language support; regular preserves existing controls. */
  density?: 'regular' | 'compact'
  labels?: Partial<{ hint: string; showAll: string; hideAll: string }>
  showInitial: boolean
  showAll?: boolean
  onToggleInitial: () => void
  /** Omit when the activity needs only its primary hint control. */
  onToggleAll?: () => void
}
