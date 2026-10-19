import type { Meta, StoryObj } from '@storybook/react-vite'
import { ShadowingActivePhrase } from '../../../src/components/Shadowing/ShadowingActivePhrase'

const meta = {
  title: 'Shadowing/ShadowingActivePhrase',
  component: ShadowingActivePhrase,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof ShadowingActivePhrase>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
