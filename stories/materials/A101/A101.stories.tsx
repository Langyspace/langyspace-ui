import type { Meta, StoryObj } from '@storybook/react-vite'
import fluentLicense from './assets/FLUENT-EMOJI-LICENSE.txt?raw'
import { A101Lesson } from './A101Lesson'
const meta = {
  title: 'Materials/A1.01',
  component: A101Lesson,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Aula atual de 26 telas do Claude. Áudio de vocabulário/diálogo pela voz do navegador; mensagem da Kim com voz de demonstração local. A integração nos portais depende da revisão e publicação oficial da UI library.\n\n' +
          fluentLicense,
      },
    },
  },
  args: { initialPageId: 's1', learnerName: '' },
} satisfies Meta<typeof A101Lesson>
export default meta
type Story = StoryObj<typeof meta>
export const CompleteLesson: Story = { tags: ['visual-review'] }
export const WarmUp: Story = { args: { initialPageId: 's21' } }
export const Dialogue: Story = { args: { initialPageId: 's6' } }
export const Grammar: Story = { args: { initialPageId: 's71' } }
export const Matching: Story = { args: { initialPageId: 's17' } }
export const Listening: Story = {
  args: { initialPageId: 's9', learnerName: 'Carla' },
}
export const Conversation: Story = { args: { initialPageId: 's15' } }
export const Homework: Story = { args: { initialPageId: 's13' } }
