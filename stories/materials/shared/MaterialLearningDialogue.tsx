import { LearningDialogue } from '../../../src/components/Exercise/LearningDialogue'
import type { LearningDialogueProps } from '../../../src/components/Exercise/LearningDialogue.types'
import { useMaterialLearner } from './MaterialLearnerContext'

/** Bind product context once; canonical UI remains independent of auth, scheduling and iframes. */
export function MaterialLearningDialogue({
  learnerIdentity,
  lines,
  ...props
}: LearningDialogueProps) {
  const learner = useMaterialLearner()
  return (
    <LearningDialogue
      {...props}
      learnerIdentity={learnerIdentity ?? learner}
      lines={lines.map((line) => ({
        ...line,
        participant:
          line.participant ??
          (/^you(?:\s*:.*)?$/iu.test(line.speaker.trim())
            ? 'learner'
            : undefined),
      }))}
    />
  )
}
