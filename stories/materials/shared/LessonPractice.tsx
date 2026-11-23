import { PromptExercise } from './LessonExercises'
import type { SourceQuestionsProps } from './Lesson.types'
import { toggleId } from './lessonState'
import { useRef, useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { MinimalPairExercise } from '../../../src/components/InteractiveMaterial/MinimalPairExercise'
import { MaterialLearningDialogue as LearningDialogue } from './MaterialLearningDialogue'
import { QuizFeedback } from '../../../src/components/Quiz/QuizFeedback'
import { ConnectionSignal } from '../../../src/components/InteractiveMaterial/ConnectionSignal'
import ana from '../UXLab/assets/bust_ana.png'
import kim from '../UXLab/assets/bust_kim.png'
import type {
  SpeechProps,
  PronunciationPair,
  CorrectionItem,
} from './Lesson.types'
import * as S from './Lesson.styles'
export function SourceQuestions({ items }: SourceQuestionsProps) {
  return (
    <PromptExercise
      items={items.map((item, index) => ({
        id: String(index),
        prompt: item.question,
        answer: item.hint,
      }))}
    />
  )
}
export function PronunciationPractice({
  pair,
  index,
  speech,
}: SpeechProps & { pair: PronunciationPair; index: number }) {
  const seq = useRef(0)
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
        word: word ?? '',
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
      onListen={() => {
        const next = Math.random() < 0.5 ? 0 : 1
        setTarget(next)
        setSelected(undefined)
        setFeedback(undefined)
        speech.speak([
          { id: `pair-${index}-${next}`, text: pair.c[next]?.[0] ?? '' },
        ])
      }}
      onSelect={(id) => {
        if (target === undefined) {
          speech.speak([
            { id: `pair-${index}-${id}`, text: pair.c[Number(id)]?.[0] ?? '' },
          ])
          return
        }
        const result: 'correct' | 'incorrect' =
          Number(id) === target ? 'correct' : 'incorrect'
        setSelected(id)
        setFeedback(result)
        const key = String(++seq.current)
        setScore((old) => [...old, { id: key, result }].slice(-8))
        setTarget(undefined)
      }}
    />
  )
}
export function CorrectionPractice({
  items,
  speech,
  ownInstruction,
}: SpeechProps & { items: readonly CorrectionItem[]; ownInstruction: string }) {
  const [done, setDone] = useState<string[]>([]),
    [bad, setBad] = useState<Record<string, string>>({}),
    [own, setOwn] = useState(false)
  return (
    <S.Questions>
      {items.map((r, i) => {
        const complete = done.includes(r.id)
        return (
          <S.Correction key={r.id}>
            <S.Number>{complete ? '✓' : i + 1}</S.Number>
            <div>
              {complete && r.a ? (
                <>
                  <s>{r.s}</s>
                  <br />
                  {r.a}
                </>
              ) : (
                r.s
              )}
            </div>
            {complete ? (
              <>
                <small>{r.why}</small>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => speech.speak([{ id: r.id, text: r.a ?? r.s }])}
                >
                  Listen
                </Button>
              </>
            ) : (
              <S.Row>
                {['Right', 'Wrong'].map((v) => (
                  <Button
                    key={v}
                    variant="secondary"
                    size="sm"
                    aria-pressed={bad[r.id] === v}
                    onClick={() => {
                      if ((v === 'Right') === Boolean(r.ok)) {
                        setDone((old) => [...old, r.id])
                        speech.speak([{ id: r.id, text: r.a ?? r.s }])
                      } else setBad((old) => ({ ...old, [r.id]: v }))
                    }}
                  >
                    {v}
                  </Button>
                ))}
              </S.Row>
            )}
            {!complete && bad[r.id] ? (
              <QuizFeedback tone="wrong">Tente novamente.</QuizFeedback>
            ) : null}
          </S.Correction>
        )
      })}
      <S.Correction>
        <S.Number>{own ? '✓' : items.length + 1}</S.Number>
        <div>
          One from today<S.Hint>{ownInstruction}</S.Hint>
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
export function DialoguePractice({
  lines,
  speech,
}: SpeechProps & {
  lines: readonly {
    id: string
    who: string
    text: string
    g?: string
    sig?: number
  }[]
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
        content: (
          <>
            {l.text}
            {l.sig ? <ConnectionSignal /> : null}
          </>
        ),
        translation: l.g,
        audioLabel: `Listen: ${l.text}`,
      }))}
      translatedIds={translated}
      onTranslate={(id) => setTranslated((old) => toggleId(old, id))}
      playingId={speech.playingId}
      onPlay={(id) => {
        const l = lines.find((x) => x.id === id)
        if (l) speech.speak([{ id, text: l.text }])
      }}
    />
  )
}
export function ComprehensionPractice({
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
