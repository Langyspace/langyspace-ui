import { act, fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { VoiceMessageExercise } from '../../../src/components/VoiceMessage/VoiceMessageExercise'
import type { VoiceMessageExerciseProps } from '../../../src/components/VoiceMessage/VoiceMessageExercise.types'
import * as feedback from '../../../src/internal/feedbackSounds'
import { voiceMessageTranscriptLabels } from '../../../stories/materials/shared/voiceMessageLabels'

const fixture: VoiceMessageExerciseProps = {
  contact: { name: 'Kim' },
  audio: {
    id: 'first',
    src: '/first.mp3',
    transcript: 'The first recording.',
    timestamp: '09:41',
  },
  questions: [],
  onAnswer: () => undefined,
  labels: {
    ...voiceMessageTranscriptLabels,
    play: 'Play',
    pause: 'Pause',
    replay: 'Replay',
    transcript: 'Transcript',
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
  vi.spyOn(feedback, 'playFeedbackSound').mockImplementation(() => undefined)
})
afterEach(() => vi.restoreAllMocks())

async function start(name: string) {
  await act(async () => {
    fireEvent.click(screen.getByRole('button', { name }))
  })
}

it('shows a single named keyboard-operable toggle before any playback without playing or counting', async () => {
  const user = userEvent.setup()
  const { container } = render(<VoiceMessageExercise {...fixture} />)
  const toggle = screen.getByRole('button', { name: 'Show transcript' })
  expect(toggle).toHaveTextContent(/^Transcript$/)
  expect(toggle).toHaveAttribute('aria-pressed', 'false')
  expect(toggle).toHaveAttribute('aria-expanded', 'false')
  expect(screen.queryByText(fixture.audio.transcript)).not.toBeInTheDocument()
  toggle.focus()
  await user.keyboard('{Enter}')
  expect(screen.getByRole('region', { name: 'Transcript' })).toHaveAttribute(
    'id',
    toggle.getAttribute('aria-controls'),
  )
  expect(
    screen.getByRole('button', { name: 'Hide transcript', pressed: true }),
  ).toHaveFocus()
  expect(screen.getByText(fixture.audio.transcript)).toBeVisible()
  expect(toggle).toHaveTextContent(fixture.audio.transcript)
  expect(toggle).toHaveAccessibleDescription(fixture.audio.transcript)
  expect(feedback.playFeedbackSound).toHaveBeenCalledWith('hint')
  await user.keyboard(' ')
  expect(toggle).toHaveTextContent(/^Transcript$/)
  expect(
    screen.getByRole('button', { name: 'Show transcript', pressed: false }),
  ).toHaveFocus()
  expect(screen.queryByText(fixture.audio.transcript)).not.toBeInTheDocument()
  expect(container.querySelector('[data-listens]')).toHaveAttribute(
    'data-listens',
    '0',
  )
  expect(HTMLMediaElement.prototype.play).not.toHaveBeenCalled()
})

it('replaces the label with the transcript and closes when the transcript text is clicked', () => {
  render(<VoiceMessageExercise {...fixture} />)
  const toggle = screen.getByRole('button', { name: 'Show transcript' })
  fireEvent.click(toggle)
  expect(toggle).toHaveTextContent(fixture.audio.transcript)
  expect(toggle).not.toHaveTextContent(/^Transcript$/)
  fireEvent.click(screen.getByText(fixture.audio.transcript))
  expect(toggle).toHaveTextContent(/^Transcript$/)
  expect(screen.queryByText(fixture.audio.transcript)).not.toBeInTheDocument()
})

it('still reveals on the third successful pass after an early manual Show/Hide, and permits hiding afterwards', async () => {
  const { container } = render(<VoiceMessageExercise {...fixture} />)
  const audio = container.querySelector('audio')!
  fireEvent.click(screen.getByRole('button', { name: 'Show transcript' }))
  fireEvent.click(screen.getByRole('button', { name: 'Hide transcript' }))
  for (let pass = 1; pass <= 3; pass++) {
    await start(pass === 1 ? 'Play' : 'Replay')
    expect(
      screen.getByRole('button', {
        name: pass === 3 ? 'Hide transcript' : 'Show transcript',
      }),
    ).toHaveAttribute('aria-pressed', String(pass === 3))
    fireEvent.ended(audio)
  }
  expect(screen.getByText(fixture.audio.transcript)).toBeVisible()
  fireEvent.click(screen.getByRole('button', { name: 'Hide transcript' }))
  await start('Replay')
  expect(screen.queryByText(fixture.audio.transcript)).not.toBeInTheDocument()
  expect(
    screen.getByRole('button', { name: 'Show transcript', pressed: false }),
  ).toBeVisible()
})

it('keeps transcript overrides independent per recording and resets only a replaced additional source', () => {
  const second = {
    ...fixture.audio,
    id: 'second',
    src: '/second.mp3',
    transcript: 'The second recording.',
  }
  const { rerender } = render(
    <VoiceMessageExercise {...fixture} additionalAudios={[second]} />,
  )
  const primary = screen.getByRole('button', { name: 'Show transcript (1/2)' })
  const secondary = screen.getByRole('button', {
    name: 'Show transcript (2/2)',
  })
  expect(primary.getAttribute('aria-controls')).not.toBe(
    secondary.getAttribute('aria-controls'),
  )
  fireEvent.click(primary)
  expect(screen.queryByText(second.transcript)).not.toBeInTheDocument()
  fireEvent.click(secondary)
  expect(screen.getByText(second.transcript)).toBeVisible()
  rerender(
    <VoiceMessageExercise
      {...fixture}
      additionalAudios={[{ ...second, src: '/replacement.mp3' }]}
    />,
  )
  expect(screen.getByText(fixture.audio.transcript)).toBeVisible()
  expect(screen.queryByText(second.transcript)).not.toBeInTheDocument()
  expect(
    screen.getByRole('button', {
      name: 'Show transcript (2/2)',
      pressed: false,
    }),
  ).toBeVisible()
})

it('disables the toggle when inactive, retaining its choice on return and resetting primary identity', () => {
  const { rerender } = render(<VoiceMessageExercise {...fixture} />)
  fireEvent.click(screen.getByRole('button', { name: 'Show transcript' }))
  rerender(<VoiceMessageExercise {...fixture} active={false} />)
  expect(
    screen.getByRole('button', { name: 'Hide transcript', pressed: true }),
  ).toBeDisabled()
  rerender(<VoiceMessageExercise {...fixture} active />)
  expect(
    screen.getByRole('button', { name: 'Hide transcript', pressed: true }),
  ).toBeEnabled()
  rerender(
    <VoiceMessageExercise
      {...fixture}
      audio={{ ...fixture.audio, src: '/new.mp3' }}
    />,
  )
  expect(screen.queryByText(fixture.audio.transcript)).not.toBeInTheDocument()
  expect(
    screen.getByRole('button', { name: 'Show transcript', pressed: false }),
  ).toBeVisible()
})

it('allows access to supplied transcript even when the recording is unavailable', () => {
  render(
    <VoiceMessageExercise
      {...fixture}
      audio={{ ...fixture.audio, src: undefined }}
    />,
  )
  expect(screen.getByRole('button', { name: 'Play' })).toBeDisabled()
  fireEvent.click(screen.getByRole('button', { name: 'Show transcript' }))
  expect(screen.getByText(fixture.audio.transcript)).toBeVisible()
})

it('supports the explicit automatic-only variation without adding an external control', async () => {
  const { container } = render(
    <VoiceMessageExercise {...fixture} transcriptToggle={false} />,
  )
  expect(
    screen.queryByRole('button', { name: /transcript/ }),
  ).not.toBeInTheDocument()
  const audio = container.querySelector('audio')!
  for (let pass = 1; pass <= 3; pass++) {
    await start(pass === 1 ? 'Play' : 'Replay')
    fireEvent.ended(audio)
  }
  expect(
    within(screen.getByRole('region', { name: 'Transcript' })).getByText(
      fixture.audio.transcript,
    ),
  ).toBeVisible()
})
