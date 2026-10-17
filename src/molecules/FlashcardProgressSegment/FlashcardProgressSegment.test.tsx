import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect } from 'vitest'
import { FlashcardProgressSegment } from '.'

afterEach(cleanup)

it('keeps progress state off the DOM and preserves caller accessibility', () => {
  render(<FlashcardProgressSegment state="done" aria-label="Concluída" />)

  expect(screen.getByLabelText('Concluída')).not.toHaveAttribute('state')
})
