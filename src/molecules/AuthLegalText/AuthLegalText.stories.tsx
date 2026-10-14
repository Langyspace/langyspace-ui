import type { Meta, StoryObj } from '@storybook/react-vite'
import { AuthLegalText } from '.'
const meta = {
  title: 'Molecules/AuthLegalText',
  component: AuthLegalText,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof AuthLegalText>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
