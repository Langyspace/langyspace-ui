import type { Meta, StoryObj } from '@storybook/react-vite'
import { CalendarScroller } from '../../../src/components/Calendar/CalendarScroller'

const meta = {
  title: 'Calendar/CalendarScroller',
  component: CalendarScroller,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof CalendarScroller>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
