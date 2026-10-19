import type { Meta, StoryObj } from '@storybook/react-vite'
import { AuthFooter } from '../../../src'

const meta = {
  title: 'Auth/AuthFooter',
  component: AuthFooter,
  args: {
    children: '© 2026 Langy.space',
    links: [
      { href: '/termos', label: 'Termos' },
      { href: '/privacidade', label: 'Privacidade' },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ background: '#000', color: '#fff', padding: 24 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AuthFooter>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
