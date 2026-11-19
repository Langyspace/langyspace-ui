import { Fragment, useState } from 'react'
import { toggleId } from '../shared/lessonState'
import { SceneExplorer } from '../../../src/components/InteractiveMaterial/SceneExplorer'
import { CharacterDialogue as LearningDialogue } from '../shared/CharacterPortraits.styles'
import { ana, kim } from '../shared/characterPortraits'
import { SourceQuestions } from '../shared/LessonPractice'
import type { TrialA1PictureTalkProps } from './TrialA1.types'
import { useTrialA1Audio } from './useTrialA1Audio'
import { content, preferenceImages, pictures } from './TrialA1.data'
import * as S from '../shared/Lesson.styles'
import * as T from './TrialA1.styles'
export function GreetingSection() {
  const [open, setOpen] = useState<string[]>([])
  return (
    <S.Stack>
      {content.p1.cards.map((q) => (
        <T.Support key={q.q}>
          <T.Greeting
            variant="lesson"
            aria-expanded={open.includes(q.q)}
            onClick={() => setOpen((old) => toggleId(old, q.q))}
          >
            <T.GreetingText>
              <b>{q.q}</b>
              {open.includes(q.q) ? <S.Hint>{q.pt}</S.Hint> : null}
            </T.GreetingText>
          </T.Greeting>
          <T.Help context={q.q}>
            <p>{q.a}</p>
          </T.Help>
        </T.Support>
      ))}
    </S.Stack>
  )
}
export function PictureTalkSection({
  onPlay,
  playingId,
  active = true,
}: TrialA1PictureTalkProps = {}) {
  const audio = useTrialA1Audio(active)
  const [selected, setSelected] = useState<string>(),
    [visited, setVisited] = useState<string[]>([])
  return (
    <T.Columns $scene>
      <T.SceneFit>
        <SceneExplorer
          imageUrl={pictures.park}
          imageAlt="Ana ouve música no parque; um livro, uma bola de futebol e um cachorro estão inteiros e separados."
          presentation="explore"
          onPlayHotspot={onPlay ?? audio.play}
          playingId={playingId ?? audio.playingId}
          labels={{ initial: 'Escolha um ponto para ver o nome.' }}
          hotspots={content.p2.items.map((p, i) => ({
            id: String(i),
            label: p.en,
            prompt: (
              <>
                <span>{i === 0 ? 'Do you like music?' : 'What’s this?'}</span>
                {selected === String(i) && audio.error ? (
                  <span role="status">{audio.error}</span>
                ) : null}
              </>
            ),
            targetBounds: p.targetBounds,
            xPercent: p.x,
            yPercent: p.y,
          }))}
          selectedId={selected}
          visitedIds={visited}
          onSelect={(id) => {
            audio.stop()
            setSelected(selected === id ? undefined : id)
            setVisited((old) => (old.includes(id) ? old : [...old, id]))
          }}
        />
      </T.SceneFit>
      <S.Stack>
        {content.p2.support.map((group) => (
          <T.Support key={group.h}>
            <h3>{group.h}</h3>
            {group.lines.map(([q, a]) => (
              <Fragment key={q}>
                <p>{q}</p>
                <T.Help context={q}>
                  <p>{a}</p>
                </T.Help>
              </Fragment>
            ))}
          </T.Support>
        ))}
      </S.Stack>
    </T.Columns>
  )
}
export function ListenTalkSection() {
  const [translated, setTranslated] = useState<string[]>([])
  return (
    <T.Columns>
      <LearningDialogue
        density="regular"
        lines={content.p3.lines.map((l, i) => ({
          id: String(i),
          speaker: l.who === 'kim' ? 'Kim' : 'Ana',
          avatarUrl: l.who === 'kim' ? kim : ana,
          side: l.who === 'kim' ? 'start' : 'end',
          content: l.en,
          translation: l.g,
        }))}
        translatedIds={translated}
        onTranslate={(id) => setTranslated((old) => toggleId(old, id))}
      />
      <T.Support>
        <h3>Agora vocês</h3>
        {content.p3.your.map(([question, hint]) => (
          <Fragment key={question}>
            <p>{question}</p>
            <T.Help context={question}>
              <p>{hint}</p>
            </T.Help>
          </Fragment>
        ))}
      </T.Support>
    </T.Columns>
  )
}
export function PreferenceSection({
  index,
}: {
  index: number
  speech?: unknown
}) {
  const [pick, setPick] = useState<number>()
  const pair = content.p4.pairs[index]!
  return (
    <S.Stack>
      <T.Pair>
        {[pair.a, pair.b].map((choice, i) => (
          <Fragment key={choice[1]}>
            {i ? <span>or</span> : null}
            <T.Preference
              variant="lesson"
              aria-pressed={pick === i}
              aria-label={choice[1]}
              onClick={() => setPick(pick === i ? undefined : i)}
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
      <T.Help context={pair.q}>
        <T.Strip>
          {content.p4.strip.map((text) => (
            <span key={text}>{text}</span>
          ))}
        </T.Strip>
      </T.Help>
    </S.Stack>
  )
}
export function ConversationSection() {
  const [topics, setTopics] = useState<string[]>([])
  return (
    <S.Stack>
      <T.Questions>
        {content.p5.qs.map(([, q]) => (
          <T.Talk
            variant="lesson"
            key={q}
            aria-pressed={topics.includes(q ?? '')}
            onClick={() => setTopics((old) => toggleId(old, q ?? ''))}
          >
            <b>{q}</b>
            {topics.includes(q ?? '') ? (
              <span aria-hidden="true">✓</span>
            ) : null}
          </T.Talk>
        ))}
      </T.Questions>
      <T.Help context="Continue the conversation">
        <T.Strip>
          {content.p5.strip.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </T.Strip>
        <SourceQuestions
          items={content.p5.go.map(([, question]) => ({
            question: question ?? '',
          }))}
        />
      </T.Help>
    </S.Stack>
  )
}
export function TodaySection() {
  return (
    <T.Summary>
      {content.p6.map((text, i) => (
        <S.Question as="li" key={text}>
          <S.Number>{i + 1}</S.Number>
          <div>{text}</div>
        </S.Question>
      ))}
    </T.Summary>
  )
}
