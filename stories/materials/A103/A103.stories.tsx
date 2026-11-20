import type { Meta, StoryObj } from '@storybook/react-vite'
import { A103Lesson } from './A103Lesson'

const meta = {
  title: 'Materials/A1.03',
  component: A103Lesson,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'People in my life revisada: cena de família com áudio de exemplos, identificação dos interlocutores, conversa e compreensão lado a lado e tarefas visuais de apresentação.',
      },
    },
  },
  args: { initialPageId: 's1', learnerName: '' },
} satisfies Meta<typeof A103Lesson>
export default meta
type Story = StoryObj<typeof meta>
export const CompleteLesson: Story = { tags: ['visual-review'] }
export const Vocabulary: Story = { args: { initialPageId: 's2' } }
export const WarmUp: Story = { args: { initialPageId: 's1' } }
export const Family: Story = { args: { initialPageId: 's4' } }
export const Introductions: Story = {
  args: { initialPageId: 's11' },
  tags: ['visual-review'],
}
export const Dialogue: Story = { args: { initialPageId: 's71' } }
export const Grammar: Story = { args: { initialPageId: 's8' } }
export const Listening: Story = {
  args: { initialPageId: 's10', learnerName: 'Carla' },
}
export const RolePlay: Story = { args: { initialPageId: 's12' } }

export const GuidedGaps: Story = {
  args: { initialPageId: 's72' },
  tags: ['visual-review'],
}
export const IntroduceSomeone: Story = { args: { initialPageId: 's101' } }

export const FamilyNarrow: Story = {
  args: { initialPageId: 's4' },
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  tags: ['layout-boundary'],
}
export const ConversationNarrow: Story = {
  args: { initialPageId: 's71' },
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  tags: ['layout-boundary'],
}
