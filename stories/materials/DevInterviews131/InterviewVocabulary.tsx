import { useState } from 'react'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import { usePracticePlayback } from '../shared/usePracticePlayback'
import { interviewRecordings } from './DevInterviews131.recordings'
import source from './DevInterviews131.content.json'
import atlas from './assets/vocabulary-atlas131.webp'

export function InterviewVocabulary({ active }: { active: boolean }) {
  const [revealed, setRevealed] = useState<string[]>([])
  const [all, showAll] = useState(false)
  const [hints, showHints] = useState(false)
  const audio = usePracticePlayback(active, interviewRecordings)
  const play = (id: string) => {
    const item = source.vocabulary.find((entry) => entry.id === id)
    if (!item) return
    audio.play(item.audioId, item.word, 1, () =>
      audio.play(item.backAudioId, item.example),
    )
  }
  return (
    <Common.Stack>
      <VocabularyGrid
        columns={3}
        surface="card"
        density="regular"
        imageVariant="scene"
        imageFit="contain"
        imageAspectRatio={1}
        revealOnHover={false}
        items={source.vocabulary.map((item, index) => ({
          ...item,
          imageUrl: atlas,
          imageRegion: {
            columns: 3,
            rows: 2,
            column: index % 3,
            row: Math.floor(index / 3),
            sourceAspectRatio: 3 / 2,
          },
          imageAlt: `Interview scene representing ${item.word}`,
        }))}
        revealedIds={revealed}
        onReveal={(id) =>
          setRevealed((ids) => (ids.includes(id) ? ids : [...ids, id]))
        }
        onPlay={play}
        showAll={all}
        showInitial={hints}
        controls={{
          showAll: all,
          showInitial: hints,
          onToggleAll: () => showAll(!all),
          onToggleInitial: () => showHints(!hints),
        }}
      />
      {audio.error ? (
        <Common.Hint role="alert">{audio.error}</Common.Hint>
      ) : null}
    </Common.Stack>
  )
}
