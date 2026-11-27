import type { Meta, StoryObj } from '@storybook/react-vite'
import { TrialB1Lesson } from './TrialB1Lesson'
const meta = {
  title: 'Materials/Trial B1/A trip to remember',
  component: TrialB1Lesson,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof TrialB1Lesson>
export default meta
export const Lesson: StoryObj<typeof meta> = {}
export const Introduction: StoryObj<typeof meta> = {
  name: 'Introduce yourself · B1/B2',
  args: { initialPageId: 'introduce-yourself' },
  tags: ['visual-review', 'layout-boundary'],
}
export const Picture: StoryObj<typeof meta> = { args: { initialPageId: 's2' } }
export const Dialogue: StoryObj<typeof meta> = { args: { initialPageId: 's3' } }
export const Story: StoryObj<typeof meta> = { args: { initialPageId: 's5' } }
