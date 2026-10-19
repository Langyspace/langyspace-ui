import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { CalendarEvent } from '../../../src/components/Calendar/CalendarElements'

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <CalendarEvent data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </CalendarEvent>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
