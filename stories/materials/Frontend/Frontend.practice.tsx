import { PromptExercise } from '../shared/LessonExercises'
import { VocabularyControls } from '../shared/VocabularyControls'
import { useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'
import { ExercisePanel } from '../../../src/components/Exercise/ExercisePanel'
import { QuizOption } from '../../../src/components/Quiz/QuizOption'
import { MinimalPairExercise } from '../../../src/components/InteractiveMaterial/MinimalPairExercise'
import { content, image, vocabulary } from './Frontend.data'
import type { AudioProps, IndexedAudioProps } from './Frontend.types'
import * as S from './Frontend.styles'
export function Questions({ items }: { items: readonly string[][] }) {
  return (
    <PromptExercise
      items={items.map(([prompt = '', hint], index) => ({
        id: String(index),
        prompt,
        hint,
      }))}
    />
  )
}
export function Vocabulary({ media }: AudioProps) {
  const [revealed, setRevealed] = useState<string[]>([]),
    [all, setAll] = useState(false),
    [hints, setHints] = useState(false)
  return (
    <S.Stack>
      <VocabularyGrid
        items={vocabulary}
        columns={4}
        revealedIds={revealed}
        revealOnHover={false}
        showAll={all}
        showInitial={hints}
        revealVariant="tooltip"
        onReveal={(id) => {
          setRevealed((old) => (old.includes(id) ? old : [...old, id]))
        }}
        onPlay={(id) => media.play([id])}
      />
      <VocabularyControls
        showInitial={hints}
        showAll={all}
        onToggleInitial={() => setHints(!hints)}
        onToggleAll={() => setAll(!all)}
      />
      <S.Hint>
        <b>on mobile</b> = no celular · <b>on desktop</b> = no computador. The
        menu doesn’t open on mobile.
      </S.Hint>
    </S.Stack>
  )
}
export function MiniVocabulary() {
  return (
    <S.Mini role="img" aria-label="Os sete desenhos do vocabulário">
      {content.vocabulary.map((v) => (
        <img key={v.id} src={image(v.ic)} alt="" />
      ))}
    </S.Mini>
  )
}
export function WarmUp({ index, media }: IndexedAudioProps) {
  const item = content.warmUps[index]!,
    [attempts, setAttempts] = useState<number[]>([]),
    done = attempts.includes(item.a)
  const artwork = item.ak ? (
    <S.Stack>
      <S.Profile>
        <S.Hint>Kim’s profile</S.Hint>
        <b>Frontend developer</b>
        <p>JavaScript · three years · still uses it ✓</p>
      </S.Profile>
      <S.Person>
        <img src={image('meet_jun')} alt="Jun" />
        <b>Jun asks Kim</b>
        <p>How long have you worked with JavaScript?</p>
      </S.Person>
      <S.Person>
        <img src={image('bust_kim')} alt="Kim" />
        <b>Kim</b>
        <p aria-live="polite">{done ? item.o[item.a] : '…'}</p>
      </S.Person>
    </S.Stack>
  ) : item.task ? (
    <S.Stack>
      <S.Hint>{item.cap}</S.Hint>
      <S.Profile>
        <S.Hint>Task · Kim</S.Hint>
        <b>Fix the menu on mobile</b>
        <S.Checklist>
          <li>✓ Fix</li>
          <li>✓ Test on 3 phones</li>
          <li>✗ Deploy</li>
        </S.Checklist>
      </S.Profile>
    </S.Stack>
  ) : (
    <S.Stack>
      <S.Hint>{item.cap}</S.Hint>
      <S.Artwork
        src={image('wu_test')}
        alt="A computer with the red button, and a phone without it"
      />
    </S.Stack>
  )
  return (
    <ExercisePanel layout="split" counter={`${index + 1} / 3`} media={artwork}>
      <S.Stack>
        <S.QuestionTitle>{item.q}</S.QuestionTitle>
        <S.Hint>{item.tr}</S.Hint>
        {item.o.map((option, i) => (
          <QuizOption
            key={option}
            letter={String.fromCharCode(65 + i)}
            feedbackOutcome={i === item.a ? 'correct' : 'wrong'}
            density="compact"
            state={
              attempts.includes(i)
                ? i === item.a
                  ? 'correct'
                  : 'wrong'
                : 'default'
            }
            disabled={done}
            aria-pressed={attempts.includes(i)}
            onClick={() => {
              setAttempts((old) => [...old, i])
              if (i === item.a) media.play([item.id])
            }}
          >
            {option}
          </QuizOption>
        ))}
      </S.Stack>
    </ExercisePanel>
  )
}
export function Pronunciation({ index, media }: IndexedAudioProps) {
  const pair = content.pronunciation[index]!,
    [target, setTarget] = useState<number>(),
    [selected, setSelected] = useState<string>(),
    [feedback, setFeedback] = useState<'correct' | 'incorrect'>(),
    [score, setScore] = useState<
      { id: string; result: 'correct' | 'incorrect' }[]
    >([])
  const listen = () => {
    const next = Math.random() < 0.5 ? 0 : 1
    setTarget(next)
    setSelected(undefined)
    setFeedback(undefined)
    media.play([`P5.${index}${next}${Math.random() < 0.5 ? 'a' : 'k'}`])
  }
  return (
    <S.Stack>
      <S.Center>
        <Button
          variant="brand"
          onClick={listen}
          iconStart={
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M11 5 6 9H3v6h3l5 4zM16 9a5 5 0 0 1 0 6M19 6a9 9 0 0 1 0 12" />
            </svg>
          }
        >
          Listen
        </Button>
      </S.Center>
      <MinimalPairExercise
        mode="listen"
        choices={pair.c.map(([word, phonetic], i) => ({
          id: String(i),
          word,
          phonetic,
          feedbackOutcome:
            target === undefined
              ? undefined
              : i === target
                ? ('correct' as const)
                : ('wrong' as const),
        }))}
        selectedId={selected}
        feedback={feedback}
        score={score}
        hint={feedback === 'incorrect' ? pair.tip : undefined}
        onSelect={(id) => {
          const choice = Number(id)
          if (target === undefined) {
            setSelected(undefined)
            setFeedback(undefined)
            media.play([`P5.${index}${choice}a`])
            return
          }
          const result: 'correct' | 'incorrect' =
            choice === target ? 'correct' : 'incorrect'
          setSelected(id)
          setFeedback(result)
          setScore((old) =>
            [...old, { id: String(Date.now()), result }].slice(-8),
          )
          setTarget(undefined)
        }}
        labels={{
          listen: 'Listen',
          listenMode: 'Listen',
          speakMode: 'Say it',
          score: 'Last eight answers',
        }}
      />
    </S.Stack>
  )
}
export function Corrections({ media }: AudioProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({}),
    [own, setOwn] = useState(false)
  return (
    <S.Questions>
      {content.corrections.map((item, i) => {
        const done = answers[item.id] === (item.ok ? 'Right' : 'Wrong')
        return (
          <S.Correction key={item.id}>
            <S.Number>{done ? '✓' : i + 1}</S.Number>
            <div>
              {done && !item.ok ? (
                <>
                  <s>{item.s}</s>
                  <br />
                  {item.a}
                </>
              ) : (
                item.s
              )}
            </div>
            {done ? (
              <>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => media.play([item.id])}
                >
                  Listen
                </Button>
                <S.Hint>{item.why}</S.Hint>
              </>
            ) : (
              <S.Row>
                {['Right', 'Wrong'].map((value) => (
                  <Button
                    key={value}
                    size="sm"
                    variant="secondary"
                    aria-pressed={answers[item.id] === value}
                    onClick={() => {
                      setAnswers((old) => ({ ...old, [item.id]: value }))
                      if (value === (item.ok ? 'Right' : 'Wrong'))
                        media.play([item.id])
                    }}
                  >
                    {value}
                    {answers[item.id] === value ? ' ×' : ''}
                  </Button>
                ))}
                {answers[item.id] ? (
                  <S.Hint role="status">Try again.</S.Hint>
                ) : null}
              </S.Row>
            )}
          </S.Correction>
        )
      })}
      <S.Correction>
        <S.Number>{own ? '✓' : 6}</S.Number>
        <div>One from today</div>
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={own}
          onClick={() => setOwn(!own)}
        >
          {own ? 'Done' : 'Fixed'}
        </Button>
      </S.Correction>
    </S.Questions>
  )
}
