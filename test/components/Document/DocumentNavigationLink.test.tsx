import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { DocumentNavigationLink } from '../../../src/components/Document/DocumentNavigationLink'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <DocumentNavigationLink data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </DocumentNavigationLink>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
