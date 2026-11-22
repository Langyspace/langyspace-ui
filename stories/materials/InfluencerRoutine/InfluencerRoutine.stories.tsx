import type { Meta, StoryObj } from '@storybook/react-vite'
import { InfluencerRoutineLesson } from './InfluencerRoutineLesson'

const meta = {
  title: 'Materials/Extra/A day in my life',
  component: InfluencerRoutineLesson,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof InfluencerRoutineLesson>
export default meta
export const Lesson: StoryObj<typeof meta> = {}
export const MorningScene: StoryObj<typeof meta> = {
  args: { initialPageId: 'morning-scene' },
}
export const GuidedConversation: StoryObj<typeof meta> = {
  args: { initialPageId: 'ready-dialogue' },
}
export const PersonalConversation: StoryObj<typeof meta> = {
  args: { initialPageId: 'gym-personal' },
}
export const Listening: StoryObj<typeof meta> = {
  args: { initialPageId: 'bedtime-message' },
}
export const FreeConversation: StoryObj<typeof meta> = {
  args: { initialPageId: 'free-conversation' },
}
