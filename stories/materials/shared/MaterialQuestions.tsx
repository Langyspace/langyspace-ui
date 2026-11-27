import { useState } from 'react'
import { MaterialLearningDialogue } from './MaterialLearningDialogue'
import { useMaterialTeacher } from './MaterialTeacherContext'
import { characterPortrait } from './characterPortraits'
import type { MaterialQuestionsProps } from './MaterialQuestions.types'

/** Material context and ordered help; the canonical dialogue owns all presentation. */
export function MaterialQuestions({
  items,
  fictionalContact = false,
}: MaterialQuestionsProps) {
  const teacher = useMaterialTeacher()
  const speaker = fictionalContact ? 'Kim' : teacher.name
  const [hintedLineIds, setHints] = useState<readonly string[]>([])
  return (
    <MaterialLearningDialogue
      density="compact"
      sequentialGuidance={{
        hintedLineIds,
        revealedLineIds: [],
        onRevealHint: (id) => setHints((ids) => (id ? [...ids, id] : [])),
      }}
      lines={items.flatMap((item) => [
        {
          id: item.id + '-question',
          speaker,
          initials: speaker.slice(0, 1),
          avatarUrl: fictionalContact
            ? characterPortrait('Kim')
            : teacher.avatarUrl,
          side: 'start' as const,
          content: item.question,
        },
        {
          id: item.id + '-answer',
          speaker: 'You',
          participant: 'learner' as const,
          side: 'end' as const,
          cue: item.cue,
          hint: item.hint,
          content: item.hint,
        },
      ])}
    />
  )
}
