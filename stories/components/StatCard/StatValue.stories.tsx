import type { Meta, StoryObj } from '@storybook/react-vite'
import { StatValue } from '../../../src/compatibility/StatCard'

const meta = {
  title: 'Compatibility/StatValue',
  component: StatValue,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof StatValue>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
