import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect } from 'vitest'
import { ShadowingControlCluster } from './ShadowingControlCluster'

afterEach(cleanup)

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <ShadowingControlCluster data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </ShadowingControlCluster>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
