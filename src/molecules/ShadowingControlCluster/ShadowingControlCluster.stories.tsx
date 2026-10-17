import type { Meta, StoryObj } from '@storybook/react-vite'
import { ShadowingControlCluster } from '.'

const meta = {
  title: 'Molecules/ShadowingControlCluster',
  component: ShadowingControlCluster,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof ShadowingControlCluster>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
