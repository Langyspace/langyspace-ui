import type { Meta, StoryObj } from '@storybook/react-vite'
import { CalendarDayNumber } from '.'
const meta = {
  title: 'Molecules/CalendarDayNumber',
  component: CalendarDayNumber,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof CalendarDayNumber>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
