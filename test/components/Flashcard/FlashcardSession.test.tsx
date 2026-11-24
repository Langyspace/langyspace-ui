import { createRef } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { expect, it, vi } from 'vitest'
import { FlashcardSession } from '../../../src/components/Flashcard/FlashcardSession'
import type { FlashcardSessionProps } from '../../../src/components/Flashcard/FlashcardSession.types'

const base: FlashcardSessionProps = {
  'aria-label': 'Flashcard session',
  progress: { label: '1 of 2', current: 1, total: 2 },
  backAction: { label: 'Back', onClick: vi.fn() },
  card: {
    id: 'wake',
    word: 'wake up',
    translation: 'acordar',
    image: { src: '/wake.webp' },
    example: 'I wake up early',
    backExample: 'Eu acordo cedo',
  },
  labels: {
    flip: 'Flip',
    flipHint: 'Tap to flip',
    rateQuestion: 'Remembered?',
  },
  ratings: [
    { grade: 'again', label: 'Again', interval: '1 min' },
    { grade: 'easy', label: 'Easy', interval: '4 days' },
  ],
}

it('delegates audio, flip, exit and rating without scheduling or duplicating calls', () => {
  const onFlip = vi.fn(),
    onRate = vi.fn(),
    front = vi.fn(),
    back = vi.fn()
  const flipRef = createRef<HTMLButtonElement>(),
    rateRef = createRef<HTMLButtonElement>()
  const props = {
    ...base,
    onFlip,
    onRate,
    flipButtonRef: flipRef,
    firstRatingRef: rateRef,
    audio: { label: 'Listen', onFrontPlay: front, onBackPlay: back },
  }
  const view = render(<FlashcardSession {...props} />)
  fireEvent.click(screen.getByRole('button', { name: 'Listen' }))
  fireEvent.click(screen.getByRole('button', { name: 'Flip' }))
  fireEvent.click(screen.getByRole('button', { name: 'Back' }))
  expect(front).toHaveBeenCalledTimes(1)
  expect(onFlip).toHaveBeenCalledTimes(1)
  expect(base.backAction.onClick).toHaveBeenCalledTimes(1)
  expect(flipRef.current).toBe(screen.getByRole('button', { name: 'Flip' }))
  expect(
    screen.queryByRole('button', { name: /Again/ }),
  ).not.toBeInTheDocument()
  view.rerender(<FlashcardSession {...props} flipped />)
  expect(
    view.container.querySelector('[data-ui-flashcard-face="front"]'),
  ).toHaveAttribute('inert')
  fireEvent.click(screen.getByRole('button', { name: 'Listen' }))
  fireEvent.click(screen.getByRole('button', { name: /Again/ }))
  expect(back).toHaveBeenCalledTimes(1)
  expect(onRate).toHaveBeenCalledExactlyOnceWith('again')
  expect(rateRef.current).toBe(screen.getByRole('button', { name: /Again/ }))
})

it('locks controls during feedback and leaves completion content consumer-owned', () => {
  const onRate = vi.fn()
  const view = render(
    <FlashcardSession
      {...base}
      flipped
      disabled
      onRate={onRate}
      feedback={<p role="status">Saving</p>}
    />,
  )
  expect(screen.getByRole('button', { name: /Easy/ })).toBeDisabled()
  fireEvent.click(screen.getByRole('button', { name: /Easy/ }))
  expect(onRate).not.toHaveBeenCalled()
  expect(screen.getByRole('status')).toHaveTextContent('Saving')
  view.rerender(
    <FlashcardSession {...base} card={undefined}>
      <h2>Complete</h2>
    </FlashcardSession>,
  )
  expect(screen.getByRole('heading', { name: 'Complete' })).toBeInTheDocument()
  expect(view.container.querySelector('[data-ui-flashcard-stage]')).toBeNull()
})

it('falls back only for a failed card image, not the next image', () => {
  const view = render(<FlashcardSession {...base} />)
  fireEvent.error(view.container.querySelector('img')!)
  expect(view.container.querySelector('img')).toBeNull()
  view.rerender(
    <FlashcardSession
      {...base}
      card={{ ...base.card!, id: 'sleep', image: { src: '/sleep.webp' } }}
    />,
  )
  expect(view.container.querySelector('img')).toHaveAttribute(
    'src',
    '/sleep.webp',
  )
})
