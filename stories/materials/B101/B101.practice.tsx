import { VocabularyControls } from '../shared/VocabularyControls'
import { useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { ExercisePanel } from '../../../src/components/Exercise/ExercisePanel'
import { CharacterDialogue as LearningDialogue } from '../shared/CharacterPortraits.styles'
import { QuizOption } from '../../../src/components/Quiz/QuizOption'
import { QuizFeedback } from '../../../src/components/Quiz/QuizFeedback'
import { MinimalPairExercise } from '../../../src/components/InteractiveMaterial/MinimalPairExercise'
import { content, vocabulary, image, kim, leo } from './B101.data'
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
export function VocabularySection({ group = 0 }: { group?: number }) {
  const [ids, setIds] = useState<string[]>([]),
    [all, setAll] = useState(false),
    [initial, setInitial] = useState(false)
  const items = vocabulary.slice(group * 4, group * 4 + 4)
  const complete = all || ids.length === items.length
  return (
    <S.Stack>
      <S.Vocabulary
        items={items}
        columns={2}
        imageVariant="scene"
        imageFit="contain"
        density="regular"
        revealOnHover={false}
        revealVariant="tooltip"
        revealedIds={ids}
        showAll={all}
        showInitial={initial}
        onReveal={(id) =>
          setIds((old) => (old.includes(id) ? old : [...old, id]))
        }
      />
      <VocabularyControls
        showInitial={initial}
        showAll={all}
        onToggleInitial={() => setInitial(!initial)}
        onToggleAll={() => setAll(!all)}
      />
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
}: SpeechSectionProps & { index: number }) {
  const w = content.warmUps[index] ?? content.warmUps[0]!
  const [attempts, setAttempts] = useState<number[]>([]),
    [open, setOpen] = useState(!w.hide)
  const done = attempts.includes(w.a)
  const answer = w.o[w.a] ?? ''
  return (
    <ExercisePanel
      variant="warmup"
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
        {done ? (
          <>
            <S.Now>
              <b>Now you</b>
              <p>{w.now}</p>
            </S.Now>
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
  const pair = content.pronunciation[index] ?? content.pronunciation[0]!
  const [target, setTarget] = useState<number>(),
    [selected, setSelected] = useState<string>(),
    [feedback, setFeedback] = useState<'correct' | 'incorrect'>()

  return (
    <MinimalPairExercise
      mode="listen"
      choices={pair.c.map(([word, phonetic], i) => ({
        id: String(i),
        word,
        phonetic: feedback ? phonetic : undefined,
      }))}
      onListen={() => {
        const next = Math.random() < 0.5 ? 0 : 1
        setTarget(next)
        setSelected(undefined)
        setFeedback(undefined)
        speech.speak([
          { id: `P.${index}.${next}`, text: pair.c[next]?.[0] ?? '' },
        ])
      }}
      selectedId={selected}
      feedback={feedback}
      hint={feedback === 'incorrect' ? pair.tip : undefined}
      onSelect={(id) => {
        if (target === undefined) {
          speech.speak([
            { id: `P.${index}.${id}`, text: pair.c[Number(id)]?.[0] ?? '' },
          ])
          return
        }
        const result: 'correct' | 'incorrect' =
          Number(id) === target ? 'correct' : 'incorrect'
        setSelected(id)
        setFeedback(result)
        setTarget(undefined)
      }}
    />
  )
}
export function CorrectionSection() {
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
