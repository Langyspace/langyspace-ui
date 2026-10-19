import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { NavigationButton } from '../../../src/components/Navigation/NavigationButton'

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
