import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect } from 'vitest'
import { FlashcardFlip } from './FlashcardFlip'
import { FlashcardFace } from './FlashcardFace'

afterEach(cleanup)

it('exposes only the active face without caller classes and preserves standalone faces', () => {
  const content = (
    <>
      <FlashcardFace side="front" data-testid="front">
        <button>Front audio</button>
      </FlashcardFace>
      <FlashcardFace side="back" data-testid="back">
        <button>Back audio</button>
      </FlashcardFace>
    </>
  )
  const { rerender } = render(<FlashcardFlip>{content}</FlashcardFlip>)

  expect(screen.getByTestId('back')).toHaveAttribute('inert')
  expect(screen.getByRole('button', { name: 'Front audio' })).toBeVisible()
  expect(
    screen.queryByRole('button', { name: 'Back audio' }),
  ).not.toBeInTheDocument()

  rerender(<FlashcardFlip flipped>{content}</FlashcardFlip>)

  expect(screen.getByTestId('front')).toHaveAttribute('inert')
  expect(
    screen.queryByRole('button', { name: 'Front audio' }),
  ).not.toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Back audio' })).toBeVisible()

  rerender(
    <FlashcardFace side="back" data-testid="standalone">
      Showcase
    </FlashcardFace>,
  )

  expect(screen.getByTestId('standalone')).not.toHaveAttribute('inert')
  expect(screen.getByTestId('standalone')).not.toHaveAttribute(
    'aria-hidden',
    'true',
  )
})

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <FlashcardFlip data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </FlashcardFlip>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
