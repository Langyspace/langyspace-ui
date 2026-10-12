import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { FilterToolbar } from '.'

describe('FilterToolbar', () => {
  it('names the group and preserves native ref, editing and keyboard order', async () => {
    const ref = createRef<HTMLDivElement>()
    const onApply = vi.fn()
    render(
      <>
        <h2 id="filters-title">Filtros de materiais</h2>
        <FilterToolbar
          ref={ref}
          aria-labelledby="filters-title"
          data-context="materials"
        >
          <input aria-label="Buscar material" />
          <button disabled>Filtro indisponível</button>
          <button onClick={onApply}>Aplicar</button>
        </FilterToolbar>
      </>,
    )
    const group = screen.getByRole('group', { name: 'Filtros de materiais' })
    expect(ref.current).toBe(group)
    expect(group).toHaveAttribute('data-context', 'materials')
    const user = userEvent.setup()
    await user.tab()
    await user.keyboard('viagem')
    expect(
      screen.getByRole('textbox', { name: 'Buscar material' }),
    ).toHaveValue('viagem')
    await user.tab()
    expect(screen.getByRole('button', { name: 'Aplicar' })).toHaveFocus()
    await user.keyboard('{Enter}')
    expect(onApply).toHaveBeenCalledOnce()
  })
})
