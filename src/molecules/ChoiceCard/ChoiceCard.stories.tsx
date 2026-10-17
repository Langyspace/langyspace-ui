import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChoiceCard } from '.'

const meta = {
  title: 'Molecules/ChoiceCard',
  component: ChoiceCard,
  tags: ['visual-review'],
  args: { 'aria-pressed': true, children: 'Selecionado' },
} satisfies Meta<typeof ChoiceCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Unselected: Story = { args: { 'aria-pressed': false } }

export const Disabled: Story = { args: { disabled: true } }
