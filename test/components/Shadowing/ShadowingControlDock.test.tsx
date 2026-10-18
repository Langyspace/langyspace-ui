import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { ShadowingControlDock } from '../../../src/components/Shadowing/ShadowingControlDock'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <ShadowingControlDock data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </ShadowingControlDock>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
