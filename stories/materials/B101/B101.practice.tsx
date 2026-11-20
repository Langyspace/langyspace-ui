import { useState } from 'react'
import { useVocabularyAudio } from '../shared/useVocabularyAudio'
import { vocabularyRecordings } from './B101.vocabularyAudio'
import { Button } from '../../../src/components/Button/Button'
import { ExercisePanel } from '../../../src/components/Exercise/ExercisePanel'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'
import { CharacterDialogue as LearningDialogue } from '../shared/CharacterPortraits.styles'
import { QuizOption } from '../../../src/components/Quiz/QuizOption'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import {
  content,
  vocabulary,
  image,
  kim,
  leo,
  paintingScene,
} from './B101.data'
import type { SpeechSectionProps, VocabularySectionProps } from './B101.types'
import * as S from './B101.styles'
export function VocabularySection({
  group = 0,
  active = true,
}: VocabularySectionProps) {
  const audio = useVocabularyAudio(vocabularyRecordings, active)
  const [ids, setIds] = useState<string[]>([])
  const [all, setAll] = useState(false)
  const [initial, setInitial] = useState(false)
  return (
    <VocabularyGrid
      items={vocabulary.slice(group * 4, group * 4 + 4)}
      columns={2}
      imageVariant="scene"
      imageFit="contain"
      density="regular"
      revealOnHover={false}
      revealVariant="tooltip"
      revealedIds={ids}
      showAll={all}
      showInitial={initial}
      controls={{
        showAll: all,
        showInitial: initial,
        onToggleInitial: () => setInitial(!initial),
        onToggleAll: () => setAll(!all),
      }}
      onPlay={(id) => {
        const item = vocabulary.find((x) => x.id === id)
        if (item) audio.speak([{ id, text: item.word }])
      }}
      onReveal={(id) =>
        setIds((old) => (old.includes(id) ? old : [...old, id]))
      }
    />
  )
}
export function WarmUpSection({
  index,
}: SpeechSectionProps & { index: number }) {
  const w = content.warmUps[index] ?? content.warmUps[0]!
  const [attempts, setAttempts] = useState<number[]>([])
  const done = attempts.includes(w.a)
  return (
    <ExercisePanel
      variant="warmup"
      counter={`${index + 1}/3`}
      title={index === 2 ? w.ctx : undefined}
      media={
        w.kl ? (
          <LearningDialogue
            lines={[
              {
                id: 'kim',
                speaker: 'Kim',
                avatarUrl: kim,
                side: 'start',
                content: 'What have you been doing lately?',
              },
              {
                id: 'leo',
                speaker: 'Leo',
                avatarUrl: leo,
                side: 'end',
                content: done ? w.o[w.a] : '…',
              },
            ]}
          />
        ) : (
          <img
            src={image(index === 0 ? 'gardening' : 'swimming')}
            alt={vocabulary[index === 0 ? 2 : 1]?.imageAlt ?? ''}
          />
        )
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
const scenarios = [
  {
    image: image('bike'),
    alt: 'A cyclist wearing a helmet beside a bicycle.',
    context: '“I’ve been cycling to work for a month.”',
    options: [
      'What made you decide to cycle to work?',
      'How long have you been cycling to work?',
      'Are you cycling right now?',
    ],
    answer: 0,
    support: 'Ask for a reason. The speaker already told you how long.',
  },
  {
    image: paintingScene,
    alt: 'Ana with a paint roller, talking to Kim in a blue living room.',
    context: 'The living room and kitchen are finished. The bedroom is next.',
    options: [
      'I’ve been painting all week.',
      'I’ve painted two rooms.',
      'I’m going to paint two rooms.',
    ],
    answer: 1,
    support:
      'Two completed rooms: the simple form reports the finished amount.',
  },
]
export function ContextPracticeSection({ index }: { index: number }) {
  const scenario = scenarios[index] ?? scenarios[0]!
  const [attempts, setAttempts] = useState<number[]>([])
  const done = attempts.includes(scenario.answer)
  return (
    <ExercisePanel media={<img src={scenario.image} alt={scenario.alt} />}>
      <Common.Heading $prompt>{scenario.context}</Common.Heading>
      {scenario.options.map((option, i) => (
        <QuizOption
          key={option}
          letter={String.fromCharCode(65 + i)}
          density="compact"
          feedbackOutcome={i === scenario.answer ? 'correct' : 'wrong'}
          state={
            attempts.includes(i)
              ? i === scenario.answer
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
export function CorrectionSection() {
  const [index, setIndex] = useState(0)
  const [attempts, setAttempts] = useState<Record<string, string[]>>({})
  const row = content.corrections[index]!
  const answer = row.ok ? 'Right' : 'Wrong'
  const chosen = attempts[row.id] ?? []
  const done = chosen.includes(answer)
  return (
    <ExercisePanel
      counter={`${index + 1}/${content.corrections.length}`}
      title={row.pre ?? 'Check the sentence.'}
    >
      <Common.Surface>
        <Common.Heading $prompt>{row.s}</Common.Heading>
      </Common.Surface>
      {['Right', 'Wrong'].map((label, i) => (
        <QuizOption
          key={label}
          letter={String.fromCharCode(65 + i)}
          density="compact"
          feedbackOutcome={label === answer ? 'correct' : 'wrong'}
          disabled={done}
          state={
            chosen.includes(label)
              ? label === answer
                ? 'correct'
                : 'wrong'
              : done
                ? 'dim'
                : 'default'
          }
          onClick={() =>
            setAttempts((old) => ({ ...old, [row.id]: [...chosen, label] }))
          }
        >
          {label}
        </QuizOption>
      ))}
      {done ? (
        <Common.Surface>
          {row.a ? <strong>{row.a}</strong> : null}
          <Common.Hint>{row.why}</Common.Hint>
        </Common.Surface>
      ) : null}
      <Common.Row>
        <Button
          variant="secondary"
          size="sm"
          disabled={index === 0}
          onClick={() => setIndex(index - 1)}
        >
          Previous
        </Button>
        <Button
          variant="secondary"
          size="sm"
          disabled={index === content.corrections.length - 1}
          onClick={() => setIndex(index + 1)}
        >
          Next
        </Button>
      </Common.Row>
    </ExercisePanel>
  )
}
export function SourceQuestions({
  items,
}: {
  items: readonly { question: string; hint?: string }[]
}) {
  return (
    <S.Questions>
      {items.map((item, i) => (
        <S.Question key={item.question}>
          <S.Number>{i + 1}</S.Number>
          <div>
            {item.question}
            {item.hint ? <S.Hint>{item.hint}</S.Hint> : null}
          </div>
        </S.Question>
      ))}
    </S.Questions>
  )
}
