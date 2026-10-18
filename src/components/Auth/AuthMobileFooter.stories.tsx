import type { Meta, StoryObj } from '@storybook/react-vite'
import { AuthMobileFooter } from './AuthMobileFooter'

const meta = {
  title: 'Auth/AuthMobileFooter',
  component: AuthMobileFooter,
  tags: ['visual-review', 'layout-boundary'],
  render: (args) => (
    <div>
      <p>Autenticação</p>
      <AuthMobileFooter {...args} />
    </div>
  ),
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof AuthMobileFooter>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
