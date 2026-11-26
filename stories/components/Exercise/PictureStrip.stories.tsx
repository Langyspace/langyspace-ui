import type { Meta, StoryObj } from '@storybook/react-vite'
import { PictureStrip } from '../../../src/components/Exercise/PictureStrip'
import { MaterialTheme } from '../../materials/shared/MaterialTheme'
import atlas from '../../materials/Course/assets/a2-02-vocabulary81.webp'
import neighbourhood from '../../materials/Course/assets/b1-02-neighbourhood123.webp'

const meta = {
  title: 'Exercise/PictureStrip',
  component: PictureStrip,
  decorators: [
    (Story) => (
      <MaterialTheme>
        <Story />
      </MaterialTheme>
    ),
  ],
  args: {
    items: [
      {
        id: 'market',
        src: atlas,
        alt: 'A visit to a market',
        caption: 'Saturday morning · market',
        region: {
          columns: 3,
          rows: 2,
          column: 1,
          row: 0,
          sourceAspectRatio: 1.5,
        },
      },
      {
        id: 'coffee',
        src: atlas,
        alt: 'Coffee with a friend',
        caption: 'Saturday afternoon · coffee with a friend',
        region: {
          columns: 3,
          rows: 2,
          column: 2,
          row: 0,
          sourceAspectRatio: 1.5,
        },
      },
    ],
  },
} satisfies Meta<typeof PictureStrip>
export default meta
type Story = StoryObj<typeof meta>
export const Weekend: Story = { tags: ['visual-review'] }
export const BeforeAndAfter: Story = {
  tags: ['visual-review'],
  args: {
    items: ['Before', 'Now'].map((caption, column) => ({
      id: caption,
      src: neighbourhood,
      alt: caption,
      caption,
      region: { columns: 2, rows: 1, column, row: 0, sourceAspectRatio: 2 },
    })),
  },
}
export const Compact: Story = {
  tags: ['visual-review', 'layout-boundary'],
  args: { density: 'compact', items: meta.args.items.slice(0, 1) },
}
export const Narrow: Story = {
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  tags: ['visual-review', 'layout-boundary'],
}
