import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { ThemeProvider } from 'styled-components'
import { VoiceMessageExercise } from '../../../src/components/VoiceMessage/VoiceMessageExercise'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { createTheme } from '../../../src/foundations/theme/createTheme'
import { materialDarkTheme } from '../../../src/foundations/theme/materialDarkTheme'
import { initial, questions } from './VoiceMessage.fixtures'
import { VoiceMessageDemo, VoiceMessageDeck } from './VoiceMessageDemo'
import { Stage, Caption, Narrow } from './VoiceMessage.stories.styles'

const meta = {
  component: VoiceMessageExercise,
  title: 'VoiceMessage/VoiceMessageExercise',
  args: initial,
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <Stage>
        <Caption>Exercício de mensagens de áudio</Caption>
        <Story />
      </Stage>
    ),
  ],
} satisfies Meta<typeof VoiceMessageExercise>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <SlidePage
      width="standard"
      title="Listening Practice"
      instruction="Ouça o áudio da Kim e responda."
    >
      <VoiceMessageDemo {...args} />
    </SlidePage>
  ),
  tags: ['visual-review'],
}
export const InSlideDeck: Story = {
  render: () => <VoiceMessageDeck />,
  tags: ['visual-review'],
}
export const Standalone: Story = {
  render: (args) => <VoiceMessageDemo {...args} />,
}
export const BalancedTopAligned: Story = {
  ...Default,
  args: { layout: 'balanced', columnAlignment: 'start' },
  tags: ['layout-boundary', 'visual-review'],
}
export const LightPhoneInDarkMaterial: Story = {
  args: { contact: { name: 'Leo', status: 'online' } },
  decorators: [
    (Story) => (
      <ThemeProvider theme={materialDarkTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ['visual-review'],
}
export const NarrowContainer: Story = {
  render: (args) => (
    <Narrow>
      <VoiceMessageDemo {...args} />
    </Narrow>
  ),
  tags: ['layout-boundary', 'visual-review'],
}
export const AutomaticThirdListen: Story = {
  args: { transcriptReveal: 'third-listen' },
  tags: ['visual-review'],
}
export const ManualTranscriptBeforePlayback: Story = {
  args: { transcriptReveal: 'third-listen' },
  tags: ['visual-review'],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(
      canvas.getByRole('button', { name: 'Mostrar transcrição' }),
    ).toHaveTextContent('Transcrição')
    await userEvent.click(
      canvas.getByRole('button', { name: 'Mostrar transcrição' }),
    )
    await expect(
      canvas.getByRole('button', { name: 'Esconder transcrição' }),
    ).toHaveAttribute('aria-pressed', 'true')
    await expect(
      canvas.getByRole('button', { name: 'Esconder transcrição' }),
    ).toHaveTextContent(initial.audio.transcript)
    await expect(
      canvas.getByRole('region', { name: 'Transcrição' }),
    ).toHaveTextContent(initial.audio.transcript)
    await expect(canvasElement.querySelector('[data-listens]')).toHaveAttribute(
      'data-listens',
      '0',
    )
  },
}
export const AutomaticOnly: Story = {
  args: { transcriptReveal: 'third-listen', transcriptToggle: false },
}
export const Inactive: Story = { args: { active: false } }
export const MissingRecording: Story = {
  args: { audio: { ...initial.audio, src: undefined } },
  tags: ['visual-review'],
}
export const ErrorAndRetry: Story = {
  args: { audio: { ...initial.audio, src: '/missing-voice-message.mp3' } },
  tags: ['visual-review'],
}
export const AnswerFeedback: Story = {
  args: {
    questions: questions.map((question, index) => ({
      ...question,
      value: 'yes',
      choices: question.choices.map((choice, choiceIndex) => ({
        ...choice,
        feedback:
          choiceIndex === 0
            ? index === 2
              ? ('incorrect' as const)
              : ('correct' as const)
            : undefined,
      })),
    })),
  },
  tags: ['visual-review'],
}
export const LongContent: Story = {
  args: {
    contact: {
      name: 'Kim com um nome de contato mais comprido',
      status: 'online',
    },
    greeting: {
      text: 'Hi! How are you today? I’m really happy to hear from you.',
      timestamp: '19:40',
    },
    audio: {
      ...initial.audio,
      transcript: initial.audio.transcript.repeat(12),
    },
    questions: questions.map((question) => ({
      ...question,
      prompt: `${question.prompt} Listen again and explain your answer to your teacher.`,
    })),
  },
  tags: ['layout-boundary', 'visual-review'],
}
export const ThemeOverride: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider
        theme={createTheme({
          voiceMessage: {
            canvas: '#1B1A18',
            surface: '#171717',
            controlSurface: '#2A2A2A',
            foreground: '#F7F7F7',
            muted: '#A3A3A3',
            border: '#555555',
            frame: '#111111',
            accent: '#FF7A9E',
            onAccent: '#111111',
            success: '#86EFAC',
            successSurface: '#0F2E22',
            danger: '#FCA5A5',
            dangerSurface: '#3A0F1C',
          },
        })}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ['visual-review'],
}
export const PlaybackAndTranscript: Story = {
  args: { transcriptReveal: 'second-listen' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const audio = canvasElement.querySelector('audio')!
    // Keep the native audio fixture muted during automated story playback.
    // Real trusted clicks and audible playback are exercised by capture-voice-message.mjs.
    audio.muted = true
    await waitFor(() => expect(audio.readyState).toBeGreaterThanOrEqual(2), {
      timeout: 10000,
    })
    await userEvent.click(canvas.getByRole('button', { name: 'Ouvir áudio' }))
    await waitFor(
      () =>
        expect(canvasElement.querySelector('[data-listens]')).toHaveAttribute(
          'data-listens',
          '1',
        ),
      { timeout: 10000 },
    )
    await userEvent.click(canvas.getByRole('button', { name: 'Pausar áudio' }))
    await userEvent.click(canvas.getByRole('button', { name: 'Ouvir áudio' }))
    await waitFor(
      () =>
        expect(canvasElement.querySelector('[data-playback]')).toHaveAttribute(
          'data-playback',
          'playing',
        ),
      { timeout: 10000 },
    )
    await expect(canvasElement.querySelector('[data-listens]')).toHaveAttribute(
      'data-listens',
      '1',
    )
    audio.currentTime = audio.duration - 0.05
    await waitFor(
      () =>
        expect(canvasElement.querySelector('[data-playback]')).toHaveAttribute(
          'data-playback',
          'ended',
        ),
      { timeout: 10000 },
    )
    await userEvent.click(
      canvas.getByRole('button', { name: 'Ouvir novamente' }),
    )
    await waitFor(() =>
      expect(canvasElement.querySelector('[data-listens]')).toHaveAttribute(
        'data-listens',
        '2',
      ),
    )
    await expect(
      canvas.getByRole('region', { name: 'Transcrição' }),
    ).toHaveTextContent(initial.audio.transcript)
    await userEvent.click(canvas.getByRole('button', { name: 'Pausar áudio' }))
  },
}

export const FollowUpReplay: Story = {
  args: {
    transcriptReveal: 'second-listen',
    replayActionLabel: 'Listen again and check',
  },
}

export const ManualTranscriptAfterReplay: Story = {
  args: {
    transcriptReveal: 'manual-after-replay',
    replayActionLabel: 'Listen again and check',
  },
  tags: ['visual-review'],
}

export const ContextBeforeVoiceNote: Story = {
  args: {
    greeting: { text: 'Hi! Here’s a quick update.', timestamp: '19:40' },
  },
  tags: ['visual-review', 'layout-boundary'],
}

export const TwoMessages: Story = {
  args: {
    additionalAudios: [
      { ...initial.audio, id: 'second-message', timestamp: '19:42' },
    ],
  },
  render: (args) => <VoiceMessageDemo {...args} />,
  tags: ['visual-review'],
}
export const TwoMessagesInactive: Story = {
  ...TwoMessages,
  args: { ...TwoMessages.args, active: false },
}

export const SharedVideo: Story = {
  args: {
    greeting: {
      text: 'This clip gave me another idea for making plans',
      timestamp: '19:40',
    },
    videoAttachment: {
      title: 'Making plans',
      sourceLabel: 'YouTube',
      timestamp: '19:40',
      onOpen: () => undefined,
    },
  },
  tags: ['visual-review'],
}
export const SharedVideoInactive: Story = {
  ...SharedVideo,
  args: { ...SharedVideo.args, active: false },
}
