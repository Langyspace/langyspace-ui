import type { Meta, StoryObj } from '@storybook/react-vite'
import { FieldCounter } from '.'
const meta = {
  title: 'Atoms/FieldCounter',
  component: FieldCounter,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof FieldCounter>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
