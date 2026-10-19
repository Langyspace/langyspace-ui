import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { PracticeCard } from '../../../src/components/Practice/PracticeCard'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <PracticeCard data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </PracticeCard>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
