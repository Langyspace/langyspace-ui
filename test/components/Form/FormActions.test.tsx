import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { FormActions } from '../../../src/components/Form/FormActions'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <FormActions data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </FormActions>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
