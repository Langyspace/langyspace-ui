import type { Meta, StoryObj } from '@storybook/react-vite'
import { QuizBlank } from '.'

const meta = {
  title: 'Atoms/QuizBlank',
  component: QuizBlank,
  tags: ['visual-review'],
  args: {},
} satisfies Meta<typeof QuizBlank>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
