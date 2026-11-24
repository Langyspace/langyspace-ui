import type { LearningDialogueLine } from '../../../src/components/Exercise/LearningDialogue.types'
export interface GuidedScenarioCase {
  id: string
  label: string
  image: { src: string; alt: string }
  facts: readonly { id: string; label: string; value: string }[]
  lines: readonly LearningDialogueLine[]
}
export interface GuidedScenarioProps {
  cases: readonly GuidedScenarioCase[]
  selectionLabel: string
  factLayout?: 'inline' | 'stacked'
}
