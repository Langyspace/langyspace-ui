import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { SidebarNavigation } from '../../../src/components/Navigation/SidebarNavigation'

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
