import type { Meta, StoryObj } from '@storybook/react-vite'
import { AuthFooterLink } from '.'

const meta = {
  title: 'Atoms/AuthFooterLink',
  component: AuthFooterLink,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof AuthFooterLink>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
