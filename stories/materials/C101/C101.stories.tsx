import type { Meta, StoryObj } from '@storybook/react-vite'
import { C101Lesson } from './C101Lesson'
const meta = {
  title: 'Materials/C1.01 · It tends to come across as …',
  component: C101Lesson,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof C101Lesson>
export default meta
export const Lesson: StoryObj<typeof meta> = { args: { initialPageId: 's1' } }
export const Reading: StoryObj<typeof meta> = { args: { initialPageId: 's4' } }
export const Grammar: StoryObj<typeof meta> = { args: { initialPageId: 's7' } }
