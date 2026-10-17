import type { Meta, StoryObj } from '@storybook/react-vite'
import { QuizMetadata } from '.'

const meta = {
  title: 'Molecules/QuizMetadata',
  component: QuizMetadata,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof QuizMetadata>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
