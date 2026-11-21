import { useState } from 'react'
import { ImageSortBoard } from '../../../src/components/Exercise/ImageSortBoard'
import { VocabularyControls } from '../../../src/components/Exercise/VocabularyControls'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import { content, likeItems } from './TrialA1.data'

export function LikesBoardSection() {
  const [assignments, setAssignments] = useState<
    Record<string, string | undefined>
  >({})
  const [selectedId, setSelected] = useState<string>()
  const [support, setSupport] = useState<'none' | 'hint' | 'model'>('none')
  const activeItem = likeItems.find((item) => item.id === selectedId)
  return (
    <ImageSortBoard
      aria-label="My likes and dislikes"
      items={likeItems}
      categories={[
        { id: 'like', label: 'I like' },
        { id: 'dislike', label: 'I don’t like' },
      ]}
      assignments={assignments}
      selectedId={selectedId}
      onSelect={setSelected}
      onAssign={(id, category) =>
        setAssignments((old) => ({ ...old, [id]: category }))
      }
      footer={
        <>
          <Common.Heading $prompt aria-live="polite">
            {activeItem?.question ?? 'Choose a picture to start'}
          </Common.Heading>
          {support === 'hint' ? (
            <Common.Hint>{content.p4.hint}</Common.Hint>
          ) : null}
          {support === 'model' ? (
            <Common.Paragraph>{content.p4.model}</Common.Paragraph>
          ) : null}
          <VocabularyControls
            density="compact"
            labels={{
              hint: 'Speaking tip',
              showAll: 'Show speaking model',
              hideAll: 'Hide speaking model',
            }}
            showInitial={support === 'hint'}
            showAll={support === 'model'}
            onToggleInitial={() =>
              setSupport((old) => (old === 'hint' ? 'none' : 'hint'))
            }
            onToggleAll={() =>
              setSupport((old) => (old === 'model' ? 'none' : 'model'))
            }
          />
        </>
      }
    />
  )
}
