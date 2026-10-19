import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { SidebarFrame } from '../../../src/components/Navigation/SidebarFrame'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <SidebarFrame data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </SidebarFrame>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
