import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { DocumentHeader } from '../../../src/components/Document/DocumentHeader'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <DocumentHeader data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </DocumentHeader>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
