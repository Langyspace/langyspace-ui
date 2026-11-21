import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { ImageSortBoard } from '../../../src/components/Exercise/ImageSortBoard'
import type { ImageSortBoardProps } from '../../../src/components/Exercise/ImageSortBoard.types'
import { MaterialTheme } from '../../materials/shared/MaterialTheme'
import { likeItems } from '../../materials/TrialA1/TrialA1.data'

function Preview(args: ImageSortBoardProps) {
  const [assignments, setAssignments] = useState(args.assignments)
  const [selectedId, setSelected] = useState(args.selectedId)
  return (
    <ImageSortBoard
      {...args}
      assignments={assignments}
      selectedId={selectedId}
      onSelect={setSelected}
      onAssign={(id, category) =>
        setAssignments((old) => ({ ...old, [id]: category }))
      }
    />
  )
}
const meta = {
  component: ImageSortBoard,
  title: 'Exercise/ImageSortBoard',
  args: {
    items: likeItems,
    categories: [
      { id: 'like', label: 'I like' },
      { id: 'dislike', label: 'I don’t like' },
    ],
    assignments: {},
    onSelect: () => undefined,
    onAssign: () => undefined,
  },
  render: (args) => <Preview {...args} />,
  decorators: [
    (Story) => (
      <MaterialTheme>
        <Story />
      </MaterialTheme>
    ),
  ],
} satisfies Meta<typeof ImageSortBoard>
export default meta
type Story = StoryObj<typeof meta>
export const Unsorted: Story = { tags: ['visual-review'] }
export const AllLiked: Story = {
  args: {
    assignments: Object.fromEntries(likeItems.map((item) => [item.id, 'like'])),
  },
  tags: ['layout-boundary', 'visual-review'],
}
export const AllDisliked: Story = {
  args: {
    assignments: Object.fromEntries(
      likeItems.map((item) => [item.id, 'dislike']),
    ),
  },
  tags: ['visual-review'],
}
export const Mixed: Story = {
  args: {
    assignments: { movies: 'like', music: 'like', dogs: 'dislike' },
    selectedId: 'music',
  },
  tags: ['visual-review'],
}
export const LongLabels: Story = {
  args: {
    items: likeItems.map((item) => ({
      ...item,
      label: `Learning about ${item.label} with other people`,
    })),
  },
  tags: ['layout-boundary', 'visual-review'],
}
export const Narrow: Story = {
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  tags: ['visual-review'],
}
