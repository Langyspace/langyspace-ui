import type { Meta, StoryObj } from '@storybook/react-vite'
import { AuthHeader } from '../../../src'

const meta = {
  title: 'Auth/AuthHeader',
  component: AuthHeader,
  args: {
    title: 'Confira seu ',
    highlight: 'celular.',
    paragraphs: ['Informe o código recebido.', 'O código expira em breve.'],
  },
} satisfies Meta<typeof AuthHeader>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
