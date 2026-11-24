import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChoiceCard } from '../../../src/components/ChoiceCard/ChoiceCard'

const meta = {
  title: 'ChoiceCard',
  component: ChoiceCard,
  tags: ['visual-review'],
  args: { 'aria-pressed': true, children: 'Selecionado' },
} satisfies Meta<typeof ChoiceCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Unselected: Story = { args: { 'aria-pressed': false } }

export const Disabled: Story = { args: { disabled: true } }
export const Lesson: Story = {
  args: { variant: 'lesson', children: 'I like music.', 'aria-pressed': false },
}
export const LessonSelected: Story = {
  args: { variant: 'lesson', children: 'I like music.' },
}
export const LessonDisabled: Story = {
  args: {
    variant: 'lesson',
    disabled: true,
    'aria-pressed': false,
    children: 'I like music.',
  },
}
