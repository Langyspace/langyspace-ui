import type { Meta, StoryObj } from '@storybook/react-vite'
import { TimelineEvent } from '.'
const meta = {
  title: 'Molecules/TimelineEvent',
  component: TimelineEvent,
  tags: ['visual-review'],
  args: { children: '10:00 · Aula' },
} satisfies Meta<typeof TimelineEvent>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}

export const Success: Story = {
  args: { tone: 'success', style: { height: 80 } },
}

export const Muted: Story = { args: { tone: 'muted', style: { height: 80 } } }
