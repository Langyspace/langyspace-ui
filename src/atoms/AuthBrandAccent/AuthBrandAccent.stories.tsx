import type { Meta, StoryObj } from '@storybook/react-vite'
import { AuthBrandAccent } from '.'
const meta = {
  title: 'Atoms/AuthBrandAccent',
  component: AuthBrandAccent,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof AuthBrandAccent>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
