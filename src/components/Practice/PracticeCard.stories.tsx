import type { Meta, StoryObj } from '@storybook/react-vite'
import { PracticeCard } from './PracticeCard'

const meta = {
  title: 'Practice/PracticeCard',
  component: PracticeCard,
  tags: ['visual-review'],
  args: { children: 'Atividade' },
} satisfies Meta<typeof PracticeCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
