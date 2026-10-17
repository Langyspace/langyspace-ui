import type { Meta, StoryObj } from '@storybook/react-vite'
import { SessionProgress } from '.'

const meta = {
  title: 'Molecules/SessionProgress',
  component: SessionProgress,
  tags: ['visual-review'],
  args: { name: 'Atividade de prática', counter: '1/3', value: 0.3 },
} satisfies Meta<typeof SessionProgress>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
