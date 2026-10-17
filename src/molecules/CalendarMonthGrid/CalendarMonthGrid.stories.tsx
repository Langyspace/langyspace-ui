import type { Meta, StoryObj } from '@storybook/react-vite'
import { CalendarMonthGrid } from '.'
import { CalendarScroller } from '../CalendarScroller'

const meta = {
  title: 'Molecules/CalendarMonthGrid',
  component: CalendarMonthGrid,
  tags: ['visual-review'],
  render: (args) => (
    <CalendarScroller>
      <CalendarMonthGrid {...args} />
    </CalendarScroller>
  ),
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof CalendarMonthGrid>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
