import { useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { MinimalPairExercise } from '../../../src/components/InteractiveMaterial/MinimalPairExercise'
import { GrammarTable } from '../../../src/components/InteractiveMaterial/GrammarTable'
import { LearningDialogue } from '../../../src/components/Exercise/LearningDialogue'
import { toggleId } from '../shared/lessonState'
import ana from '../UXLab/assets/bust_ana.png'
import kim from '../UXLab/assets/bust_kim.png'
import content from './C101.content.json'
import type { C101Audio } from './C101.types'
import * as S from './C101.styles'
export function Expressions() {
  const [recall, setRecall] = useState(false)
  return (
    <S.Stack>
      <S.Row>
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={recall}
          onClick={() => setRecall(!recall)}
        >
          {recall ? 'Show contexts' : 'Try without contexts'}
        </Button>
      </S.Row>
      <S.ExpressionList>
        {content.expressions.map((x) => (
          <S.Disclosure key={`${x.i}-${recall}`}>
            <summary>
              {recall
                ? x.e
                : x.s
                    .split(/[{}]/)
                    .map((part, i) => (i === 1 ? <b key={i}>{part}</b> : part))}
            </summary>
            <p>
              {x.m}
              <small>{x.t}</small>
            </p>
          </S.Disclosure>
        ))}
      </S.ExpressionList>
      <S.Disclosure>
        <summary>Language to watch</summary>
        <p>
          <b>Feedback</b> is uncountable: some feedback. <b>Take it on board</b>{' '}
          means consider it and use it. <b>It’s worth + -ing</b>: It’s worth
          practicing.
        </p>
      </S.Disclosure>
      <S.Surface>
        <b>Has anything you said or wrote ever come across as harsh?</b>
        <p>
          Explain the context and how you handled it. Then ask your teacher.
        </p>
      </S.Surface>
    </S.Stack>
  )
}
export function WarmUp({ index }: { index: number }) {
  const w = content.warmups[index]!
  const [chosen, setChosen] = useState<number>()
  const [show, setShow] = useState(!w.hide)
  const complete = chosen === w.a
  const prompt =
    index === 0
      ? 'How could Ana describe the problem tactfully?'
      : index === 1
        ? 'How could she ask Raj to change it?'
        : 'What’s the best feedback you’ve ever received?'
  return (
    <S.Columns>
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
      <S.Stack>
        <p>{index < 2 ? prompt : 'Which answer responds to Kim’s question?'}</p>
        {!show ? (
          <Button variant="secondary" onClick={() => setShow(true)}>
            Show options
          </Button>
        ) : (
          w.o.map((text, i) => (
            <Button
              key={text}
              variant="secondary"
              aria-pressed={chosen === i}
              onClick={() => setChosen(i)}
            >
              {text}
            </Button>
          ))
        )}
        {chosen !== undefined && !complete ? (
          <S.Hint role="status">
            {w.why[String(chosen) as keyof typeof w.why]}
          </S.Hint>
        ) : null}
        {complete ? (
          <S.Surface role="status">
            <b>Now you</b>
            <p>{w.now}</p>
            {w.form ? <S.Hint>{w.form}</S.Hint> : null}
          </S.Surface>
        ) : null}
      </S.Stack>
    </S.Columns>
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
          <C101Questions
            items={[
              content.reading[0]!,
              {
                q: 'What might Laura be implying without saying it directly?',
                a: 'She appears to want Ana at the next meeting and a clear answer about the deadline. Support your interpretation with the wording; other well-supported readings are possible.',
              },
            ]}
          />
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
      <S.Disclosure>
        <summary>How does context change the message?</summary>
        <p>
          A lighter onset and fall-rise can sound tentative; strong stress and a
          final fall can sound decisive. These are tendencies, not rules:
          context and the speaker’s relationship matter.
        </p>
      </S.Disclosure>
    </S.Stack>
  )
}
export function Dialogue({ part, audio }: { part: number; audio: C101Audio }) {
  const [translated, setTranslated] = useState<string[]>([])
  const lines =
    part === 0 ? content.dialogue.slice(0, 7) : content.dialogue.slice(7)
  const ids = lines.map((l) => `c101-${l.id.replace('.', '-')}`)
  const playing = ids.includes(audio.playingId ?? '')
  return (
    <S.Stack>
      <S.Row>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => (playing ? audio.togglePause() : audio.play(ids))}
        >
          {playing
            ? audio.paused
              ? 'Resume dialogue'
              : 'Pause dialogue'
            : 'Listen to dialogue'}
        </Button>
      </S.Row>
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
          <S.Disclosure key={x.title}>
            <summary>{x.title}</summary>
            <p>{x.text}</p>
          </S.Disclosure>
        ))}
      </S.ExpressionList>
      <S.Surface>
        <b>One observation, one request</b>
        <p>
          Give your teacher specific feedback about a true or invented
          situation. Keep your point clear and leave room for their perspective.
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
