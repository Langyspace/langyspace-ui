import type { Meta, StoryObj } from '@storybook/react-vite'
import { A201Lesson } from './A201Lesson'

const meta = {
  title: 'Materials/A2.01',
  component: A201Lesson,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A2.01 · What Are You Doing? Twenty-two pages composed from the same canonical components as A1.01. Six action scenes, time-expression reveal table, six warmups, comparison grammar, park, two dialogues, ten independent gaps, separate comprehension pages, a static mime model, Anna listening, four conversation groups and observation homework. Prepared audio and Notes use the shared controls.',
      },
    },
  },
  args: { initialPageId: 's1' },
} satisfies Meta<typeof A201Lesson>
export default meta
type Story = StoryObj<typeof meta>
export const CompleteLesson: Story = { tags: ['visual-review'] }
export const Vocabulary: Story = { args: { initialPageId: 's1' } }
export const TimeExpressions: Story = { args: { initialPageId: 's2' } }
export const Warmup: Story = { args: { initialPageId: 's3' } }
export const Grammar: Story = { args: { initialPageId: 's9' } }
export const PictureTalk: Story = { args: { initialPageId: 's10' } }
export const Dialogue: Story = { args: { initialPageId: 's11' } }
export const FirstComprehension: Story = { args: { initialPageId: 's111' } }
export const Gaps: Story = { args: { initialPageId: 's12' } }
export const Comprehension: Story = { args: { initialPageId: 's13' } }
export const Personal: Story = { args: { initialPageId: 's14' } }
export const Roleplay: Story = { args: { initialPageId: 's15' } }
export const Listening: Story = { args: { initialPageId: 's151' } }
export const Conversation: Story = { args: { initialPageId: 's16' } }
export const Homework: Story = { args: { initialPageId: 's20' } }
