import type { Meta, StoryObj } from '@storybook/react-vite'
import { ShadowingSession } from '../../../src/components/Shadowing/ShadowingSession'
import { ShadowingWord } from '../../../src/components/Shadowing/ShadowingWord'
const meta = {
  title: 'Shadowing/ShadowingSession',
  component: ShadowingSession,
  tags: ['visual-review'],
  args: {
    name: 'A day in my life',
    counter: 'Frase 1/3',
    progress: 1 / 3,
    backAction: { label: 'Voltar', onClick: () => {} },
    phrase: (
      <>
        <ShadowingWord state="current">I</ShadowingWord>{' '}
        <ShadowingWord>wake up early</ShadowingWord>
      </>
    ),
    previous: '',
    next: 'Then I have breakfast',
    translation: 'Eu acordo cedo',
    repetitions: { total: 3, value: 1, label: '1/3 escutas' },
    controls: {
      playing: false,
      playLabel: 'Tocar frase',
      onPlay: () => {},
      speed: '1x',
      speedOptions: ['0.75x', '1x'],
      onSpeedChange: () => {},
      translationVisible: true,
      onTranslationToggle: () => {},
    },
  },
} satisfies Meta<typeof ShadowingSession>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
export const WithSpeaker: Story = {
  args: { speaker: { name: 'Ana', accentLabel: 'American' } },
}
export const Playing: Story = {
  args: {
    controls: {
      ...meta.args.controls,
      playing: true,
      playLabel: 'Pausar frase',
    },
  },
}
export const Complete: Story = {
  args: { phrase: undefined, children: <h2>Lição concluída</h2> },
}
