import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { FlashcardStage } from '../../../src/components/Flashcard/FlashcardStage'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <FlashcardStage data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </FlashcardStage>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
