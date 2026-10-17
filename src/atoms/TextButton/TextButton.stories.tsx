import type { Meta, StoryObj } from '@storybook/react-vite'
import { TextButton } from '.'

const meta = {
  title: 'Atoms/TextButton',
  component: TextButton,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof TextButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Subtle: Story = { args: { variant: 'subtle' } }

export const Danger: Story = { args: { variant: 'danger' } }

export const Disabled: Story = { args: { disabled: true } }
