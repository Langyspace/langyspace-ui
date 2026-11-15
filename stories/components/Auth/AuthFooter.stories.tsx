import * as StoryLayout from './AuthFooter.stories.styles'
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
      <StoryLayout.DarkFooterPreview>
        <Story />
      </StoryLayout.DarkFooterPreview>
    ),
  ],
} satisfies Meta<typeof AuthFooter>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
