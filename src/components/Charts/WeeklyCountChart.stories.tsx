import type { Meta, StoryObj } from '@storybook/react-vite'
import { WeeklyCountChart } from './WeeklyCountChart'

const meta = {
  title: 'Charts/WeeklyCountChart',
  component: WeeklyCountChart,
  tags: ['visual-review'],
  args: {
    items: [
      { id: '1', label: 'S', value: 2 },
      { id: '2', label: 'T', value: 1, active: true },
    ],
  },
} satisfies Meta<typeof WeeklyCountChart>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
