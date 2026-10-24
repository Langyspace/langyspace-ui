export interface QuizSessionHeaderProps {
  /** Consumer-owned session name and question/result counter. */
  name: string
  counter: string
  /** Consumer-owned progress in the 0–1 range. */
  progress: number
  /** Accessible name and action for returning to the owning screen. */
  backLabel: string
  onBack: () => void
}
