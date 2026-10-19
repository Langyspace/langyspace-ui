import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { DocumentNavigation } from '../../../src/components/Document/DocumentNavigation'

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
