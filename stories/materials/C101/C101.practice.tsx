import { useState } from 'react'
import { PromptExercise } from '../shared/LessonExercises'
import { StatementReview } from '../shared/StatementReview'
import { useVocabularyAudio } from '../shared/useVocabularyAudio'
import { vocabularyRecordings } from './C101.vocabularyAudio'
import { ExercisePanel } from '../../../src/components/Exercise/ExercisePanel'
import { QuizOption } from '../../../src/components/Quiz/QuizOption'
import { MinimalPairExercise } from '../../../src/components/InteractiveMaterial/MinimalPairExercise'
import { GrammarTable } from '../../../src/components/InteractiveMaterial/GrammarTable'
import { CharacterDialogue as LearningDialogue } from '../shared/CharacterPortraits.styles'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import { toggleId } from '../shared/lessonState'
import { ana, kim } from '../shared/characterPortraits'
import content from './C101.content.json'
import type { C101Audio, ExpressionsProps } from './C101.types'
import * as S from './C101.styles'
export function Expressions({
  group = 0,
  active = true,
}: ExpressionsProps = {}) {
  const [revealed, setRevealed] = useState<string[]>([])
  const audio = useVocabularyAudio(vocabularyRecordings, active)
  const items = content.expressions.slice(group * 4, group * 4 + 4)
  const play = (id: string) => {
    const item = items.find((x) => `E.${x.i}` === id)
    if (item) audio.speak([{ id, text: item.e }])
  }
  return (
    <GrammarTable
      title="Feedback expressions"
      captionVisibility="screen-reader"
      columns={{
        subject: 'Context',
        verb: 'One expression',
        example: 'Meaning',
      }}
      hiddenAnswers
      revealedIds={revealed}
      rows={items.map((item) => ({
        id: `E.${item.i}`,
        subject: item.s.replace(/\{[^}]*\}/g, '…'),
        verb: item.e,
        example: item.m,
        translation: item.t,
      }))}
      onReveal={(id) => {
        setRevealed((ids) => (ids.includes(id) ? ids : [...ids, id]))
        play(id)
      }}
      onPlay={play}
    />
  )
}
export function WarmUp({ index }: { index: number }) {
  const w = content.warmups[index]!
  const [attempts, setAttempts] = useState<number[]>([])
  const done = attempts.includes(w.a)
  return (
    <ExercisePanel counter={`${index + 1}/3`}>
      <Common.Surface>
        <Common.Heading $prompt>{w.context}</Common.Heading>
      </Common.Surface>
      {w.o.map((text, i) => (
        <QuizOption
          key={text}
          letter={String.fromCharCode(65 + i)}
          density="compact"
          disabled={done}
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
          onClick={() => setAttempts((old) => [...old, i])}
        >
          {text}
        </QuizOption>
      ))}
    </ExercisePanel>
  )
}
export function Reading() {
  return (
    <Common.Surface as="article" aria-label="Laura’s email">
      <Common.Stack>
        <Common.Heading $prompt>Tuesday’s presentation</Common.Heading>
        <Common.Hint>Laura Hughes → Ana · Wednesday, 9:12</Common.Hint>
      </Common.Stack>
      {content.mail.map((paragraph) => (
        <Common.Paragraph key={paragraph}>{paragraph}</Common.Paragraph>
      ))}
    </Common.Surface>
  )
}
export function Prosody({ audio }: { audio: C101Audio }) {
  const [selected, setSelected] = useState<string>()
  return (
    <Common.Stack>
      <MinimalPairExercise
        mode="listen"
        choices={['Version A', 'Version B'].map((label, i) => ({
          id: String(i),
          word: 'It was a bit rushed.',
          phonetic: label,
        }))}
        selectedId={selected}
        onSelect={(id) => {
          setSelected(id)
          audio.play([`c101-pair-0-${id}`])
        }}
      />
      <PromptExercise
        numbered={false}
        items={[
          {
            id: 'impression',
            prompt:
              'Which delivery leaves more room for discussion? Use something you heard to explain your view.',
            answer:
              'Version … sounded more … because of the stress / pace / final pitch. Context and the relationship can change the impression.',
          },
        ]}
      />
    </Common.Stack>
  )
}
export function Dialogue({ part, audio }: { part: number; audio: C101Audio }) {
  const [translated, setTranslated] = useState<string[]>([])
  const lines =
    part === 0 ? content.dialogue.slice(0, 7) : content.dialogue.slice(7)
  return (
    <S.Stack>
      <LearningDialogue
        density="compact"
        lines={lines.map((l) => ({
          id: `c101-${l.id.replace('.', '-')}`,
          speaker: l.who === 'kim' ? 'Kim' : 'Ana',
          avatarUrl: l.who === 'kim' ? kim : ana,
          side: l.who === 'kim' ? 'start' : 'end',
          content: l.text,
          translation: l.g,
          audioLabel: `Listen: ${l.text}`,
        }))}
        translatedIds={translated}
        onTranslate={(id) => setTranslated((old) => toggleId(old, id))}
        playingId={audio.playingId}
        onPlay={(id) => audio.play([id])}
      />
    </S.Stack>
  )
}
export function Grammar() {
  const [index, setIndex] = useState(0)
  const rows = content.grammar.slice(index * 3, index * 3 + 3)
  return (
    <ExercisePanel
      title={
        index === 0 ? 'Describe an observation' : 'Make a workable request'
      }
      navigation={{ index, count: 2, onChange: setIndex }}
    >
      <GrammarTable
        title="Tactful and precise language"
        captionVisibility="screen-reader"
        columns={{
          subject: 'Starting point',
          verb: 'Pattern',
          example: 'One possible wording',
        }}
        rows={rows.map((row) => ({
          id: String(row.i),
          subject: row.d,
          verb: row.f,
          example: row.ex,
        }))}
        explanation={
          <Common.Hint>
            {index === 0
              ? 'Tend to describes a recurring pattern, not one isolated incident. Seem marks your impression; might come across as marks a possible interpretation.'
              : 'A suggestion or tentative request leaves room for a response. Keep the change specific; authority, urgency and tone still matter.'}
          </Common.Hint>
        }
      />
    </ExercisePanel>
  )
}
export function RespondToRaj() {
  const [attempts, setAttempts] = useState<number[]>([])
  const done = attempts.includes(0)
  const options = [
    'I can see why you’d like to handle it. Laura has asked me to attend, so could we agree how we’ll share the questions?',
    'Of course. I won’t go, and we don’t need to tell Laura.',
    'You clearly can’t handle this alone. I’ll do all the talking.',
  ]
  return (
    <ExercisePanel>
      <Common.Surface>
        <Common.Paragraph>
          Laura asked Ana to attend Thursday’s meeting. Raj would like to speak
          to Laura by himself.
        </Common.Paragraph>
      </Common.Surface>
      {options.map((text, i) => (
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
export function NaturalReview() {
  return (
    <StatementReview
      context="Peer-to-peer feedback: be specific and collaborative."
      labels={{ positive: 'Works here', negative: 'Needs changing' }}
      items={content.corrections.map((row, i) => ({ ...row, id: `C1.${i}` }))}
    />
  )
}
export function C101Questions({
  items,
}: {
  items: readonly { q: string; a: string }[]
}) {
  return (
    <PromptExercise
      items={items.map((item, index) => ({
        id: String(index),
        prompt: item.q,
        answer: item.a,
      }))}
    />
  )
}
