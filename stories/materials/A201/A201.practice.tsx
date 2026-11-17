import { useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'
import { ExercisePanel } from '../../../src/components/Exercise/ExercisePanel'
import { LearningDialogue } from '../../../src/components/Exercise/LearningDialogue'
import { QuizOption } from '../../../src/components/Quiz/QuizOption'
import { QuizFeedback } from '../../../src/components/Quiz/QuizFeedback'
import type { SpeechProps } from '../shared/Lesson.types'
import { content, vocabulary, actions, image, ana, kim } from './A201.data'
import * as S from '../shared/Lesson.styles'
import * as A from './A201.styles'
export function VocabularySection({
  speech,
  action = false,
}: SpeechProps & { action?: boolean }) {
  const [ids, setIds] = useState<string[]>([]),
    [all, setAll] = useState(false),
    [initial, setInitial] = useState(false)
  const items = action ? actions : vocabulary
  return (
    <A.VocabularyBody>
      <A.VocabularyPrompt>
        <S.QuestionTitle>
          {action ? 'What are you doing?' : 'What’s this?'}
        </S.QuestionTitle>
        {action ? <S.Hint>O que você está fazendo?</S.Hint> : null}
      </A.VocabularyPrompt>
      <VocabularyGrid
        items={items}
        density="regular"
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
            { id, text: items.find((v) => v.id === id)?.word ?? '' },
          ])
        }
      />
      <A.VocabularyControls>
        <Button
          variant="secondary"
          size="sm"
          aria-pressed={initial}
          onClick={() => setInitial(!initial)}
        >
          Initial letters
        </Button>
        <Button
          variant="secondary"
          size="sm"
          aria-pressed={all}
          onClick={() => setAll(!all)}
        >
          {all ? 'Hide words' : 'Show all'}
        </Button>
      </A.VocabularyControls>
      {all || ids.length === items.length ? (
        <A.VocabularyNote>
          <S.Hint>
            {action ? (
              <>
                <b>I’m</b> + verbo com <b>ing</b> = estou + ndo. work, eat e
                study você já conhece da A1.04: agora é I’m working, I’m eating,
                I’m studying.
              </>
            ) : (
              <>
                <b>laptop</b> é o notebook. Em inglês, notebook é caderno.{' '}
                <b>video call</b>: a ordem é ao contrário do português.{' '}
                <b>Bad signal!</b> é o que se diz quando a ligação falha.
              </>
            )}
          </S.Hint>
        </A.VocabularyNote>
      ) : null}
    </A.VocabularyBody>
  )
}
export function WarmUpSection({
  index,
  speech,
}: SpeechProps & { index: number }) {
  const w = content.warmUps[index] ?? content.warmUps[0]!
  const [attempts, setAttempts] = useState<number[]>([]),
    [open, setOpen] = useState(!w.hide)
  const done = attempts.includes(w.a),
    last = attempts.at(-1),
    answer = w.o[w.a] ?? ''
  return (
    <ExercisePanel
      layout="split"
      counter={`${index + 1} / 3`}
      media={
        <S.Stack>
          <LearningDialogue
            density="compact"
            lines={[
              {
                id: 'kim',
                speaker: 'Kim asks Ana',
                avatarUrl: kim,
                side: 'start',
                content: w.q,
              },
            ]}
          />
          <A.SceneImage
            src={image(w.pic)}
            alt={
              index === 0
                ? 'Ana está ao lado do rio'
                : index === 1
                  ? 'Ana está numa reunião'
                  : 'Ana trabalha normalmente de casa'
            }
          />
          <LearningDialogue
            density="compact"
            lines={[
              {
                id: 'ana',
                speaker: 'Ana',
                avatarUrl: ana,
                side: 'end',
                content: done ? answer : '…',
              },
            ]}
          />
        </S.Stack>
      }
    >
      <S.Stack>
        <b>{w.ins}</b>
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
                    speech.speak([{ id: w.id, text: answer, speaker: 'ana' }])
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
                )?.[1] ?? 'Tente novamente.')}
          </QuizFeedback>
        ) : null}
        {done ? (
          <S.Now>
            <b>Now you</b>
            <p>{w.now}</p>
            {w.sub ? <S.Hint>{w.sub}</S.Hint> : null}
          </S.Now>
        ) : null}
      </S.Stack>
    </ExercisePanel>
  )
}
export function GrammarSection({ speech }: SpeechProps) {
  const [ids, setIds] = useState<string[]>([]),
    [starters, setStarters] = useState(false)
  const all = content.grammar.every((r) => ids.includes(r[4] ?? ''))
  const play = (id: string) =>
    speech.speak([
      { id, text: content.grammar.find((r) => r[4] === id)?.[2] ?? '' },
    ])
  return (
    <S.GrammarColumns>
      <S.Stack>
        <S.Explanation>
          <h3>Sempre ou agora?</h3>
          <p>
            O que você faz sempre ou normalmente (<b>usually</b>): <b>I work</b>
            . O que está acontecendo agora (<b>now</b>) ou só esta semana (
            <b>this week</b>): <b>I’m working</b>, com am e ing.
          </p>
        </S.Explanation>
        {all ? (
          <S.Explanation>
            <h3>Ela e ele</h3>
            <p>
              Rotina: Leo usually works in the evening. Agora: Now he’<b>s</b>{' '}
              cooking. Com she e he, é <b>is</b> + ing.
            </p>
          </S.Explanation>
        ) : null}
      </S.Stack>
      <S.Stack>
        <A.Grammar
          title="When?"
          columns={{ subject: 'Quando', verb: 'Palavra', example: 'Exemplo' }}
          rows={content.grammar.map(
            ([subject, verb, example, translation, id]) => ({
              id: id ?? '',
              subject,
              verb,
              example,
              translation,
              audioLabel: `Listen: ${example}`,
            }),
          )}
          hiddenAnswers
          revealedIds={ids}
          revealLabel="Mostrar a palavra e o exemplo"
          onReveal={(id) => {
            setIds((old) => [...old, id])
            play(id)
          }}
          onPlay={play}
        />
        {all ? (
          <A.GrammarPrompt>
            <b>Agora você</b>
            <p>
              Diga o que você faz normalmente e o que você está fazendo esta
              semana.
            </p>
            <Button
              variant="secondary"
              size="sm"
              aria-expanded={starters}
              onClick={() => setStarters(!starters)}
            >
              {starters
                ? 'Esconder começos de frase'
                : 'Mostrar começos de frase'}
            </Button>
            {starters ? (
              <S.Hint>
                I usually … · I always … · This week I’m … · Now I’m …
              </S.Hint>
            ) : null}
          </A.GrammarPrompt>
        ) : null}
      </S.Stack>
    </S.GrammarColumns>
  )
}
