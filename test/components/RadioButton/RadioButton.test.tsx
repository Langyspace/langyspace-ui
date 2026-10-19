import { render, screen, fireEvent } from '@testing-library/react'
import { it, expect, vi } from 'vitest'
import { RadioButton } from '../../../src/components/RadioButton/RadioButton'

it('preserves native checked state and events', () => {
  const changed = vi.fn()

  render(<RadioButton aria-label="Selecionar" onChange={changed} />)

  const input = screen.getByRole('radio')

  fireEvent.click(input)

  expect(changed).toHaveBeenCalledOnce()
  expect(input).toBeChecked()
})
