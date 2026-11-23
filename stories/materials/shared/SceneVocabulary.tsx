import { useState } from 'react'
import { SceneExplorer } from '../../../src/components/InteractiveMaterial/SceneExplorer'
import { VocabularyControls } from '../../../src/components/Exercise/VocabularyControls'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import type { ReviewedPage, ReviewedSpeech } from './ReviewedLesson.types'

export function SceneVocabulary({
  page,
  speech,
}: {
  page: Extract<ReviewedPage, { kind: 'scene' | 'scene-vocabulary' }>
  speech: ReviewedSpeech
}) {
  const [visited, visit] = useState<readonly string[]>([])
  const [selected, select] = useState<string>()
  const [all, showAll] = useState(false)
  const [initial, showInitial] = useState(false)
  const visible = all || initial ? page.hotspots.map((h) => h.id) : visited
  return (
    <Common.Stack>
      <SceneExplorer
        presentation="vocabulary"
        imageSizing="presentation"
        imageUrl={page.image.src}
        imageAlt={page.image.alt}
        hotspots={page.hotspots.map((h) => ({
          ...h,
          label:
            initial && !all && !visited.includes(h.id)
              ? h.label.slice(0, 1) + '…'
              : h.label,
        }))}
        visitedIds={visible}
        selectedId={selected}
        onDismiss={() => select(undefined)}
        playingId={
          page.hotspots.find((h) => h.audioId === speech.playingId)?.id
        }
        onSelect={(id) => {
          select(id)
          visit((ids) => (ids.includes(id) ? ids : [...ids, id]))
        }}
        onPlayHotspot={(id) => {
          const h = page.hotspots.find((x) => x.id === id)
          if (h) speech.speak([{ id: h.audioId, text: h.audioText }])
        }}
        labels={{ initial: '', play: 'Listen' }}
      />
      <Common.Row $justify="center">
        <VocabularyControls
          showInitial={initial}
          showAll={all}
          onToggleInitial={() => showInitial(!initial)}
          onToggleAll={() => {
            showAll(!all)
            select(undefined)
          }}
        />
      </Common.Row>
    </Common.Stack>
  )
}
