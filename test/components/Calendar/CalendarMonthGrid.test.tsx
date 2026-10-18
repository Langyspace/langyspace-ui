import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { CalendarMonthGrid } from '../../../src/components/Calendar/CalendarParts'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <CalendarMonthGrid data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </CalendarMonthGrid>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
