import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { FlashcardSwiper } from '../../../src/components/Flashcard/FlashcardSwiper'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <FlashcardSwiper data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </FlashcardSwiper>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})

it('exposes the exit vector to the throw animation', () => {
  render(
    <FlashcardSwiper
      data-testid="card"
      exit={{ rotate: '12deg', x: '120%', y: '-1rem' }}
    />,
  )

  const card = screen.getByTestId('card')

  expect(card.style.getPropertyValue('--tr')).toBe('12deg')
  expect(card.style.getPropertyValue('--tx')).toBe('120%')
  expect(card.style.getPropertyValue('--ty')).toBe('-1rem')
})
