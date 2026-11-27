import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardSession } from '../../../src/components/Flashcard/FlashcardSession'
const meta = {
  title: 'Flashcard/FlashcardSession',
  component: FlashcardSession,
  tags: ['visual-review'],
  args: {
    progress: { label: '1 de 2', current: 1, total: 2 },
    backAction: { label: 'Voltar', onClick: () => {} },
    card: {
      id: 'wake',
      word: 'wake up',
      translation: 'acordar',
      emoji: '☀️',
      example: 'I wake up early',
      backExample: 'Eu acordo cedo',
    },
    labels: {
      flip: 'Virar card',
      flipHint: 'toque pra virar',
      rateQuestion: 'Você lembrava?',
    },
    ratings: [
      { grade: 'again', label: 'Errei', interval: '1 min' },
      { grade: 'hard', label: 'Difícil', interval: '6 min' },
      { grade: 'good', label: 'Bom', interval: '10 min' },
      { grade: 'easy', label: 'Fácil', interval: '4 dias' },
    ],
  },
} satisfies Meta<typeof FlashcardSession>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  render: function Example(args) {
    const [flipped, flip] = useState(false)
    return (
      <FlashcardSession
        {...args}
        flipped={flipped}
        onFlip={() => flip(!flipped)}
        onRate={() => flip(false)}
      />
    )
  },
}
export const Flipped: Story = { args: { flipped: true } }
export const Disabled: Story = { args: { flipped: true, disabled: true } }
export const Complete: Story = {
  args: { card: undefined, children: <h2>Sessão concluída</h2> },
}
export const LongContent: Story = {
  args: {
    card: {
      id: 'long',
      word: 'pack my gym bag',
      translation: 'arrumar minha bolsa da academia',
      example:
        'Before I leave home, I pack my gym bag with everything I need for my workout',
    },
  },
}
