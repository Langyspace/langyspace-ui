import { useState } from 'react'
import { MaterialLearningDialogue } from './MaterialLearningDialogue'
import { useMaterialTeacher } from './MaterialTeacherContext'
import { useMaterialLearner } from './MaterialLearnerContext'
import type {
  MaterialPersonalDialogueProps,
  MaterialPersonalDialogueAnswers,
} from './MaterialPersonalDialogue.types'

/** Real participants and session-only open responses; presentation belongs to LearningDialogue. */
export function MaterialPersonalDialogue({
  lines,
}: MaterialPersonalDialogueProps) {
  const teacher = useMaterialTeacher()
  const learner = useMaterialLearner()
  const identity = JSON.stringify([
    teacher.name,
    teacher.avatarUrl,
    learner?.firstName,
    learner?.avatarUrl,
  ])
  const [answers, setAnswers] = useState<MaterialPersonalDialogueAnswers>({
    identity,
    values: {},
  })
  const values = answers.identity === identity ? answers.values : {}
  return (
    <MaterialLearningDialogue
      density="compact"
      speakerLabels="visible"
      gapValues={values}
      onGapChange={(id, value) =>
        setAnswers((old) => ({
          identity,
          values: {
            ...(old.identity === identity ? old.values : {}),
            [id]: value,
          },
        }))
      }
      lines={lines.map((line) => ({
        id: line.id,
        content: line.content,
        parts: line.parts,
        speaker: line.participant === 'teacher' ? teacher.name : 'You',
        participant: line.participant === 'learner' ? 'learner' : undefined,
        avatarUrl:
          line.participant === 'teacher' ? teacher.avatarUrl : undefined,
        initials:
          line.participant === 'teacher' ? teacher.name.slice(0, 1) : undefined,
        side: line.participant === 'teacher' ? 'start' : 'end',
      }))}
    />
  )
}
