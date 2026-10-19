import type { Meta, StoryObj } from '@storybook/react-vite'
import { BottomNavigationLink } from '../../../src/components/Navigation/BottomNavigationLink'

const meta = {
  title: 'Navigation/BottomNavigationLink',
  component: BottomNavigationLink,
  tags: ['visual-review'],
  args: { href: '#home', children: 'Início' },
} satisfies Meta<typeof BottomNavigationLink>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
