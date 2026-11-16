import { useRef, useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'
import { ExercisePanel } from '../../../src/components/Exercise/ExercisePanel'
import { LearningDialogue } from '../../../src/components/Exercise/LearningDialogue'
import { QuizOption } from '../../../src/components/Quiz/QuizOption'
import { QuizFeedback } from '../../../src/components/Quiz/QuizFeedback'
import { MinimalPairExercise } from '../../../src/components/InteractiveMaterial/MinimalPairExercise'
import { content, vocabulary, image, kim } from './B101.data'
import type { SpeechSectionProps } from './B101.types'
import * as S from './B101.styles'
export function MiniVocabulary({ column = false }: { column?: boolean }) {
  return (
    <S.MiniGrid $column={column} aria-label="Vocabulary reference">
      {vocabulary.map((v, i) => (
        <S.MiniCard key={v.id}>
          <img src={v.imageUrl} alt={v.imageAlt} />
          <span>{i + 1}</span>
        </S.MiniCard>
      ))}
    </S.MiniGrid>
  )
}
export function VocabularySection({ speech }: SpeechSectionProps) {
  const [ids, setIds] = useState<string[]>([]),
    [all, setAll] = useState(false),
    [initial, setInitial] = useState(false)
  const complete = all || ids.length === vocabulary.length
  return (
    <S.Stack>
      <S.QuestionTitle>
        What was she doing? · What was he doing?
      </S.QuestionTitle>
      <VocabularyGrid
        items={vocabulary}
        columns={4}
        imageVariant="scene"
        revealOnHover={false}
        revealVariant="tooltip"
        revealedIds={ids}
        showAll={all}
        showInitial={initial}
        onReveal={(id) =>
          setIds((old) => (old.includes(id) ? old : [...old, id]))
        }
        onPlay={(id) =>
          speech.speak([
            { id, text: vocabulary.find((v) => v.id === id)?.word ?? '' },
          ])
        }
      />
      <S.VocabularyTools>
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={initial}
          onClick={() => setInitial(!initial)}
        >
          Initial letters
        </Button>
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={all}
          onClick={() => setAll(!all)}
        >
          {all ? 'Hide words' : 'Show all'}
        </Button>
      </S.VocabularyTools>
      {complete ? (
        <S.Surface>
          <S.Hint>
            <b>play</b> = tocar (um instrumento) e jogar (um esporte).{' '}
            <b>guitar</b> = violão e guitarra. <b>shopping</b> = fazer compras;
            o shopping center é <b>the mall</b>.
          </S.Hint>
        </S.Surface>
      ) : null}
    </S.Stack>
  )
}
export function WarmUpSection({
  index,
  speech,
}: SpeechSectionProps & { index: number }) {
  const w = content.warmUps[index] ?? content.warmUps[0]!
  const [attempts, setAttempts] = useState<number[]>([]),
    [open, setOpen] = useState(!w.hide)
  const done = attempts.includes(w.a),
    last = attempts.at(-1)
  const answer = w.o[w.a] ?? ''
  return (
    <ExercisePanel
      layout="split"
      title={w.q}
      counter={`${index + 1} / 3`}
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
                side: 'end',
                content: done ? answer : '…',
              },
            ]}
          />
        ) : (
          <S.WarmImage
            src={image(index === 0 ? 'gardening' : 'swimming')}
            alt={vocabulary[index === 0 ? 2 : 1]?.imageAlt ?? ''}
          />
        )
      }
    >
      <S.Stack>
        {w.ctx ? <b>{w.ctx}</b> : null}
        {w.tr ? <S.Hint>{w.tr}</S.Hint> : null}
        {open ? (
          <S.Stack>
            {w.o.map((option, i) => (
              <QuizOption
                key={option}
                letter={String.fromCharCode(65 + i)}
                density="compact"
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
                onClick={() => {
                  setAttempts((old) => [...old, i])
                  if (i === w.a)
                    speech.speak([
                      {
                        id: w.id,
                        text: answer,
                        speaker: index === 2 ? 'leo' : 'ana',
                      },
                    ])
                }}
              >
                {option}
              </QuizOption>
            ))}
          </S.Stack>
        ) : (
          <Button variant="secondary" onClick={() => setOpen(true)}>
            Show options
          </Button>
        )}
        {last !== undefined ? (
          <QuizFeedback tone={done ? 'correct' : 'wrong'}>
            {done
              ? 'Correct!'
              : (Object.entries(w.why).find(
                  ([key]) => key === String(last),
                )?.[1] ?? 'Try again.')}
          </QuizFeedback>
        ) : null}
        {done ? (
          <>
            <S.Now>
              <b>Now you</b>
              <p>{w.now}</p>
            </S.Now>
            <MiniVocabulary />
          </>
        ) : null}
      </S.Stack>
    </ExercisePanel>
  )
}
export function PronunciationSection({
  index,
  speech,
}: SpeechSectionProps & { index: number }) {
  const scoreSequence = useRef(0)
  const pair = content.pronunciation[index] ?? content.pronunciation[0]!
  const [target, setTarget] = useState<number>(),
    [selected, setSelected] = useState<string>(),
    [feedback, setFeedback] = useState<'correct' | 'incorrect'>(),
    [score, setScore] = useState<
      { id: string; result: 'correct' | 'incorrect' }[]
    >([])
  return (
    <MinimalPairExercise
      mode="listen"
      choices={pair.c.map(([word, phonetic], i) => ({
        id: String(i),
        word,
        phonetic,
      }))}
      onListen={() => {
        const next = Math.random() < 0.5 ? 0 : 1
        setTarget(next)
        setSelected(undefined)
        setFeedback(undefined)
        speech.speak([
          { id: `pair-${index}-${next}`, text: pair.c[next]?.[0] ?? '' },
        ])
      }}
      selectedId={selected}
      feedback={feedback}
      score={score}
      hint={feedback === 'incorrect' ? pair.tip : undefined}
      labels={{ score: 'Score' }}
      onSelect={(id) => {
        if (target === undefined) {
          speech.speak([
            { id: `pair-${index}-${id}`, text: pair.c[Number(id)]?.[0] ?? '' },
          ])
          return
        }
        const result: 'correct' | 'incorrect' =
          Number(id) === target ? 'correct' : 'incorrect'
        const scoreId = String(++scoreSequence.current)
        setSelected(id)
        setFeedback(result)
        setScore((old) => [...old, { id: scoreId, result }].slice(-8))
        setTarget(undefined)
      }}
    />
  )
}
export function CorrectionSection({ speech }: SpeechSectionProps) {
  const [done, setDone] = useState<string[]>([]),
    [bad, setBad] = useState<Record<string, string>>({}),
    [own, setOwn] = useState(false)
  return (
    <S.Questions>
      {content.corrections.map((row, i) => {
        const correct = done.includes(row.id)
        return (
          <S.Correction key={row.id}>
            <S.Number>{correct ? '✓' : i + 1}</S.Number>
            <div>
              {row.pre ? <S.Hint>({row.pre})</S.Hint> : null}
              {correct && row.a ? (
                <>
                  <s>{row.s}</s>
                  <br />
                  {row.a}
                </>
              ) : (
                row.s
              )}
            </div>
            {correct ? (
              <>
                <small>{row.why}</small>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() =>
                    speech.speak([{ id: row.id, text: row.a ?? row.s }])
                  }
                >
                  Listen
                </Button>
              </>
            ) : (
              <S.Row>
                {['Right', 'Wrong'].map((value) => (
                  <Button
                    key={value}
                    variant="secondary"
                    size="sm"
                    aria-pressed={bad[row.id] === value}
                    onClick={() => {
                      if ((value === 'Right') === Boolean(row.ok)) {
                        setDone((old) => [...old, row.id])
                        speech.speak([{ id: row.id, text: row.a ?? row.s }])
                      } else setBad((old) => ({ ...old, [row.id]: value }))
                    }}
                  >
                    {value}
                  </Button>
                ))}
              </S.Row>
            )}
            {!correct && bad[row.id] ? (
              <QuizFeedback tone="wrong">Try again.</QuizFeedback>
            ) : null}
          </S.Correction>
        )
      })}
      <S.Correction>
        <S.Number>{own ? '✓' : 6}</S.Number>
        <div>
          One from today
          <S.Hint>Your teacher says one of your sentences from today.</S.Hint>
        </div>
        <Button
          variant="secondary"
          size="sm"
          aria-pressed={own}
          onClick={() => setOwn(!own)}
        >
          {own ? 'Done' : 'Fixed'}
        </Button>
      </S.Correction>
    </S.Questions>
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
