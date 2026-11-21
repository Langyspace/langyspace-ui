import * as StoryLayout from './QuizOption.stories.styles'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { QuizOption } from '../../../src/components/Quiz/QuizOption'
import { QuizFeedback } from '../../../src/components/Quiz/QuizFeedback'
import { useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { useFeedbackSounds } from '../../../src/components/Quiz/useFeedbackSounds'

const meta = {
  title: 'Quiz/QuizOption',
  component: QuizOption,
  tags: ['visual-review'],
  args: { letter: 'A', children: 'I work every day.' },
  decorators: [
    (Story) => (
      <StoryLayout.AnswerPreview>
        <Story />
      </StoryLayout.AnswerPreview>
    ),
  ],
} satisfies Meta<typeof QuizOption>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Correct: Story = {
  args: { state: 'correct', disabled: true },
  render: (args) => (
    <StoryLayout.AnswerStates>
      <QuizOption {...args} />
      <QuizFeedback tone="correct">Acertou! Boa resposta.</QuizFeedback>
    </StoryLayout.AnswerStates>
  ),
}

export const Wrong: Story = {
  args: { state: 'wrong', disabled: true },
  render: (args) => (
    <StoryLayout.AnswerStates>
      <QuizOption {...args} />
      <QuizFeedback tone="wrong">Quase. Revise a forma do verbo.</QuizFeedback>
    </StoryLayout.AnswerStates>
  ),
}

export const Dim: Story = { args: { state: 'dim', disabled: true } }

export const LongContent: Story = {
  args: {
    children:
      'Uma alternativa com texto longo para conferir quebra de linha e leitura em uma tela pequena.',
  },
}

export const Focused: Story = {
  play: ({ canvasElement }) => {
    canvasElement.querySelector('button')?.focus()
  },
}

export const Hovered: Story = {}

export const Compact: Story = {
  args: { density: 'compact', children: 'He’s tired.' },
}

function FeedbackSoundPreview() {
  const sound = useFeedbackSounds()
  const [selected, setSelected] = useState<'correct' | 'wrong'>()
  return (
    <StoryLayout.AnswerStates>
      <Button
        variant="secondary"
        aria-pressed={sound.enabled}
        onClick={() => sound.setEnabled(!sound.enabled)}
      >
        Answer sounds
      </Button>
      <QuizOption
        letter="A"
        feedbackOutcome="correct"
        state={selected === 'correct' ? 'correct' : 'default'}
        onClick={() => setSelected('correct')}
      >
        Correct answer
      </QuizOption>
      <QuizOption
        letter="B"
        feedbackOutcome="wrong"
        state={selected === 'wrong' ? 'wrong' : 'default'}
        onClick={() => setSelected('wrong')}
      >
        Another try
      </QuizOption>
      <QuizOption letter="C" feedbackOutcome="correct" disabled>
        Disabled answer
      </QuizOption>
      <QuizOption letter="D">Personal preference — no result sound</QuizOption>
    </StoryLayout.AnswerStates>
  )
}

export const AnswerFeedbackSounds: Story = {
  render: () => <FeedbackSoundPreview />,
  tags: ['visual-review', 'audio-review'],
}

export const InlineAnswers: Story = {
  args: { letter: null, density: 'compact', layout: 'inline' },
  render: (args) => (
    <StoryLayout.InlineStates>
      <QuizOption {...args}>Right</QuizOption>
      <QuizOption {...args} state="correct">
        Right
      </QuizOption>
      <QuizOption {...args} state="wrong">
        Wrong
      </QuizOption>
      <QuizOption {...args} state="dim" disabled>
        Wrong
      </QuizOption>
    </StoryLayout.InlineStates>
  ),
}
