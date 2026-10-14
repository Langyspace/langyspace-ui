import type { Meta, StoryObj } from '@storybook/react-vite'
import { StatAction } from '.'
const meta = {
  title: 'Molecules/StatAction',
  component: StatAction,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof StatAction>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
