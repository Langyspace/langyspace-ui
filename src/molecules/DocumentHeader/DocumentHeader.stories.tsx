import type { Meta, StoryObj } from '@storybook/react-vite'
import { DocumentHeader } from '.'
const meta = {
  title: 'Molecules/DocumentHeader',
  component: DocumentHeader,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof DocumentHeader>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
