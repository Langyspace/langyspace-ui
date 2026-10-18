import { render, screen, fireEvent } from '@testing-library/react'
import { it, expect, vi } from 'vitest'
import { Checkbox } from '../../../src/components/Checkbox/Checkbox'

it('preserves native checked state and events', () => {
  const changed = vi.fn()

  render(<Checkbox aria-label="Selecionar" onChange={changed} />)

  const input = screen.getByRole('checkbox')

  fireEvent.click(input)

  expect(changed).toHaveBeenCalledOnce()
  expect(input).toBeChecked()
})
