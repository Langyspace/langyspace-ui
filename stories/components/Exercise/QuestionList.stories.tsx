import type { Meta, StoryObj } from '@storybook/react-vite'
import { QuestionList } from '../../../src/components/Exercise/QuestionList'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { LearningDialogue } from '../../../src/components/Exercise/LearningDialogue'
import { MaterialTheme } from '../../materials/shared/MaterialTheme'

const meta = {
  title: 'Exercise/QuestionList',
  component: QuestionList,
  args: {
    items: [
      {
        id: 'kim',
        prompt: 'Where is Kim from?',
        hint: 'Look at Kim’s first message',
        answer: 'She’s from Korea',
      },
      {
        id: 'ana',
        prompt: 'Where is Ana from?',
        hint: 'Look at Ana’s first message',
        answer: 'She’s from Brazil',
      },
      {
        id: 'feeling',
        prompt: 'How does Ana feel?',
        hint: 'Look for a feeling and something she needs',
        answer: 'She’s good and she’s hungry',
      },
    ],
  },
} satisfies Meta<typeof QuestionList>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
export const BesideDialogue: Story = {
  render: (args) => (
    <MaterialTheme>
      <SlidePage
        title="Nice to meet you"
        eyebrow="Guided conversation"
        instruction="Listen as Ana and Kim meet, then read together"
        questions={<QuestionList {...args} />}
      >
        <LearningDialogue
          lines={[
            {
              id: 'k1',
              speaker: 'Kim',
              content: 'Hi! I’m Kim. I’m from Korea',
              side: 'start',
            },
            {
              id: 'a1',
              speaker: 'Ana',
              content: 'Hi, Kim! I’m Ana. I’m from Brazil. Nice to meet you',
              side: 'end',
            },
            {
              id: 'k2',
              speaker: 'Kim',
              content: 'Nice to meet you too. How are you?',
              side: 'start',
            },
            {
              id: 'a2',
              speaker: 'Ana',
              content: 'I’m good, thanks. I’m hungry! And you?',
              side: 'end',
            },
            {
              id: 'k3',
              speaker: 'Kim',
              content: 'I’m tired, but I’m happy. Welcome, Ana!',
              side: 'start',
            },
            {
              id: 'a3',
              speaker: 'Ana',
              content: 'Thank you! It’s nice to be here',
              side: 'end',
            },
          ]}
        />
      </SlidePage>
    </MaterialTheme>
  ),
}
export const Compact: Story = {
  args: {
    density: 'compact',
    items: [
      ...meta.args.items,
      {
        id: 'movies',
        prompt: 'What does Ana like watching?',
        hint: 'She likes watching …',
        answer: 'Ana likes watching movies',
      },
      {
        id: 'cats',
        prompt: 'Does Kim like dogs or cats?',
        hint: 'Kim likes …',
        answer: 'Kim likes cats',
      },
      {
        id: 'food',
        prompt: 'What food does Ana want?',
        hint: 'She wants …',
        answer: 'Ana wants pizza',
      },
    ],
  },
}
