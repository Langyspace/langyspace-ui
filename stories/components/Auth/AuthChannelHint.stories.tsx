import type { Meta, StoryObj } from '@storybook/react-vite'
import { AuthChannelHint } from '../../../src/components/Auth/AuthChannelHint'

const meta = {
  title: 'Auth/AuthChannelHint',
  component: AuthChannelHint,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof AuthChannelHint>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
