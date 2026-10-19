import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardProgress, type FlashcardProgressProps } from '../../../src'

const meta = {
  title: 'Flashcard/FlashcardProgress',
  component: FlashcardProgress,
  args: { current: 5, total: 10, label: 'Progresso 5 de 10' },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          width: 'min(32rem, 85vw)',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FlashcardProgress>

export default meta
type Story = StoryObj<FlashcardProgressProps>
export const Default: Story = { args: meta.args }

export const LargeDeck: Story = {
  args: { current: 51, total: 100, label: 'Progresso 51 de 100' },
}
export const Complete: Story = {
  args: { current: 10, total: 10, complete: true, label: 'Progresso completo' },
}
export const Loading: Story = {
  args: { loading: true, label: 'Carregando progresso' },
}
export const Empty: Story = {
  args: { current: 0, total: 0, label: 'Sem progresso' },
}
