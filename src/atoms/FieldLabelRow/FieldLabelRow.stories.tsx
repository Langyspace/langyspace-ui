import type { Meta, StoryObj } from '@storybook/react-vite'
import { FieldLabelRow } from '.'

const meta = {
  title: 'Atoms/FieldLabelRow',
  component: FieldLabelRow,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof FieldLabelRow>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
