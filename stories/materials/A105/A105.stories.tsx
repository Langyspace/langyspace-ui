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
          'A1.05 revisada para conversação particular de 50 minutos: frutas sem fundo, gravações ElevenLabs, diálogo, lacunas, escuta e role-play. Componentes aprovados da UI Library têm prioridade sobre as versões históricas do Claude Design',
      },
    },
  },
  args: { initialPageId: 's1', learnerName: '' },
} satisfies Meta<typeof A105Lesson>

export default meta
type Story = StoryObj<typeof meta>
export const CompleteLesson: Story = { tags: ['visual-review'] }
export const Vocabulary: Story = { args: { initialPageId: 's2' } }
export const Preferences: Story = { args: { initialPageId: 's3' } }
export const Comprehension: Story = { args: { initialPageId: 's61' } }
export const Dialogue: Story = { args: { initialPageId: 's6' } }
export const Grammar: Story = { args: { initialPageId: 's5' } }
export const YourVersion: Story = { args: { initialPageId: 's8' } }
export const Listening: Story = { args: { initialPageId: 's9' } }
export const RolePlay: Story = { args: { initialPageId: 's11' } }
export const Homework: Story = { args: { initialPageId: 's12' } }

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
        items={produce
          .slice(0, 6)
          .map((item) => ({
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
