import { useMemo, useState } from 'react'
import { SceneExplorer } from '../../../src/components/InteractiveMaterial/SceneExplorer'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import { useSceneAudio } from '../shared/useSceneAudio'
import { routineRecordings } from './InfluencerRoutine.recordings'
import type { RoutineSceneProps } from './InfluencerRoutine.types'
import morning from './assets/scene-morning.webp'
import ready from './assets/scene-ready.webp'
import gym from './assets/scene-gym.webp'
import night from './assets/scene-night.webp'

export const routineScenes = { morning, ready, gym, night }
// Anchors refer to visible objects: the phrases describe associated habits, not simultaneous actions.
const anchors: Readonly<
  Record<string, readonly (readonly [number, number])[]>
> = {
  morning: [
    [48, 54],
    [8, 88],
    [10, 29],
    [26, 66],
    [50, 76],
    [65, 88],
  ],
  ready: [
    [11, 29],
    [12, 49],
    [16, 88],
    [29, 11],
    [58, 52],
    [79, 56],
  ],
  gym: [
    [12, 83],
    [42, 35],
    [85, 43],
    [23, 54],
    [17, 42],
    [32, 73],
  ],
  night: [
    [19, 79],
    [6, 78],
    [43, 87],
    [87, 78],
    [75, 51],
    [92, 53],
  ],
}

export function RoutineScene({ block, active }: RoutineSceneProps) {
  const [selectedId, select] = useState<string>()
  const [visitedIds, visit] = useState<string[]>([])
  const clips = useMemo(
    () =>
      Object.fromEntries(
        block.vocab.map((item) => [
          item.id,
          routineRecordings.find(
            (clip) => clip.id === item.id && clip.text === item.audioText,
          )!.src,
        ]),
      ),
    [block],
  )
  const audio = useSceneAudio(active, active ? clips : {})
  return (
    <>
      <SceneExplorer
        imageUrl={routineScenes[block.key as keyof typeof routineScenes]}
        imageAlt={block.sceneAlt}
        imageSizing="presentation"
        hotspots={block.vocab.map((item, index) => ({
          id: item.id,
          xPercent: anchors[block.key]![index]![0],
          yPercent: anchors[block.key]![index]![1],
          label: item.label,
          example: item.example,
          prompt: null,
        }))}
        selectedId={selectedId}
        onDismiss={() => select(undefined)}
        visitedIds={visitedIds}
        playingId={audio.playingId}
        onSelect={(id) => {
          select((current) => (current === id ? undefined : id))
          visit((ids) => (ids.includes(id) ? ids : [...ids, id]))
        }}
        onPlayHotspot={audio.play}
        labels={{ initial: '', play: 'Listen again' }}
      />
      {audio.error ? (
        <Common.Hint role="status">{audio.error}</Common.Hint>
      ) : null}
    </>
  )
}
