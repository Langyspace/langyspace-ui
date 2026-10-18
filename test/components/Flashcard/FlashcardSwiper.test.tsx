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
