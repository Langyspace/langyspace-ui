import { LessonHint } from '../shared/LessonHint'
import { useState } from 'react'
import { RevealCard } from '../../../src/components/Exercise/RevealCard'
import type { CorrectionItem } from '../shared/Lesson.types'
import { ana } from './B201.data'
import { Button } from '../../../src/components/Button/Button'
import { ExercisePanel } from '../../../src/components/Exercise/ExercisePanel'
import { CharacterDialogue as LearningDialogue } from '../shared/CharacterPortraits.styles'
import { QuizOption } from '../../../src/components/Quiz/QuizOption'
import { QuizFeedback } from '../../../src/components/Quiz/QuizFeedback'
import type { WarmUpProps, WordTableProps } from './B201.types'
import { content, vocabulary, warmUps, image, kim } from './B201.data'
import * as S from './B201.styles'
export function VocabularySection() {
  const [ids, setIds] = useState<string[]>([]),
    [active, setActive] = useState(''),
    [all, setAll] = useState(false),
    [initial, setInitial] = useState(false)
  return (
    <S.Stack>
      <S.LargeVocabularyGrid
        items={vocabulary}
        columns={4}
        density="regular"
        imageVariant="scene"
        imageFit="contain"
        revealVariant="tooltip"
        revealOnHover={false}
        activeId={active}
        revealedIds={ids}
        showAll={all}
        showInitial={initial}
        onReveal={(id) => {
          setActive(id)
          setIds((old) => (old.includes(id) ? old : [...old, id]))
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
export function WarmUpSection({ index }: WarmUpProps) {
  const w = warmUps[index] ?? warmUps[0]!
  const [attempts, setAttempts] = useState<number[]>([]),
    [open, setOpen] = useState(!w.hide)
  const done = attempts.includes(w.a)
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
          <S.SceneImage
            src={image(w.pic)}
            alt={
              vocabulary.find((v) => v.imageUrl === image(w.pic))?.imageAlt ??
              'Question scene'
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
          <S.Now>
            <b>Now you</b>
            <p>{w.now}</p>
          </S.Now>
        ) : null}
      </S.Stack>
    </ExercisePanel>
  )
}
export function WordTableSection({ grammar = false }: WordTableProps) {
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
              <LessonHint context="Form and meaning">
                <b>Form and meaning</b>
                <p>
                  <b>Negative:</b> I hadn’t been checking my battery.
                </p>
                <p>
                  <b>Question:</b> Had you been using your phone? How long had
                  you been waiting?
                </p>
                <p>
                  <b>For</b> two hours · <b>since</b> two o’clock. The reference
                  point is in the past.
                </p>
                <p>
                  Use <b>had + past participle</b> for a completed earlier
                  action or a state: I’d left my charger. I’d known Raj for
                  years.
                </p>
                <p>
                  The continuous form focuses on activity or duration; the
                  activity may have just stopped or still have been continuing.
                </p>
              </LessonHint>
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
  const [ids, setIds] = useState<string[]>([])
  return (
    <S.Stack>
      {items.map((r, i) => (
        <RevealCard
          key={r.id}
          marker={i + 1}
          revealed={ids.includes(r.id)}
          onClick={() =>
            setIds((old) =>
              old.includes(r.id)
                ? old.filter((x) => x !== r.id)
                : [...old, r.id],
            )
          }
          answer={
            <>
              <b>{r.ok ? 'This is correct.' : r.a}</b>
              <p>{r.why}</p>
            </>
          }
        >
          {r.s}
        </RevealCard>
      ))}
      <S.Now>
        <b>One from today</b>
        <p>
          Your teacher repeats a sentence from your conversation. Improve it
          together.
        </p>
      </S.Now>
    </S.Stack>
  )
}
