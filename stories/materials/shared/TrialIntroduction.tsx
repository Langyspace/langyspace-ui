import { useState } from 'react'
import { MaterialLearningDialogue } from './MaterialLearningDialogue'
import { useMaterialTeacher } from './MaterialTeacherContext'
import { toggleId } from './lessonState'
import type { TrialIntroductionProps } from './TrialIntroduction.types'

/** Real-participant data adapter; bubbles, identity and progressive support stay canonical. */
export function TrialIntroduction({ prompts }: TrialIntroductionProps) {
  const teacher = useMaterialTeacher()
  const speaker = teacher.name
  const [translated, setTranslated] = useState<string[]>([])
  const [hintedLineIds, setHints] = useState<string[]>([])
  const [revealedLineIds, setModels] = useState<string[]>([])
  return (
    <MaterialLearningDialogue
      density="compact"
      translatedIds={translated}
      onTranslate={(id) => setTranslated((ids) => toggleId(ids, id))}
      sequentialGuidance={{
        hintedLineIds,
        revealedLineIds,
        onRevealHint: (id) =>
          setHints((ids) =>
            id ? (ids.includes(id) ? ids : [...ids, id]) : [],
          ),
        onRevealModel: (id) =>
          setModels((ids) =>
            id ? (ids.includes(id) ? ids : [...ids, id]) : [],
          ),
      }}
      lines={prompts.flatMap((prompt) => [
        {
          id: `${prompt.id}-teacher`,
          speaker,
          initials: speaker.slice(0, 1),
          avatarUrl: teacher.avatarUrl,
          side: 'start' as const,
          content:
            prompt.introduceTeacher && teacher.identified
              ? `Hi, I’m ${speaker}. ${prompt.question}`
              : prompt.question,
          translation: prompt.translation,
        },
        {
          id: `${prompt.id}-learner`,
          speaker: 'You',
          participant: 'learner' as const,
          side: 'end' as const,
          guidanceLabel: prompt.question,
          cue: prompt.cue,
          hint: prompt.hint,
          content: prompt.model,
        },
      ])}
    />
  )
}
