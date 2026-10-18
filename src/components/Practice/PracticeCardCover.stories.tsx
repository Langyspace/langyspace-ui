import type { Meta, StoryObj } from '@storybook/react-vite'
import { PracticeCardCover } from './PracticeCardCover'

const meta = {
  title: 'Practice/PracticeCardCover',
  component: PracticeCardCover,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof PracticeCardCover>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
