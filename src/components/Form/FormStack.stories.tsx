import type { Meta, StoryObj } from '@storybook/react-vite'
import { FormStack } from './FormStack'

const meta = {
  title: 'Form/FormStack',
  component: FormStack,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof FormStack>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
