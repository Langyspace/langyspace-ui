import type { Meta, StoryObj } from '@storybook/react-vite'
import { A104Lesson } from './A104Lesson'

const meta = {
  title: 'Materials/A1.04',
  component: A104Lesson,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'As 16 telas atuais de My day and our time, com componentes da UI library e imagens no padrão de cenas do A1.01. Proveniência da fonte e prompts preservados nesta pasta.',
      },
    },
  },
  args: { initialPageId: 's1', learnerName: '' },
} satisfies Meta<typeof A104Lesson>
export default meta
type Story = StoryObj<typeof meta>
export const CompleteLesson: Story = { tags: ['visual-review'] }
export const Vocabulary: Story = { args: { initialPageId: 's2' } }
export const DaysAndTimes: Story = {
  args: { initialPageId: 's3' },
  tags: ['visual-review'],
}
export const TimesOfDay: Story = {
  args: { initialPageId: 's31' },
  tags: ['visual-review'],
}
export const WarmUp: Story = { args: { initialPageId: 's41' } }
export const Pronunciation: Story = { args: { initialPageId: 's51' } }
export const Dialogue: Story = { args: { initialPageId: 's6' } }
export const Grammar: Story = { args: { initialPageId: 's7' } }
export const Listening: Story = {
  args: { initialPageId: 's9', learnerName: 'Carla' },
}
export const RolePlay: Story = { args: { initialPageId: 's11' } }
