import type { Meta, StoryObj } from '@storybook/react-vite'
import { A101Lesson } from './A101Lesson'

const meta = {
  title: 'Materials/A1.01/Personal conversations',
  component: A101Lesson,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof A101Lesson>
export default meta
type Story = StoryObj<typeof meta>
export const AboutYou: Story = { args: { initialPageId: 's_personal111' } }
export const IntroduceSomeone: Story = {
  args: { initialPageId: 's_introducing111' },
}
export const Narrow: Story = {
  ...AboutYou,
  globals: { viewport: { value: 'mobile1', isRotated: false } },
}

/** The neighbouring listening page prepares Meet Vanya without starting playback. */
export const BeforeVideo: Story = { args: { initialPageId: 's9' } }
export const VideoReadyOnEntry: Story = {
  args: { initialPageId: 's_video_intro' },
}
