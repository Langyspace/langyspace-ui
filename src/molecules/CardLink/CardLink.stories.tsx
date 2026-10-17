import type { Meta, StoryObj } from '@storybook/react-vite'
import { CardLink } from '.'

const meta = {
  title: 'Molecules/CardLink',
  component: CardLink,
  tags: ['visual-review'],
  args: { href: '#detail', children: 'Abrir detalhes' },
} satisfies Meta<typeof CardLink>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
