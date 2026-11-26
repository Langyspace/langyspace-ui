import { useState } from 'react'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'
import { VocabularyControls } from '../../../src/components/Exercise/VocabularyControls'
import { ExercisePanel } from '../../../src/components/Exercise/ExercisePanel'
import { KeyValueList } from '../../../src/components/Details/KeyValueList'
import { TaskBoard } from '../../../src/components/TaskBoard/TaskBoard'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import { MaterialLearningDialogue } from '../shared/MaterialLearningDialogue'
import { useMaterialTeacher } from '../shared/MaterialTeacherContext'
import { characterPortrait } from '../shared/characterPortraits'
import { LoginDemoScreen } from '../DevFirstDay/DevWork'
import source from './DevStudy131.content.json'
import atlas from './assets/vocabulary-atlas131.webp'
import type {
  DevStudyOralPracticeProps,
  DevStudyRecordedProps,
  DevStudyReferenceProps,
} from './DevStudy131.types'

/** Product data and identities; the library owns every control and bubble. */
export function DevStudyOralPractice({ turns }: DevStudyOralPracticeProps) {
  const teacher = useMaterialTeacher()
  const [step, setStep] = useState(0)
  const totalSteps = turns.length * 2
  return (
    <MaterialLearningDialogue
      density="compact"
      speakerLabels="visible"
      footerAction={
        <VocabularyControls
          interaction="progressive"
          density="compact"
          showInitial={step > 0}
          onToggleInitial={() =>
            setStep((value) => (value + 1) % (totalSteps + 1))
          }
          labels={{
            hint:
              step === totalSteps
                ? 'Hide speaking support'
                : step % 2 === 0
                  ? 'Show speaking hint'
                  : 'Show example answer',
          }}
        />
      }
      lines={turns.flatMap((turn, index) => {
        const level = Math.min(2, Math.max(0, step - index * 2))
        return [
          {
            id: turn.id + '-teacher',
            speaker: teacher.name,
            avatarUrl: teacher.avatarUrl,
            initials: teacher.name.slice(0, 1),
            side: 'start' as const,
            content: turn.question,
          },
          {
            id: turn.id + '-learner',
            speaker: 'You',
            participant: 'learner' as const,
            side: 'end' as const,
            content:
              level === 2 ? turn.model : level === 1 ? turn.hint : turn.cue,
          },
        ]
      })}
    />
  )
}

export function DevStudyVocabulary({ speech }: DevStudyRecordedProps) {
  const [revealed, setRevealed] = useState<readonly string[]>([])
  const [initial, setInitial] = useState(false)
  const [all, setAll] = useState(false)
  return (
    <Common.Stack>
      <VocabularyGrid
        columns={3}
        density="regular"
        imageVariant="scene"
        imageFit="contain"
        imageAspectRatio={1}
        revealOnHover={false}
        revealVariant="tooltip"
        items={source.vocabulary.map((item) => ({
          id: item.audioId,
          word: item.word,
          translation: item.translation,
          example: item.example,
          initialHint: item.initialHint,
          imageUrl: atlas,
          imageRegion: item.imageRegion,
          imageAlt: `A learning situation showing ${item.word}`,
        }))}
        revealedIds={revealed}
        showInitial={initial}
        showAll={all}
        controls={{
          showInitial: initial,
          showAll: all,
          onToggleInitial: () => setInitial((value) => !value),
          onToggleAll: () => setAll((value) => !value),
        }}
        onReveal={(id) =>
          setRevealed((old) => (old.includes(id) ? old : [...old, id]))
        }
        onPlay={(id) => {
          const item = source.vocabulary.find((word) => word.audioId === id)
          if (item)
            speech.speak([{ id: item.classAudioId, text: item.classAudioText }])
        }}
      />
      {speech.error ? (
        <Common.Hint role="alert">{speech.error}</Common.Hint>
      ) : null}
    </Common.Stack>
  )
}

export function DevStudyDialogue({ speech }: DevStudyRecordedProps) {
  const [translated, setTranslated] = useState<readonly string[]>([])
  return (
    <Common.Stack>
      <MaterialLearningDialogue
        density="compact"
        speakerLabels="visible"
        lines={source.dialogue.map((line) => ({
          id: line.id,
          speaker: line.speaker,
          avatarUrl: characterPortrait(line.speaker),
          side: line.speaker === 'Kim' ? ('start' as const) : ('end' as const),
          content: line.displayText,
          translation: line.translation,
          audioLabel: `Listen to ${line.speaker}`,
        }))}
        translatedIds={translated}
        onTranslate={(id) =>
          setTranslated((ids) =>
            ids.includes(id)
              ? ids.filter((value) => value !== id)
              : [...ids, id],
          )
        }
        playingId={speech.playingId}
        onPlay={(id) => {
          const line = source.dialogue.find((turn) => turn.id === id)
          if (line) speech.speak([line])
        }}
      />
      {speech.error ? (
        <Common.Hint role="alert">{speech.error}</Common.Hint>
      ) : null}
    </Common.Stack>
  )
}

export function DevStudyReference({ kind }: DevStudyReferenceProps) {
  if (kind === 'week')
    return (
      <Common.Stack>
        <Common.Heading>Example study week</Common.Heading>
        <TaskBoard
          aria-label="Three short example study sessions"
          columns={source.studyWeek}
        />
      </Common.Stack>
    )
  if (kind === 'mentor')
    return (
      <Common.Stack>
        <Common.Hint>
          Practice project: customer portal. Priya connects the Login screen to
          the backend; its API checks the email and password.
        </Common.Hint>
        <LoginDemoScreen />
      </Common.Stack>
    )
  if (kind === 'project')
    return (
      <ExercisePanel
        title="Task-list app · practice example"
        variant="monitor"
        screenAspectRatio={4 / 3}
      >
        <TaskBoard
          aria-label="A small task-list project"
          columns={[
            {
              id: 'to-do',
              title: 'To do',
              cards: [
                { id: 'read', title: 'Read documentation' },
                { id: 'test', title: 'Test the refresh' },
              ],
            },
            {
              id: 'done',
              title: 'Done',
              cards: [{ id: 'add', title: 'Add a task' }],
            },
          ]}
        />
        <KeyValueList
          tone="material"
          density="compact"
          layout="stacked"
          items={[
            {
              id: 'action',
              label: 'Available actions',
              value: 'Add task · mark complete',
            },
            {
              id: 'scope',
              label: 'Next small feature',
              value: 'Keep tasks after a refresh',
            },
          ]}
        />
      </ExercisePanel>
    )
  if (kind === 'problem')
    return (
      <Common.Columns>
        <ExercisePanel title="Before refresh" variant="monitor">
          <TaskBoard
            aria-label="Tasks before refreshing"
            columns={[
              {
                id: 'before',
                title: 'My tasks',
                cards: [
                  { id: 'read', title: 'Read documentation' },
                  { id: 'test', title: 'Test the refresh' },
                ],
              },
            ]}
          />
        </ExercisePanel>
        <ExercisePanel title="After refresh" variant="monitor">
          <TaskBoard
            aria-label="No tasks remain after refreshing"
            columns={[{ id: 'after', title: 'My tasks · empty', cards: [] }]}
          />
        </ExercisePanel>
      </Common.Columns>
    )
  return (
    <Common.Surface>
      <Common.Heading>Task-list app · portfolio draft</Common.Heading>
      <KeyValueList
        tone="material"
        density="compact"
        layout="stacked"
        items={source.portfolioFacts}
      />
    </Common.Surface>
  )
}
