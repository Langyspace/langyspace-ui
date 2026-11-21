import { useEffect, useState } from 'react'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { SceneExplorer } from '../../../src/components/InteractiveMaterial/SceneExplorer'
import { LearningDialogue } from '../../../src/components/Exercise/LearningDialogue'
import { MaterialTheme } from '../shared/MaterialTheme'
import { LessonShell } from '../shared/LessonShell'
import { PromptExercise } from '../shared/LessonExercises'
import { TrialNextSteps } from '../shared/LessonBookends'
import { FreeConversationPage } from '../shared/FreeConversationPage'
import {
  withLessonOpeningPages,
  withLessonOpeningPageIds,
} from '../shared/lessonOpeningPolicy'
import { useSceneAudio } from '../shared/useSceneAudio'
import { useRecordedAudio } from '../../../src/internal/useRecordedAudio'
import { characterPortrait } from '../shared/characterPortraits'
import type { TrialB1Content, TrialB1LessonProps } from './TrialB1.types'
import source from './TrialB1.content.json'
import sceneUrl from './assets/scene-roadside70.webp'
import recordings from './TrialB1.recordings'

const content = source as TrialB1Content
const sceneClips = Object.fromEntries(
  content.scene.hotspots.map((hotspot) => [
    hotspot.id,
    recordings.find(
      (clip) => clip.id === hotspot.audioId && clip.text === hotspot.audioText,
    )!.src,
  ]),
)
const dialogueLines = content.dialogue.lines.map((line) => ({
  id: line.id,
  text: line.en,
}))

function Vocabulary({ active }: { active: boolean }) {
  const audio = useSceneAudio(active, sceneClips)
  const [selected, setSelected] = useState<string>()
  const [visited, setVisited] = useState<string[]>([])
  return (
    <>
      <SceneExplorer
        imageSizing="presentation"
        imageUrl={sceneUrl}
        imageAlt={content.scene.imageAlt}
        hotspots={content.scene.hotspots.map((hotspot) => ({
          ...hotspot,
          prompt: null,
        }))}
        selectedId={selected}
        visitedIds={visited}
        playingId={audio.playingId}
        onSelect={(id) => {
          setSelected((previous) => (previous === id ? undefined : id))
          setVisited((ids) => (ids.includes(id) ? ids : [...ids, id]))
        }}
        onPlayHotspot={audio.play}
        labels={{ initial: '', play: 'Listen' }}
      />
      {audio.error ? <p role="status">{audio.error}</p> : null}
    </>
  )
}

function Conversation({ active }: { active: boolean }) {
  const speech = useRecordedAudio(recordings)
  const [translated, setTranslated] = useState<string[]>([])
  useEffect(() => {
    if (!active) speech.stop()
  }, [active, speech.stop])
  const playing = content.dialogue.lines.some(
    (line) => line.id === speech.playingId,
  )
  return (
    <SlidePage
      width="expanded"
      density="compact"
      eyebrow="Guided conversation"
      title={content.dialogue.title}
      instruction={content.dialogue.subtitle}
      titleAudio={{
        context: content.dialogue.title,
        status: playing ? (speech.paused ? 'paused' : 'playing') : 'idle',
        disabled: !active || !dialogueLines.every(speech.has),
        onClick: () =>
          playing ? speech.togglePause() : speech.speak(dialogueLines),
      }}
      questions={<PromptExercise items={content.dialogue.questions} />}
    >
      <LearningDialogue
        density="compact"
        lines={content.dialogue.lines.map((line) => ({
          id: line.id,
          speaker: line.who,
          avatarUrl: characterPortrait(line.who),
          side: line.who === 'Kim' ? 'start' : 'end',
          content: line.en,
          translation: line.pt,
          audioLabel: `Listen to ${line.who}`,
        }))}
        translatedIds={translated}
        onTranslate={(id) =>
          setTranslated((ids) => (ids.includes(id) ? [] : [id]))
        }
        playingId={speech.playingId}
        onPlay={(id) => {
          const line = dialogueLines.find((item) => item.id === id)
          if (line) speech.speak([line])
        }}
      />
      {speech.error ? <p role="status">{speech.error}</p> : null}
    </SlidePage>
  )
}

export function TrialB1Lesson({ initialPageId }: TrialB1LessonProps) {
  return (
    <MaterialTheme>
      <LessonShell
        initialPageId={initialPageId}
        materialKey="trial-b1-a-trip-to-remember"
        label="B1 / B2 Trial · A trip to remember"
        pageIds={withLessonOpeningPageIds('trial-b1', [
          's2',
          's3',
          'free-conversation',
          'next-steps',
        ])}
        pages={(_, activeId) =>
          withLessonOpeningPages('trial-b1', [
            {
              id: 's2',
              label: content.scene.title,
              content: (
                <SlidePage
                  width={{
                    mediaAspectRatio:
                      content.scene.imageWidth / content.scene.imageHeight,
                  }}
                  title={content.scene.title}
                  instruction={content.scene.subtitle}
                  eyebrow="Vocabulary"
                >
                  <Vocabulary active={activeId === 's2'} />
                </SlidePage>
              ),
            },
            {
              id: 's3',
              label: content.dialogue.title,
              content: <Conversation active={activeId === 's3'} />,
            },
            {
              id: 'free-conversation',
              label: 'Free conversation',
              content: (
                <FreeConversationPage
                  instruction={content.freeConversationInstruction}
                />
              ),
            },
            {
              id: 'next-steps',
              label: 'Next steps',
              content: <TrialNextSteps materialKey="trial-b1" />,
            },
          ])
        }
      />
    </MaterialTheme>
  )
}
