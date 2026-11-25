import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComicRolePlay } from '../../../src/components/Exercise/ComicRolePlay'
import type { ComicRolePlayProps } from '../../../src/components/Exercise/ComicRolePlay.types'
import { MaterialTheme } from '../../materials/shared/MaterialTheme'
import { comicPanels } from '../../materials/TrialA1/TrialA1Comic.data'

function Preview(args: ComicRolePlayProps) {
  const [hints, setHints] = useState<readonly string[]>(
    args.guidance?.hintedTurnIds ?? [],
  )
  const [models, setModels] = useState<readonly string[]>(
    args.guidance?.revealedTurnIds ?? [],
  )
  return (
    <ComicRolePlay
      {...args}
      guidance={
        args.guidance
          ? {
              hintedTurnIds: hints,
              revealedTurnIds: models,
              onRevealHint: (id) => setHints((old) => (id ? [...old, id] : [])),
              onRevealModel: (id) =>
                setModels((old) => (id ? [...old, id] : [])),
            }
          : undefined
      }
    />
  )
}
const meta = {
  component: ComicRolePlay,
  title: 'Exercise/ComicRolePlay',
  args: {
    panels: comicPanels,
    participants: [
      { id: 'learner', name: 'You' },
      { id: 'teacher', name: 'Teacher' },
    ],
    guidance: {
      hintedTurnIds: [],
      revealedTurnIds: [],
      onRevealHint: () => undefined,
      onRevealModel: () => undefined,
    },
  },
  render: (args) => <Preview {...args} />,
  decorators: [
    (Story) => (
      <MaterialTheme>
        <Story />
      </MaterialTheme>
    ),
  ],
} satisfies Meta<typeof ComicRolePlay>
export default meta
type Story = StoryObj<typeof meta>
const ids = comicPanels.flatMap((panel) => panel.turns.map((turn) => turn.id))
export const Blank: Story = { tags: ['visual-review'] }
export const FirstTip: Story = {
  args: { guidance: { ...meta.args.guidance, hintedTurnIds: [ids[0]!] } },
  tags: ['visual-review'],
}
export const AllTips: Story = {
  args: { guidance: { ...meta.args.guidance, hintedTurnIds: ids } },
  tags: ['visual-review'],
}
export const AllExamples: Story = {
  args: { guidance: { ...meta.args.guidance, revealedTurnIds: ids } },
  tags: ['visual-review', 'layout-boundary'],
}
export const WithoutSupport: Story = { args: { guidance: undefined } }
export const LongContent: Story = {
  args: {
    panels: comicPanels.map((panel) => ({
      ...panel,
      turns: panel.turns.map((turn) => ({
        ...turn,
        model:
          'I like listening to music and playing soccer with my friends. What about you?',
      })),
    })),
    guidance: { ...meta.args.guidance, revealedTurnIds: ids },
    participants: [
      { id: 'learner', name: 'A very long learner name' },
      { id: 'teacher', name: 'A very long teacher name' },
    ],
  },
  tags: ['visual-review', 'layout-boundary'],
}
export const Narrow: Story = {
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  tags: ['layout-boundary', 'visual-review'],
}
