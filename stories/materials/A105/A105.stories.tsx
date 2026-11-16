import type { Meta, StoryObj } from '@storybook/react-vite'
import { A105Lesson } from './A105Lesson'

const meta = {
  title: 'Materials/A1.05',
  component: A105Lesson,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'At the street market: 16 telas do protótipo atual do Claude Design, com vocabulário, pronúncia, diálogo, gramática, conversa com troca de papéis, escuta, revisão e feira interativa. Ilustrações seguem o manifesto image-scenes.json; avatares Ana e Kim reutilizam a proveniência de A1.01. Áudio pela voz do navegador.',
      },
    },
  },
  args: { initialPageId: 's1', learnerName: '' },
} satisfies Meta<typeof A105Lesson>

export default meta
type Story = StoryObj<typeof meta>
export const CompleteLesson: Story = { tags: ['visual-review'] }
export const Vocabulary: Story = { args: { initialPageId: 's2' } }
export const HiddenOptions: Story = { args: { initialPageId: 's32' } }
export const Pronunciation: Story = { args: { initialPageId: 's51' } }
export const Dialogue: Story = { args: { initialPageId: 's6' } }
export const Grammar: Story = { args: { initialPageId: 's7' } }
export const YourVersion: Story = { args: { initialPageId: 's8' } }
export const Listening: Story = { args: { initialPageId: 's9' } }
export const RolePlay: Story = { args: { initialPageId: 's11' } }
export const Homework: Story = { args: { initialPageId: 's12' } }
