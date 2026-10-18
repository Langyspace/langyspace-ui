import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { FlashcardProgressSegment } from '../../../src/components/Flashcard/FlashcardProgressSegment'

it('keeps progress state off the DOM and preserves caller accessibility', () => {
  render(<FlashcardProgressSegment state="done" aria-label="Concluída" />)

  expect(screen.getByLabelText('Concluída')).not.toHaveAttribute('state')
})
