import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { ToggleButton } from '../../../src/components/ToggleButton/ToggleButton'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <ToggleButton data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </ToggleButton>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
