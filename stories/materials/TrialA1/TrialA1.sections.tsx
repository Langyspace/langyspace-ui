import { PromptExercise } from '../shared/LessonExercises'
import { Fragment, useState } from 'react'
import { GuidedConversation } from '../shared/GuidedConversation'
import type { GuidedConversationMode } from '../shared/GuidedConversation.types'
import { guidedConversation } from './TrialA1.guided'
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
          labels={{ initial: '' }}
          hotspots={content.p2.items.map((p, i) => ({
            id: String(i),
            label: p.en,
            prompt: null,
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
        {selected && audio.error ? (
          <S.Hint role="status">{audio.error}</S.Hint>
        ) : null}
      </T.SceneFit>
      <S.Stack>
        {content.p2.support.map((group) => (
          <T.Support key={group.h}>
            <T.SupportTitle>{group.h}</T.SupportTitle>
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
export function ListenTalkSection({
  onModeChange,
}: {
  onModeChange?: (mode: GuidedConversationMode) => void
} = {}) {
  const [translated, setTranslated] = useState<string[]>([])
  return (
    <GuidedConversation {...guidedConversation} onModeChange={onModeChange}>
      <LearningDialogue
        density="compact"
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
    </GuidedConversation>
  )
}
export function ComprehensionSection() {
  return (
    <PromptExercise
      items={content.p3.your.map(([prompt = '', answer = ''], i) => ({
        id: String(i),
        prompt,
        answer,
      }))}
    />
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
  return (
    <PromptExercise
      items={content.p5.qs.map(([, prompt = ''], index) => ({
        id: String(index),
        prompt,
        answer: 'Yes, I do. / No, I don’t. I like … And you?',
      }))}
    />
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
