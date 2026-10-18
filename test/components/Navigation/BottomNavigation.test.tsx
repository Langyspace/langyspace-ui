import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { BottomNavigation } from '../../../src/components/Navigation/BottomNavigation'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <BottomNavigation data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </BottomNavigation>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
