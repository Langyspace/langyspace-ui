import { MaterialQuestions } from '../shared/MaterialQuestions'
import type { RoutinePersonalProps } from './InfluencerRoutine.types'

/** Lesson-owned oral cues; the existing bubbles, avatar and primary hint control own presentation. */
export function RoutinePersonal({
  prompts,
  fictionalContact = false,
}: RoutinePersonalProps) {
  return (
    <MaterialQuestions items={prompts} fictionalContact={fictionalContact} />
  )
}
