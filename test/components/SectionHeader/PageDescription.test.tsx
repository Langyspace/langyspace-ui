import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { PageDescription } from '../../../src/components/SectionHeader/PageDescription'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <PageDescription data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </PageDescription>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
