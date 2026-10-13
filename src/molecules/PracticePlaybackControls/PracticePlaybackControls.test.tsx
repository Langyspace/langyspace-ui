import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { PracticePlaybackControls } from '.'
afterEach(cleanup)
it('delegates playback, optional skip, speed and translation without submitting the owner form', () => {
  const play = vi.fn(),
    skip = vi.fn(),
    speed = vi.fn(),
    translation = vi.fn(),
    submit = vi.fn()
  const props = {
    playing: false,
    playLabel: 'Tocar frase',
    onPlay: play,
    speed: '1x',
    speedOptions: ['0.75x', '1x'] as const,
    onSpeedChange: speed,
    translationVisible: false,
    onTranslationToggle: translation,
  }
  const { rerender } = render(
    <form onSubmit={submit}>
      <PracticePlaybackControls {...props} />
    </form>,
  )
  fireEvent.click(screen.getByRole('button', { name: 'Tocar frase' }))
  fireEvent.click(screen.getByRole('button', { name: '0.75x' }))
  fireEvent.click(screen.getByRole('button', { name: 'Tradução' }))
  expect(play).toHaveBeenCalledTimes(1)
  expect(speed).toHaveBeenCalledWith('0.75x')
  expect(translation).toHaveBeenCalledTimes(1)
  expect(submit).not.toHaveBeenCalled()
  expect(
    screen.getByRole('button', { name: '1x' }).getAttribute('aria-pressed'),
  ).toBe('true')
  rerender(
    <PracticePlaybackControls
      {...props}
      playing
      playLabel="Pausar trecho"
      skipAction={{ label: 'Pular trecho', onClick: skip }}
      translationVisible
    />,
  )
  fireEvent.click(screen.getByRole('button', { name: 'Pular trecho' }))
  expect(skip).toHaveBeenCalledTimes(1)
  expect(
    screen
      .getByRole('button', { name: 'Tradução' })
      .getAttribute('aria-pressed'),
  ).toBe('true')
})
