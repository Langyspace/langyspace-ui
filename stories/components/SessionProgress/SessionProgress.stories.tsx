import type { Meta, StoryObj } from '@storybook/react-vite'
import { SessionProgress } from '../../../src/components/SessionProgress/SessionProgress'

const meta = {
  title: 'SessionProgress',
  component: SessionProgress,
  tags: ['visual-review'],
  args: { name: 'Atividade de prática', counter: '1/3', value: 0.3 },
} satisfies Meta<typeof SessionProgress>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
