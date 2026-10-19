import type { Meta, StoryObj } from '@storybook/react-vite'
import { AuthTopLink } from '../../../src/components/Auth/AuthTopLink'

const meta = {
  title: 'Auth/AuthTopLink',
  component: AuthTopLink,
  tags: ['visual-review'],
  args: { children: 'Ainda não tem cadastro? Entrar', href: '/cadastro' },
} satisfies Meta<typeof AuthTopLink>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
