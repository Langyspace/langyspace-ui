import { useState } from 'react'
import { useVocabularyAudio } from '../shared/useVocabularyAudio'
import { vocabularyRecordings } from './B201.vocabularyAudio'
import { expressionRecordings } from './B201.expressionAudio'
import { StatementReview } from '../shared/StatementReview'
import { ExercisePanel } from '../../../src/components/Exercise/ExercisePanel'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'
import { MatchPairs } from '../../../src/components/Exercise/MatchPairs'
import { CharacterDialogue as LearningDialogue } from '../shared/CharacterPortraits.styles'
import { QuizOption } from '../../../src/components/Quiz/QuizOption'
import { GrammarTable } from '../../../src/components/InteractiveMaterial/GrammarTable'
import { RolePlayExercise } from '../../../src/components/InteractiveMaterial/RolePlayExercise'
import { KeyValueList } from '../../../src/components/Details/KeyValueList'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import type { CorrectionItem } from '../shared/Lesson.types'
import type {
  WarmUpProps,
  WordTableProps,
  VocabularySectionProps,
} from './B201.types'
import { content, vocabulary, warmUps, image, kim, ana } from './B201.data'

export function VocabularySection({
  active = true,
}: VocabularySectionProps = {}) {
  const audio = useVocabularyAudio(vocabularyRecordings, active)
  const [ids, setIds] = useState<string[]>([])
  const [all, setAll] = useState(false)
  const [initial, setInitial] = useState(false)
  return (
    <VocabularyGrid
      items={vocabulary}
      columns={4}
      density="regular"
      imageVariant="isolated"
      imageFit="contain"
      surface="plain"
      revealVariant="tooltip"
      revealOnHover={false}
      revealedIds={ids}
      showAll={all}
      showInitial={initial}
      controls={{
        showAll: all,
        showInitial: initial,
        onToggleInitial: () => setInitial(!initial),
        onToggleAll: () => setAll(!all),
      }}
      onReveal={(id) =>
        setIds((old) => (old.includes(id) ? old : [...old, id]))
      }
      onPlay={(id) => {
        const item = vocabulary.find((x) => x.id === id)
        if (item) audio.speak([{ id, text: item.word }])
      }}
    />
  )
}
export function WarmUpSection({ index }: WarmUpProps) {
  const w = warmUps[index] ?? warmUps[0]!
  const [attempts, setAttempts] = useState<number[]>([])
  const done = attempts.includes(w.a)
  return (
    <ExercisePanel
      variant="warmup"
      warmupMediaSizing="presentation"
      counter={`${index + 1}/3`}
      media={
        <img
          src={image(w.pic)}
          alt={
            vocabulary.find((v) => v.imageUrl === image(w.pic))?.imageAlt ??
            'An object from Ana’s trip.'
          }
        />
      }
    >
      {w.o.map((option, i) => (
        <QuizOption
          key={option}
          letter={String.fromCharCode(65 + i)}
          density="compact"
          feedbackOutcome={i === w.a ? 'correct' : 'wrong'}
          state={
            attempts.includes(i)
              ? i === w.a
                ? 'correct'
                : 'wrong'
              : done
                ? 'dim'
                : 'default'
          }
          disabled={done}
          onClick={() => setAttempts((old) => [...old, i])}
        >
          {option}
        </QuizOption>
      ))}
    </ExercisePanel>
  )
}
export function WordTableSection({
  grammar = false,
  active = true,
}: WordTableProps) {
  const [ids, setIds] = useState<string[]>([])
  const [index, setIndex] = useState(0)
  const audio = useVocabularyAudio(expressionRecordings, active && !grammar)
  if (grammar)
    return (
      <RolePlayExercise
        presentation="instructions"
        density="compact"
        situation=""
        steps={[]}
        completedIds={[]}
        onStepToggle={() => undefined}
        image={{
          src: image('dead-phone'),
          alt: 'A phone with an empty battery.',
        }}
        tracker={
          <GrammarTable
            title="One past event, different time perspectives"
            captionVisibility="screen-reader"
            columns={{
              subject: 'Time focus',
              verb: 'Form',
              example: 'Ana’s story',
            }}
            rows={content.grammar.map((row) => ({
              id: row.id,
              subject: row.question,
              verb: row.form,
              example: row.example,
            }))}
            explanation={
              <Common.Hint>
                Look back from a past point, not from now. I’d = I had here. For
                two hours is a duration; since two o’clock is a starting point.
              </Common.Hint>
            }
          />
        }
      >
        <KeyValueList
          tone="material"
          density="compact"
          layout="stacked"
          items={[
            {
              id: 'point',
              label: 'The reference point',
              value: 'At 4 pm, Ana’s phone died.',
            },
            {
              id: 'activity',
              label: 'Before 4 pm',
              value: 'She had been using it as a map all day.',
            },
            {
              id: 'completed',
              label: 'Already completed',
              value: 'She had left her charger at the hotel.',
            },
          ]}
        />
      </RolePlayExercise>
    )
  const rows = content.expressions.slice(index * 4, index * 4 + 4)
  return (
    <ExercisePanel navigation={{ index, count: 2, onChange: setIndex }}>
      <GrammarTable
        title="Travel expressions"
        captionVisibility="screen-reader"
        columns={{
          subject: 'In Portuguese',
          verb: 'English',
          example: 'In context',
        }}
        hiddenAnswers
        revealedIds={ids}
        rows={rows.map((r) => ({
          id: r.id,
          subject: r.pt,
          verb: r.en,
          example: r.example,
        }))}
        onReveal={(id) => {
          setIds((old) => (old.includes(id) ? old : [...old, id]))
          const item = content.expressions.find((r) => r.id === id)
          if (item) audio.speak([{ id, text: item.en }])
        }}
        onPlay={(id) => {
          const item = content.expressions.find((r) => r.id === id)
          if (item) audio.speak([{ id, text: item.en }])
        }}
      />
    </ExercisePanel>
  )
}
export function ChronologySection() {
  const [selected, setSelected] = useState<string>()
  const [matches, setMatches] = useState<Record<string, string>>({})
  const [incorrect, setIncorrect] = useState<string>()
  const correct: Record<string, string> = {
    before: 'map',
    moment: 'died',
    after: 'help',
  }
  return (
    <MatchPairs
      questionLabel="Time point"
      answerLabel="Ana’s story"
      selectedQuestionId={selected}
      matches={matches}
      incorrectAnswerId={incorrect}
      questions={[
        { id: 'before', marker: 1, label: 'Before the phone died' },
        { id: 'moment', marker: 2, label: 'At four o’clock' },
        { id: 'after', marker: 3, label: 'After the phone died' },
      ]}
      answers={[
        { id: 'help', marker: 'A', label: 'I asked a doorman for help.' },
        {
          id: 'map',
          marker: 'B',
          label: 'I’d been using it as a map all day.',
        },
        { id: 'died', marker: 'C', label: 'My phone died.' },
      ]}
      onQuestionSelect={(id) => {
        setSelected(id)
        setIncorrect(undefined)
      }}
      onAnswerSelect={(id) => {
        if (!selected) return
        if (correct[selected] === id) {
          setMatches((old) => ({ ...old, [selected]: id }))
          setSelected(undefined)
          setIncorrect(undefined)
        } else setIncorrect(id)
      }}
    />
  )
}
export function MissingDetailSection() {
  const [attempts, setAttempts] = useState<number[]>([])
  const done = attempts.includes(0)
  return (
    <ExercisePanel>
      <LearningDialogue
        density="compact"
        lines={[
          {
            id: 'context',
            speaker: 'Ana',
            avatarUrl: ana,
            side: 'start',
            content:
              'I’d been waiting at the café when someone offered to help.',
          },
        ]}
      />
      {[
        'How long had you been waiting?',
        'What do you usually order at cafés?',
        'Have you ever been to New York?',
      ].map((text, i) => (
        <QuizOption
          key={text}
          letter={String.fromCharCode(65 + i)}
          density="compact"
          disabled={done}
          feedbackOutcome={i === 0 ? 'correct' : 'wrong'}
          state={
            attempts.includes(i)
              ? i === 0
                ? 'correct'
                : 'wrong'
              : done
                ? 'dim'
                : 'default'
          }
          onClick={() => setAttempts((old) => [...old, i])}
        >
          {text}
        </QuizOption>
      ))}
    </ExercisePanel>
  )
}
export function DialogueSection({
  lines,
}: {
  lines: readonly { id: string; who: string; text: string; g?: string }[]
}) {
  const [translated, setTranslated] = useState<string[]>([])
  return (
    <LearningDialogue
      density="compact"
      lines={lines.map((l) => ({
        id: l.id,
        speaker: l.who === 'kim' ? 'Kim' : 'Ana',
        avatarUrl: l.who === 'kim' ? kim : ana,
        side: l.who === 'kim' ? 'start' : 'end',
        content: l.text,
        translation: l.g,
      }))}
      translatedIds={translated}
      onTranslate={(id) =>
        setTranslated((old) =>
          old.includes(id) ? old.filter((x) => x !== id) : [...old, id],
        )
      }
    />
  )
}
export function CorrectionSection({
  items,
}: {
  items: readonly CorrectionItem[]
}) {
  return <StatementReview items={items} />
}
