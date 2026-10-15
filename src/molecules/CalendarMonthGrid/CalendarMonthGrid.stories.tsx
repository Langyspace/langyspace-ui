import type { Meta, StoryObj } from '@storybook/react-vite'
import { CalendarMonthGrid } from '.'
const meta = {
  title: 'Molecules/CalendarMonthGrid',
  component: CalendarMonthGrid,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof CalendarMonthGrid>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
