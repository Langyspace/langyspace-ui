import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect } from 'vitest'
import { SidebarFrame } from './SidebarFrame'

afterEach(cleanup)

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
