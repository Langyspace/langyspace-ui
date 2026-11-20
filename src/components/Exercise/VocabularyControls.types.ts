export interface VocabularyControlsProps {
  labels?: Partial<{ hint: string; showAll: string; hideAll: string }>
  showInitial: boolean
  showAll: boolean
  onToggleInitial: () => void
  onToggleAll: () => void
}
