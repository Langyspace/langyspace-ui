import type { Meta, StoryObj } from '@storybook/react-vite'
import { NavigationButton } from './NavigationButton'

const meta = {
  title: 'Navigation/NavigationButton',
  component: NavigationButton,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof NavigationButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Current: Story = { args: { 'aria-current': 'page' } }

export const Disabled: Story = { args: { disabled: true } }
