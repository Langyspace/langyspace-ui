import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect } from 'vitest'
import { NavigationLink } from './NavigationLink'

afterEach(cleanup)

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <NavigationLink data-testid="content" href="/materiais">
      <strong>Conteúdo fornecido</strong>
    </NavigationLink>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
  expect(screen.getByRole('link')).toHaveAttribute('href', '/materiais')
})
