import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { FlashcardProgressTrack } from '../../../src/components/Flashcard/FlashcardProgressTrack'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <FlashcardProgressTrack data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </FlashcardProgressTrack>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
