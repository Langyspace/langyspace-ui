import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { FlashcardImagePanel } from '../../../src/components/Flashcard/FlashcardImagePanel'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <FlashcardImagePanel data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </FlashcardImagePanel>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
