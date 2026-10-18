import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { PracticeCardCover } from '../../../src/components/Practice/PracticeCardCover'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <PracticeCardCover data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </PracticeCardCover>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
