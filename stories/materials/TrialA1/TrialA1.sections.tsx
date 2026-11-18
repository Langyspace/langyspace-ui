import { AnswerDisclosure } from '../shared/AnswerDisclosure'
import { toggleId } from '../shared/lessonState'
import { Fragment, useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { SceneExplorer } from '../../../src/components/InteractiveMaterial/SceneExplorer'
import { ExercisePanel } from '../../../src/components/Exercise/ExercisePanel'
import { sceneImage } from '../shared/sceneAssets'
import { SourceQuestions, DialoguePractice } from '../shared/LessonPractice'
import type { SpeechProps } from '../shared/Lesson.types'
import {
  content,
  greetingImages,
  points,
  preferenceImages,
  talkImages,
} from './TrialA1.data'
import * as S from '../shared/Lesson.styles'
import * as T from './TrialA1.styles'
export function GreetingSection() {
  const [open, setOpen] = useState<string[]>([])
  return (
    <S.Stack>
      {content.p1.cards.map((q, i) => (
        <S.Stack key={q.q}>
          <T.Greeting
            variant="lesson"
            aria-label={q.q}
            aria-expanded={open.includes(q.q)}
            onClick={() => setOpen((old) => toggleId(old, q.q))}
          >
            <T.GreetingImage src={greetingImages[i]} alt="" />
            <T.GreetingText>
              <b>{q.q}</b>
              {open.includes(q.q) ? <S.Hint>{q.pt}</S.Hint> : null}
            </T.GreetingText>
          </T.Greeting>
          <AnswerDisclosure question={q.q} answer={q.a} />
        </S.Stack>
      ))}
    </S.Stack>
  )
}
export function PictureTalkSection({ speech }: SpeechProps) {
  const [visited, setVisited] = useState<string[]>([]),
    [selected, setSelected] = useState<string>()
  return (
    <T.Columns $scene>
      <T.SceneFit>
        <SceneExplorer
          imageUrl={sceneImage('park')}
          imageAlt="Parque ensolarado com música, bola de futebol, livro, cachorro, bicicleta e piquenique"
          presentation="labels"
          hotspots={content.p2.items.map((p, i) => ({
            id: String(i),
            label: p.en,
            prompt: null,
            xPercent: points[i]?.[0] ?? 50,
            yPercent: points[i]?.[1] ?? 50,
          }))}
          selectedId={selected}
          visitedIds={visited}
          onSelect={(id) => {
            setSelected(id)
            setVisited((old) => (old.includes(id) ? old : [...old, id]))
            speech.speak([
              { id: 'P.' + id, text: content.p2.items[Number(id)]?.en ?? '' },
            ])
          }}
        />
      </T.SceneFit>
      <S.Stack>
        {content.p2.support.map((group) => (
          <T.Support key={group.h}>
            <b>{group.h}</b>
            {group.lines.map(([q, a], i) => (
              <div key={i}>
                {q ? <p>{q}</p> : null}
                {a && q ? (
                  <AnswerDisclosure question={q} answer={a} />
                ) : a ? (
                  <p>{a}</p>
                ) : null}
              </div>
            ))}
          </T.Support>
        ))}
      </S.Stack>
    </T.Columns>
  )
}
export function ListenTalkSection({ speech }: SpeechProps) {
  return (
    <T.Columns>
      <DialoguePractice
        translateAll
        speech={speech}
        lines={content.p3.lines.map((l, i) => ({
          id: 'D.' + (i + 1),
          who: l.who,
          text: l.en,
          g: l.g,
        }))}
      />
      <T.Support>
        <b>Your turn</b>
        <SourceQuestions
          compact
          revealHints
          items={content.p3.your.map(([question, hint]) => ({
            question: question ?? '',
            hint,
          }))}
        />
      </T.Support>
    </T.Columns>
  )
}
export function PreferenceSection({
  index,
  speech,
}: SpeechProps & { index: number }) {
  const [pick, setPick] = useState<number>()
  const pair = content.p4.pairs[index]!
  return (
    <ExercisePanel title={pair.q}>
      <S.Stack>
        <T.Pair>
          {[pair.a, pair.b].map((choice, i) => (
            <Fragment key={choice[1]}>
              {i ? <span>or</span> : null}
              <T.Preference
                variant="lesson"
                aria-pressed={pick === i}
                aria-label={choice[1]}
                onClick={() => {
                  if (pick === i) {
                    setPick(undefined)
                    speech.stop()
                  } else {
                    setPick(i)
                    speech.speak([
                      {
                        id: `T.${index}${i === 0 ? 'a' : 'b'}`,
                        text: choice[1] ?? '',
                      },
                    ])
                  }
                }}
              >
                <img src={preferenceImages[index]?.[i]} alt="" />
                <b>{choice[1]}</b>
                {pick === i ? (
                  <T.Selected aria-hidden="true">✓</T.Selected>
                ) : null}
              </T.Preference>
            </Fragment>
          ))}
        </T.Pair>
        <T.Strip>
          {content.p4.strip.map((text) => (
            <span key={text}>{text}</span>
          ))}
        </T.Strip>
      </S.Stack>
    </ExercisePanel>
  )
}
const conversationPortuguese = [
  'Você gosta de música?',
  'Você gosta de filmes?',
  'Você gosta de praia?',
  'Você gosta de futebol?',
  'Você gosta de pizza?',
  'Você gosta de cachorros ou de gatos?',
  'De que tipo de música você gosta?',
  'De que filmes você gosta?',
  'Você gosta de inglês?',
]

export function ConversationSection() {
  const [done, setDone] = useState<string[]>([])
  const qs = [...content.p5.qs, ...content.p5.go]
  const cards = (from: number, to: number) => (
    <T.Questions>
      {qs.slice(from, to).map(([, q], n) => {
        const i = from + n,
          id = String(i)
        return (
          <T.Talk
            variant="lesson"
            key={id}
            aria-pressed={done.includes(id)}
            onClick={() => setDone((old) => toggleId(old, id))}
          >
            <img src={talkImages[i]} alt="" />
            <div>
              <b>{q}</b>
              {done.includes(id) ? (
                <S.Hint lang="pt-BR">{conversationPortuguese[i]}</S.Hint>
              ) : null}
            </div>
            {done.includes(id) ? <span aria-hidden="true">✓</span> : null}
          </T.Talk>
        )
      })}
    </T.Questions>
  )
  return (
    <S.Stack>
      {cards(0, content.p5.qs.length)}
      <T.SupportTitle>Go further</T.SupportTitle>
      {cards(content.p5.qs.length, qs.length)}
      <T.Strip>
        {content.p5.strip.map((text) => (
          <span key={text}>{text}</span>
        ))}
      </T.Strip>
    </S.Stack>
  )
}
export function TodaySection({ speech }: SpeechProps) {
  return (
    <T.Summary>
      {content.p6.map((text, i) => {
        const id = 'Y.' + i
        return (
          <S.Question key={text}>
            <S.Number>{i + 1}</S.Number>
            <div>{text}</div>
            <Button
              variant="secondary"
              size="sm"
              aria-label={`Listen: ${text}`}
              onClick={() =>
                speech.speak([{ id, text: text.replace(' / ', '. ') }])
              }
            >
              Listen
            </Button>
          </S.Question>
        )
      })}
    </T.Summary>
  )
}
