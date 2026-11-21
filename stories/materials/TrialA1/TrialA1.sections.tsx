import { useMaterialTeacher } from '../shared/MaterialTeacherContext'
import { PromptExercise } from '../shared/LessonExercises'
import { useState } from 'react'
import { GuidedConversation } from '../shared/GuidedConversation'
import type { GuidedConversationMode } from '../shared/GuidedConversation.types'
import { guidedConversation } from './TrialA1.guided'
import { conversationRecordings } from '../shared/conversationRecordings'
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
  const teacher = useMaterialTeacher()
  const firstName =
    teacher.name === 'Your teacher'
      ? teacher.name
      : teacher.name.trim().split(/\s+/u)[0]!
  const [translated, setTranslated] = useState<string[]>([])
  const [hintedLineIds, setHintedLineIds] = useState<string[]>([])
  const [revealedLineIds, setRevealedLineIds] = useState<string[]>([])
  const cues = [
    'Say your name.',
    'Say your city or country.',
    'Say how you feel. Ask back.',
  ]
  const hints = [
    'Diga seu primeiro nome.',
    'Diga sua cidade ou país.',
    'Diga como está e pergunte de volta.',
  ]
  return (
    <LearningDialogue
      density="regular"
      presentation="paired"
      sequentialGuidance={{
        hintedLineIds,
        revealedLineIds,
        onRevealHint: (id) =>
          setHintedLineIds((old) =>
            id ? (old.includes(id) ? old : [...old, id]) : [],
          ),
        onRevealModel: (id) =>
          setRevealedLineIds((old) =>
            id ? (old.includes(id) ? old : [...old, id]) : [],
          ),
      }}
      translatedIds={translated}
      onTranslate={(id) => setTranslated((old) => toggleId(old, id))}
      lines={content.p1.cards.flatMap((question, index) => [
        {
          id: `greeting-${index}-teacher`,
          speaker: firstName,
          initials: firstName.slice(0, 1),
          avatarUrl: teacher.avatarUrl,
          side: 'start' as const,
          content: question.q,
          translation: question.pt,
        },
        {
          id: `greeting-${index}-learner`,
          speaker: 'You',
          participant: 'learner' as const,
          side: 'end' as const,
          guidanceLabel: question.q,
          cue: cues[index],
          hint: hints[index],
          content: question.a,
        },
      ])}
    />
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
    <T.SceneFit>
      <SceneExplorer
        imageUrl={pictures.park}
        imageAlt="Ana ouve música no parque; um livro, uma bola de futebol e um cachorro estão inteiros e separados."
        presentation="explore"
        imageSizing="presentation"
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
  )
}
export function ListenTalkSection({
  playingId,
  onModeChange,
}: {
  playingId?: string
  onModeChange?: (mode: GuidedConversationMode) => void
} = {}) {
  const [translated, setTranslated] = useState<string[]>([])
  return (
    <GuidedConversation {...guidedConversation} onModeChange={onModeChange}>
      <LearningDialogue
        density="compact"
        playingId={playingId}
        lines={content.p3.lines.map((l, i) => ({
          id: conversationRecordings['TrialA1:s3']?.turns[i]?.id ?? String(i),
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
