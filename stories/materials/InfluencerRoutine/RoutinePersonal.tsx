import { useState } from 'react'
import { VocabularyControls } from '../../../src/components/Exercise/VocabularyControls'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import { MaterialLearningDialogue } from '../shared/MaterialLearningDialogue'
import { useMaterialTeacher } from '../shared/MaterialTeacherContext'
import { characterPortrait } from '../shared/characterPortraits'
import type { RoutinePersonalProps } from './InfluencerRoutine.types'

/** Lesson-owned oral cues; the existing bubbles, avatar and primary hint control own presentation. */
export function RoutinePersonal({
  prompts,
  fictionalContact = false,
}: RoutinePersonalProps) {
  const teacher = useMaterialTeacher()
  const speaker = fictionalContact
    ? 'Kim'
    : teacher.name === 'Your teacher'
      ? teacher.name
      : teacher.name.trim().split(/\s+/u)[0] || 'Your teacher'
  const [hintCount, setHintCount] = useState(0)
  return (
    <Common.Stack>
      <MaterialLearningDialogue
        density="compact"
        lines={prompts.flatMap((prompt, index) => [
          {
            id: prompt.id + '-teacher',
            speaker,
            initials: speaker.slice(0, 1),
            avatarUrl: fictionalContact
              ? characterPortrait('Kim')
              : teacher.avatarUrl,
            side: 'start' as const,
            content: prompt.question,
          },
          {
            id: prompt.id + '-learner',
            speaker: 'You',
            participant: 'learner' as const,
            side: 'end' as const,
            content: index < hintCount ? prompt.hint : prompt.cue,
          },
        ])}
      />
      <Common.Row $justify="center">
        <VocabularyControls
          interaction="progressive"
          showInitial={hintCount > 0}
          onToggleInitial={() =>
            setHintCount((count) => (count === prompts.length ? 0 : count + 1))
          }
          labels={{
            hint:
              hintCount === prompts.length
                ? 'Hide tips'
                : `Show next tip (${hintCount + 1}/${prompts.length})`,
          }}
        />
      </Common.Row>
    </Common.Stack>
  )
}
