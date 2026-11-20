import { useState } from 'react'
import { useVocabularyAudio } from '../shared/useVocabularyAudio'
import { vocabularyRecordings } from './B101.vocabularyAudio'
import { StatementReview } from '../shared/StatementReview'
import { ExercisePanel } from '../../../src/components/Exercise/ExercisePanel'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'
import { CharacterDialogue as LearningDialogue } from '../shared/CharacterPortraits.styles'
import { QuizOption } from '../../../src/components/Quiz/QuizOption'
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
  const imageCount = content.warmUps.filter((item) => !item.kl).length
  const imageIndex = content.warmUps
    .slice(0, index + 1)
    .filter((item) => !item.kl).length
  return (
    <ExercisePanel
      variant="warmup"
      counter={w.kl ? undefined : `${imageIndex}/${imageCount}`}
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
export const contextPractice = [
  {
    image: image('bike'),
    alt: 'A cyclist wearing a helmet beside a bicycle.',
    title: '“I’ve been cycling to work for a month.”',
    instruction:
      'Keep the conversation going: choose a question that asks for new information.',
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
    title: 'The living room and kitchen are finished. The bedroom is next.',
    instruction: 'Choose the update that tells Kim the finished result.',
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
  const scenario = contextPractice[index] ?? contextPractice[0]!
  const [attempts, setAttempts] = useState<number[]>([])
  const done = attempts.includes(scenario.answer)
  return (
    <ExercisePanel
      variant="warmup"
      warmupMediaSizing="presentation"
      media={<img src={scenario.image} alt={scenario.alt} />}
    >
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
  return <StatementReview items={content.corrections} />
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
