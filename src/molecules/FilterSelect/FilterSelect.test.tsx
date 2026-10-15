import { createRef } from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, it, expect, vi } from 'vitest'
import { FilterSelect } from '.'
import { FieldRoot } from '../FieldRoot'
afterEach(cleanup)
it('keeps native options/change/ref and label/error association in one compound surface', () => {
  const change = vi.fn(),
    ref = createRef<HTMLSelectElement>()
  const { container, rerender } = render(
    <FieldRoot label="Estado" error="Escolha um estado">
      <FilterSelect ref={ref} defaultValue="all" onChange={change}>
        <option value="all">Todos</option>
        <option value="active">Ativos</option>
      </FilterSelect>
    </FieldRoot>,
  )
  const select = screen.getByRole('combobox', { name: 'Estado' })
  expect(ref.current).toBe(select)
  expect(select.getAttribute('aria-invalid')).toBe('true')
  expect(select.getAttribute('aria-describedby')).toContain('error')
  expect(
    container.querySelectorAll('[data-ui-compound-control="single-surface"]')
      .length,
  ).toBe(1)
  fireEvent.change(select, { target: { value: 'active' } })
  expect(change).toHaveBeenCalledOnce()
  rerender(
    <FilterSelect aria-label="Estado" disabled>
      <option>Todos</option>
    </FilterSelect>,
  )
  expect(
    screen.getByRole('combobox', { name: 'Estado' }).hasAttribute('disabled'),
  ).toBe(true)
})
