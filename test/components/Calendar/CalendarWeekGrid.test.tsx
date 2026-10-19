import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { CalendarWeekGrid } from '../../../src/components/Calendar/CalendarElements'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <CalendarWeekGrid data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </CalendarWeekGrid>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
