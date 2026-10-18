import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect } from 'vitest'
import { NavigationButton } from './NavigationButton'

afterEach(cleanup)

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <NavigationButton data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </NavigationButton>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
