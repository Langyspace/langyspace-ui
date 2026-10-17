import { cleanup, render, screen, fireEvent } from '@testing-library/react'
import { afterEach, it, expect, vi } from 'vitest'
import { Checkbox } from '.'

afterEach(cleanup)

it('preserves native checked state and events', () => {
  const changed = vi.fn()

  render(<Checkbox aria-label="Selecionar" onChange={changed} />)

  const input = screen.getByRole('checkbox')

  fireEvent.click(input)

  expect(changed).toHaveBeenCalledOnce()
  expect(input).toBeChecked()
})
