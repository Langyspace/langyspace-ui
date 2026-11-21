import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { VoiceMessageExercise } from '../../../src/components/VoiceMessage/VoiceMessageExercise'
import type { VoiceMessageExerciseProps } from '../../../src/components/VoiceMessage/VoiceMessageExercise.types'

const props: VoiceMessageExerciseProps = {
  contact: { name: 'Ana' },
  greeting: { text: 'One greeting', timestamp: '09:40' },
  audio: {
    id: 'one',
    src: '/one.mp3',
    transcript: 'First transcript',
    timestamp: '09:41',
  },
  additionalAudios: [
    {
      id: 'two',
      src: '/two.mp3',
      transcript: 'Second transcript',
      timestamp: '09:42',
    },
  ],
  questions: [],
  onAnswer: () => undefined,
  labels: {
    play: 'Play',
    pause: 'Pause',
    replay: 'Replay',
    transcript: 'Transcript',
    audioError: 'Audio error',
    retry: 'Retry',
  },
}
beforeEach(() => {
  vi.spyOn(HTMLMediaElement.prototype, 'play').mockImplementation(function (
    this: HTMLMediaElement,
  ) {
    fireEvent.play(this)
    fireEvent.playing(this)
    return Promise.resolve()
  })
  vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(function (
    this: HTMLMediaElement,
  ) {
    fireEvent.pause(this)
  })
  vi.spyOn(HTMLMediaElement.prototype, 'load').mockImplementation(
    () => undefined,
  )
})
afterEach(() => vi.restoreAllMocks())
async function click(name: string) {
  await act(async () => {
    fireEvent.click(screen.getByRole('button', { name }))
  })
}

it('shares one chat and greeting, pauses the previous recording and counts each completed listen independently', async () => {
  const { container, rerender } = render(<VoiceMessageExercise {...props} />)
  expect(
    container.querySelectorAll('[data-device-frame="message-phone"]'),
  ).toHaveLength(1)
  expect(screen.getAllByText('One greeting')).toHaveLength(1)
  expect(screen.getAllByRole('region', { name: 'Conversa: Ana' })).toHaveLength(
    1,
  )
  const [first, second] = Array.from(container.querySelectorAll('audio'))
  expect(first).toHaveAttribute('src', '/one.mp3')
  expect(second).toHaveAttribute('src', '/two.mp3')
  await click('Play (1/2)')
  await click('Play (2/2)')
  expect(screen.getByRole('button', { name: 'Play (1/2)' })).toBeVisible()
  expect(screen.getByRole('button', { name: 'Pause (2/2)' })).toBeVisible()
  expect(container.querySelector('[data-audio-id="one"]')).toHaveAttribute(
    'data-listens',
    '1',
  )
  expect(container.querySelector('[data-audio-id="two"]')).toHaveAttribute(
    'data-listens',
    '1',
  )
  fireEvent.ended(second!)
  for (let pass = 2; pass <= 3; pass++) {
    await click('Replay (2/2)')
    fireEvent.ended(second!)
  }
  expect(screen.getByText('Second transcript')).toBeVisible()
  expect(screen.queryByText('First transcript')).not.toBeInTheDocument()
  await click('Play (1/2)')
  expect(container.querySelector('[data-audio-id="one"]')).toHaveAttribute(
    'data-listens',
    '1',
  )
  rerender(<VoiceMessageExercise {...props} active={false} />)
  expect(screen.getByRole('button', { name: 'Play (1/2)' })).toBeDisabled()
  expect(
    screen.getByRole('button', { name: /^(Play|Replay) \(2\/2\)$/ }),
  ).toBeDisabled()
})

it('keeps single-message controls and explicit second-listen reveal compatible', async () => {
  const { container } = render(
    <VoiceMessageExercise
      {...props}
      additionalAudios={undefined}
      transcriptReveal="second-listen"
    />,
  )
  expect(container.querySelectorAll('audio')).toHaveLength(1)
  await click('Play')
  fireEvent.ended(container.querySelector('audio')!)
  expect(screen.queryByText('First transcript')).not.toBeInTheDocument()
  await click('Replay')
  expect(screen.getByText('First transcript')).toBeVisible()
})

it('preserves primary manual replay and its transcript toggle', async () => {
  const { container } = render(
    <VoiceMessageExercise
      {...props}
      additionalAudios={undefined}
      transcriptReveal="manual-after-replay"
      replayActionLabel="Replay and check"
    />,
  )
  await click('Play')
  fireEvent.ended(container.querySelector('audio')!)
  await click('Replay and check')
  expect(screen.queryByText('First transcript')).not.toBeInTheDocument()
  await click('Mostrar transcrição')
  expect(screen.getByText('First transcript')).toBeVisible()
  await click('Esconder transcrição')
  expect(screen.queryByText('First transcript')).not.toBeInTheDocument()
})

it('cancels a pending recording when another starts without reporting a stale rejection', async () => {
  let rejectFirst!: (reason: unknown) => void
  vi.mocked(HTMLMediaElement.prototype.play).mockImplementationOnce(function (
    this: HTMLMediaElement,
  ) {
    fireEvent.play(this)
    return new Promise((_, reject) => {
      rejectFirst = reject
    })
  })
  render(<VoiceMessageExercise {...props} />)
  fireEvent.click(screen.getByRole('button', { name: 'Play (1/2)' }))
  await click('Play (2/2)')
  await act(async () => rejectFirst(new Error('cancelled')))
  expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Play (1/2)' })).toBeVisible()
})

it('resets only a changed additional source and keeps primary history', async () => {
  const { container, rerender } = render(<VoiceMessageExercise {...props} />)
  await click('Play (1/2)')
  fireEvent.ended(container.querySelectorAll('audio')[0]!)
  await click('Play (2/2)')
  rerender(
    <VoiceMessageExercise
      {...props}
      additionalAudios={[
        { ...props.additionalAudios![0]!, src: '/updated.mp3' },
      ]}
    />,
  )
  expect(container.querySelector('[data-audio-id="one"]')).toHaveAttribute(
    'data-listens',
    '1',
  )
  expect(container.querySelector('[data-audio-id="two"]')).toHaveAttribute(
    'data-listens',
    '0',
  )
})
