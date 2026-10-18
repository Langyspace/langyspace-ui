import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { FlashcardCounter } from '../../../src/components/Flashcard/FlashcardCounter'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <FlashcardCounter data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </FlashcardCounter>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
