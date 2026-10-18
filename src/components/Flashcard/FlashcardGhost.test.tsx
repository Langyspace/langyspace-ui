import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect } from 'vitest'
import { FlashcardGhost } from './FlashcardGhost'

afterEach(cleanup)

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <FlashcardGhost layer={1} data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </FlashcardGhost>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
