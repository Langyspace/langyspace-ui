import type { Meta, StoryObj } from '@storybook/react-vite'
import { CalendarEvent } from '../../../src/components/Calendar/CalendarParts'

const meta = {
  title: 'Compatibility/CalendarEvent',
  component: CalendarEvent,
  tags: ['visual-review'],
  args: { children: '10:00 · Aula' },
} satisfies Meta<typeof CalendarEvent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Success: Story = { args: { tone: 'success' } }

export const Muted: Story = { args: { tone: 'muted' } }
