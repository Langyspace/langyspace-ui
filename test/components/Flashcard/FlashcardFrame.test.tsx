import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { FlashcardFrame } from '../../../src/components/Flashcard/FlashcardFrame'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <FlashcardFrame data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </FlashcardFrame>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
