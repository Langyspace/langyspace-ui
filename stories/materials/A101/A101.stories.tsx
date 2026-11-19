import type { Meta, StoryObj } from '@storybook/react-vite'
import fluentLicense from './assets/FLUENT-EMOJI-LICENSE.txt?raw'
import flagsLicense from './assets/FLAG-ICONS-LICENSE.txt?raw'
import { A101Lesson } from './A101Lesson'
const meta = {
  title: 'Materials/A1.01',
  component: A101Lesson,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A1.01 com 26 seções para conversação, cenas aprovadas reaproveitadas, 19 clipes ElevenLabs e Notes.\n\n' +
          fluentLicense +
          '\n\nBandeiras: flag-icons 7.5.0\n\n' +
          flagsLicense,
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
