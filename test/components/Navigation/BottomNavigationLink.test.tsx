import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { BottomNavigationLink } from '../../../src/components/Navigation/BottomNavigationLink'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <BottomNavigationLink data-testid="content" href="/destino">
      <strong>Conteúdo fornecido</strong>
    </BottomNavigationLink>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
