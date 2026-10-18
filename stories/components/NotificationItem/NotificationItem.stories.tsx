import type { Meta, StoryObj } from '@storybook/react-vite'
import { NotificationItem } from '../../../src/components/NotificationItem/NotificationItem'

const meta = {
  title: 'NotificationItem',
  component: NotificationItem,
  tags: ['visual-review'],
  args: {
    avatar: <span aria-hidden>LS</span>,
    title: 'Novo aviso',
    description: 'Um conteúdo fornecido pelo produto.',
    meta: 'Há poucos minutos',
    action: 'Abrir',
  },
} satisfies Meta<typeof NotificationItem>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
