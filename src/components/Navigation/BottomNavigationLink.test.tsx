import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect } from 'vitest'
import { BottomNavigationLink } from './BottomNavigationLink'

afterEach(cleanup)

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <BottomNavigationLink data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </BottomNavigationLink>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
