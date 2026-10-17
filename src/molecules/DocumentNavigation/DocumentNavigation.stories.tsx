import type { Meta, StoryObj } from '@storybook/react-vite'
import { DocumentNavigation } from '.'

const meta = {
  title: 'Molecules/DocumentNavigation',
  component: DocumentNavigation,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof DocumentNavigation>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
