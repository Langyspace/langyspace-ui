import type { Meta, StoryObj } from '@storybook/react-vite'
import { CalendarDay } from './CalendarParts'

const meta = {
  title: 'Compatibility/CalendarDay',
  component: CalendarDay,
  tags: ['visual-review'],
  args: {
    day: '15',
    children: 'Aula de ingles',
    onOpen: () => undefined,
    openLabel: 'Abrir horarios do dia15',
  },
} satisfies Meta<typeof CalendarDay>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
