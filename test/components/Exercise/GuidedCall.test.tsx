import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { InterviewSimulation } from '../../../src/components/InteractiveMaterial/InterviewSimulation'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'

describe('opt-in guided call', () => {
  it('keeps one transport, switches play/pause/resume and leaves navigation available during loading', () => {
    const toggle = vi.fn(),
      next = vi.fn(),
      previous = vi.fn()
    const props = {
      title: 'Team call',
      interviewer: { name: 'Kim', imageUrl: '/kim.webp' },
      learnerName: 'You',
      presentation: 'guided-call' as const,
      turnIndex: 0,
      turnCount: 5,
      onNext: next,
      onPrevious: previous,
      onReplay: toggle,
    }
    const { rerender } = render(
      <InterviewSimulation
        {...props}
        playback={{ state: 'idle', onToggle: toggle }}
      />,
    )
    expect(screen.getAllByRole('button')).toHaveLength(3)
    expect(
      screen.getByRole('button', { name: 'Áudio anterior' }),
    ).toBeDisabled()
    fireEvent.click(screen.getByRole('button', { name: 'Play current part' }))
    expect(toggle).toHaveBeenCalledOnce()
    rerender(
      <InterviewSimulation
        {...props}
        turnIndex={1}
        caption="Can you hear me?"
        playback={{ state: 'playing', onToggle: toggle }}
      />,
    )
    expect(screen.getByText('Can you hear me?')).toBeVisible()
    fireEvent.click(screen.getByRole('button', { name: 'Pause current part' }))
    expect(toggle).toHaveBeenCalledTimes(2)
    rerender(
      <InterviewSimulation
        {...props}
        turnIndex={1}
        loading
        playback={{ state: 'paused', onToggle: toggle }}
      />,
    )
    expect(
      screen.getByRole('button', { name: 'Resume current part' }),
    ).toBeDisabled()
    fireEvent.click(
      screen.getByRole('button', { name: 'Tocar o próximo áudio' }),
    )
    expect(next).toHaveBeenCalledOnce()
    fireEvent.click(screen.getByRole('button', { name: 'Áudio anterior' }))
    expect(previous).toHaveBeenCalledOnce()
    rerender(
      <InterviewSimulation
        {...props}
        turnIndex={4}
        playback={{ state: 'error', onToggle: toggle }}
      />,
    )
    expect(
      screen.getByRole('button', { name: 'Tocar o próximo áudio' }),
    ).toBeDisabled()
    expect(
      screen.getByRole('button', { name: 'Play current part' }),
    ).toBeEnabled()
  })
  it('retains native vocabulary context and the shared playback callback', () => {
    const play = vi.fn()
    render(
      <VocabularyGrid
        interaction="listen"
        showAll
        revealedIds={[]}
        onPlay={play}
        items={[
          {
            id: 'access',
            word: 'access',
            translation: 'acesso',
            example: 'I need access',
            imageAlt: 'Repository access',
            visual: <span>Access denied</span>,
          },
        ]}
      />,
    )
    const card = screen.getByRole('button', {
      name: 'Listen to Repository access: access',
    })
    expect(screen.getByText('Access denied')).toBeVisible()
    expect(screen.getByText('I need access')).toBeVisible()
    fireEvent.click(card)
    expect(play).toHaveBeenCalledWith('access')
  })
})
