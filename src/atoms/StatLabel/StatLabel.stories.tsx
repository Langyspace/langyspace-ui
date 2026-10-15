import type { Meta, StoryObj } from '@storybook/react-vite'
import { StatLabel } from '.'
const meta = {
  title: 'Atoms/StatLabel',
  component: StatLabel,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof StatLabel>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
