import type source from './InfluencerRoutine.content.json'

export type RoutineBlock = (typeof source.blocks)[number]
export interface PersonalPrompt {
  id: string
  question: string
  cue: string
  hint: string
}
export interface RoutinePersonalProps {
  prompts: readonly PersonalPrompt[]
  fictionalContact?: boolean
}
export interface RoutineSceneProps {
  block: RoutineBlock
  active: boolean
}
export interface RoutineDialogueProps {
  block: RoutineBlock
  active: boolean
}
export interface InfluencerRoutineLessonProps {
  initialPageId?: string
}
