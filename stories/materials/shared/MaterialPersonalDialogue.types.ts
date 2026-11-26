import type { LearningDialogueLine } from '../../../src/components/Exercise/LearningDialogue.types'

export interface MaterialPersonalDialogueTurn {
  id: string
  participant: 'teacher' | 'learner'
  personalisation?: 'greeting' | 'origin'
  content: string
  parts?: LearningDialogueLine['parts']
}
export interface MaterialPersonalDialogueProps {
  lines: readonly MaterialPersonalDialogueTurn[]
}
export interface MaterialPersonalDialogueAnswers {
  identity: string
  values: Readonly<Record<string, string>>
}
