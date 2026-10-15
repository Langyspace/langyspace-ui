import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect } from 'vitest'
import { KeyValueList } from '.'
import { StatusChip } from '../../atoms/StatusChip'
afterEach(cleanup)
it('preserves the presentation of a public component supplied as rich label content', () => {
  render(
    <KeyValueList
      items={[
        {
          id: 'active',
          label: <StatusChip tone="success">Ativo</StatusChip>,
          value: '42',
        },
      ]}
    />,
  )

  expect(screen.getByText('Ativo')).toHaveStyle({ color: '#166534' })
})

it('retains caller formatted values', () => {
  render(
    <KeyValueList
      items={[{ id: 'a', label: 'Origem', value: <a href="#detail">123</a> }]}
    />,
  )
  expect(screen.getByRole('link').textContent).toBe('123')
})
