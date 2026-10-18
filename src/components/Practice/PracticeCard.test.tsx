import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect } from 'vitest'
import { PracticeCard } from './PracticeCard'

afterEach(cleanup)

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
