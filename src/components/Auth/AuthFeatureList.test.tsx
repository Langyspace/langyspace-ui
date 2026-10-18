import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect } from 'vitest'
import { AuthFeatureList } from './AuthFeatureList'

afterEach(cleanup)

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <AuthFeatureList data-testid="content">
      <li>
        <strong>Conteúdo fornecido</strong>
      </li>
    </AuthFeatureList>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
