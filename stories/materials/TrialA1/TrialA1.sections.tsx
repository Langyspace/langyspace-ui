import { TrialIntroduction } from '../shared/TrialIntroduction'
import { PromptExercise } from '../shared/LessonExercises'
import { useState } from 'react'
import { conversationRecordings } from '../shared/conversationRecordings'
import { toggleId } from '../shared/lessonState'
import { SceneExplorer } from '../../../src/components/InteractiveMaterial/SceneExplorer'
import { CharacterDialogue as LearningDialogue } from '../shared/CharacterPortraits.styles'
import { ana, kim } from '../shared/characterPortraits'
import type { TrialA1PictureTalkProps } from './TrialA1.types'
import { useTrialA1Audio } from './useTrialA1Audio'
import { content, pictures } from './TrialA1.data'
import * as S from '../shared/Lesson.styles'
import * as T from './TrialA1.styles'
export function GreetingSection() {
  const cues = [
    'Say your name',
    'Say your city or country',
    'Say how you feel. Ask back',
  ]
  const hints = [
    'Diga seu primeiro nome',
    'Diga sua cidade ou país',
    'Diga como está e pergunte de volta',
  ]
  return (
    <TrialIntroduction
      prompts={content.p1.cards.map((question, index) => ({
        id: `greeting-${index}`,
        question: question.q,
        translation: question.pt,
        cue: cues[index]!,
        hint: hints[index]!,
        model: question.a,
      }))}
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
}: {
  playingId?: string
} = {}) {
  const [translated, setTranslated] = useState<string[]>([])
  return (
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
