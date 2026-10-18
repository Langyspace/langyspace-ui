import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect } from 'vitest'
import { BrandLink } from './BrandLink'

afterEach(cleanup)

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <BrandLink data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </BrandLink>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
