import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Button } from '../../atoms/Button'
import { Card } from '.'

describe('Card', () => {
  it('preserves an accessible named group, ref and composed keyboard action', async () => {
    const ref = createRef<HTMLDivElement>()
    const onOpen = vi.fn()
    render(
      <Card
        ref={ref}
        role="group"
        aria-labelledby="card-title"
        data-context="summary"
      >
        <h2 id="card-title">Resumo</h2>
        <Button onClick={onOpen}>Ver detalhes</Button>
      </Card>,
    )
    const group = screen.getByRole('group', { name: 'Resumo' })
    expect(ref.current).toBe(group)
    expect(group).toHaveAttribute('data-context', 'summary')
    const user = userEvent.setup()
    await user.tab()
    expect(screen.getByRole('button', { name: 'Ver detalhes' })).toHaveFocus()
    await user.keyboard('{Enter}')
    expect(onOpen).toHaveBeenCalledOnce()
  })
})
