import type { Meta, StoryObj } from '@storybook/react-vite'
import { AuthFooterLink } from '../../../src/components/Auth/AuthFooterLink'

const meta = {
  title: 'Auth/AuthFooterLink',
  component: AuthFooterLink,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof AuthFooterLink>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
