import type { Meta, StoryObj } from '@storybook/react-vite'
import { A102Lesson } from './A102Lesson'

const meta = {
  title: 'Materials/A1.02',
  component: A102Lesson,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Your name and number: 11 pages for a 50-minute teacher-led contact exchange. Prepared ElevenLabs recordings, native digit/letter tiles, alphabet lookup, contextual dialogues and a correction call. UI Library patterns reviewed in A1.01/A2.01/A1.05 take precedence over historical Claude markup.',
      },
    },
  },
  args: { initialPageId: 's1', learnerName: '' },
} satisfies Meta<typeof A102Lesson>
export default meta
type Story = StoryObj<typeof meta>
export const CompleteLesson: Story = { tags: ['visual-review'] }
export const Numbers: Story = { args: { initialPageId: 's2' } }
export const SpellingRecognition: Story = { args: { initialPageId: 's7' } }
export const AlphabetReference: Story = { args: { initialPageId: 's6' } }
export const Dialogue: Story = { args: { initialPageId: 's8' } }
export const Grammar: Story = { args: { initialPageId: 's10' } }
export const PersonalConversation: Story = { args: { initialPageId: 's12' } }
export const ContactPractice: Story = { args: { initialPageId: 's13' } }
export const Call: Story = { args: { initialPageId: 's14' } }
export const YourQuestions: Story = { args: { initialPageId: 's12' } }
export const Homework: Story = { args: { initialPageId: 's17' } }
