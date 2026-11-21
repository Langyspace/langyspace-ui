import { SceneExplorer } from '../../../src/components/InteractiveMaterial/SceneExplorer'
import { parkScene } from '../../materials/TrialA1/TrialA1.data'
import { A103Lesson } from '../../materials/A103/A103Lesson'
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
export const Expanded: Story = { args: { width: 'expanded' } }
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
export const SplitIntroduction: Story = {
  args: {
    layout: 'split',
    lead: (
      <div>
        <h1>What have you been doing?</h1>
        <p>Goal: Contar o que você tem feito ultimamente.</p>
      </div>
    ),
    eyebrow: 'Review',
    title: 'Last class',
    instruction: 'Answer your teacher. Then ask your teacher.',
    children: <Panel>Would you like to come to dinner on Friday?</Panel>,
  },
}

export const RecordedDialogue: Story = {
  args: {
    title: 'At the street market',
    eyebrow: 'Guided conversation',
    instruction: 'Listen, then read with your teacher.',
    titleAudio: {
      context: 'Kim and Ana',
      status: 'idle',
      onClick: () => undefined,
    },
  },
}
export const PausedDialogue: Story = {
  ...RecordedDialogue,
  args: {
    ...RecordedDialogue.args,
    titleAudio: {
      context: 'Kim and Ana',
      status: 'paused',
      onClick: () => undefined,
    },
  },
}
export const UnavailableDialogue: Story = {
  ...RecordedDialogue,
  args: {
    ...RecordedDialogue.args,
    titleAudio: {
      context: 'Kim and Ana',
      status: 'idle',
      disabled: true,
      onClick: () => undefined,
    },
  },
}

/** Real six-turn content and functional click-to-reveal supports, without inner scrollbars. */
export const DialogueWithQuestions: Story = {
  render: () => <A103Lesson initialPageId="s71" />,
  args: {
    title: 'Who’s this?',
    eyebrow: 'Guided conversation',
    instruction: 'Listen, then read with your teacher.',
  },
  tags: ['visual-review', 'layout-boundary'],
}

export const MediaColumn: Story = {
  args: {
    eyebrow: 'Picture talk',
    title: 'What can you name in the park?',
    instruction:
      'Try to name every item before opening the dots. Click each dot to check your answer.',
    width: { mediaAspectRatio: parkScene.width / parkScene.height },
    children: (
      <SceneExplorer
        imageUrl={parkScene.src}
        imageAlt="A park scene"
        imageSizing="presentation"
        hotspots={[]}
        visitedIds={[]}
        onSelect={() => {}}
        labels={{ initial: '' }}
      />
    ),
  },
  tags: ['visual-review', 'layout-boundary'],
}
export const MediaColumnNarrow: Story = {
  ...MediaColumn,
  globals: { viewport: { value: 'mobile1', isRotated: false } },
}
