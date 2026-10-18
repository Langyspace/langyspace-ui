import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect } from 'vitest'
import { SidebarNavigation } from './SidebarNavigation'

afterEach(cleanup)

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <SidebarNavigation data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </SidebarNavigation>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
