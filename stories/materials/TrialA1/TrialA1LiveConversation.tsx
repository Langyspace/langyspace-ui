import { useState } from 'react'
import { MaterialLearningDialogue } from '../shared/MaterialLearningDialogue'
import { useMaterialTeacher } from '../shared/MaterialTeacherContext'
import { rehearsalTurns, openTurns } from './TrialA1.live'
import type { TrialA1LiveConversationProps } from './TrialA1.types'

/** Real participants; recorded character models remain on the preceding page. */
export function TrialA1LiveConversation({
  independent = false,
}: TrialA1LiveConversationProps) {
  const teacher = useMaterialTeacher()
  const firstName =
    teacher.name === 'Your teacher'
      ? teacher.name
      : teacher.name.trim().split(/\s+/u)[0]!
  const [hintedLineIds, setHints] = useState<string[]>([])
  const [revealedLineIds, setModels] = useState<string[]>([])
  const teacherIdentity = {
    speaker: firstName,
    avatarUrl: teacher.avatarUrl,
    initials: firstName.slice(0, 1),
  }
  const learnerIdentity = { speaker: 'You', participant: 'learner' as const }
  return (
    <MaterialLearningDialogue
      density="regular"
      presentation="paired"
      bubbleWidth={independent ? 'fill' : 'content'}
      sequentialGuidance={
        independent
          ? undefined
          : {
              hintedLineIds,
              revealedLineIds,
              onRevealHint: (id) =>
                setHints((old) =>
                  id ? (old.includes(id) ? old : [...old, id]) : [],
                ),
              onRevealModel: (id) =>
                setModels((old) =>
                  id ? (old.includes(id) ? old : [...old, id]) : [],
                ),
            }
      }
      lines={
        independent
          ? openTurns.map((turn) => ({
              id: turn.id,
              ...(turn.learner ? learnerIdentity : teacherIdentity),
              side: turn.learner ? ('end' as const) : ('start' as const),
              content: turn.text,
            }))
          : rehearsalTurns.flatMap((turn) => [
              {
                id: `${turn.id}-teacher`,
                ...teacherIdentity,
                side: 'start' as const,
                content: turn.question,
              },
              {
                id: `${turn.id}-learner`,
                ...learnerIdentity,
                side: 'end' as const,
                guidanceLabel: turn.question,
                cue: turn.cue,
                hint: turn.hint,
                content: turn.model,
              },
            ])
      }
    />
  )
}
