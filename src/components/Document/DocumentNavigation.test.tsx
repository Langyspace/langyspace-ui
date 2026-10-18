import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect } from 'vitest'
import { DocumentNavigation } from './DocumentNavigation'

afterEach(cleanup)

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <DocumentNavigation data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </DocumentNavigation>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
