import type { Meta, StoryObj } from '@storybook/react-vite'
import { ConversationRow } from '../../../src/components/Message/ConversationRow'

const meta = {
  title: 'Message/ConversationRow',
  component: ConversationRow,
  tags: ['visual-review'],
  args: {
    avatar: <span aria-hidden>LS</span>,
    title: 'Conversa',
    preview: 'Mensagem recente',
    meta: '10:30',
    unread: true,
  },
} satisfies Meta<typeof ConversationRow>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Selected: Story = { args: { 'aria-current': 'true' } }

export const Read: Story = { args: { unread: false } }
