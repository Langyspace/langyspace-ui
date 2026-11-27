import { useState } from 'react'
import { SceneExplorer } from '../../../src/components/InteractiveMaterial/SceneExplorer'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import { usePracticePlayback } from '../shared/usePracticePlayback'
import { devRecordings } from './DevFirstDay.recordings'
import source from './DevFirstDay.content.json'
import scene from './assets/scene-work-toolkit95.png'

const recordingId = (id: string) =>
  id === 'V.0' ? 'ACCOUNT.VS.0' : id.replace('V.', 'VS.')
// Original-image anchors: notebook, access card, blocked laptop, calendar,
// progress message, annotated printout, measured against the saved scene.
const anchors = [
  [20, 73],
  [51, 84],
  [51, 20],
  [18, 31],
  [85, 29],
  [82, 78],
] as const

export function DevToolkit({ active }: { active: boolean }) {
  const [selectedId, select] = useState<string>()
  const [visitedIds, visit] = useState<string[]>([])
  const audio = usePracticePlayback(active, devRecordings)
  return (
    <Common.Stack>
      <SceneExplorer
        imageUrl={scene}
        imageAlt="Your view of a developer’s desk: a task notebook, access card, blocked laptop, deadline calendar, update message and reviewed Login sketch"
        imageSizing="presentation"
        presentation="vocabulary"
        hotspots={source.vocabulary.map((item, index) => ({
          id: item.id,
          xPercent: anchors[index]![0],
          yPercent: anchors[index]![1],
          label: item.word,
          example: item.example,
          prompt: null,
        }))}
        selectedId={selectedId}
        visitedIds={visitedIds}
        playingId={
          audio.paused
            ? undefined
            : source.vocabulary.find(
                (item) => recordingId(item.id) === audio.playingId,
              )?.id
        }
        onSelect={(id) => {
          select((current) => (current === id ? undefined : id))
          visit((ids) => (ids.includes(id) ? ids : [...ids, id]))
        }}
        onDismiss={() => select(undefined)}
        onPlayHotspot={(id) => {
          const clip = devRecordings.find(
            (item) => item.id === recordingId(id),
          )!
          audio.play(clip.id, clip.text)
        }}
        labels={{ initial: '', play: 'Listen again' }}
      />
      {audio.error && <Common.Hint role="alert">{audio.error}</Common.Hint>}
    </Common.Stack>
  )
}
