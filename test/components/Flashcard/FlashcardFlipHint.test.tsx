import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { FlashcardFlipHint } from '../../../src/components/Flashcard/FlashcardFlipHint'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <FlashcardFlipHint data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </FlashcardFlipHint>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
