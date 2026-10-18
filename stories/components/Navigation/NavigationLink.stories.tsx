import type { Meta, StoryObj } from '@storybook/react-vite'
import { NavigationLink } from '../../../src/components/Navigation/NavigationLink'

const meta = {
  title: 'Navigation/NavigationLink',
  component: NavigationLink,
  tags: ['visual-review'],
  args: { href: '#overview', children: 'Visão geral' },
} satisfies Meta<typeof NavigationLink>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Current: Story = { args: { 'aria-current': 'page' } }
