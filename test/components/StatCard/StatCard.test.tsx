import { fireEvent, render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { it, expect, vi } from 'vitest'
import { StatCard } from '../../../src/components/StatCard/StatCard'
import { Button } from '../../../src/components/Button/Button'

it('does not reserve action space for a hidden conditional action', () => {
  const result = render(<StatCard value={42} label="Total" action={false} />)
  expect(result.container.querySelector('[data-ui-stat-action]')).toBeNull()
  expect(screen.getByText('42')).not.toHaveStyle({ paddingRight: '78px' })
})

it('preserves zero, the brand layout, native container ref and action activation', () => {
  const onClick = vi.fn()
  const ref = createRef<HTMLDivElement>()
  render(
    <StatCard
      ref={ref}
      title="Resumo"
      tone="brand"
      value={0}
      label={<strong>Total</strong>}
      action={<Button onClick={onClick}>Atualizar</Button>}
    />,
  )
  expect(ref.current).toBe(screen.getByTitle('Resumo'))
  expect(ref.current).toHaveAttribute('data-tone', 'brand')
  expect(screen.getByText('0')).toHaveStyle({ paddingRight: '78px' })
  expect(screen.getByText('Total').tagName).toBe('STRONG')
  expect(ref.current?.firstElementChild).toContainElement(
    screen.getByRole('button'),
  )
  fireEvent.click(screen.getByRole('button', { name: 'Atualizar' }))
  expect(onClick).toHaveBeenCalledOnce()
})

it('uses a smaller value in the compact size', () => {
  render(<StatCard label="Receita" size="sm" value="R$ 1.200" />)

  expect(screen.getByText('R$ 1.200')).toHaveStyle({ fontSize: '18px' })
})
