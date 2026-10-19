import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { FlashcardProgress } from '../../../src'

it('shares the bounded segmented presentation without owning a review scheduler', () => {
  const { container, rerender } = render(
    <FlashcardProgress current={51} total={100} label="Progresso 51 de 100" />,
  )
  const progress = screen.getByRole('progressbar', {
    name: 'Progresso 51 de 100',
  })
  expect(progress).toHaveAttribute('aria-valuemin', '0')
  expect(progress).toHaveAttribute('aria-valuemax', '100')
  expect(progress).toHaveAttribute('aria-valuenow', '51')
  expect(container.querySelectorAll('[data-progress-segment]')).toHaveLength(20)
  expect(
    container.querySelectorAll('[data-progress-state="done"]'),
  ).toHaveLength(10)
  expect(
    container.querySelectorAll('[data-progress-state="current"]'),
  ).toHaveLength(1)
  expect(screen.getByLabelText('Progresso 51 de 100')).toHaveAttribute(
    'data-progress-segment-count',
    '20',
  )

  rerender(
    <FlashcardProgress current={51} total={100} label="Progresso" revealed />,
  )
  expect(
    container.querySelectorAll('[data-progress-state="done"]'),
  ).toHaveLength(11)
  rerender(
    <FlashcardProgress current={100} total={100} label="Progresso" complete />,
  )
  expect(
    container.querySelectorAll('[data-progress-state="done"]'),
  ).toHaveLength(20)
})

it('keeps zero and nonfinite values bounded', () => {
  const { container, rerender } = render(
    <FlashcardProgress current={Infinity} total={NaN} label="Sem progresso" />,
  )
  expect(container.querySelectorAll('[data-progress-segment]')).toHaveLength(0)
  expect(container).toHaveTextContent('0 / 0')
  expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuemax', '1')
  expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0')
  rerender(<FlashcardProgress current={-1} total={3} label="Progresso" />)
  expect(
    container.querySelectorAll('[data-progress-state="pending"]'),
  ).toHaveLength(3)
})

it('owns the shared loading anatomy with four segments and a hidden counter', () => {
  const { container } = render(
    <FlashcardProgress loading label="Carregando progresso" />,
  )
  expect(
    screen
      .getByLabelText('Carregando progresso')
      .querySelectorAll('[data-ui-skeleton]'),
  ).toHaveLength(4)
  expect(screen.getByRole('progressbar')).toHaveAttribute('aria-busy', 'true')
  expect(screen.getByRole('progressbar')).not.toHaveAttribute('aria-valuenow')
  expect(container.querySelectorAll('[data-ui-skeleton]')).toHaveLength(5)
  expect(container.querySelector('.lsui-sc-flashcard-counter')).toHaveAttribute(
    'aria-hidden',
    'true',
  )
})
