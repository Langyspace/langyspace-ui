import storyAtlas from '../../materials/Course/assets/a2-03-vocabulary81.webp'
import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { ImageSortBoard } from '../../../src/components/Exercise/ImageSortBoard'
import type { ImageSortBoardProps } from '../../../src/components/Exercise/ImageSortBoard.types'
import { MaterialTheme } from '../../materials/shared/MaterialTheme'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
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
export const HeaderInstructions: Story = {
  args: { instructions: '' },
  render: (args) => (
    <SlidePage
      title="Talk about what you like"
      instruction="Choose a picture, say whether you like it and place it in a column with your teacher"
    >
      <Preview {...args} />
    </SlidePage>
  ),
  tags: ['visual-review'],
}
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

export const StorySequence: Story = {
  args: {
    layout: 'sequence',
    instructions: 'Choose a picture, then choose its place in the story',
    items: [
      {
        id: 'bus',
        label: 'At the bus stop',
        imageUrl: storyAtlas,
        imageRegion: {
          columns: 3,
          rows: 2,
          column: 0,
          row: 0,
          sourceAspectRatio: 1.5,
        },
      },
      {
        id: 'rain',
        label: 'Rain starts',
        imageUrl: storyAtlas,
        imageRegion: {
          columns: 3,
          rows: 2,
          column: 1,
          row: 1,
          sourceAspectRatio: 1.5,
        },
      },
      {
        id: 'missed',
        label: 'The bus leaves',
        imageUrl: storyAtlas,
        imageRegion: {
          columns: 3,
          rows: 2,
          column: 1,
          row: 0,
          sourceAspectRatio: 1.5,
        },
      },
    ],
    categories: [
      { id: 'first', label: 'First' },
      { id: 'then', label: 'Then' },
      { id: 'after', label: 'After that' },
    ],
    assignments: {},
  },
  tags: ['visual-review', 'layout-boundary'],
}
