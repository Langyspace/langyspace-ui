import { fireEvent, render, screen } from '@testing-library/react'
import { expect, it, vi } from 'vitest'
import { ShadowingSession } from '../../../src/components/Shadowing/ShadowingSession'
import { ShadowingWord } from '../../../src/components/Shadowing/ShadowingWord'

it('shares phrase, speaker, translation, repetition and playback composition with controlled actions', () => {
  const play = vi.fn(),
    translate = vi.fn(),
    speed = vi.fn(),
    back = vi.fn()
  const view = render(
    <ShadowingSession
      name="Routine"
      counter="1/3"
      progress={1 / 3}
      backAction={{ label: 'Back', onClick: back }}
      phrase={<ShadowingWord state="current">Morning</ShadowingWord>}
      previous="Before"
      next="After"
      translation="Manhã"
      speaker={{ name: 'Ana' }}
      repetitions={{ total: 3, value: 1, label: '1/3 listens' }}
      controls={{
        playing: false,
        playLabel: 'Play',
        onPlay: play,
        speed: '1x',
        speedOptions: ['0.75x', '1x'],
        onSpeedChange: speed,
        translationVisible: true,
        onTranslationToggle: translate,
      }}
    />,
  )
  expect(screen.getByText('Ana')).toBeInTheDocument()
  expect(screen.getByText('Manhã')).toBeInTheDocument()
  fireEvent.click(screen.getByRole('button', { name: 'Play' }))
  fireEvent.click(screen.getByRole('button', { name: 'Tradução' }))
  fireEvent.click(screen.getByRole('button', { name: 'Back' }))
  expect(play).toHaveBeenCalledTimes(1)
  expect(translate).toHaveBeenCalledTimes(1)
  expect(back).toHaveBeenCalledTimes(1)
  expect(
    view.container.querySelector('[data-ui-shadowing-session]'),
  ).toBeInTheDocument()
})

it('renders completion without stale playback controls', () => {
  render(
    <ShadowingSession
      name="Routine"
      counter="Complete"
      progress={1}
      backAction={{ label: 'Back', onClick: vi.fn() }}
    >
      <h2>Done</h2>
    </ShadowingSession>,
  )
  expect(screen.getByRole('heading', { name: 'Done' })).toBeInTheDocument()
  expect(screen.queryByRole('button', { name: 'Play' })).not.toBeInTheDocument()
})
