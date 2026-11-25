import { useEffect, useState } from 'react'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'
import { useRecordedAudio } from '../../../src/internal/useRecordedAudio'
import { TrialPreviewLesson } from '../shared/TrialPreviewLesson'
import type { TrialB2LessonProps } from './TrialB2.types'
import content from './TrialB2.content.json'
import recordings from './TrialB2.recordings'
import video from './TrialB2.video.json'

const images = import.meta.glob('./assets/scene-*71.webp', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>
const items = content.vocabulary.items.map((item) => {
  const imageUrl = images[`./assets/scene-${item.sceneId}71.webp`]
  if (!imageUrl) throw new Error(`Missing prepared C1/C2 scene: ${item.id}`)
  return { ...item, imageUrl }
})
const vocabularyRecordings = recordings.filter((clip) =>
  items.some((item) => item.id === clip.id && item.audioText === clip.text),
)
function Vocabulary({ active }: { active: boolean }) {
  const speech = useRecordedAudio(vocabularyRecordings)
  const [revealed, setRevealed] = useState<string[]>([])
  const [selected, setSelected] = useState<string>()
  const [showAll, setShowAll] = useState(false)
  const [showInitial, setShowInitial] = useState(false)
  useEffect(() => {
    if (!active) speech.stop()
  }, [active, speech.stop])
  return (
    <>
      <VocabularyGrid
        items={items}
        imageVariant="scene"
        imageFit="contain"
        imageAspectRatio={1}
        density="regular"
        revealVariant="tooltip"
        revealOnHover={false}
        activeId={selected}
        revealedIds={revealed}
        showAll={showAll}
        showInitial={showInitial}
        revealLabel="Reveal expression"
        controls={{
          showAll,
          showInitial,
          onToggleAll: () => setShowAll(!showAll),
          onToggleInitial: () => setShowInitial(!showInitial),
        }}
        onReveal={(id) => {
          setSelected(id)
          setRevealed((ids) => (ids.includes(id) ? ids : [...ids, id]))
        }}
        onPlay={(id) => {
          const item = items.find((item) => item.id === id)
          if (item && active) speech.speak([{ id, text: item.audioText }])
        }}
      />
      {speech.error ? <p role="status">{speech.error}</p> : null}
    </>
  )
}
export function TrialB2Lesson({ initialPageId }: TrialB2LessonProps) {
  return (
    <TrialPreviewLesson
      initialPageId={initialPageId}
      materialKey="trial-b2"
      storageKey="Langy Trial B2 Work and life"
      title={content.title}
      level={content.level}
      introduction={content.introduction}
      vocabulary={{
        title: content.vocabulary.title,
        instruction: content.vocabulary.subtitle,
        columns: 1,
        render: (active) => <Vocabulary active={active} />,
      }}
      dialogue={content.dialogue}
      recordings={recordings}
      video={video}
      freeConversationInstruction={content.freeConversationInstruction}
    />
  )
}
