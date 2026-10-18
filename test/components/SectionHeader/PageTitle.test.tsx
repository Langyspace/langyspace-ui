import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { PageTitle } from '../../../src/components/SectionHeader/PageTitle'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <PageTitle data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </PageTitle>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
