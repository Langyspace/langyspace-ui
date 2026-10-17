import type { Meta, StoryObj } from '@storybook/react-vite'
import { FormError } from '.'

const meta = {
  title: 'Molecules/FormError',
  component: FormError,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof FormError>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
