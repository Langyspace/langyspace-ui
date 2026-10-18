import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { FieldCounter } from '../../../src/components/Form/FieldCounter'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <FieldCounter data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </FieldCounter>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
