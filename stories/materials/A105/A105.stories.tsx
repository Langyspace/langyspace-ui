import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { MaterialTheme } from '../shared/MaterialTheme'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'
import { RolePlayExercise } from '../../../src/components/InteractiveMaterial/RolePlayExercise'
import { produce, scene } from './A105.data'
import { A105Lesson } from './A105Lesson'
const meta = {
  title: 'Materials/A1.05',
  component: A105Lesson,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Replanned 50-minute lesson. Canonical scenes, guided conversation with questions, personal speaking, grammar, visual task, prepared ElevenLabs audio, theme-specific free conversation and offline practice.',
      },
    },
  },
  args: { initialPageId: 's1' },
} satisfies Meta<typeof A105Lesson>
export default meta
type Story = StoryObj<typeof meta>
export const CompleteLesson: Story = { tags: ['visual-review'] }
export const Speaking1: Story = {
  args: { initialPageId: 's1' },
  tags: ['visual-review'],
}
export const Vocabulary1: Story = {
  args: { initialPageId: 's2' },
  tags: ['visual-review'],
}
export const Vocabulary2: Story = {
  args: { initialPageId: 's4' },
  tags: ['visual-review'],
}
export const Dialogue1: Story = {
  args: { initialPageId: 's6' },
  tags: ['visual-review'],
}
export const Speaking2: Story = {
  args: { initialPageId: 's5' },
  tags: ['visual-review'],
}
export const Grammar1: Story = {
  args: { initialPageId: 's7' },
  tags: ['visual-review'],
}
export const Dialogue2: Story = {
  args: { initialPageId: 's8' },
  tags: ['visual-review'],
}
export const Task1: Story = {
  args: { initialPageId: 's11' },
  tags: ['visual-review'],
}
export const Listening1: Story = {
  args: { initialPageId: 's9' },
  tags: ['visual-review'],
}
export const Task2: Story = {
  args: { initialPageId: 's91' },
  tags: ['visual-review'],
}
export const Homework1: Story = {
  args: { initialPageId: 's12' },
  tags: ['visual-review'],
}
export const FreeConversation: Story = {
  args: { initialPageId: 'free-conversation' },
  tags: ['visual-review'],
}
function CutoutPreview({ staticCards = false }: { staticCards?: boolean }) {
  const [revealed, setRevealed] = useState<string[]>([])
  const [all, setAll] = useState(false)
  const [initial, setInitial] = useState(false)
  return (
    <MaterialTheme>
      <VocabularyGrid
        surface="plain"
        density="regular"
        imageVariant="isolated"
        imageFit="contain"
        interaction={staticCards ? 'static' : 'reveal'}
        revealOnHover={false}
        items={produce.slice(0, 6).map((item) => ({
          ...item,
          imageUrl: scene(item.id),
          imageAlt: item.translation,
        }))}
        showAll={all}
        showInitial={initial}
        revealedIds={revealed}
        controls={
          staticCards
            ? undefined
            : {
                showAll: all,
                showInitial: initial,
                onToggleAll: () => setAll(!all),
                onToggleInitial: () => setInitial(!initial),
              }
        }
        onReveal={(id) =>
          setRevealed((old) => (old.includes(id) ? old : [...old, id]))
        }
      />
    </MaterialTheme>
  )
}
export const TransparentFruit: Story = { render: () => <CutoutPreview /> }
export const StaticFruit: Story = {
  render: () => <CutoutPreview staticCards />,
}
export const OralRolePlay: Story = {
  render: () => (
    <MaterialTheme>
      <RolePlayExercise
        presentation="instructions"
        situation="Choose two fruits at the market."
        roles={['You: Ana', 'Teacher: Kim']}
        completedIds={[]}
        onStepToggle={() => undefined}
        steps={[
          { id: 'ask', label: 'Ask what Kim likes.' },
          { id: 'price', label: 'Tell her the prices.' },
          { id: 'swap', label: 'Swap roles.' },
        ]}
        support={['Do you like …?', 'How much is it?']}
      />
    </MaterialTheme>
  ),
}

export const Vegetables: Story = { args: { initialPageId: 's4' } }
export const SixTurnGaps: Story = { args: { initialPageId: 's8' } }
