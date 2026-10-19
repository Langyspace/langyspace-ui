import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { ChoiceCard } from '../../../src/components/ChoiceCard/ChoiceCard'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <ChoiceCard data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </ChoiceCard>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
