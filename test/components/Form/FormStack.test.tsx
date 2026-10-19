import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { FormStack } from '../../../src/components/Form/FormStack'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <FormStack data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </FormStack>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
