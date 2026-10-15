import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect } from 'vitest'
import { StatCard } from '.'
import { StatValue } from '../../atoms/StatValue'
import { StatLabel } from '../../atoms/StatLabel'
import { Button } from '../../atoms/Button'
import { StatAction } from '../StatAction'
afterEach(cleanup)
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
