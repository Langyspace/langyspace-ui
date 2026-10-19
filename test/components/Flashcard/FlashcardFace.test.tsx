import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { FlashcardFace } from '../../../src/components/Flashcard/FlashcardFace'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <FlashcardFace data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </FlashcardFace>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
