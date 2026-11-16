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
          'As 17 telas atuais de People in my life, com componentes da UI library e imagens no padrão de cenas do A1.01. Proveniência da fonte e prompts preservados nesta pasta.',
      },
    },
  },
  args: { initialPageId: 's1', learnerName: '' },
} satisfies Meta<typeof A103Lesson>
export default meta
type Story = StoryObj<typeof meta>
export const CompleteLesson: Story = { tags: ['visual-review'] }
export const Vocabulary: Story = { args: { initialPageId: 's2' } }
export const WarmUp: Story = { args: { initialPageId: 's31' } }
export const Family: Story = { args: { initialPageId: 's4' } }
export const Pronunciation: Story = { args: { initialPageId: 's61' } }
export const Dialogue: Story = { args: { initialPageId: 's71' } }
export const Grammar: Story = { args: { initialPageId: 's8' } }
export const Listening: Story = {
  args: { initialPageId: 's10', learnerName: 'Carla' },
}
export const RolePlay: Story = { args: { initialPageId: 's12' } }
