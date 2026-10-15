import type { Meta, StoryObj } from '@storybook/react-vite'
import { StatValue } from '.'
const meta = {
  title: 'Atoms/StatValue',
  component: StatValue,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof StatValue>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
