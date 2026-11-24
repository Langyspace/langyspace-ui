import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from '@testing-library/react'
import { renderToString } from 'react-dom/server'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ServerStyleSheet, ThemeProvider } from 'styled-components'
import { VoiceMessageExercise } from '../../../src/components/VoiceMessage/VoiceMessageExercise'
import type { VoiceMessageExerciseProps } from '../../../src/components/VoiceMessage/VoiceMessageExercise.types'
import { createTheme } from '../../../src/foundations/theme/createTheme'

const fixture: VoiceMessageExerciseProps = {
  contact: { name: 'Kim', status: 'online' },
  greeting: { text: 'Hi! 👋', timestamp: '19:40' },
  audio: {
    id: 'kim',
    src: '/kim.mp3',
    transcript: 'Hi! How are you? I’m tired and hungry, but I’m happy!',
    duration: 9,
    timestamp: '19:41',
  },
  questions: ['tired', 'hungry', 'angry'].map((id) => ({
    id,
    prompt: `Is Kim ${id}?`,
    choices: [
      { id: 'yes', label: 'Yes, she is.' },
      { id: 'no', label: 'No, she isn’t.' },
    ],
  })),
  onAnswer: () => undefined,
}
let play: ReturnType<typeof vi.spyOn>
let pause: ReturnType<typeof vi.spyOn>
beforeEach(() => {
  play = vi
    .spyOn(HTMLMediaElement.prototype, 'play')
    .mockImplementation(function (this: HTMLMediaElement) {
      fireEvent.playing(this)
      return Promise.resolve()
    })
  pause = vi
    .spyOn(HTMLMediaElement.prototype, 'pause')
    .mockImplementation(function (this: HTMLMediaElement) {
      fireEvent.pause(this)
    })
  vi.spyOn(HTMLMediaElement.prototype, 'load').mockImplementation(
    () => undefined,
  )
})
afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
})
const media = (container: HTMLElement) => container.querySelector('audio')!
const start = async () => {
  await act(async () => {
    fireEvent.click(
      screen.getByRole('button', { name: /Ouvir áudio|Ouvir novamente/ }),
    )
  })
}

describe('VoiceMessageExercise', () => {
  it('renders three named question groups and delegates stable ids without grading', () => {
    const onAnswer = vi.fn()
    const { container } = render(
      <VoiceMessageExercise
        {...fixture}
        onAnswer={onAnswer}
        data-testid="exercise"
      />,
    )
    expect(screen.getAllByRole('group').length).toBe(4)
    fireEvent.click(
      within(
        screen.getByRole('group', { name: '2. Is Kim hungry?' }),
      ).getByRole('button', { name: 'No, she isn’t.' }),
    )
    expect(onAnswer).toHaveBeenCalledWith('hungry', 'no')
    expect(screen.queryByText(fixture.audio.transcript)).not.toBeInTheDocument()
    expect(screen.getByTestId('exercise')).toBe(
      container.querySelector('[data-listens]'),
    )
  })

  it('reveals only on a second successful pass; pause/resume and buffering do not increment', async () => {
    const { container } = render(
      <VoiceMessageExercise {...fixture} transcriptReveal="second-listen" />,
    )
    const audio = media(container)
    await start()
    expect(container.querySelector('[data-listens]')).toHaveAttribute(
      'data-listens',
      '1',
    )
    fireEvent.waiting(audio)
    fireEvent.playing(audio)
    fireEvent.click(screen.getByRole('button', { name: 'Pausar áudio' }))
    await start()
    expect(container.querySelector('[data-listens]')).toHaveAttribute(
      'data-listens',
      '1',
    )
    expect(screen.queryByText(fixture.audio.transcript)).not.toBeInTheDocument()
    fireEvent.ended(audio)
    await start()
    expect(
      screen.getByRole('region', { name: 'Transcrição' }),
    ).toHaveTextContent(fixture.audio.transcript)
    expect(container.querySelector('[data-listens]')).toHaveAttribute(
      'data-listens',
      '2',
    )
  })

  it('shows a retryable failure, retains answers and counts no failed starts', async () => {
    play.mockRejectedValueOnce(new Error('blocked'))
    const { container } = render(
      <VoiceMessageExercise
        {...fixture}
        questions={fixture.questions.map((question) => ({
          ...question,
          value: 'yes',
        }))}
      />,
    )
    await start()
    expect(screen.getByRole('alert')).toHaveTextContent(
      'Não foi possível reproduzir',
    )
    expect(container.querySelector('[data-listens]')).toHaveAttribute(
      'data-listens',
      '0',
    )
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Tentar novamente' }))
    })
    expect(media(container).load).toHaveBeenCalled()
    expect(container.querySelector('[data-listens]')).toHaveAttribute(
      'data-listens',
      '1',
    )
    expect(
      screen.getAllByRole('button', { name: 'Yes, she is.', pressed: true }),
    ).toHaveLength(3)
    expect(screen.getByRole('button', { name: 'Pausar áudio' })).toHaveFocus()
  })

  it('can cancel an outstanding request without treating its rejection as a media error', async () => {
    let reject!: (error: Error) => void
    play.mockImplementationOnce(
      () =>
        new Promise<void>((_resolve, rejectPromise) => {
          reject = rejectPromise
        }),
    )
    const { container } = render(<VoiceMessageExercise {...fixture} />)
    await start()
    fireEvent.click(screen.getByRole('button', { name: 'Pausar áudio' }))
    await act(async () => {
      reject(new Error('AbortError'))
    })
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(container.querySelector('[data-listens]')).toHaveAttribute(
      'data-listens',
      '0',
    )
  })

  it('changes real playback speed and reads native duration and progress', async () => {
    const { container } = render(<VoiceMessageExercise {...fixture} />)
    const audio = media(container)
    Object.defineProperty(audio, 'duration', { configurable: true, value: 12 })
    fireEvent.loadedMetadata(audio)
    fireEvent.click(screen.getByRole('button', { name: 'Velocidade: 1x' }))
    expect(audio.playbackRate).toBe(0.75)
    await start()
    expect(audio.playbackRate).toBe(0.75)
    audio.currentTime = 4
    fireEvent.timeUpdate(audio)
    expect(screen.getByText('0:04 / 0:12')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Velocidade: 0.75x' }))
    expect(audio.playbackRate).toBe(1)
  })

  it('pauses when inactive, retains the listen count and lets a returning slide resume', async () => {
    const { container, rerender } = render(
      <VoiceMessageExercise {...fixture} />,
    )
    await start()
    rerender(<VoiceMessageExercise {...fixture} active={false} />)
    expect(pause).toHaveBeenCalled()
    expect(screen.getByRole('button', { name: 'Ouvir áudio' })).toBeDisabled()
    rerender(<VoiceMessageExercise {...fixture} active />)
    await start()
    expect(container.querySelector('[data-listens]')).toHaveAttribute(
      'data-listens',
      '1',
    )
  })

  it('resets for changed media identity/source, ignoring a stale rejected promise', async () => {
    let reject!: (error: Error) => void
    play.mockImplementationOnce(
      () =>
        new Promise<void>((_resolve, rejectPromise) => {
          reject = rejectPromise
        }),
    )
    const { container, rerender } = render(
      <VoiceMessageExercise {...fixture} />,
    )
    await start()
    const oldAudio = media(container)
    rerender(
      <VoiceMessageExercise
        {...fixture}
        audio={{ ...fixture.audio, id: 'other', src: '/other.mp3' }}
      />,
    )
    await act(async () => {
      reject(new Error('old request'))
    })
    expect(media(container)).not.toBe(oldAudio)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(container.querySelector('[data-listens]')).toHaveAttribute(
      'data-listens',
      '0',
    )
    await start()
    expect(container.querySelector('[data-listens]')).toHaveAttribute(
      'data-listens',
      '1',
    )
  })

  it('pauses on unmount and ignores a late promise rejection', async () => {
    let reject!: (error: Error) => void
    play.mockImplementationOnce(
      () =>
        new Promise<void>((_resolve, rejectPromise) => {
          reject = rejectPromise
        }),
    )
    const { unmount } = render(<VoiceMessageExercise {...fixture} />)
    await start()
    unmount()
    await act(async () => {
      reject(new Error('late'))
    })
    expect(pause).toHaveBeenCalled()
  })

  it('disables missing recordings and only exposes a reply control when an action is supplied', () => {
    const onReply = vi.fn()
    const { rerender } = render(
      <VoiceMessageExercise
        {...fixture}
        audio={{ ...fixture.audio, src: undefined }}
      />,
    )
    expect(screen.getByRole('button', { name: 'Ouvir áudio' })).toBeDisabled()
    expect(screen.getByText('Áudio ainda não disponível.')).toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: 'Responder' }),
    ).not.toBeInTheDocument()
    rerender(
      <VoiceMessageExercise
        {...fixture}
        replyAction={{ label: 'Responder', onClick: onReply }}
      />,
    )
    fireEvent.click(screen.getByRole('button', { name: 'Responder' }))
    expect(onReply).toHaveBeenCalledOnce()
  })

  it('renders supplied feedback and respects disabled questions', () => {
    const onAnswer = vi.fn()
    render(
      <VoiceMessageExercise
        {...fixture}
        onAnswer={onAnswer}
        questions={[
          {
            ...fixture.questions[0]!,
            disabled: true,
            value: 'yes',
            choices: [
              { id: 'yes', label: 'Yes', feedback: 'correct' },
              { id: 'no', label: 'No', feedback: 'incorrect' },
            ],
          },
        ]}
      />,
    )
    expect(screen.getByRole('button', { name: 'Yes — Correta' })).toBeDisabled()
    expect(
      screen.getByRole('button', { name: 'No — Incorreta' }),
    ).toBeDisabled()
    fireEvent.click(screen.getByRole('button', { name: 'No — Incorreta' }))
    expect(onAnswer).not.toHaveBeenCalled()
  })

  it('reports native media errors and permits a retry without incrementing listens', async () => {
    const { container } = render(<VoiceMessageExercise {...fixture} />)
    fireEvent.error(media(container))
    expect(screen.getByRole('alert')).toBeInTheDocument()
    expect(container.querySelector('[data-listens]')).toHaveAttribute(
      'data-listens',
      '0',
    )
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Tentar novamente' }))
    })
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('renders SSR with a theme override and keeps the transcript out of the initial markup', () => {
    const sheet = new ServerStyleSheet()
    try {
      const html = renderToString(
        sheet.collectStyles(
          <ThemeProvider
            theme={createTheme({ voiceMessage: { canvas: '#123456' } })}
          >
            <VoiceMessageExercise {...fixture} />
          </ThemeProvider>,
        ),
      )
      expect(html).toContain('lsui-sc-voice-message-exercise')
      expect(html).not.toContain(fixture.audio.transcript)
      expect(sheet.getStyleTags()).toContain('#123456')
    } finally {
      sheet.seal()
    }
  })
})

it('offers an optional replay after a complete first pass and removes it on the second native pass', async () => {
  const { container } = render(
    <VoiceMessageExercise
      {...fixture}
      transcriptReveal="second-listen"
      replayActionLabel="Listen again and check"
    />,
  )
  expect(
    screen.getByRole('button', { name: 'Listen again and check' }),
  ).toBeDisabled()
  await start()
  fireEvent.pause(media(container))
  expect(
    screen.getByRole('button', { name: 'Listen again and check' }),
  ).toBeDisabled()
  fireEvent.ended(media(container))
  expect(
    screen.getByRole('button', { name: 'Listen again and check' }),
  ).toBeEnabled()
  await act(async () => {
    fireEvent.click(
      screen.getByRole('button', { name: 'Listen again and check' }),
    )
  })
  expect(
    screen.queryByRole('button', { name: 'Listen again and check' }),
  ).not.toBeInTheDocument()
  expect(screen.getByText(fixture.audio.transcript)).toBeVisible()
})

it('pauses when the document is hidden and resumes the same listening pass only on user action', async () => {
  const { container } = render(<VoiceMessageExercise {...fixture} />)
  await start()
  const calls = play.mock.calls.length
  const visibility = vi.spyOn(document, 'hidden', 'get').mockReturnValue(true)
  fireEvent(document, new Event('visibilitychange'))
  expect(pause).toHaveBeenCalled()
  expect(container.querySelector('[data-playback]')).toHaveAttribute(
    'data-playback',
    'paused',
  )
  visibility.mockReturnValue(false)
  fireEvent(document, new Event('visibilitychange'))
  expect(play).toHaveBeenCalledTimes(calls)
  await start()
  expect(container.querySelector('[data-listens]')).toHaveAttribute(
    'data-listens',
    '1',
  )
})

describe('consumer-enabled manual transcript', () => {
  it('keeps four answers before replay, unlocks Show/Hide on successful replay, and pauses on departure', async () => {
    const onAnswer = vi.fn()
    const questions = Array.from({ length: 4 }, (_, i) => ({
      id: String(i),
      prompt: `Statement ${i + 1}`,
      choices: [
        { id: 'yes', label: 'Yes' },
        { id: 'no', label: 'No' },
      ],
    }))
    const props = {
      ...fixture,
      questions,
      onAnswer,
      transcriptReveal: 'manual-after-replay' as const,
      questionHeading: 'Four statements',
    }
    const { container, rerender } = render(<VoiceMessageExercise {...props} />)
    for (const question of screen.getAllByRole('group', { name: /Statement/ }))
      fireEvent.click(within(question).getByRole('button', { name: 'Yes' }))
    expect(screen.getByText('Four statements')).toBeVisible()
    expect(onAnswer).toHaveBeenCalledTimes(4)
    await start()
    fireEvent.ended(media(container))
    expect(
      screen.queryByRole('button', { name: 'Listen again and check' }),
    ).not.toBeInTheDocument()
    rerender(
      <VoiceMessageExercise
        {...props}
        questions={questions.map((q) => ({
          ...q,
          disabled: true,
          value: 'yes',
        }))}
        replayActionLabel="Listen again and check"
      />,
    )
    await act(async () =>
      fireEvent.click(
        screen.getByRole('button', { name: 'Listen again and check' }),
      ),
    )
    expect(container.querySelector('[data-listens]')).toHaveAttribute(
      'data-listens',
      '2',
    )
    expect(screen.queryByText(fixture.audio.transcript)).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Mostrar transcrição' }))
    expect(
      screen.getByRole('region', { name: 'Transcrição' }),
    ).toHaveTextContent(fixture.audio.transcript)
    fireEvent.click(
      screen.getByRole('button', { name: 'Esconder transcrição' }),
    )
    expect(screen.queryByText(fixture.audio.transcript)).not.toBeInTheDocument()
    rerender(
      <VoiceMessageExercise
        {...props}
        active={false}
        replayActionLabel="Listen again and check"
      />,
    )
    expect(pause).toHaveBeenCalled()
    expect(screen.getByRole('button', { name: 'Ouvir áudio' })).toBeDisabled()
  })
})
