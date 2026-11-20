import { PromptExercise } from '../shared/LessonExercises'
import { useVocabularyAudio } from '../shared/useVocabularyAudio'
import { vocabularyRecordings } from './C101.vocabularyAudio'
import type { ExpressionsProps } from './C101.types'
import { ExercisePanel } from '../../../src/components/Exercise/ExercisePanel'
import { QuizOption } from '../../../src/components/Quiz/QuizOption'
import { LessonHint } from '../shared/LessonHint'
import { useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { MinimalPairExercise } from '../../../src/components/InteractiveMaterial/MinimalPairExercise'
import { GrammarTable } from '../../../src/components/InteractiveMaterial/GrammarTable'
import { CharacterDialogue as LearningDialogue } from '../shared/CharacterPortraits.styles'
import { toggleId } from '../shared/lessonState'
import { ana, kim } from '../shared/characterPortraits'
import content from './C101.content.json'
import type { C101Audio } from './C101.types'
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
      columns={{ subject: 'Context', verb: 'Expression', example: 'Meaning' }}
      hiddenAnswers
      revealedIds={revealed}
      rows={items.map((item) => ({
        id: `E.${item.i}`,
        subject: item.s.replace(/[{}]/g, ''),
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
  const [chosen, setChosen] = useState<number>()
  const complete = chosen === w.a
  const prompt =
    index === 0
      ? 'How could Ana describe the problem tactfully?'
      : index === 1
        ? 'How could she ask Raj to change it?'
        : 'What’s the best feedback you’ve ever received?'
  return (
    <ExercisePanel
      variant="warmup"
      media={
        <S.Note
          aria-label={index === 2 ? 'Ana’s answer' : 'Ana’s notes for Friday'}
        >
          {index === 2 ? (
            <>
              <small>Kim asks Ana</small>
              <p>{prompt}</p>
              <strong>{complete ? w.o[w.a] : '…'}</strong>
            </>
          ) : (
            <>
              <small>Ana’s notes for Friday</small>
              <p>
                <strong>
                  {index === 0
                    ? '1. Raj talked too fast.'
                    : '2. Use fewer slides.'}
                </strong>
              </p>
            </>
          )}
        </S.Note>
      }
    >
      <S.Stack>
        <p>{index < 2 ? prompt : 'Which answer responds to Kim’s question?'}</p>
        {w.o.map((text, i) => (
          <QuizOption
            key={text}
            letter={String.fromCharCode(65 + i)}
            density="compact"
            aria-pressed={chosen === i}
            state={
              chosen === undefined
                ? 'default'
                : chosen === i
                  ? complete
                    ? 'correct'
                    : 'wrong'
                  : complete
                    ? 'dim'
                    : 'default'
            }
            disabled={complete}
            onClick={() => setChosen(i)}
          >
            {text}
          </QuizOption>
        ))}
        <PromptExercise
          numbered={false}
          items={[{ id: 'followup', prompt: 'Now you', answer: w.now }]}
        />
      </S.Stack>
    </ExercisePanel>
  )
}
export function Reading() {
  return (
    <S.Stack>
      <S.Columns>
        <S.Paper aria-label="Laura’s email">
          <header>
            <b>Tuesday’s presentation</b>
            <small>Laura Hughes → Ana · Wednesday, 9:12</small>
          </header>
          {content.mail.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </S.Paper>
        <S.Stack>
          <C101Questions items={content.reading} />
          <S.Surface>
            <b>
              Have you received a polite message that signalled dissatisfaction?
            </b>
            <p>What gave it away? Tell your teacher how you responded.</p>
          </S.Surface>
        </S.Stack>
      </S.Columns>
    </S.Stack>
  )
}
export function Prosody({ index, audio }: { index: number; audio: C101Audio }) {
  const [selected, setSelected] = useState<string>()
  const text =
    index === 0 ? 'It was a bit rushed.' : 'You might want to cut some slides.'
  return (
    <S.Stack>
      <MinimalPairExercise
        mode="listen"
        choices={['Version A', 'Version B'].map((name, i) => ({
          id: String(i),
          word: text,
          phonetic: name,
        }))}
        selectedId={selected}
        onSelect={(id) => {
          setSelected(id)
          audio.play([`c101-pair-${index}-${id}`])
        }}
      />
      <S.Surface>
        <b>What impression does each version create?</b>
        <p>
          Play either card. Which delivery sounds more tentative or more
          decisive? Imitate both and explain what you notice in the stress, pace
          and final pitch.
        </p>
      </S.Surface>
      <LessonHint context="How does context change the message?">
        <b>How does context change the message?</b>
        <p>
          A lighter onset and fall-rise can sound tentative; strong stress and a
          final fall can sound decisive. These are tendencies, not rules:
          context and the speaker’s relationship matter.
        </p>
      </LessonHint>
    </S.Stack>
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
  const [revealed, setRevealed] = useState<string[]>([])
  return (
    <S.Stack>
      <GrammarTable
        title="From direct to constructive"
        columns={{ subject: 'Direct', example: 'A possible alternative' }}
        hiddenAnswers
        rows={content.grammar.map((x) => ({
          id: String(x.i + 1),
          subject: x.d,
          example: (
            <>
              <b>{x.f}</b>
              <p>{x.ex}</p>
            </>
          ),
          translation: x.n,
        }))}
        revealedIds={revealed}
        onReveal={(id) => setRevealed((old) => toggleId(old, id))}
        revealLabel="Reveal alternative"
      />
      <S.ExpressionList>
        {content.grammarNotes.map((x) => (
          <LessonHint key={x.title} context={x.title}>
            <b>{x.title}</b>
            <p>{x.text}</p>
          </LessonHint>
        ))}
      </S.ExpressionList>
      <S.Surface>
        <b>One observation, one request</b>
        <p>
          Your colleague’s updates arrive after the meeting. Describe the effect
          and ask for one change. Leave room for their perspective.
        </p>
      </S.Surface>
    </S.Stack>
  )
}
export function NaturalReview() {
  const [done, setDone] = useState<number[]>([])
  const [wrong, setWrong] = useState<number[]>([])
  const [own, setOwn] = useState(false)
  return (
    <S.Stack>
      {content.corrections.map((r, i) => (
        <S.Surface key={r.s}>
          <b>
            {i + 1}. {r.s}
          </b>
          {done.includes(i) ? (
            <>
              <p>{r.a ?? 'This works as a tentative request.'}</p>
              <S.Hint>{r.why}</S.Hint>
            </>
          ) : (
            <S.Row>
              {['Works here', 'Needs changing'].map((text, j) => (
                <Button
                  key={text}
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    if ((j === 0) === Boolean(r.ok))
                      setDone((old) => [...old, i])
                    else setWrong((old) => [...old, i])
                  }}
                >
                  {text}
                </Button>
              ))}
            </S.Row>
          )}
          {wrong.includes(i) && !done.includes(i) ? (
            <S.Hint role="status">
              Consider the tone, specificity and grammar, then try again.
            </S.Hint>
          ) : null}
        </S.Surface>
      ))}
      <S.QuestionReveal
        marker="6"
        revealed={own}
        answer="Rephrase it and explain why your version fits the situation."
        onClick={() => setOwn(!own)}
      >
        Your teacher brings back one sentence you used today.
      </S.QuestionReveal>
    </S.Stack>
  )
}

export function C101Questions({
  items,
}: {
  items: readonly { q: string; a: string }[]
}) {
  const [revealed, setRevealed] = useState<string[]>([])
  return (
    <S.Stack>
      {items.map((item, i) => (
        <S.QuestionReveal
          key={item.q}
          marker={i + 1}
          answer={item.a}
          revealed={revealed.includes(item.q)}
          onClick={() => setRevealed((old) => toggleId(old, item.q))}
        >
          {item.q}
        </S.QuestionReveal>
      ))}
    </S.Stack>
  )
}
