import type { Meta, StoryObj } from '@storybook/react-vite'
import { Skeleton } from '../../../src/components/Skeleton/Skeleton'

const meta = {
  title: 'Skeleton',
  component: Skeleton,
  tags: ['visual-review'],
  args: { style: { width: '12rem', height: '1rem' } },
} satisfies Meta<typeof Skeleton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
