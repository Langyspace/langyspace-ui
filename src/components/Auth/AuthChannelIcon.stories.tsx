import type { Meta, StoryObj } from '@storybook/react-vite'
import { AuthChannelIcon } from './AuthChannelIcon'

const meta = {
  title: 'Auth/AuthChannelIcon',
  component: AuthChannelIcon,
  tags: ['visual-review'],
  args: {
    channel: 'sms',
    children: (
      <svg
        aria-hidden="true"
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 4h16v12H8l-4 4z" />
      </svg>
    ),
  },
} satisfies Meta<typeof AuthChannelIcon>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Whatsapp: Story = { args: { channel: 'whatsapp' } }
