import { AuthLegalText } from '../../../src/components/Auth/AuthLegalText'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { AuthActions } from '../../../src'
import { Button } from '../../../src'

const meta = {
  title: 'Auth/AuthActions',
  component: AuthActions,
  args: {
    children: (
      <Button type="submit" fullWidth size="lg">
        Continuar
      </Button>
    ),
  },
} satisfies Meta<typeof AuthActions>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}

export const WithLegalText: Story = {
  render: (args) => (
    <form>
      <AuthLegalText>
        Ao confirmar, você aceita os termos e a política de privacidade.
      </AuthLegalText>
      <AuthActions {...args} />
    </form>
  ),
}
