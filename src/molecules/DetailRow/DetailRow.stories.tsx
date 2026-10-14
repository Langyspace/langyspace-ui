import type { Meta, StoryObj } from '@storybook/react-vite'
import { DetailRow } from '.'
const meta = {
  title: 'Molecules/DetailRow',
  component: DetailRow,
  tags: ['visual-review'],
  args: { label: 'Contato', value: 'Valor fornecido pelo produto' },
} satisfies Meta<typeof DetailRow>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
