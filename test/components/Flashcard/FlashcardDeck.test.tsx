import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { FlashcardDeck } from '../../../src/components/Flashcard/FlashcardDeck'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <FlashcardDeck data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </FlashcardDeck>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
