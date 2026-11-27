import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, expect, it, vi } from 'vitest'
import { DevToolkit } from '../../../stories/materials/DevFirstDay/DevToolkit'
import { devRecordings } from '../../../stories/materials/DevFirstDay/DevFirstDay.recordings'

const media = vi.hoisted(() => ({
  play: vi.fn(),
  playingId: undefined,
  paused: false,
  error: '',
}))
vi.mock('../../../stories/materials/shared/usePracticePlayback', () => ({
  usePracticePlayback: () => media,
}))
beforeEach(() => vi.clearAllMocks())

it('explores all six work situations and plays each existing word-plus-example recording', () => {
  render(<DevToolkit active />)
  const targets = [
    ['task', 'ACCOUNT.VS.0', 'My first task is to build the login screen'],
    ['access', 'VS.1', 'I need access to the repository'],
    ['blocker', 'VS.2', 'Missing access is a blocker'],
    ['deadline', 'VS.3', 'The deadline is Friday'],
    ['update', 'VS.4', 'Here is a quick update'],
    ['feedback', 'VS.5', 'Thanks for the feedback'],
  ] as const
  expect(screen.getAllByRole('img')).toHaveLength(1)
  for (const [word, recordingId, example] of targets) {
    fireEvent.click(screen.getByRole('button', { name: word }))
    expect(screen.getByRole('region', { name: word })).toBeVisible()
    expect(screen.getByText(example)).toBeVisible()
    const clip = devRecordings.find((item) => item.id === recordingId)!
    expect(media.play).toHaveBeenLastCalledWith(clip.id, clip.text)
  }
  expect(media.play).toHaveBeenCalledTimes(6)
  fireEvent.click(
    screen.getByRole('button', { name: 'Listen again: feedback' }),
  )
  expect(media.play).toHaveBeenCalledTimes(7)
  fireEvent.click(screen.getByRole('button', { name: 'Close: feedback' }))
  expect(screen.queryByRole('region', { name: 'feedback' })).toBeNull()
  expect(screen.getByRole('button', { name: 'feedback' })).toHaveTextContent(
    'feedback',
  )
})
