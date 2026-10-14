import type { Meta, StoryObj } from '@storybook/react-vite'
import { CalendarScroller } from '.'
const meta = {
  title: 'Molecules/CalendarScroller',
  component: CalendarScroller,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof CalendarScroller>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
