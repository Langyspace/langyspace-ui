import type { Meta, StoryObj } from '@storybook/react-vite'
import { CalendarWeekGrid } from '../../../src/components/Calendar/CalendarParts'
import { CalendarScroller } from '../../../src/components/Calendar/CalendarScroller'

const meta = {
  title: 'Compatibility/CalendarWeekGrid',
  component: CalendarWeekGrid,
  tags: ['visual-review'],
  render: (args) => (
    <CalendarScroller>
      <CalendarWeekGrid {...args} />
    </CalendarScroller>
  ),
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof CalendarWeekGrid>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
