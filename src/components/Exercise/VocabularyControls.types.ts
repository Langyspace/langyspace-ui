export interface VocabularyControlsProps {
  labels?: Partial<{ hint: string; showAll: string; hideAll: string }>
  showInitial: boolean
  showAll?: boolean
  onToggleInitial: () => void
  /** Omit when the activity needs only its primary hint control. */
  onToggleAll?: () => void
}
