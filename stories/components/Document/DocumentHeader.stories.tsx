import type { Meta, StoryObj } from '@storybook/react-vite'
import { DocumentHeader } from '../../../src/components/Document/DocumentHeader'

const meta = {
  title: 'Document/DocumentHeader',
  component: DocumentHeader,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof DocumentHeader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
