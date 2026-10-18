import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, it, expect, vi } from 'vitest'
import { StatCard } from './StatCard'
import { StatValue } from './StatCard.compatibility'
import { StatLabel } from './StatCard.compatibility'
import { Button } from '../Button/Button'
import { StatAction } from './StatCard.compatibility'

afterEach(cleanup)

it('does not reserve action space for a hidden conditional action', () => {
  const result = render(<StatCard value={42} label="Total" action={false} />)

  expect(result.container.querySelector('[data-ui-stat-action]')).toBeNull()
  expect(screen.getByText('42')).not.toHaveStyle({ paddingRight: '78px' })
})

it('preserves the brand layout and native action when content is supplied as props', () => {
  const onClick = vi.fn()
  const action = (
    <Button type="button" onClick={onClick}>
      Atualizar
    </Button>
  )
  const legacy = render(
    <StatCard tone="brand">
      <StatAction>{action}</StatAction>
      <StatValue>{0}</StatValue>
      <StatLabel>Total</StatLabel>
    </StatCard>,
  )
  const original = legacy.container.innerHTML
  legacy.unmount()
  const current = render(
    <StatCard tone="brand" value={0} label="Total" action={action} />,
  )

  expect(current.container.innerHTML).toBe(original)
  expect(screen.getByText('0')).toHaveStyle({ paddingRight: '78px' })
  fireEvent.click(screen.getByRole('button', { name: 'Atualizar' }))
  expect(onClick).toHaveBeenCalledOnce()
})

it('reserves room for the optional action before the public value and label', () => {
  render(
    <StatCard>
      <StatAction>
        <Button>Atualizar</Button>
      </StatAction>
      <StatValue>42</StatValue>
      <StatLabel>Total</StatLabel>
    </StatCard>,
  )

  expect(screen.getByRole('button', { name: 'Atualizar' })).toBeVisible()
  expect(screen.getByText('42')).toHaveStyle({ paddingRight: '78px' })
  expect(screen.getByText('Total')).toBeVisible()
})

it('preserves native attributes and structured caller content without a private theme', () => {
  render(
    <StatCard data-testid="content">
      <strong>Conteúdo fornecido</strong>
    </StatCard>,
  )

  expect(
    screen.getByTestId('content').querySelector('strong')?.textContent,
  ).toBe('Conteúdo fornecido')
})
