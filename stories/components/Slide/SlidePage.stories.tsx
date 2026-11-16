import type { Meta, StoryObj } from '@storybook/react-vite'
import { ThemeProvider } from 'styled-components'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { createTheme } from '../../../src/foundations/theme/createTheme'
import { Panel, Stage } from './Slide.stories.styles'

const meta = {
  component: SlidePage,
  title: 'Slide/SlidePage',
  parameters: { layout: 'fullscreen' },
  args: {
    eyebrow: 'Listening',
    title: 'Listening Practice',
    instruction: 'Ouça o áudio da Kim e responda.',
    children: <Panel>Conteúdo do exercício</Panel>,
  },
  decorators: [
    (Story) => (
      <Stage>
        <Story />
      </Stage>
    ),
  ],
} satisfies Meta<typeof SlidePage>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { tags: ['visual-review'] }
export const Focused: Story = { args: { width: 'focused' } }
export const Reading: Story = { args: { width: 'reading', density: 'compact' } }
export const WithIntroduction: Story = {
  args: {
    lead: (
      <div>
        <h1>Introduce yourself</h1>
        <p>Dizer o seu nome, de onde você é e como você está.</p>
      </div>
    ),
    eyebrow: 'Vocabulary',
    title: 'Guess the word',
    instruction: 'Observe a imagem e tente adivinhar a palavra.',
    width: 'standard',
  },
}
export const Inverse: Story = {
  args: {
    tone: 'inverse',
    children: <p>Dizer o seu nome, de onde você é e como você está.</p>,
  },
  tags: ['visual-review'],
}
export const LongHeading: Story = {
  args: {
    title: 'True for you? If not, say it in the negative',
    instruction:
      'Leia a frase. Se não for verdade para você, diga na negativa.',
    width: 'focused',
  },
  tags: ['layout-boundary', 'visual-review'],
}
export const ThemeOverride: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider
        theme={createTheme({
          slides: {
            canvas: '#171717',
            foreground: '#F7F7F7',
            muted: '#A3A3A3',
            accent: '#FF7A9E',
          },
        })}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
  args: { children: <p>How are you?</p> },
  tags: ['visual-review'],
}
