import type { Meta, StoryObj } from '@storybook/react-vite'
import { NarrowSurface } from '../../../.storybook/fixtures'
import { AuthDescription } from '.'

const meta = {
  args: {
    children:
      'Coloca seu celular e vamos te enviar um código por SMS ou WhatsApp.',
  },
  component: AuthDescription,
  tags: ['visual-review'],
  title: 'Atoms/Auth/AuthDescription',
} satisfies Meta<typeof AuthDescription>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const RichContent: Story = {
  render: (args) => (
    <AuthDescription {...args}>
      Confira os dados informados ou{' '}
      <a href="/ajuda">acesse as instruções para recuperar o acesso</a>.
    </AuthDescription>
  ),
}
export const NarrowLongContent: Story = {
  tags: ['layout-boundary'],
  decorators: [
    (Story) => (
      <NarrowSurface>
        <Story />
      </NarrowSurface>
    ),
  ],
  args: {
    children:
      'Enviamos um código para o celular informado. Você pode receber por SMS ou WhatsApp e usar o primeiro código que chegar, mantendo esta tela aberta.',
  },
}
