import type { Meta, StoryObj } from '@storybook/react-vite'
import { ShadowingPhraseStack } from '../../../src/components/Shadowing/ShadowingPhraseStack'

const meta = {
  title: 'Shadowing/ShadowingPhraseStack',
  component: ShadowingPhraseStack,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof ShadowingPhraseStack>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
