import type { Meta, StoryObj } from '@storybook/react-vite'
import { IconButton } from '../../../src/components/IconButton/IconButton'
import { QuizQuestion } from '../../../src/components/Quiz/QuizQuestion'

const meta = {
  title: 'Quiz/QuizQuestion',
  component: QuizQuestion,
  tags: ['visual-review'],
  args: {
    children:
      'Uma pergunta com texto longo para leitura confortável no celular.',
  },
} satisfies Meta<typeof QuizQuestion>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Compact: Story = {
  args: {
    density: 'compact',
    children: 'I’ve been cycling to work for a month.',
  },
}

export const WithNarration: Story = {
  args: {
    children: 'Choose the correct sentence',
    action: (
      <IconButton aria-label="Ouvir enunciado" variant="brand" size="sm">
        <svg
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4 9v6h4l5 4V5L8 9H4zm12-2v10a7 7 0 0 0 0-10z" />
        </svg>
      </IconButton>
    ),
  },
}
