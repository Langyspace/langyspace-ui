import type { Meta, StoryObj } from '@storybook/react-vite'
import { FieldLabelRow } from './FieldLabelRow'

const meta = {
  title: 'Form/FieldLabelRow',
  component: FieldLabelRow,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof FieldLabelRow>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
