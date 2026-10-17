import type { Meta, StoryObj } from '@storybook/react-vite'
import { DocumentHeaderContent } from '.'

const meta = {
  title: 'Molecules/DocumentHeaderContent',
  component: DocumentHeaderContent,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof DocumentHeaderContent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
