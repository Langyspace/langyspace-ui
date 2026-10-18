import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect } from 'vitest'
import { CalendarTimeSlot } from './CalendarParts'

afterEach(cleanup)

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <CalendarTimeSlot data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </CalendarTimeSlot>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
