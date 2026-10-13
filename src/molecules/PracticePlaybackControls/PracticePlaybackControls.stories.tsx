import type { Meta, StoryObj } from '@storybook/react-vite'
import { PracticePlaybackControls } from '.'
const meta = {
  title: 'Molecules/PracticePlaybackControls',
  component: PracticePlaybackControls,
  tags: ['visual-review'],
  args: {
    playing: false,
    playLabel: 'Tocar frase',
    onPlay: () => {},
    speed: '1x',
    speedOptions: ['0.75x', '1x', '1.25x'],
    onSpeedChange: () => {},
    translationVisible: false,
    onTranslationToggle: () => {},
  },
} satisfies Meta<typeof PracticePlaybackControls>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
export const Playing: Story = {
  args: { playing: true, playLabel: 'Pausar frase' },
}
export const WithSkip: Story = {
  args: {
    playLabel: 'Tocar trecho',
    skipAction: { label: 'Pular trecho', onClick: () => {} },
  },
}
export const Translation: Story = { args: { translationVisible: true } }
export const Speed: Story = { args: { speed: '0.75x' } }
export const Focused: Story = {
  play: ({ canvasElement }) => {
    canvasElement.querySelector('button')?.focus()
  },
}
