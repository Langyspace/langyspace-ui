import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect } from 'vitest'
import { CalendarScroller } from './CalendarScroller'

afterEach(cleanup)

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <CalendarScroller data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </CalendarScroller>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
