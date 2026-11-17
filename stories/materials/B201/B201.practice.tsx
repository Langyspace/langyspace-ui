import { useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'
import { ExercisePanel } from '../../../src/components/Exercise/ExercisePanel'
import { LearningDialogue } from '../../../src/components/Exercise/LearningDialogue'
import { QuizOption } from '../../../src/components/Quiz/QuizOption'
import { QuizFeedback } from '../../../src/components/Quiz/QuizFeedback'
import type { SpeechProps } from '../shared/Lesson.types'
import type { WarmUpProps, WordTableProps } from './B201.types'
import { content, vocabulary, warmUps, image, kim } from './B201.data'
import * as S from './B201.styles'
export function VocabularySection({ speech }: SpeechProps) {
  const [ids, setIds] = useState<string[]>([]),
    [active, setActive] = useState(''),
    [all, setAll] = useState(false),
    [initial, setInitial] = useState(false)
  return (
    <S.Stack>
      <S.QuestionTitle>What’s this?</S.QuestionTitle>
      <VocabularyGrid
        items={vocabulary}
        columns={4}
        density="regular"
        imageVariant="scene"
        imageFit="contain"
        revealVariant="tooltip"
        revealOnHover={false}
        activeId={active}
        markRevealed
        revealedIds={ids}
        showAll={all}
        showInitial={initial}
        onReveal={(id) => {
          setActive(id)
          setIds((old) => (old.includes(id) ? old : [...old, id]))
        }}
        onPlay={(id) => {
          const row = vocabulary.find((v) => v.id === id)
          if (row) speech.speak([{ id, text: row.word, speaker: 'ana' }])
        }}
      />
      <S.Row>
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={initial}
          onClick={() => setInitial(!initial)}
        >
          First letter
        </Button>
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={all}
          onClick={() => setAll(!all)}
        >
          {all ? 'Hide all' : 'Show all'}
        </Button>
      </S.Row>
      {all || ids.length === vocabulary.length ? (
        <S.Hint>
          <b>a charging cable</b> is only the cable. <b>a phone charger</b> goes
          in the outlet. <b>a doorman</b> works at the door of a building.{' '}
          <b>My phone died.</b> = Meu celular descarregou (morreu). It’s dead.
        </S.Hint>
      ) : null}
    </S.Stack>
  )
}
export function WarmUpSection({ index, speech }: WarmUpProps) {
  const w = warmUps[index] ?? warmUps[0]!
  const [attempts, setAttempts] = useState<number[]>([]),
    [open, setOpen] = useState(!w.hide)
  const done = attempts.includes(w.a),
    last = attempts.at(-1)
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
                audioLabel: `Listen: ${w.q}`,
              },
            ]}
            onPlay={() =>
              speech.speak([{ id: `WUQ.${index}`, text: w.q, speaker: 'kim' }])
            }
          />
          {w.hint ? <S.Hint>{w.hint}</S.Hint> : null}
          <S.SceneImage
            src={image(w.pic)}
            alt={
              vocabulary.find((v) => v.imageUrl === image(w.pic))?.imageAlt ??
              'Cena da pergunta'
            }
          />
        </S.Stack>
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
                  if (i === w.a)
                    speech.speak([
                      { id: `WUA.${index}`, text: option, speaker: 'ana' },
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
            {done ? 'Correct!' : `Not yet. ${w.why[last] ?? ''}`}
          </QuizFeedback>
        ) : null}
        {index === 0 ? <S.Hint>{w.sub}</S.Hint> : null}
        {done ? (
          <S.Now>
            <b>Now you</b>
            <p>{w.now}</p>
            {index === 2 ? <S.Hint>{w.sub}</S.Hint> : null}
          </S.Now>
        ) : null}
      </S.Stack>
    </ExercisePanel>
  )
}
export function WordTableSection({ speech, grammar = false }: WordTableProps) {
  const [ids, setIds] = useState<string[]>([]),
    [unlocked, setUnlocked] = useState(false),
    [practice, setPractice] = useState(false),
    [support, setSupport] = useState(false)
  const rows = grammar
    ? content.grammar.map((r) => ({
        id: r.id,
        subject: r.question,
        verb: r.form,
        example: r.example,
        hint: r.hint,
      }))
    : content.expressions.map((r) => ({
        id: r.id,
        subject: r.pt,
        verb: r.en,
        example: r.example,
        hint: '',
      }))
  const reveal = (id: string) => {
    const next = ids.includes(id) ? ids : [...ids, id]
    setIds(next)
    if (next.length === rows.length) setUnlocked(true)
    const row = rows.find((r) => r.id === id)
    if (row)
      speech.speak([
        { id, text: grammar ? row.example : row.verb, speaker: 'ana' },
      ])
  }
  return (
    <S.GrammarColumns $explanation={grammar || unlocked}>
      {grammar || unlocked ? (
        <S.Stack>
          {grammar ? (
            <S.Explanation>
              <h3>had been + -ing</h3>
              <p>
                Use it for something that was happening for some time{' '}
                <b>before</b> another moment in the past. I’d been walking for
                two hours <b>when</b> my phone died. Here, <b>’d = had</b>.
              </p>
              <p>
                Eu estava andando havia duas horas = I’d been walking for two
                hours. Não é I was walking since two hours.
              </p>
            </S.Explanation>
          ) : null}
          {unlocked ? (
            <S.Explanation>
              {grammar ? (
                <>
                  <h3>Four tenses, one story</h3>
                  <p>
                    What happened: <b>past simple</b> (My phone died.)
                  </p>
                  <p>
                    What was happening at that moment: <b>was + -ing</b> (I was
                    walking.)
                  </p>
                  <p>
                    What had happened before: <b>had + participle</b> (I’d left
                    my charger.)
                  </p>
                  <p>
                    What had been happening for some time before:{' '}
                    <b>had been + -ing</b> (I’d been using it all day.)
                  </p>
                </>
              ) : (
                <>
                  <h3>Careful</h3>
                  <p>
                    <b>eventually</b> is not “eventualmente”. Eventualmente (de
                    vez em quando) = <b>sometimes</b>. <b>I got lost</b>, e não
                    I lost myself. <b>borrow</b> = you take; <b>lend</b> = you
                    give: Can you lend me your charger? <b>ran</b> and{' '}
                    <b>lent</b> are the past.
                  </p>
                  <p>
                    Em português, emprestar serve para os dois lados; em inglês,
                    são dois verbos.
                  </p>
                </>
              )}
            </S.Explanation>
          ) : null}
        </S.Stack>
      ) : null}
      <S.Stack>
        <S.LessonTable
          title={grammar ? 'Ana’s day' : 'A day with no battery'}
          hiddenAnswers
          revealedIds={ids}
          onReveal={reveal}
          onPlay={(id) => {
            const row = rows.find((r) => r.id === id)
            if (row) speech.speak([{ id, text: row.example, speaker: 'ana' }])
          }}
          revealLabel={grammar ? 'Reveal form' : 'Reveal expression'}
          columns={{
            subject: grammar ? 'Kim asks' : 'Em português',
            verb: grammar ? 'Form' : 'Expression',
            example: 'Example',
          }}
          rows={rows.map((row) => ({
            ...row,
            translation: row.hint || undefined,
          }))}
        />
        {!grammar ? (
          <Button
            size="sm"
            variant="secondary"
            onClick={() => {
              setIds([])
              if (unlocked) setPractice(true)
            }}
          >
            Hide all
          </Button>
        ) : null}
        {unlocked && (grammar || practice) ? (
          <S.Now>
            <b>Now you</b>
            <p>
              {grammar
                ? 'What had you been doing before this class? Tell your teacher: I’d been …ing for … when the class started. Then ask: And you?'
                : 'When did you last get lost? Tell your teacher. Then ask: And you?'}
            </p>
            <Button
              variant="secondary"
              size="sm"
              aria-expanded={support}
              onClick={() => setSupport(!support)}
            >
              {support ? 'Hide starters' : 'Show starters'}
            </Button>
            {support ? (
              <S.Hint>
                {grammar
                  ? 'I’d been working · cooking · studying · driving …'
                  : 'I got lost in … · I’d been walking for … · Never! I always use my phone.'}
              </S.Hint>
            ) : null}
          </S.Now>
        ) : null}
      </S.Stack>
    </S.GrammarColumns>
  )
}
