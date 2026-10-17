import type { Meta, StoryObj } from '@storybook/react-vite'
import { PracticeCard } from '.'

const meta = {
  title: 'Molecules/PracticeCard',
  component: PracticeCard,
  tags: ['visual-review'],
  args: { children: 'Atividade' },
} satisfies Meta<typeof PracticeCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
