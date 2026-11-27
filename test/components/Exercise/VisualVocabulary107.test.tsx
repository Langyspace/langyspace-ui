import { fireEvent, render, screen } from '@testing-library/react'
import { expect, it, vi } from 'vitest'
import { ExercisePanel } from '../../../src/components/Exercise/ExercisePanel'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'

it('keeps the time visible before revealing a greeting and delegates a single card playback', () => {
  const play = vi.fn(),
    reveal = vi.fn()
  render(
    <VocabularyGrid
      items={[
        {
          id: 'morning',
          word: 'Good morning!',
          translation: 'Bom dia!',
          imageUrl: '/morning.webp',
          imageAlt: 'Ana waving at sunrise',
          badge: '07:00 a.m.',
          badgePosition: 'end',
        },
      ]}
      revealedIds={[]}
      revealVariant="tooltip"
      onPlay={play}
      onReveal={reveal}
    />,
  )
  expect(screen.getByText('07:00 a.m.')).toBeVisible()
  expect(screen.queryByText('Good morning!')).toBeNull()
  fireEvent.click(screen.getByRole('button', { name: /Ana waving at sunrise/ }))
  expect(reveal).toHaveBeenCalledExactlyOnceWith('morning')
  expect(play).toHaveBeenCalledExactlyOnceWith('morning')
})

it('shows a separately described flag beside the image counter without changing the choices', () => {
  const { container } = render(
    <ExercisePanel
      variant="warmup"
      counter="1/6"
      media={<img src="/ana.webp" alt="Ana wearing a Brazilian jersey" />}
      mediaBadge={{ src: '/flag-br.svg', alt: 'Flag of Brazil' }}
    >
      <button>She’s from Brazil.</button>
    </ExercisePanel>,
  )
  const media = container.querySelector('[data-exercise-media]')
  expect(media).toContainElement(
    screen.getByRole('img', { name: 'Flag of Brazil' }),
  )
  expect(media).toContainElement(screen.getByText('1/6'))
  expect(
    screen.getByRole('button', { name: 'She’s from Brazil.' }),
  ).toBeEnabled()
})
