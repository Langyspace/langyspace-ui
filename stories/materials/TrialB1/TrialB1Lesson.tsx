import { useState } from 'react'
import { SceneExplorer } from '../../../src/components/InteractiveMaterial/SceneExplorer'
import { TrialPreviewLesson } from '../shared/TrialPreviewLesson'
import { useSceneAudio } from '../shared/useSceneAudio'
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

export function TrialB1Lesson({ initialPageId }: TrialB1LessonProps) {
  return (
    <TrialPreviewLesson
      initialPageId={initialPageId}
      materialKey="trial-b1"
      storageKey="trial-b1-a-trip-to-remember"
      title={content.title}
      level={content.level}
      vocabulary={{
        title: content.scene.title,
        instruction: content.scene.subtitle,
        width: {
          mediaAspectRatio:
            content.scene.imageWidth / content.scene.imageHeight,
        },
        render: (active) => <Vocabulary active={active} />,
      }}
      dialogue={content.dialogue}
      recordings={recordings}
      freeConversationInstruction={content.freeConversationInstruction}
    />
  )
}
