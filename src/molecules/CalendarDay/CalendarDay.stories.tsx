import type { Meta, StoryObj } from '@storybook/react-vite'
import { CalendarDay } from '.'
const meta = {
  title: 'Molecules/CalendarDay',
  component: CalendarDay,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof CalendarDay>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
