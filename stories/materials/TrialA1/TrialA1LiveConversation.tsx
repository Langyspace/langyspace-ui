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
  const [hintedLineIds, setHints] = useState<string[]>([])
  const [revealedLineIds, setModels] = useState<string[]>([])
  const teacherIdentity = {
    speaker: teacher.name,
    avatarUrl: teacher.avatarUrl,
    initials: teacher.name.slice(0, 1),
  }
  const learnerIdentity = { speaker: 'You', participant: 'learner' as const }
  return (
    <MaterialLearningDialogue
      density="compact"
      sequentialGuidance={{
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
      }}
      lines={
        independent
          ? openTurns.map((turn) => ({
              id: turn.id,
              ...(turn.learner ? learnerIdentity : teacherIdentity),
              side: turn.learner ? ('end' as const) : ('start' as const),
              content: turn.learner ? turn.model : turn.cue,
              cue: turn.learner ? turn.cue : undefined,
              hint: turn.learner ? turn.hint : undefined,
              guidanceLabel: turn.learner ? turn.cue : undefined,
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
